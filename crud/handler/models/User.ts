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

    async createUserTable(config: MySQLRecord<UserModel, MySQLTypes>) {
        return this.createTable(config);
    }

    async getAll() {
        return await pool.query(`SELECT * FROM ${this.name}`);
    }

    async getUser(id: string) {
        const [d, _] = await pool.query(`SELECT id, firstname, lastname FROM ${this.name} WHERE id = ${id};`);
        return d;
    }

    async insert(data: MySQLRecord<UserModel, string>) {
        const { firstname, lastname, password } = data;
        return await pool.query(
            `INSERT INTO ${this.name} (firstname, lastname, password) VALUES('${firstname}', '${lastname}', '${password}');`,
        );
    }

    async update(data: Partial<MySQLRecord<UserModel, string>>, cond: string = '') {
        let setStr = '';

        Object.keys(data).forEach((key) => {
            const k = key as keyof typeof data;
            setStr += `${k as string} = '${data[k]}', `;
        });

        await pool.query(`UPDATE ${this.name} SET ${setStr.slice(0, setStr.length - 2)} WHERE ${cond};`);
    }
}
