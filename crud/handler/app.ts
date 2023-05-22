import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
import { User } from './models/User';

// configure env vars from a custom file
dotenv.config({ path: '../config.env' });

// create connection with railway db
export const pool = mysql2
    .createConnection({
        host: 'containers-us-west-176.railway.app',
        user: 'root',
        password: 'i85YT05CO2o1VTYajMGZ',
        database: 'railway',
    })
    .promise();

export const DBHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // create new instance of the User entity'
    try {
        const user = new User('Harit', 'Joshi', 'password');

        /* Internally user uses sql to do its creation of table but
           the problem is that its not working not able to create User
           table. 
           
           Refer to the User & Entity class for more info!
        
        */

        await user.createUserTable({
            firstname: 'TEXT',
            lastname: 'TEXT',
            password: 'TEXT'
        });
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'success',
            }),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'failed',
            }),
        };
    }
};
