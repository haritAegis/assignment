import {pool} from "../../app";

export class DB {
    constructor(public name: string) {}

    public async create() {
        const [db, _] = await pool.execute(`CREATE DATABASE ${this.name}
          USE ${this.name};`);

        console.log('Here is the database', db);
        return db;
    }
}