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
                //USERS ID
                {
                    AttributeName: 'id',
                    AttributeType: 'S'
                },
                //USERNAME
                {
                    AttributeName: 'username',
                    AttributeType: 'S'
                }
                // //PASSWORD
                // {
                //     AttributeName: 'password',
                //     AttributeType: 'S'
                // },
                // //FULL NAME
                // {
                //     AttributeName: 'full_name',
                //     AttributeType: 'S'
                // }
            ],
            KeySchema: [
                {
                    AttributeName: 'id',
                    KeyType: 'HASH'
                },
                {
                    AttributeName: 'username',
                    KeyType: 'RANGE'
                }
                // {
                //     AttributeName: 'password',
                //     KeyType: 'RANGE'
                // },
                // {
                //     AttributeName: 'full_name',
                //     KeyType: 'RANGE'
                // }
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
            "id":{
                S: '321564789'
            },
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

    dynamodb.putItem(params, function(err, data){
        if(err) {
            console.log(err);
            response.json("Data FAILED!");
        } else {
            console.log(data);
            response.json("Data has been added!!");
        };
    });

});

export { UserRoute }





