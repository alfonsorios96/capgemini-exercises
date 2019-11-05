const assert = require('chai').assert;
const sum = require('../../src/sumStringsAsNumbers');

describe('Sum Strings as Numbers', () => {
    it('Case empty params', () => {
        assert.strictEqual(sum(), '0');
    });

    it('Case once param, returns the same number', () => {
        assert.strictEqual(sum('200'), '200');
    });

    it('Case two numbers', () => {
        assert.strictEqual(sum('800', '9567'), '10367');
    });

    it('Case carrier not missing', () => {
        assert.strictEqual(sum('99', '1'), '100');
    });

    it('Case three numbers', () => {
        assert.strictEqual(sum('99', '1', '37'), '137');
    });

    it('Case many numbers', () => {
        assert.strictEqual(sum('45','42','25','38'), '160');
    });

    it('Case big numbers not overflowing', () => {
        assert.strictEqual(sum('99999999999999999999'), '99999999999999999999');
    });

    it('Case big numbers', () => {
        assert.strictEqual(sum('9999999999999999999999'), '9999999999999999999999');
    });

    it('Case neutral additive', () => {
        assert.strictEqual(sum('0', '111'), '111');
    });

    it('Case sum, not concat', () => {
        assert.strictEqual(sum('111', '0'), '111');
    });

    it('Case sum negative numbers', () => {
        assert.strictEqual(sum('-5', '-7'), '-12');
    });

    it('Case sum negative and positive. Result positive', () => {
        assert.strictEqual(sum('-5', '7'), '2');
    });

    it('Case sum negative and positive. Result negative', () => {
        assert.strictEqual(sum('5', '-7'), '-2');
    });

    it('Case big negative numbers', () => {
        assert.strictEqual(sum('-999999999999999999999'), '-999999999999999999999');
    });
});
