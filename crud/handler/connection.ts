import mysql2 from 'mysql2';

// create connection with railway db
export const createConnection = () =>
    mysql2
        .createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB,
            port: process.env.PORT as unknown as number,
        })
        .promise();
