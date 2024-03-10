to configure new NODE.JS PROJECT 
    editor terminal -> npm init 
        enter all default values (can be changed later) by pressing enter xY 

Why npm init is Important  (CHAT.GPT ANSWER)
Dependency Management: The package.json file keeps track of any npm packages you install as dependencies for your project. For example, if you install TypeScript or other libraries, they will be listed in this file.

Project Scripts: You can define scripts for your project in package.json, like build scripts or custom commands for running your development server or compiling TypeScript.

Project Metadata: This file also includes other metadata about your project, which is useful for other developers who might work with your project, and for deployment or publishing purposes. 


npm install typescript --save-dev
    locally installs typescript to project 




DO NOT touch node_modules anything in it after installing it. First mistake. Fixed mistake 

Extend root config file with node modules one by puttin gin {
    "extends": "@tsconfig/recommended/tsconfig.json"
  }


TLDR 
https://www.youtube.com/watch?v=HvxYkugp55A (way better than the 300k view one) 









TYPESCRIPT
Initialize Project:

Create a new directory for project and navigate into it.
Run npm init (not npm install --init) to create a package.json file. You can hit enter to accept default values for the prompts.
Install TypeScript Locally:

Run npm install --save-dev typescript to install TypeScript as a dev dependency in project.
Create a TypeScript Configuration File:

Run npx tsc --init to create a tsconfig.json file with default TypeScript settings.
Write  TypeScript Code:

Create .ts file (e.g., index.ts) and write  TypeScript code in it.
Compile TypeScript Code:

Run npx tsc to compile  TypeScript files into JavaScript. This will create a .js file (e.g., index.js) in the specified output directory set in tsconfig.json.






npm install --save-dev @types/chrome  to use chrome API







