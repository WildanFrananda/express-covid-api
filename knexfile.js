// Menggunakan ORM knex untuk migtration

module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "localhost",
            user: "root",
            password: "",
            database: "express_covid_api",
        },
        migrations: {
            directory: "./config/migrations",
        },
        seeds: {
            directory: "./config/seeds",
        }
    },
    production: {
        client: "mysql",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./config/migrations",
        },
        seeds: {
            directory: "./config/seeds",
        }
    }
}