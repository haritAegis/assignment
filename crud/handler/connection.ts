import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({ path: '../config.env' });

export const createConnection = () => mysql2
    .createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        port: 5811,
    })
    .promise();
