import sharp from "sharp";

const imageResize = (
  imagePath,
  newImagePath,
  resizeHeight = 200,
  resizeWidth = 200
) => {
  // Initiate https://github.com/lovell/sharp
  const newImage = sharp(imagePath, { failOnError: false });
  newImage
    .metadata()
    .then((metadata) => {
      const h = metadata.height,
        w = metadata.width,
        aspectRatio = w / h;
      // console.log(h, w, aspectRatio);

      const newHeight = Math.round(aspectRatio * resizeHeight);
      const newWidth = Math.round(aspectRatio * resizeWidth);

      newImage
        .resize(newWidth, newHeight)
        .toFile(newImagePath)
        .then((newFileInfo) => {
          console.log("[+] Image cropped and saved!");
        })
        .catch((err) => {
          console.log("[x] An error occured!", err);
        });
    })
    .catch((err) => {
      console.log("[x] An error occured", err);
    });
};

export default imageResize;
