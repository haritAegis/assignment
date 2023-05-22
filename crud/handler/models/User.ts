import { Entity } from "./Entity";
import { MySQLRecord } from "./types";

export class User extends Entity{
    constructor(public firstname: string, public lastname: string, public password: string){
        super('Users');
    }

    async createUserTable(config: MySQLRecord<typeof this>){  
        return await this.createTable(config);
    }
}