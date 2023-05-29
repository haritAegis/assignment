import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { user } from './app';

// handler to delete user with specified id
export const deleteUserHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        if (!event.queryStringParameters?.id) throw new Error('Please specify user id as a query param');
        const stat = await user.delete(`id = ${event.queryStringParameters!['id']!}`);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'success',
                isDeleted: stat,
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
