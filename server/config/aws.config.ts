let AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.accessKey,
    secretAccessKey: process.env.secretKey,
    region: "us-east-1"
});

AWS.config.apiVersion = {
    dynamodb: '2012-08-10'
};

export { AWS };
