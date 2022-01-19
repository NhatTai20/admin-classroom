"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
exports.default = config;
