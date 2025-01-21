import {sum} from "../sum";

test('Sum function should calculate the sum of two numbers', () => {
  
    const result = sum(8,9);

    //assertion
    expect(result).toBe(17);
})
