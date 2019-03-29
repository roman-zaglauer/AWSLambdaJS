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
                    name: 'AccessKeyId',
                    message: 'AccessKey ID: ',
                    'default': credentials.accessKeyId
                },
                {
                    type: 'input',
                    name: 'SecretAccessKey',
                    message: 'SecretAccessKey: ',
                    'default': credentials.secretAccessKey
                },
                {
                    type: 'input',
                    name: 'Region',
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
                    name: 'FunctionName',
                    message: 'Function Name: ',
                    'default': config.lambda.parameter.FunctionName
                },
                {
                    type: 'input',
                    name: 'Handler',
                    message: 'Handler: ',
                    'default': config.lambda.parameter.Handler
                },
                {
                    type: 'input',
                    name: 'Role',
                    message: 'Role: ',
                    'default': config.lambda.parameter.Role
                },
                {
                    type: 'input',
                    name: 'Runtime',
                    message: 'Runtime: ',
                    'default': config.lambda.parameter.Runtime
                },
                {
                    type: 'input',
                    name: 'Description',
                    message: 'Description: ',
                    'default': config.lambda.parameter.Description
                },
                {
                    type: 'input',
                    name: 'MemorySize',
                    message: 'MemorySize: ',
                    'default': config.lambda.parameter.MemorySize
                },
                {
                    type: 'input',
                    name: 'Timeout',
                    message: 'Timeout: ',
                    'default': config.lambda.parameter.Timeout
                },
                {
                    type: 'input',
                    name: 'Publish',
                    message: 'Publish: ',
                    'default': config.lambda.parameter.Publish
                },
                {
                    type: 'input',
                    name: 'S3Bucket',
                    message: 'S3Bucket: ',
                    'default': config.lambda.parameter.Code.S3Bucket
                },
                {
                    type: 'input',
                    name: 'S3Key',
                    message: 'S3Key: ',
                    'default': config.lambda.parameter.Code.S3Key
                }

            ], (answer) => {
                config.lambda.parameter.FunctionName = answer.FunctionName;
                config.lambda.parameter.Handler = answer.Handler;
                config.lambda.parameter.Role = answer.Role;
                config.lambda.parameter.Runtime = answer.Runtime;
                config.lambda.parameter.Description = answer.Description;
                config.lambda.parameter.MemorySize = answer.MemorySize;
                config.lambda.parameter.Timeout = answer.Timeout;
                config.lambda.parameter.Publish = answer.Publish;
                config.lambda.parameter.Code.S3Bucket = answer.S3Bucket;
                config.lambda.parameter.Code.S3Key = answer.S3Key;
                fs.writeFileSync('./assets/' + fileConfig, JSON.stringify(config), 'utf8');
                log.info('File updated: ' + fileConfig);
            }));
    } catch (error) {
        log.error(error);
        return done(error);
    }
});

gulp.task('init', gulp.series('credentials:init', 'parameter:init'));