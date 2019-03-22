const lengthCalculator = require('../../../src/calculator/lengthCalculator');
const Unit = require('../../../src/calculator/Unit');

describe('length calculator', () => {
    it('should return true when lengths are equal', () => {
        const length1 = {len: 1000.0, unit: Unit.MM} 
        const length2 = {len: 1.0, unit: Unit.M} 
        const result = lengthCalculator.isEqual(length1, length2);
        expect(result).toEqual(true);
    });  

    it('should return false when lens equal but unit different', () => {
        const length1 = {len: 1000.0, unit: Unit.MM} 
        const length2 = {len: 1000.0, unit: Unit.M} 
        const result = lengthCalculator.isEqual(length1, length2);
        expect(result).toEqual(false);
    });  

    it('should return correct value when add two length with same unit', () => {
        const length1 = {len: 15.0, unit: Unit.MM} 
        const length2 = {len: 5.0, unit: Unit.MM} 
        const result = lengthCalculator.add(length1, length2);
        expect(result).toEqual({len: 20, unit: Unit.MM});
    });    

    it('should return correct value when subtract two length with same unit', () => {
        const length1 = {len: 15.0, unit: Unit.MM} 
        const length2 = {len: 5.0, unit: Unit.MM} 
        const result = lengthCalculator.subtract(length1, length2);
        expect(result).toEqual({len: 10, unit: Unit.MM});
    });  

    it('should add two len with different unit', () => {
        const length1 = {len: 1.0, unit: Unit.M} 
        const length2 = {len: 100.0, unit: Unit.CM} 
        const result = lengthCalculator.add(length1, length2);
        expect(result).toEqual( {len: 2000, unit: Unit.MM} );
    });  

    it('should minus two len with different unit', () => {
        const length1 = {len: 1000.0, unit: Unit.MM} 
        const length2 = {len: 10.0, unit: Unit.M} 
        const result = lengthCalculator.subtract(length2, length1);
        expect(result).toEqual({len: 9000, unit: Unit.MM});
    });  
});