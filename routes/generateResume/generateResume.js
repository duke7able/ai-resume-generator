import callChainForResume from "./functions/callChainForResume.js";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import systemPrompt from "./utils/systemPrompt.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import makeResume from "./functions/makeResume.js";
import prisma from "../../prisma/prismaClient.js";

const generateResume = async (req, res) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const { userData } = req.body;
    const user = req.user;
    const userImage = req.file.filename;

    const promptTemplate = ChatPromptTemplate.fromTemplate(systemPrompt);

    const response = await callChainForResume(promptTemplate, userData);

    await prisma.user.update({
      where: { id: user.id },
      data: { resumeData: response },
    });

    fs.writeFile(
      __dirname + `/files/${user.id}.json`,
      JSON.stringify(response),
      async (err) => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
          const exportFileName = `routes/generateResume/files/${user.id}.html`;
          const resumeJSONFile = `routes/generateResume/files/${user.id}.json`;
          console.log(exportFileName, resumeJSONFile);
          await makeResume(
            req,
            exportFileName,
            resumeJSONFile,
            "caffeine",
            user.id,
            userImage
          );
        }
      }
    );

    return res.status(200).json({ message: "success", data: response });
  } catch (error) {
    console.log("Error in generateResume: ", error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

export default generateResume;
