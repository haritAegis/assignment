import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { user } from './app';
import { MySQLRecord } from './models/types';
import { UserModel } from './models/User';

export const updateUserHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // create user
    const data = JSON.parse(event.body!) as MySQLRecord<UserModel, string>;

    try {   
        
        if(!event.queryStringParameters?.id) throw new Error('Please specify user id as a query param');
        
        const {id} = event.queryStringParameters!;
        await user.update(data, `id=${id}`);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `successfully updated user with id : ${id}`,
            }),
        };
    } catch (e) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: (e as Error).message,
            }),
        };
    }
};
