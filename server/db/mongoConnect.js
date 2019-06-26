const mongoose = require('mongoose')
const config = require('../config')
const connect = () => {
    return new Promise((resolve, reject) => {
        const init = () => {
            mongoose.connect(config.dbPath, { useNewUrlParser: true })
        }
        init();
        const db = mongoose.connection;
        db.on('disconnected', () => { reject('数据库连接断开') });
        db.on('error', () => { reject('数据库连接异常') })
        db.once('open', () => { resolve() })
    })
}
module.exports = connect;