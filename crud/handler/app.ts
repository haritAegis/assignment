import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
import { UserModel } from './models/User';

// configure env vars from a custom file
dotenv.config({ path: '../config.env' });

// create connection with railway db
export const pool = mysql2
    .createConnection({
        host: 'containers-us-west-176.railway.app',
        user: 'root',
        password: 'i85YT05CO2o1VTYajMGZ',
        database: 'railway',
        port: 5811,
    })
    .promise();

export const user = new UserModel('Users');

export const DBHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // create new instance of the User entity'
    try {

        await user.createUserTable({
            firstname: 'TEXT',
            lastname: 'TEXT',
            password: 'TEXT',
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `success user table created`,
            }),
        };
    } catch (e) {

        console.log((e as Error).message);
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: (e as Error).message,
            }),
        };
    }
};
