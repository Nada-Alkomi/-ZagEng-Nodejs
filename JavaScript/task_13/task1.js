const fs = require('fs');


fs.writeFileSync('data.txt', 'hello from sync');

const data = fs.readFileSync('data.txt', 'utf-8');
console.log('sync:', data);


fs.writeFile('data_async.txt', 'hello from async', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.readFile('data_async.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('async:', data);
    });
});