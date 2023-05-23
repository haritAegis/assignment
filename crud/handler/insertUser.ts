import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { user } from './app';

export const insertUserHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // create user
    console.log(event.body);
    
    try {
        // await user.insert({
        //     firstname: 'Harit',
        //     lastname: 'Joshi',
        //     password: '1234'
        // });
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `successfully added a user`,
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
