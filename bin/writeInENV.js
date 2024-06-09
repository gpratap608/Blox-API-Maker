import fs from "fs/promises" 



async function writeinENV( repoName ) {
  try {
    const content = `PORT=8080
MONGO_URI = <YOUR MONGODB ATLAS CONNECTION STRING>
CORS_ORIGIN =*
ACCESS_TOKEN_SECRET=<ACCESS_TOKEN_SECRET>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<REFRESH_TOKEN_EXPIRY>
REFRESH_TOKEN_EXPIRY=30d
CLOUDINARY_CLOUD_NAME = <CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY = <CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET = <CLOUDINARY_API_SECRET> `
    await fs.writeFile(`${repoName}/.env`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinENV





