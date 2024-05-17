import { exec } from "child_process";
import { addProfilePic, htmlToPdf } from "./htmlToPdf.js";
import configEnv from "../../../env.js";

const makeResume = async (req, fileName, jsonFile, theme, id, userImage) => {
  const resumeProcess = exec(
    `npx resume export  ${fileName} --resume ${jsonFile} --theme ${theme}`
  );

  resumeProcess.stdout.on("data", (data) => console.log(`stdout: ${data}`));
  resumeProcess.stderr.on("data", (data) => console.log(`stderr: ${data}`));
  resumeProcess.on("close", async (code) => {
    await addProfilePic(req, fileName, jsonFile, theme, userImage)
      .then(async (res) => {
        let htmlFilePath = `${configEnv.URL_HOSTED}/resume/html/${id}.html`;
        let pdfFilePath = `routes/generateResume/files/${id}.pdf`;

        await htmlToPdf(req, htmlFilePath, pdfFilePath);
      })
      .catch((err) => console.log(err));
    console.log(`Child process exited with code ${code}`);
  });
};

export default makeResume;
