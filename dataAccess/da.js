const Sequelize = require('sequelize');

class Singleton {
    constructor() {
        this.dbConnect = new Sequelize('mysql://sql7260629:qNyL3f5qhG@sql7.freesqldatabase.com/sql7260629');
        this.start()
    }
    start(){
        this.dbConnect.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            })
    }
}

const dbConnect = new Singleton().dbConnect

module.exports = dbConnect;