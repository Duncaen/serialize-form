var query = require('query'),
    value = require('value');

var rCRLF = /\r?\n/g;

module.exports = function(el) {
    return serialize(el);
};

function serialize(el) {
    var ret = {};
    var inputs = query.all('input,textarea,select,button,submit', el);

    for(var i = 0; i < inputs.length; i++) {
        var name = inputs[i].getAttribute('name');
        var val = value(inputs[i]).replace(rCRLF, "\r\n");

        if(!ret[name]) {
            ret[name] = val;
        }
    }

    return ret;
}
