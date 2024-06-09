import fs from "fs/promises" 



async function writeinPrettierIgnore( repoName ) {
  try {
    const content = `/.vscode
/node_modules
/.dist
*.env
.env
.env.*     `
    await fs.writeFile(`${repoName}/.prettierignore`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinPrettierIgnore