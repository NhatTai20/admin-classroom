import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'remotemysql.com';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'Sz0AQrI37Z';
const MYSQL_USER = process.env.MYSQL_USER || 'Sz0AQrI37Z';
const MYSQL_PASS = process.env.MYSQL_PASS || 'h5NvOr58Dq';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER
};

export default config;