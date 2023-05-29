import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { UserModel } from './models/User';
import { insertUserHandler } from './insertUser';
import { updateUserHandler } from './updateUser';
import { createUserTableHandler } from './createUserTable';
import { getUserHandler } from './getUser';
import { deleteUserHandler } from './deleteUser';
import { createConnection } from './connection';


// create connection with railway db
export const pool = createConnection();

// create new instance of the User entity'
export const user = new UserModel('Users');

// Route Handler
export const APIHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

    const route = `${event.httpMethod} ${event.path}`;
    
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
                statusCode: 404,
                body: JSON.stringify({
                    message: 'Route not found',
                }),
            };
    }

};
