import part1 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { testData, realData } = getDataForTest(__dirname)

describe('part1', () => {
  it('returns the expected answer with test data', () => {
    const result = part1(testData, 1000)
    expect(result).toStrictEqual(1120)
  })
  it('returns the expected answer with real data', () => {
    const result = part1(realData, 2503)
    expect(result).toStrictEqual(2640)
  })
})
