var fs = require("fs");
var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard");



function BasicCard(front, back){
	this.front = front;
	this.back = back;
	this.newCard = function() {
		var card = {
			front: this.front,
			back: this.back,
			type: "BasicCard"
		};
		fs.appendFile("BasicCard.txt", JSON.stringify(card) + ";", "utf8", function(err){
			if (err) {
				console.log(err);
			}
		});
	};
}






module.exports = BasicCard;