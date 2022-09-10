import path from 'path'
const format = (fileName: string, height: string, width: string): string => {
  return 'H' + height + 'W' + width + fileName
}

const absolutePath = (folder: string, fileName: string): string => {
  const image = path.join(folder, fileName)
  const imageAPath = path.resolve(image)
  return imageAPath
}

export default { format, absolutePath }
