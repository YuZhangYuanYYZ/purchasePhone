const transform = require('../../learn-array/src/transform');

describe('Transform', () => {
    it('example', () => {
        expect(1).toBe(1);
    })
    it('should return 2 when 1 plus 1', () => {
        expect(1+1).toBe(2);
    })
    it('should return 3 when a Array has 3 elements', () => {
        expect([1,3,5].length).toBe(3);
    })

    it('should return correct data format', () => {
        const originalData = [
            { 
              name: "todo", 
              cards:[
                { point: 2},
                { point: 3},
                { point: 4}
              ] 
            }, 
            { 
              name: "doing", 
              cards:[
                { point: 5},
                { point: 7},
              ] 
            }
          ];
        const resultData = [
            { 
              name: "TODO", 
              totalPoints: 9, 
              cards:[
                { point: 2},
                { point: 3},
                { point: 4}
              ] 
            }, 
            { 
              name: "DOING", 
              totalPoints: 12, 
              cards:[
                { point: 5},
                { point: 7},
              ] 
            }
          ];
        
        expect(transform(originalData)).toEqual(resultData);
    });
});