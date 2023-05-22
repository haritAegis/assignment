import { pool } from '../app';
import { MySQLRecord } from './types';

// Parent class of any Entities which might exist in our db
export class Entity {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    protected async createTable<T>(config: MySQLRecord<T>) {
        let tableStr = '';

        Object.keys(config).forEach((key) => {
            const k = key as keyof typeof config;
            tableStr += `${k as string} ${config[k]}, `;
        });

        const [t, _] = await pool.execute(
            `CREATE TABLE ${this.name} (id INT PRIMARY KEY AUTO_INCREMENT, ${tableStr.slice(0, tableStr.length - 2)});`,
        );
        console.log(t);
        return t;
    }

    protected async deleteTable<T>(isSure: T extends false ? 'This will delete the entity, proceed with caution' : T) {
        if (isSure) {
            const [res, _] = await pool.execute(`DELETE TABLE ${this.name}`);
            return true;
        }

        return false;
    }
}
