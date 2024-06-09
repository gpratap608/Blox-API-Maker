#!/usr/bin/env node
import {execSync} from "child_process"
import writeinGitIgnore from "./writeInGitIgnore.js";
import writeinPrettierIgnore from "./writeInPrettierIgnore.js";
import writeinPrettierrc from "./writeInPrettierrc.js";
import writeinPackageLock from "./writeInPackageLock.js";
import writeinPackage from "./writeInPackage.js";
import writeinReadme from "./writeInReadme.js";
import writeinAPPJS from "./writeInAppJS.js";
import writeinENV from "./writeInENV.js";
import writeinconstant from "./writeInConstantJS.js";
import writeinIndexJS from "./writeInIndexJS.js";
import writeinUserRouter from "./writeInUserRouter.js";
import writeinDBindex from "./writeInDBIndexJS.js";
import writeinMulterMiddleware from "./writeInMulterMiddleware.js";
import writeinUserModel from "./writeInUserModel.js";
import writeinAPIerror from "./writeInAPIerror.js";
import writeinapiResponse from "./writeInapiResponse.js";
import writeinasyncHandler from "./writeinAsyncHandler.js";
import writeinCloudinary from "./writeInCloudinary.js";
const runCommand =  command => {
    try {
        execSync(`${command}`,{studio:'inherit'})
    } catch (e) {
        console.error(`Failed to execute ${command}`,e);
        return false
    }
    return true
}

const repoName = process.argv[2];
const makeApp = `mkdir ${repoName}`
const changeToApp = `cd ${repoName}`
const createPublicFolder = `cd ${repoName} && mkdir public`
const creategitignore = `cd ${repoName} && touch .gitignore`
const createPrettierIgnore = `cd ${repoName} && touch .prettierignore` 
const createPrettierrc = `cd ${repoName} && touch .prettierrc`
const createpackage_lock = `cd ${repoName} && touch package-lock.json`
const createPackage = `cd ${repoName} && touch package.json`
const createREADME = `cd ${repoName} && touch README.md`
const createENV = `cd ${repoName} && touch .env`

const createSRC = `cd ${repoName} && mkdir src`

const createAPPJS = `cd ${repoName} && cd src && touch app.js`
const createConstantJS = `cd ${repoName} && cd src && touch constants.js`
const createIndex = `cd ${repoName} && cd src && touch index.js`

const createControllers = `cd ${repoName} && cd src && mkdir controllers` 
const createControllerJS = `cd ${repoName} && cd src && cd controllers && touch controller.js`

const createRoutes = `cd ${repoName} && cd src && mkdir routes` 
const createUserRoutesJS = `cd ${repoName} && cd src && cd routes && touch user.routes.js`

const createDBfolder = `cd ${repoName} && cd src && mkdir db`
const createDBindex = `cd ${repoName} && cd src && cd db && touch index.js`

const createMiddlewareFolder = `cd ${repoName} && cd src && mkdir middlewares`
const createMulterMiddleware = `cd ${repoName} && cd src && cd middlewares && touch multer.middleware.js`

const createModels = `cd ${repoName} && cd src && mkdir models`
const createUserModel = `cd ${repoName} && cd src && cd models && touch user.model.js`

const createUtils = `cd ${repoName} && cd src && mkdir utils`
const createAPIerror = `cd ${repoName} && cd src && cd utils && touch APIerror.js`
const createAPIresponse = `cd ${repoName} && cd src && cd utils && touch APIresponse.js`
const createAsyncHandler = `cd ${repoName} && cd src && cd utils && touch asyncHandler.js`
const createCloudinary = `cd ${repoName} && cd src && cd utils && touch cloudinary.js`


const appCreated = runCommand(makeApp);
if(!appCreated) process.exit(-1)
const appPathChange = runCommand(changeToApp)
if(!appPathChange) process.exit(-1)


