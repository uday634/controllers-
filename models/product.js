const fs = require('fs')
const path = require('path');
const rootDir = require('../util/path');
const { json } = require('body-parser');
module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save(){
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile(p, (err, data)=>{
            let products = [];
            if(!err){
                products= JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err)
            });
        });
    }

    static fetchAll(cb){
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile(p, (err, data)=>{
            if(err){
                cb([]);
            }
            cb (JSON.parse(data))
        })
    }

}