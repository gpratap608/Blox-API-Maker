import fs from "fs/promises" 



async function writeinconstant( repoName ) {
  try {
    const content = `export const DB_NAME = "dbnameexample"`
    await fs.writeFile(`${repoName}/src/constants.js`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinconstant


