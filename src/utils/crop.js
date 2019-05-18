/**
  * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
  * images to fit into a certain area.
  *
  * @param {Number} srcWidth  - width of source image
  * @param {Number} srcHeight - height of source image
  * @param {Number} maxWidth  - maximum available width
  * @param {Number} maxHeight - maximum available height
  *
  * @return {Object}          - { width, height }
  */
export function aspectRatioFill(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return {
    width: srcWidth * ratio,
    height: srcHeight * ratio
  };
}

export function getPosition(ImageDimension, cropBoxDimension) {
  // console.log(ImageDimension, cropBoxDimension);
  if (ImageDimension > cropBoxDimension) {
    return (ImageDimension - cropBoxDimension) / 2;
  }
  return 0;
}
