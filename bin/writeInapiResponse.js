import fs from "fs/promises" 



async function writeinapiResponse( repoName ) {
  try {
    const content = `class APIresponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message 
        this.success = statusCode < 400
    }
} `
    await fs.writeFile(`${repoName}/src/utils/APIresponse.js`, content);
  } catch (err) {
    console.log(err);
  }
}
export default writeinapiResponse