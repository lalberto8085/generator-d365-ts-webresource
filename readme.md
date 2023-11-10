
# D365 TS WebResource Generator

This is a simple generator to create TypeScript-based Web Resources for Dynamics 365
inspired by [Scott Durow](https://github.com/scottdurow)'s 
[Building JavaScript Web Resources using TypeScript](https://learn.develop1.net/courses/building-javascript-web-resources-using-typescript) course.

I recommend it to everyone I know, you should definitely take a look into it as it covers a lot more stuff than I added in this generator, then again this is a work in progress and more stuff will be added in the future.

## Getting Started

### Installation

- Install Yeoman
- Install this generator 
- Run the generator in the target folder

``` cmd
npm install -g yo
npm install -g yo generator-d365-ts-webresource
yo generator-d365-ts-webresource
```

### Input

The generator will ask for 
- _Namespace_: the recommended format is `Company.Client.Project`, but it's up to you
- _Compiled Web Resource Name_: `clienthooks` by default, you can change it to anything you like, it will always have the `.js` extension


## What you get

You get a project scaffold for building WebResources:

📦my_app_root  
 ┣ 📂src  
 ┃ ┣ 📂Form  
 ┃ ┃ ┗ 📜AccountForm.ts  
 ┃ ┣ 📂Ribbon  
 ┃ ┃ ┗ 📜AccountRibbon.ts  
 ┃ ┣ 📂services  
 ┃ ┃ ┣ 📜EnvVarUtils.ts  
 ┃ ┃ ┗ 📜FlowUtils.ts  
 ┃ ┗ 📜index.ts  
 ┣ 📜.eslintrc.json  
 ┣ 📜.gitignore  
 ┣ 📜.prettierrc.json  
 ┣ 📜package.json  
 ┣ 📜tsconfig.json  
 ┣ 📜webpack.common.js  
 ┣ 📜webpack.dev.js  
 ┗ 📜webpack.prod.js  

 There are some basic configuration settings for EsLint, Prettier, and the TypeScript compiler.

 In the end we use webpack to bundle all into a single file.

 The point of entry file is the `src/index.ts`, there are samples on how to implement specific functionality for Forms and Ribbons.

 As a bonus, on the `src/services` folder there are 2 utilities that I use on almost all my projects to deal with Environment Variables and triggering flows from the front end.