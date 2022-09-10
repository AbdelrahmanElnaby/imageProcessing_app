import express from 'express'
import sharp from 'sharp'
import cach from './caching'
import methods from '../utilities/methods'

const cachBuffer = cach.cachBuffer,
  sourceFolder = 'images_before',
  outputFolder = 'images_after'

// middleWare to generate the new resized image
const sharpConvert = async (
  req: express.Request,
  res: express.Response,
  next: Function // eslint-disable-line
): Promise<void> => {
  const height = req.query.height as string
  const width = req.query.width as string
  const address = req.query.address as string
  const newFile = methods.format(address, height, width)
  const absolutePathAfter = methods.absolutePath(outputFolder, newFile)
  const absolutePathBefore = methods.absolutePath(sourceFolder, address)

  const result = await sharpResize(
    address,
    absolutePathBefore,
    absolutePathAfter,
    height,
    width
  )
  if (!result) {
    res.statusMessage=`new Created image ${newFile}`;
    res.sendFile(absolutePathAfter)
  } else {
    res.send(result)
  }
}

// function that return if the image is resized successfully or not
const sharpResize = async (
  address:string,
  absolutePathBefore: string,
  absolutePathAfter: string,
  height: string,
  width: string
): Promise<string | undefined> => {
  try {
    await sharp(absolutePathBefore)
      .resize({
        width: Number(width),
        height: Number(height),
      })
      .toFile(absolutePathAfter)
    cachBuffer.push(address)
    return undefined
  } catch (error) {
    const e = (error as Error).message
    return e + ' Ensure of the file name'
  }
}

export default { sharpConvert, sharpResize }
