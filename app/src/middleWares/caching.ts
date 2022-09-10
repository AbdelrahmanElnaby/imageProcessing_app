import express from 'express'
import methods from '../utilities/methods'

const cachBuffer: string[] = []

// middleWare to check if the image is resized before or not
const caching = (
  req: express.Request,
  res: express.Response,
  next: Function // eslint-disable-line
): void => {
  const height = req.query.height as string
  const width = req.query.width as string
  const fileName = req.query.address as string

  const result = check(fileName)
  
  if (!result) {
    next()
  } else {

    const newFile = methods.format(fileName, height, width)
    const folder = 'images_after'
    const absolutePath:string = methods.absolutePath(folder, newFile)
 
    res.statusMessage = `cached ${newFile}`;
    res.sendFile(absolutePath)
  }
}

// method check if the imageFile name is resized or not
const check = (address: string): boolean => {
  const result = cachBuffer.find((item) => {
    return item === address
  })
  if (result) {
    return true
  } else {
    return false
  }
}

export default { cachBuffer, caching }
