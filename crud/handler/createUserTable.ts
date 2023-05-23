import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { user } from './app';

export const createUserTableHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
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
