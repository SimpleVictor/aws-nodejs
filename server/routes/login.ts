import {Router, Request, Response, NextFunction} from "express";
import { AWS } from '../config/aws.config';
let dynamodb = new AWS.DynamoDB();

const loginRoute: Router = Router();


loginRoute.post('/', (req: Request, res: Response, next: NextFunction) => {

    console.log(req.body);

    let params = {
        TableName : "Users",
        KeyConditionExpression: "#myid = :id",
        ExpressionAttributeNames:{
            "#myid": "id"
        },
        ExpressionAttributeValues: {
            ":id": {
                S: "123456"
            }
        }
    };


    dynamodb.query(params, function(err, data){
       if(err){
           console.log(err);
        res.send("no");
           return;
       }else{
           console.log("Got Data");
           console.log(data);
        res.send("yay");
       };
    });
})

export { loginRoute };