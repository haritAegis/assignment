import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { user } from './app';

export const getUserHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        if (!event.queryStringParameters?.id) throw new Error('Please specify user id as a query param');
        const userData = await user.getUser(event.queryStringParameters!['id']!);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'success',
                userData,
            }),
        };
    } catch (e) {
        console.log(e);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: (e as Error).message,
            }),
        };
    }
};
