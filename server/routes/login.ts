import {Router, Request, Response, NextFunction} from "express";
import { AWS } from '../config/aws.config';
import * as JWTSECRET from "../config/secret.config";
import { sign } from 'jsonwebtoken';

//Used to Turn Dynamodb Json into a regular Json
let unmarshalItem= require('dynamodb-marshaler').unmarshalItem;
//Initialize DB
let dynamodb = new AWS.DynamoDB();



const loginRoute: Router = Router();

loginRoute.post('/', (req: Request, res: Response, next: NextFunction) => {

    var params = {
        TableName: "Users",
        IndexName: "username-index",
        KeyConditionExpression: "username = :username",
        ExpressionAttributeValues: {
            ":username": {"S": req.body.username}
        },
        // ProjectionExpression: "username",
        "ScanIndexForward": false
    }



    dynamodb.query(params, function(err, data){
       if(err){
           console.log(err);
            res.json("no");
           return;
       }else{
           // console.log("Got Data");
            console.log(req.body.password);
           let returnedData = data.Items.map(unmarshalItem);
           console.log(returnedData);
           //This Extra if statement if the username is incorrect and it returns an empty object                inside returnData variable(this will cause an error cause it's undefined and i'm stating it)
           if(returnedData.length >= 1){
               //Once I have the data I match it with the given password. If the pass is correct I                   //send back the JWT Token
               if(returnedData[0].password === req.body.password){

                   let token = sign(returnedData[0].username, JWTSECRET.secret, { expiresIn: "5m"});
                   console.log("Password is correct!");
                    res.json({
                            "jwt": token,
                            "username": returnedData[0].username,
                            "full_name": returnedData[0].full_name
                        });
               }else{
                   res.json("Password is incorrect");
               }
            //If returnData comes back as empty
           }else{
               res.json("Password is incorrect");
           }
       };
    });
})

export { loginRoute };
