var mysql = require('mysql');
var inquirer = require('inquirer'),

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
});

//The app should then prompt users with two messages.
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();

        inquirer.prompt({
            name: "options",
            type: "rawlist",
            message: "Choose the item that you would like to buy.",
            choices: [
                "1. What's the ID of the product you would like to buy?",
                "2. How many units would you like to buy?"
            ]
        }).then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.postOrBid.toUpperCase() === "POST") {
                postAuction();
            }
            else {
                bidAuction();
            }
        });


// Display all of the items available for sale. Include the ids, names, and prices of products for sale.

const itemsForSale = SELECT * FROM products;

function display(params) {
    // log all of the products for sale
    console.log(itemsForSale);
}

// Once the user has placed the order, the app should check to see if it has enough in stock.
const inStock =  process.argv()// number of products for sale for, the specific item determined by the unit id.
function stock() {
    if (if inStock = inStock) {
        // subtract number of units purchased.
        // if item is not inStock prompt the user to select another option.
        prompt ({
            name: "check",
            type: "input",
            message: "Not enough units please re-select the number of units."
        })
    }
};
stock();