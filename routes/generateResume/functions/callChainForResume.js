import invokeChain from "./invokeChain.js";
import outputParser from "../utils/zodSchema.js";

const callChainForResume = async (promptTemplate, userData) => {
  try {
    const invokeParam = {
      format_instructions: outputParser.getFormatInstructions(),
      user_data: userData,
    };

    const reponse = await invokeChain(
      promptTemplate,
      outputParser,
      invokeParam
    );

    return reponse;
  } catch (error) {
    console.log("Error in callChainForResume:", error);
    throw new Error(error);
  }
};

export default callChainForResume;
