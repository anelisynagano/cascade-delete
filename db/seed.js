const connection = require('./config');

connection.query(`
    INSERT INTO Team (name) 
    VALUES ('Team1'), ('Team2')`,
    (err) => {
        console.log(err);
        console.log('Team table seeded');
        connection.query(`
            INSERT INTO Rider (name, team_id)
            VALUES
                ('Mark', 1),
                ('Jose', 1),
                ('Adam', 1),
                ('Maria', 2),
                ('Joana', 2),
                ('Ana', 2)
        `, (err) => {
            console.log(err);
            console.log('Rider table seeded');
            connection.query(`
            INSERT INTO Motorcycle (model, rider_id)
            VALUES
                ('Honda', 1),
                ('Honda', 1),
                ('Honda', 2),
                ('Honda', 3),
                ('Kawazaki', 3),
                ('Kawazaki', 4),
                ('Kawazaki', 4),
                ('Kawazaki', 5),
                ('Harley', 5),
                ('Harley', 6),
                ('Harley', 6)
            `, (err) => {
                console.log(err);
                console.log('Motorcycle table seeded');
                connection.end();
            });
        });
    }
)