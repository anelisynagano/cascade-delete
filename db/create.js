const connection = require('./config');

connection.query(`CREATE TABLE Team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL    
)`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Team table created');
        connection.query(`CREATE TABLE Rider (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            team_id INT NOT NULL,
            FOREIGN KEY (team_id) REFERENCES Team (id) ON DELETE CASCADE
        )`, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Rider table created');
                connection.query(`CREATE TABLE Motorcycle (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    model VARCHAR(255) NOT NULL,
                    rider_id INT NOT NULL,
                    FOREIGN KEY (rider_id) REFERENCES Rider (id) ON DELETE CASCADE
                )`, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Motorcycle table created');
                        connection.end();
                    }
                })
            }
        })
    }
})
