module.exports = {
    timezone: '+05:30',
    appPort: process.env.APP_PORT || 3000,
    appUrl: process.env.APP_URL || 'http://localhost:3000',
    jwtSecret: process.env.JWT_SECRET || '123456789',
    jwtExpire: process.env.JWT_EXPIRE || '1d',
    db:{
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'bntty'
    }
}