import fs from "fs/promises" 



async function writeinIndexJS( repoName ) {
  try {
    const content = `
            //require('dotenv').config({path: './env'})
            import connectDB from "./db/index.js";
            import dotenv from "dotenv"
            import app from "./app.js"
            dotenv.config({
                path:'./.env'
            })

            connectDB()
            .then(()=>{
                app.on("error",(error)=>{
                    console.log("Some Error Happened in ./src/index.js before listening to app");
                })
                app.listen(process.env.PORT||8080,()=>{
                    console.log({
                        serverStatus:"🌐  Application is Running", +
                        URL:`+`🔗 http://localhost:${process.env.PORT}`+
                    `});
                })
            })
            .catch((error)=>{
                console.log("DB connection Failed from Index.js");
            })`
    await fs.writeFile(`${repoName}/src/index.js`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinIndexJS





