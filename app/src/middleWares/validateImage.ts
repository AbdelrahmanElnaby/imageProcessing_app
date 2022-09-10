import express from 'express'
import is_image from 'is-image'

// middleWare to validat the imageFile name syntax
const validateImage = (
  req: express.Request,
  res: express.Response,
  next: Function // eslint-disable-line
): void => {
  const imageName = req.query.address as string

  if (isImage(imageName)) {
    next()
  } else {
    res.status(400)
    res.statusMessage = 'not valid image File extension'
    res.send('correct the image file extension')
  }
}

// using is-image dependancy to to validate the imageFile name
const isImage = (imageName: string): boolean => {
  return is_image(imageName)
}

export default { isImage, validateImage }
