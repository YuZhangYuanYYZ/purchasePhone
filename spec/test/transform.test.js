const transform = require('../../learn-array/src/transform');

describe('Transform', () => {
    it('example', () => {
        expect(1).toBe(1);
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