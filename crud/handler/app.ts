import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
import { UserModel } from './models/User';
import { insertUserHandler } from './insertUser';
import { updateUserHandler } from './updateUser';
import { createUserTableHandler } from './createUserTable';
import { getUserHandler } from './getUser';
import { deleteUserHandler } from './deleteUser';

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

export const APIHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // create new instance of the User entity'

    const route = `${event.httpMethod} ${event.path}`;
    console.log(route);
    
    switch (route) {
        case 'GET /create-user-table':
            return createUserTableHandler(event);

        case 'POST /insert-user':
            return insertUserHandler(event);

        case 'PATCH /update-user':
            return updateUserHandler(event);

        case 'GET /get-user':
            return getUserHandler(event);

        case 'DELETE /delete-user':
            return deleteUserHandler(event);

        default:
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Something went wrong',
                }),
            };
    }

};
