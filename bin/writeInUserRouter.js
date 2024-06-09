import fs from "fs/promises" 



async function writeinUserRouter( repoName ) {
  try {
    const content = `
        import { Router } from "express";
        import { registerUser } from "../controllers/user.controller.js";

        const router = Router()

        router.route("/register").post(registerUser)

        export default router `
    await fs.writeFile(`${repoName}/src/routes/user.routes.js`, content);
  } catch (err) {
    console.log(err);
  }
}

export default writeinUserRouter