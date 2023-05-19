import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({path: '../config.env'});

const sql = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
    
}).promise();

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        if(sql){
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'App init successfully and connected with db',
                }),
            };
        }

        else throw new Error('Failed to initialize the app');

    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
