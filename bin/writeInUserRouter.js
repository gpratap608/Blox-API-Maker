import fs from "fs/promises" 



async function writeinUserRouter( repoName ) {
  try {
    const content = `import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
        
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secured Routes

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)



export default router`
    await fs.writeFile(`${repoName}/src/routes/user.routes.js`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinUserRouter