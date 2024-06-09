import fs from "fs/promises" 



async function writeinAPPJS( repoName ) {
  try {
    const content = `import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json({
    limit:'16kb'
}))
app.use(express.urlencoded({
    extended:true,
    limit:'16kb'
}))
app.use(express.static("public"))
app.use(cookieParser())

export default app`
    await fs.writeFile(`${repoName}/src/app.js`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinAPPJS