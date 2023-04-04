"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mysql = require("mysql2/promise");
async function db_connect() {
    const db = await mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'example',
        database: 'mydatabase',
    });
    return db;
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.enableCors();
    await app.listen(4000);
    const db = await db_connect();
    console.log('Connected to database:', db.config.database);
    let isDbInitialized = false;
    if (!isDbInitialized) {
        await db.execute('INSERT INTO user (username, password) VALUES ("user1", "password1"), ("user2", "password2"), ("user3", "password3");');
        isDbInitialized = true;
        console.log('Initialized database');
    }
}
bootstrap();
//# sourceMappingURL=main.js.map