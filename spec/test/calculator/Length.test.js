const Length = require('../../../src/calculator/Length');
const Unit = require('../../../src/calculator/Unit');

describe('Length', () => {
    it('should return correct value when add two length with same unit', () => {
        const len1 = new Length(10, Unit.CM);
        const len2 = new Length(20, Unit.CM);
        const result = len1.add(len2);
        expect(result.getLen()).toEqual(30)
        expect(result.getUnit()).toEqual(Unit.CM)
    });

    it('should return correct value when subtract two length with same unit', () => {
        const len1 = new Length(15, Unit.CM);
        const len2 = new Length(5, Unit.CM);
        const result = len1.subtract(len2);
        expect(result.getLen()).toEqual(10)
        expect(result.getUnit()).toEqual(Unit.CM)
    });

    it('should return true when lengths are equal', () => {
        const len1 = new Length(1000, Unit.MM);
        const len2 = new Length(1, Unit.M);
        const result = len1.isEqual(len2);
        expect(result).toEqual(true);
    });

    it('should return false when lens equal but unit different', () => {
        const len1 = new Length(1000, Unit.MM);
        const len2 = new Length(1000, Unit.M);
        const result = len1.isEqual(len2);
        expect(result).toEqual(false);
    });

    it('should add two len with different unit', () => {
        const length1 = new Length(1, Unit.M);
        const length2 = new Length(100, Unit.CM);
        const result = length2.add(length1);
        expect(result.getLen()).toEqual(2000)
        expect(result.getUnit()).toEqual(Unit.MM)
    });

    it('should minus two len with different unit', () => {
        const length1 = new Length(1000, Unit.MM);
        const length2 = new Length(10, Unit.M);
        const result = length1.subtract(length2);
        expect(result.getLen()).toEqual(-9000)
        expect(result.getUnit()).toEqual(Unit.MM)
    });
});