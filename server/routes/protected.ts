import { Router, Response, Request, NextFunction } from "express";
import { verify } from 'jsonwebtoken';
import { secret } from '../config/secret.config';

const awsrouter: Router = Router();

awsrouter.get("/", (request: Request, response: Response) => {
    response.json({
        text: "Greetings, you have valid token.",
        title: "Protected call"
    });
});

export { awsrouter }





