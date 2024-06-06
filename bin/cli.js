#!/usr/bin/env node

import {execSync} from "child_process"

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
const gitCheckoutCommand = `git clone --depth 1 https://github.com/gpratap608/Blox-API-Maker ${repoName} `
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1)

console.log("Congratulations! You are Ready to create Servers");
console.log("Write the Following Commands");
console.log(`cd ${repoName} && npm start`);