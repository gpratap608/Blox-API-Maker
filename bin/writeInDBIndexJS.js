import fs from "fs/promises" 



async function writeinDBindex( repoName ) {
  try {
    const content = `import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () =>{
try {
    const connectInstance = await mongoose.connect("a{process.env.MONGO_URI}/${DB_NAME}")   //change "" to `` and a to $
    console.log("\n MongoDB Connected !! DB host : a{connectInstance.connection.host}"); // change "" to `` and a to $
} catch (error) {
    console.log("Error: "+ error)
    process.exit(1)
    }
}


export default connectDB`
    await fs.writeFile(`${repoName}/src/db/index.js`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinDBindex


