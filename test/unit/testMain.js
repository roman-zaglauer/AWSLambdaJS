const assert = require('chai').assert;
const settings = require('./../../assets/settings.json');
const handler = require('./../../' + settings.source.main.path).handler;
const event = require('./../' + settings.test.event);

describe(settings.source.main.path, () => {
    it('Response Status Code should be of type number', () => {
        let response = handler(event).statusCode;
        assert.typeOf(response, 'number');
    });
    it('Response should have Status Code 200', () => {
        assert.equal(handler(event).statusCode, 200);
    });
});