import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPDF = (req, res) => {
  const fileName = req.user.id + ".pdf";
  const filePath = path.join(__dirname, "..", "files", fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send({
        message: "Please fill the form first. File not found.",
      });
    }
    const options = {
      root: path.join(__dirname, "..", "files"),
    };
    return res.status(200).sendFile(fileName, options, function (err) {
      if (err) {
        return res.status(500).send({
          message: "Could not download the file." + err,
        });
      }
    });
  });
};

export default getPDF;
