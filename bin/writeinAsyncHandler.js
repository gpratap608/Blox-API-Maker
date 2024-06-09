import fs from "fs/promises" 



async function writeinasyncHandler( repoName ) {
  try {
    const content = `const asyncHandler = (fn) => {async (err,req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}}

export {asyncHandler} `
    await fs.writeFile(`${repoName}/src/utils/asyncHandler.js`, content);
  } catch (err) {
    console.log(err);
  }
}
export default writeinasyncHandler