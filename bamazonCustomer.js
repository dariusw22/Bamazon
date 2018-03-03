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
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};.then.inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
        "1. What's the ID of the product you would like to buy?",
        "2. How many units would you like to buy?"
    ]

// Display all of the items available for sale. Include the ids, names, and prices of products for sale.
// Once the user has placed the order, the app should check to see if it has enough in stock.