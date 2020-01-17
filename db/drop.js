const connection = require('./config');

connection.query(`DROP TABLE Team`, (err) => {
    if(err) console.log(err);
    console.log('query complete');
    connection.query(`DROP TABLE Rider`, (error) => {
        if(error) console.log(err);
        console.log('query complete');
        connection.query(`DROP TABLE Motorcycle`, (error) => {
            if(error) console.log(err);
            console.log('query complete');
        connection.end();
        });
    });
})