const AWS = require('aws-sdk');
const SES = new AWS.SES();

const RECEIVER = "hello@gridworkdigital.com";
const SENDER = "LS Equipment Site <hello@gridworkdigital.com>";

var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
};

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
};
 
function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Name: ' + event.name + '\nPhone Number: ' + event.phone + '\nEmail: ' + event.email + '\nMessage: ' + event.message,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'LS Equipment Site Contact Form',
                Charset: 'UTF-8'   
            }
        },
        Source: SENDER
    };
    SES.sendEmail(params, done);
}