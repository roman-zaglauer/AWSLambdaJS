const fileConfig = 'config.json';
const fileCredentials = 'credentials.json';
const gulp = require('gulp');
const prompt = require('gulp-prompt');
const log = require('fancy-log');
const fs = require('fs');

gulp.task('arn:init', (done) => {
    try {
        let config = require('./../assets/' + fileConfig);
        return gulp.src('./' + fileConfig)
            .pipe(prompt.prompt({
                type: 'input',
                name: 'arn',
                message: 'AWS ARN for Lambda Function: '
            }, (answer) => {
                config.lambda.arn = answer.arn;
                fs.writeFileSync('./assets/' + fileConfig, JSON.stringify(config), 'utf8');
                log.info('File updated: ' + fileConfig);
            }));
    } catch (error) {
        log.error(error);
        return done(error);
    }
});

gulp.task('credentials:init', (done) => {
    try {
        let credentials = require('./../assets/' + fileCredentials);
        return gulp.src('./assets/' + fileCredentials)
            .pipe(prompt.prompt([{
                    type: 'input',
                    name: 'accessKeyId',
                    message: 'AccessKey ID: ',
                    'default': credentials.accessKeyId
                },
                {
                    type: 'input',
                    name: 'secretAccessKey',
                    message: 'SecretAccessKey: ',
                    'default': credentials.secretAccessKey
                },
                {
                    type: 'input',
                    name: 'region',
                    message: 'Region: ',
                    'default': credentials.region
                }
            ], (answer) => {
                credentials.accessKeyId = answer.accessKeyId;
                credentials.secretAccessKey = answer.secretAccessKey;
                credentials.region = answer.region;
                fs.writeFileSync('./assets/' + fileCredentials, JSON.stringify(credentials), 'utf8');
                log.info('File updated: ' + fileCredentials);
            }));
    } catch (error) {
        log.error(error);
        return done(error);
    }
});

gulp.task('parameter:init', (done) => {
    try {
        let config = require('./../assets/' + fileConfig);
        return gulp.src('./assets/' + fileConfig)
            .pipe(prompt.prompt([{
                    type: 'input',
                    name: 'functionName',
                    message: 'Function Name: ',
                    'default': config.lambda.parameter.functionName
                },
                {
                    type: 'input',
                    name: 'handler',
                    message: 'Handler: ',
                    'default': config.lambda.parameter.handler
                },
                {
                    type: 'input',
                    name: 'role',
                    message: 'Role: ',
                    'default': config.lambda.parameter.role
                },
                {
                    type: 'input',
                    name: 'runtime',
                    message: 'Runtime: ',
                    'default': config.lambda.parameter.runtime
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Description: ',
                    'default': config.lambda.parameter.description
                },
                {
                    type: 'input',
                    name: 'memorySize',
                    message: 'MemorySize: ',
                    'default': config.lambda.parameter.memorySize
                },
                {
                    type: 'input',
                    name: 'timeout',
                    message: 'Timeout: ',
                    'default': config.lambda.parameter.timeout
                },
                {
                    type: 'input',
                    name: 'publish',
                    message: 'Publish: ',
                    'default': config.lambda.parameter.publish
                },
                {
                    type: 'input',
                    name: 's3Bucket',
                    message: 'S3Bucket: ',
                    'default': config.lambda.parameter.code.s3Bucket
                },
                {
                    type: 'input',
                    name: 's3Key',
                    message: 'S3Key: ',
                    'default': config.lambda.parameter.code.s3Key
                }

            ], (answer) => {
                config.lambda.parameter.functionName = answer.functionName;
                config.lambda.parameter.handler = answer.handler;
                config.lambda.parameter.role = answer.role;
                config.lambda.parameter.runtime = answer.runtime;
                config.lambda.parameter.description = answer.description;
                config.lambda.parameter.memorySize = answer.memorySize;
                config.lambda.parameter.timeout = answer.timeout;
                config.lambda.parameter.publish = answer.publish;
                config.lambda.parameter.code.s3Bucket = answer.s3Bucket;
                config.lambda.parameter.code.s3Key = answer.s3Key;
                fs.writeFileSync('./assets/' + fileConfig, JSON.stringify(config), 'utf8');
                log.info('File updated: ' + fileConfig);
            }));
    } catch (error) {
        log.error(error);
        return done(error);
    }
});

gulp.task('init', gulp.series('credentials:init', 'parameter:init'));