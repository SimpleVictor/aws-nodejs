import { Router, Response, Request, NextFunction } from "express";
import { AWS } from '../config/aws.config';
import { verify } from 'jsonwebtoken';


let clc = require('cli-color-tty')(true);
let dynamodb = new AWS.DynamoDB();

const UserRoute: Router = Router();
UserRoute.use((request: Request & {headers: {auth: string}} , response: Response, next: NextFunction) => {
    dynamodb.createTable({
        TableName: 'Users',
        AttributeDefinitions:[
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
    },(err, data) => {
        if(err){
            console.log("ERROR HAS OCCURED" + err;
            return;
        }
        console.log(clc.greenBright("SUCCESS!"));
        console.log(data);
    });
    next();
});

UserRoute.get("/signup", (request: Request, response: Response) => {
    console.log(clc.blueBright("Made it here"));

});

export { UserRoute }





