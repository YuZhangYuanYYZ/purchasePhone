const fuzzBuzz = require('../../../src/calculator/fuzzBuzz');

describe('fuzzBuzz', () => {
    it('should return correct character when the input number is the times of 2', () => {
        const num1 = 8;
        const result = fuzzBuzz(num1);
        expect(result).toEqual("fuzz");
    });

    it('should return correct character when the input number is the times of 3', () => {
        const num1 = 9;
        const result = fuzzBuzz(num1);
        expect(result).toEqual("buzz");
    });

    it('should return correct character when the input number is the times of 7', () => {
        const num1 = 35;
        const result = fuzzBuzz(num1);
        expect(result).toEqual("fuzzbuzz");
    });
});