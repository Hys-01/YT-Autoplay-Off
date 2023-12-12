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




guide on UI for manifest v3: https://meenumatharu.medium.com/building-a-google-chrome-extension-with-manifest-v3-a-basic-example-to-get-started-0e976938bc70

chrome.runtime.getURL for manifest v3
    https://stackoverflow.com/questions/67439012/chrome-extension-manifest-v3-content-security-policy 
    (additional) https://stackoverflow.com/questions/9515704/access-variables-and-functions-defined-in-page-context-from-an-extension/9517879#9517879 



/* without a link to html file, clicking on extension brings up default chrome menulist */
Comments are forbidden in json files


popup window size modifying 
    https://stackoverflow.com/questions/8983165/how-can-i-expand-the-popup-window-of-my-chrome-extension