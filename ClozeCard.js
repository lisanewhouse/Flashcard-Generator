var fs = require("fs");
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard");
//var cardData = reqire("./cloze.json");



function ClozeCard(text, cloze){
	//text is Full Text
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze, ".....");
	
	this.newCard = function() {
		var card = {
			text: this.text,
			cloze: this.cloze,
			partial: this.partial,
			type: "ClozeCard"
		};
		fs.appendFile("ClozeCard.txt", JSON.stringify(card) + ";", "utf8", function (err) {
			if (err) {
				console.log(err);
			}
		});
	};

}


module.exports = ClozeCard;