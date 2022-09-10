import sharpResize from '../middleWares/sharpConvert'
import methods from '../utilities/methods'

describe('testing sharp Api', (): void => {
  it('testing found image', async (): Promise<void> => {
    const address = 'fjord.jpg'
    const width = '200',
      height = '200'
    const newFile = methods.format(address, height, width)
    const absolutePathAfter = methods.absolutePath('images_after', newFile)
    const absolutePathBefore = methods.absolutePath('images_before', address)
    const result = await sharpResize.sharpResize(
      address,
      absolutePathBefore,
      absolutePathAfter,
      height,
      width
    )
    expect(result).toBeFalsy()
  })

  it('testing notFound image', async (): Promise<void> => {
    const address = 'img1.jpg'
    const width = '200',
      height = '200'
    const newFile = methods.format(address, height, width)
    const absolutePathAfter = methods.absolutePath('images_after', newFile)
    const absolutePathBefore = methods.absolutePath('images_before', address)

    const result = await sharpResize.sharpResize(
      address,
      absolutePathBefore,
      absolutePathAfter,
      width,
      height
    )
    expect(result).toBeTruthy()
  })
})
