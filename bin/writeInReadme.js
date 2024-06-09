import fs from "fs/promises" 



async function writeinReadme( repoName ) {
  try {
    const content = `#Blox-API 
## A complete NodeJS backend Framework 

## To start type in terminal 

npx create-blox-api "Your Server Name"

 `
    await fs.writeFile(`${repoName}/.prettierrc`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinReadme