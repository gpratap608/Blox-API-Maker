#!/usr/bin/env node
import {execSync} from "child_process"
import writeinGitIgnore from "./writeInGitIgnore.js";
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

const appCreated = runCommand(makeApp);
if(!appCreated) process.exit(-1)
const appPathChange = runCommand(changeToApp)
if(!appPathChange) process.exit(-1)
// const installDepsCommand = `cd ${repoName} && npm install`

const publicCreated = runCommand(createPublicFolder);
if(!publicCreated) process.exit(-1)
const gitIgnoreCreated = runCommand(creategitignore)
if(!gitIgnoreCreated) process.exit(-1)
writeinGitIgnore(repoName)

// console.log(`Installing dependencies for ${repoName}`);
// const installedDeps = runCommand(installDepsCommand);
// if(!installedDeps) process.exit(-1)

console.log("Congratulations! You are Ready to create Servers");
console.log("Write the Following Commands");
console.log(`cd ${repoName} && npm start`);