#!/usr/bin/env node
import {execSync} from "child_process"
import writeinGitIgnore from "./writeInGitIgnore.js";
import writeinPrettierIgnore from "./writeInPrettierIgnore.js";
import writeinPrettierrc from "./writeInPrettierrc.js";
import writeinPackageLock from "./writeInPackageLock.js";
import writeinPackage from "./writeInPackage.js";
import writeinReadme from "./writeInReadme.js";
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
const installDependency = `cd ${repoName} && npm install`

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
setTimeout(function(){
    const depInstalled = runCommand(installDependency)
    if(!depInstalled) process.exit(-1)
},3000)





// const installDepsCommand = `cd ${repoName} && npm install`
// console.log(`Installing dependencies for ${repoName}`);
// const installedDeps = runCommand(installDepsCommand);
// if(!installedDeps) process.exit(-1)

console.log("Congratulations! You are Ready to create Servers");
console.log("Write the Following Commands");
console.log(`cd ${repoName} && npm run dev`);