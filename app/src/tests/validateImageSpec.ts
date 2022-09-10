import image from '../middleWares/validateImage'

describe('validating image file name extension', (): void => {
  it('entering valid image name extention', (): void => {
    expect(image.isImage('imag.jpg')).toBeTruthy()
  })

  it('entering notvalid image name extention', (): void => {
    expect(image.isImage('imag.txt')).toBeFalsy()
  })
})
