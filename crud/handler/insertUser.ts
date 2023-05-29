import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { user } from './app';
import { MySQLRecord } from './models/types';
import { UserModel } from './models/User';


// handler to insert a user
export const insertUserHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const data = JSON.parse(event.body!) as MySQLRecord<UserModel, string>;

    try {
        
        if (!data.firstname || !data.lastname || !data.password)
            throw new Error('Either firstname, lastname or password is missing');
            
        await user.insert({ ...data });

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `successfully added a user`,
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
