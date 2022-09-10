import express from 'express'

// middleWare to validate the height and width are numbers
const validateHW = (
  req: express.Request,
  res: express.Response,
  next: Function // eslint-disable-line
): void => {
  const height = req.query.height as string
  const width = req.query.width as string

  if (isNumber(width, height)) {
    next()
  } else {
    res.status(400)
    res.statusMessage = 'not valid'
    res.send('width and height should be Numbers')
  }
}

// method return if heigt or width are numbers or not
const isNumber = (width: string, height: string): boolean => {
  return Number(height) > 0 && Number(width) > 0
}

export default { validateHW, isNumber }
