# AWSLambdaJS an AWS Lambda Function Template
###### _Version 0.1.0_

## Abstract

This is a **NodeJS** programming template for **AWS Lambda Functions** called **AWSLambdaJS**.
It should help and support to develop **AWS Lambad Function** by providing the
most common tasks to do so. **AWSLambdaJS** helps to get rid of the manual labor 
and repeating project setup task in order to focus on the **AWS Lambda Function** instead.

It uses the taskrunner **Gulp** with fully configured and ready to use tasks.

Provided by **Roman Zaglauer**

## Installation

### One-time tasks

1. Install Git from the [Git](https://git-scm.com/downloads/ "Git")

2. Install NodeJS from the [NodeJS](https://nodejs.org/en/download/ "NodeJS")

3. Install [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start "Gulp") via npm
   
```
$ npm install --global gulp-cli
```

### Tasks to be done for each project

1. Download **AWSLambdaJS** via Git.

```
$ git clone https://github.com/romanzaglauer/AWSLambdaJS.git
```

2. Install all dependencies needed for **AWSLambdaJS**.<br/>
   **This can take some time**. The command can only by executed if you perform it inside the directory.

```
$ npm install
```

3. Start your project
   Set up necessary credentials and information for the **AWS Lambda Function** by this command:

```
$ gulp init
```

4. Now the project is ready to start.

or 

1. Create an empty folder where your project lives.

2. Open a command prompt inside this project folder.

3. Extract the content of [master.zip](https://github.com/romanzaglauer/AWSLambdaJS/master.zip)
   into your project folder.

5. Install all dependencies needed for **AWSLambdaJS**
   **This can take some time**. The command can only executed if you perform it inside the directory.

```
$ npm install
```

6. Start your project
   Set up necessary credentials and information for the **AWS Lambda Function** by this command:

```
$ gulp init
```

8. Now the project is ready to start.

## Usage

### Gulp Tasks

```
$ gulp <task>
```

- `init`<br/>
  Set necessary credentials and information for the **AWS Lambda Function**
  + `credentials:init`<br/>
    Set the credentials
      1. AccessKey ID
      2. SecretAccessKey
      3. Region
  + `parameter:init`
    Set the parameters of the **AWS Lambda Function**  
      1. Function Name
      2. Handler
      3. Role
      4. Runtime
      5. Description
      6. MemorySize
      7. Timeout
      8. Publish
      8. S3Bucket
      9. S3Key
- `lint`<br/>
  Show if there are any **ESLint** errors (target directory `./src/`).
    + `watch:lint`<br/>
      Run **ESLint** watch task. Every save triggers ESLint checks.
- `test`<br/>
  Run unit test using the JavaScript test framework [Mocha](https://mochajs.org/ "MochaJS") (source directory `./test/unit`) (target directory `./src/`).
    + `watch:test`<br/>
      Run **Mocha** watch task. Every save triggers the execution of the defined tests.
- `invoke`<br/>
  Calls the lambda function with an event (`./test/event.json`). Can be used for debugging.
- `doc`<br/>
  Creates documentation using [JSDoc3](http://usejsdoc.org/about-getting-started.html "JSDoc3") (source directory `./src/unit`) (target directory `./doc/`)
    + `clean:doc`<br/>
      Cleanup `./doc/` directory.
    + `jsdoc:doc`<br/>
      Run **JSDoc3** to create documentation.
    + `zip:doc`<br/>
      Archive the created documentation files.
- `build`<br/>
  Build the files ready for uploading to **AWS Lambda** (source directory `./src/`) (target directory `./dist/`).
    + `lint:build`<br/>
      Show if there are any **ESLint** errors.      
    + `clean:build`<br/>
      Cleanup `./dist/` directory.
    + `install:build`<br/>
      Install all dependencies (no development dependencies) to `./dist/` directory.
    + `beautify:build`<br/>
      Copy and beautify all files from `./src/` to `./dist/` directory.
    + `uglify:build`<br/>
      Copy and uglify all `*.js` files from `./src/` to `./dist/` directory renaming them to `*.min.js`.
    + `zip:build`<br/>
      Archive the created build filles.
- `upload`<br/>
   Upload the files to **AWS Lambda**.
- `deploy`<br/>
  Deploy the files to **AWS Lambda** (source directory `./src/`) (target directory `./dist/`).
    + `lint:deploy`<br/>
      Show if there are any **ESLint** errors.      
    + `clean:deploy`<br/>
      Cleanup `./dist/` directory.
    + `install:deploy`<br/>
      Install all dependencies (no development dependencies) to `./dist/` directory.
    + `beautify:deploy`<br/>
      Copy and beautify all files from `./src/` to `./dist/` directory.
    + `uglify:deploy`<br/>
      Copy and uglify all `*.js` files from src/ to `./dist/` directory renaming them to `*.min.js`.
    + `zip:deploy`<br/>
      Archive the created build filles.    
    + `upload:deploy`<br/>
      Upload the files to **AWS Lambda**.
- `beautify`<br/>
   Copy and beautify all files from `./src/` to `./dist/` directory.
- `uglify`<br/>
   Copy and uglify all `*.js` files from `./src/` to `./dist/` directory renaming them to `*.min.js`.
- `zip`<br/>
   Archive the build filles.            
   
## Notes

### Test

The test folder already contains a sample test setup to perform
unit a tests by using **Mocha**. To add new tests
you have to add your test into the directory `./test/unit/`. The test will be considered automatically.

## Release History
### 0.1.0
Initial release

## License

MIT License

Copyright (c) 2019 Roman Zaglauer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


