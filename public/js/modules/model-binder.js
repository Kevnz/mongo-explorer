YUI.add('model-binder', function (Y, NAME) {

var DATA_ATTRIBUTE = 'model-bind-attribute',
    DATA_OPTIONS = 'bind-options',
    DATA_ATTR_PROPERTY = 'bind-property',
    FULL_DATA_ATTR_PROPERTY = 'data-' + DATA_ATTR_PROPERTY,
    _log = function (msg) {
    },
    ModelBinder = function() {
         
    };

ModelBinder.prototype = {
    rootEl: '',
    initializer: function () {

    },
    bind: function(options) {

        var model = this.toJSON(),
            prop,
            el,
            rootEl = this.get('rootEl') || Y.one('body'),
            domEl;
        this._magicBag = options;

        rootEl.all('[data-' + DATA_OPTIONS + ']').each(this._setOptions, this);
        rootEl.all('['+FULL_DATA_ATTR_PROPERTY+']').each(this._bindViaDataProperty, this);
        for (prop in model) {
            //TODO This is great big mess, need to clean up
            if (model.hasOwnProperty(prop)) {
                el = rootEl.one('#' + prop);
                if (el === null) {
                    el = rootEl.one('#' + prop.toLowerCase());
                }
                if(el === null) {
                    el = rootEl.all('[name='+prop + ']');
                    if(el.size()>0){
                        this._handleRadioGroup(el, prop);
                        el = null;
                    } else {
                        el = null;
                    }
                }
                if (el) {
                    el.setData(DATA_ATTRIBUTE, prop);
                    domEl = el.getDOMNode();
                    this._base(el, model, prop);
                }
            }
        }
    },
    _getProperty: function (element) {
        if (element.get('type')) {
            var elementType = element.get('type').toLowerCase();
            if(elementType === 'checkbox' || elementType === 'radio') {
                return 'checked';
            }
        }
        return 'value';
    },
    _bindViaDataProperty: function (node) {
        var property = node.getData(DATA_ATTR_PROPERTY);
        _log('the prop via ' + property);
        node.setData(DATA_ATTRIBUTE, property);
        this._base(node, this.toJSON(), property);
    },
    _bindToElement: function (element, event) {
        element.on(event, this._setModel, this );
    },
    _handleRadioGroup: function (group, property) {
        var currentValue = this.get(property);
        group.filter('[value="'+ currentValue+ '"]').set('checked',true);
        group.setData(DATA_ATTRIBUTE, property);
        group.each(function (node) {
            this._bindToElement(node, 'click');//need to expand events
        }, this);
    },
    _base: function (node, model, property) {
        var propertyToGetFrom = this._getProperty(node);
        if (this._isReadOnly(node)) {
            node.setHTML(model[property].toString());//Most certainly a security risk
            this.on(property+'Change', function (e) {
                if(e.attrName === property) {
                    node.setHTML(e.newVal);
                }
            }, this);
        } else {
            node.set('value', model[property]);
            node.on('change', function (e) {
                this.set(property, e.currentTarget.get(propertyToGetFrom).toString());
            }, this);
        }

    },
    _isReadOnly: function (node) {
        var domName = node.getDOMNode().nodeName.toLowerCase();
        if (domName === 'input' || domName === 'select'|| domName === 'textarea') {
            return false;
        }
        return true;
    },
    _setModel: function (e) {
        this.set(e.currentTarget.getData(DATA_ATTRIBUTE), e.currentTarget.get('value'));
    },
    _setOptions: function (node) {
        var dataAsStored = node.getData(DATA_OPTIONS),
            options;
        //TODO: figure out how to pull objects and try to avoid using eval
        /*jshint evil:true */
        if( this._magicBag[dataAsStored]) {
            options = this._magicBag[dataAsStored];
        } else {
            options = new Function('return ' + dataAsStored)();//.split(',');
        }
        Y.Array.each(options, function (item) {
            node.append(Y.Node.create('<option>' + item + '</option>'));
        });
    },
    _magicBag: {}
};
Y.ModelBinder = ModelBinder;

}, '@VERSION@', {"requires": ["node", "selector-css3"]});
