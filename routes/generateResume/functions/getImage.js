import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getImage = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __dirname + "/../images/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file." + err,
        dirname: __dirname,
      });
    }
  });
};

export default getImage;
