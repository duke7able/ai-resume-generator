import { OutputFixingParser } from "langchain/output_parsers";
import llm from "../../../googleGenAi/gemini.js";

const invokeChain = async (promptTemplate, outputParser, invokeParam) => {
  try {
    const chain = promptTemplate.pipe(llm).pipe(outputParser);

    const response = await chain.invoke(
      invokeParam
      //   , {
      //   callbacks: [
      //     {
      //       handleLLMEnd(output) {
      //         console.log(output?.generations[0][0]);
      //       },
      //     },
      //   ],
      // }
    );

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default invokeChain;
