import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getHtml = (req, res) => {
  const fileName = req.params.name;
  const options = {
    root: path.join(__dirname + "/../files"),
  };
  res.sendFile(fileName, options, function (err) {
    if (err) {
      res.status(500).send({
        message: "Could not download the file." + err,
      });
    }
  });
};

export default getHtml;