const publicCreated = runCommand(createPublicFolder);
if(!publicCreated) process.exit(-1)
const gitIgnoreCreated = runCommand(creategitignore)
if(!gitIgnoreCreated) process.exit(-1)
writeinGitIgnore(repoName)
const prettierignore = runCommand(createPrettierIgnore)
if(!prettierignore) process.exit(-1)
writeinPrettierIgnore(repoName)
const prettierrc = runCommand(createPrettierrc)
if(!prettierrc) process.exit(-1)
writeinPrettierrc(repoName)
const packageLock = runCommand(createpackage_lock)
if(!packageLock) process.exit(-1)
writeinPackageLock(repoName)
const packageJSON = runCommand(createPackage)
if(!packageJSON) process.exit(-1)
writeinPackage(repoName)
const readme = runCommand(createREADME)
if(!readme) process.exit(-1)
writeinReadme(repoName) 
const envCreated = runCommand(createENV)
if(!envCreated) process.exit(-1)
writeinENV(repoName)
const srcCreated = runCommand(createSRC)
if(!srcCreated) process.exit(-1)
const APPJScreated = runCommand(createAPPJS)
if(!APPJScreated) process.exit(-1)
writeinAPPJS(repoName)
const constantCreated = runCommand(createConstantJS)
if(!constantCreated) process.exit(-1)
writeinconstant(repoName)
const indexCreated = runCommand(createIndex)
if(!indexCreated) process.exit(-1)
writeinIndexJS(repoName)
const controllerCreated = runCommand(createControllers)
if(!controllerCreated) process.exit(-1)
const controllerJSCreated = runCommand(createControllerJS)
if(!controllerJSCreated) process.exit(-1)
const routesCreated = runCommand(createRoutes)
if(!routesCreated) process.exit(-1)
const userRoutesJSCreated = runCommand(createUserRoutesJS)
if(!userRoutesJSCreated) process.exit(-1)
writeinUserRouter(repoName)
const DBfoldercreated = runCommand(createDBfolder)
if(!DBfoldercreated) process.exit(-1)
const DBIndexCreated = runCommand(createDBindex)
if(!DBIndexCreated) process.exit(-1)
writeinDBindex(repoName)
const middleFolderCreated = runCommand(createMiddlewareFolder)
if(!middleFolderCreated) process.exit(-1)
const multerMiddlewareJSCreated = runCommand(createMulterMiddleware)
if(!multerMiddlewareJSCreated) process.exit(-1)
writeinMulterMiddleware(repoName)
const modelsFolderCreated = runCommand(createModels)
if(!modelsFolderCreated) process.exit(-1)
const userModelCreated = runCommand(createUserModel)
if(!userModelCreated) process.exit(-1)
writeinUserModel(repoName)
const utilsFolderCreated = runCommand(createUtils)
if(!utilsFolderCreated) process.exit(-1)
const apiErrorCreated = runCommand(createAPIerror)
if(!apiErrorCreated) process.exit(-1)
writeinAPIerror(repoName)
const apiResponseCreated = runCommand(createAPIresponse)
if(!apiResponseCreated) process.exit(-1)
writeinapiResponse(repoName)
const asyncHandlerCreated = runCommand(createAsyncHandler)
if(!asyncHandlerCreated) process.exit(-1)
writeinasyncHandler(repoName)
const cloudinaryCreated = runCommand(createCloudinary)
if(!cloudinaryCreated) process.exit(-1)
writeinCloudinary(repoName)




console.log("Congratulations! You are Ready to create Servers");
console.log("Write the Following Commands");
console.log("\n");
console.log(`cd ${repoName}`)
console.log("\n");
console.log(`npm install`)
console.log("\n");
console.log("Add MongoDB VScode URI from MongoDBAtlas in the env file")
console.log("\n");
console.log("Add ACCESS and REFRESH Tokens in the ENV file");
console.log("\n");
console.log("Configure your Account on https://cloudinary.com/")
console.log("Add cloud name, api key, api secret from cloudinary to the env file");
console.log("\n");
console.log(`npm run dev`)
console.log("\n");
console.log("Create Your API");
    