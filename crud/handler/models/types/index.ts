
// All MySQL Datatypes

export type MySQLTypes =
  | "CHAR"
  | "VARCHAR"
  | "BINARY"
  | "VARBINARY"
  | "TINYBLOB"
  | "TINYTEXT"
  | "TEXT"
  | "BLOB"
  | "MEDIUMTEXT"
  | "MEDIUMBLOB"
  | "LONGTEXT"
  | "LONGBLOB"
  | "ENUM"
  | "SET"
  | "BIT"
  | "TINYINT"
  | "BOOL"
  | "BOOLEAN"
  | "SMALLINT"
  | "MEDIUMINT"
  | "INT"
  | "INTEGER"
  | "BIGINT"
  | "FLOAT"
  | "DOUBLE"
  | "DECIMAL"
  | "DATE"
  | "DATETIME"
  | "TIMESTAMP"
  | "TIME"
  | "YEAR";


// A Record type that has keys of MySQLTypes and values of string

// type key<T> = keyof T;

type keys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type MySQLRecord<T, U = string> = Record<keys<T>, U>;

// type ValuesAsStringArray<T> = {
//   [K in keyof T]: T[K] extends string[] ? T[K][number] : never;
// };

// type ExtractAttributeValues<T> = ValuesAsStringArray<T>[keyof T & 'attributes'];

// export type MySQLRecord<T> = {
//   [K in ExtractAttributeValues<T> & string]: MySQLTypes;
// };

