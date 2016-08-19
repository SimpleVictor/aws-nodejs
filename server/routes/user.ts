import { Router, Response, Request, NextFunction } from "express";
import { AWS } from '../config/aws.config';
import { verify } from 'jsonwebtoken';


let clc = require('cli-color-tty')(true);
let dynamodb = new AWS.DynamoDB();
let trueForNow: boolean = false;

const UserRoute: Router = Router();
UserRoute.use((request: Request & {headers: {auth: string}} , response: Response, next: NextFunction) => {
    if(trueForNow) {
        dynamodb.createTable({
            TableName: 'Users',
            AttributeDefinitions: [
                {
                    AttributeName: 'id',
                    AttributeType: 'S'
                }
            ],
            KeySchema: [
                {
                    AttributeName: 'id',
                    KeyType: 'HASH'
                }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 5,
                WriteCapacityUnits: 5
            }
        }, (err, data) => {
            if (err) {
                console.log("ERROR HAS OCCURED" + err);
                return;
            }
            console.log(clc.greenBright("SUCCESS!"));
            console.log(data);
            next();
        });
    }else{
            console.log(clc.greenBright('User Table is already created'));
            next();
    };
});

UserRoute.post("/signup", (request: Request, response: Response) => {

    let params = {
        Item: {
            //MAIN primary key
            "User-ID":{
                S: Math.floor(Math.random() * 2389047238904).toString()
            },
            //This is the primary key made from the Secondary Index!
            "username": {
                S: request.body.name
            },
            "password": {
                S: request.body.password
            },
            "full_name":{
                S: 'Not Given..'
            }
        },
        TableName: 'Users'
    }

    dynamodb.putItem(params, (err, data) =>{
        if(err) {
            console.log(err);
            response.json("Data FAILED!");
        } else {
            console.log(data);
            console.log(clc.greenBright('Redirecting to home now...'));
            response.end();
        };
    });

});

export { UserRoute }





