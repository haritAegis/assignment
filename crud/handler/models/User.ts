import { pool } from '../app';
import { Entity } from './Entity';
import { MySQLRecord, MySQLTypes } from './types';

export class UserModel extends Entity {
    firstname: null = null;
    lastname: null = null;
    password: null = null;

    constructor(tableName: string) {
        super(tableName);
    }

    async createUserTable(config: MySQLRecord<UserModel, MySQLTypes>){
        return this.createTable(config);
    }

    async insert(data: MySQLRecord<UserModel, string>) {
        const { firstname, lastname, password } = data;
        await pool.query(
            `INSERT INTO ${this.name} (firstname, lastname, password) VALUES(${firstname}, ${lastname}, ${password});`,
        );
    }
}
