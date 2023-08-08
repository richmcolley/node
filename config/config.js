module.exports = {
    database: {
        mongoUrl: 'mongodb://localhost:27017/mydb',
        mysql: {
            host: 'localhost',
            user: 'your_mysql_user',
            password: 'your_mysql_password',
            database: 'your_mysql_database',
        },
    },
    server: {
        port: process.env.PORT || 3000,
    },
};
