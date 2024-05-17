import generateResume from "./generateResume.js";
import getImage from "./functions/getImage.js";
import getHtml from "./functions/getHtml.js";
import getPDF from "./functions/getPdf.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "routes/generateResume/images");
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${Date.now()}-${req.user.id}.${
      file.originalname.split(".").reverse()[0]
    }`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

const ResumeController = (router) => {
  router.post("/resume", upload.single("image"), generateResume);
  router.get("/resume/image/:name", getImage);
  router.get("/resume/html/:name", getHtml);
  router.get("/resume/pdf/", getPDF);
};

export default ResumeController;
