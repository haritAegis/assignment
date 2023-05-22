
// All MySQL Datatypes

type MySQLTypes =
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

type keys<T, U> = {
  [K in keyof T]: T[K] extends U ? never : K;
}[keyof T];

export type MySQLRecord<T = unknown> = Record<keys<T, Function>, MySQLTypes>;
