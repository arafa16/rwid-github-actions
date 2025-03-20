import {arraySum} from "../src/array-sum";

describe('array sum', ()  => {
  it('return 15', () => {
    expect(arraySum([1,2,3,4,5])).toBe(15)
  })

  it('return 6', () => {
    expect(arraySum([1,2,3])).toBe(6)
  })

  it('return 3', () => {
    expect(arraySum([1,2])).toBe(3)
  })
})
