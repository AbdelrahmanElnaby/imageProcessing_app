import vHW from '../middleWares/validatHeight_Width'

describe('validating width and height are numbers', (): void => {
  it('validating number values true', () => {
    expect(vHW.isNumber('300', '200')).toBeTruthy()
  })

  it('validating number values false', (): void => {
    expect(vHW.isNumber('3ss', '200')).toBeFalsy()
  })
})
