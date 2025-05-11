const fs = require('fs');
const path = require('path');

const p =  path.join(path.dirname(process.mainModule.filename), 'data', 'tasks.json');

const getBooksFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(!err){
            cb(JSON.parse(fileContent));
        }else{
            cb([]);
        };
    })
};

module.exports = class Book {
    constructor(n, r = '0'){
        this.name = n;
        this.rating = r;
    };
    save(){
        getBooksFromFile( books => {
            books.push(this);
            fs.writeFile(p, JSON.stringify(books), err => {
                if (err){console.log(err);}
            });
        });
    };
    static fetchall(cb){
        getBooksFromFile(cb);
    }
}