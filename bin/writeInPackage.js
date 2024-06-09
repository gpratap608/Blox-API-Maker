import fs from "fs/promises" 



async function writeinPackage( repoName ) {
  try {
    const content = `{
  "name": "@gpratap608/blox-api",
  "version": "1.1.6",
  "description": "It is a complex and complete Backend Packege",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": "./bin/cli.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gpratap608/complete-backend.git"
  },
  "author": "Ganesh Pratap Singh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/gpratap608/complete-backend/issues"
  },
  "homepage": "https://github.com/gpratap608/complete-backend#readme",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cloudinary": "^2.2.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.3.3",
    "mongoose-aggregate-paginate-v2": "^1.0.7",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.1.0",
    "prettier": "^3.2.5"
  }
}
 `
    await fs.writeFile(`${repoName}/package.json`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinPackage