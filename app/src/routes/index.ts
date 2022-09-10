import express from 'express'

import vHW from '../middleWares/validatHeight_Width'
import sharp from '../middleWares/sharpConvert'
import image from '../middleWares/validateImage'
import cach from '../middleWares/caching'

const caching = cach.caching
const routes = express.Router()

// create the get route with 4 middleWares
routes.get(
  '/',
  vHW.validateHW,
  image.validateImage,
  caching,
  sharp.sharpConvert,
  (req, res): void => {} // eslint-disable-line
)

export default routes
