import fs from "fs/promises" 



async function writeinPrettierrc( repoName ) {
  try {
    const content = `{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"trailingComma": "es5",
"semi" : true
} `
    await fs.writeFile(`${repoName}/.prettierrc`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinPrettierrc