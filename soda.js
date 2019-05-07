// Unfortunately for the "not so social" programmers who want to know why I made this. You will have to send me a message of some sort. GOOD LUCK!

/* 
In every forEach loop "soda" is the "Beverages" index. It is not the name of the individual Beverages. You need to use the objects property. OR NOT!!!!!!!!!!!!!!!!!
This NiBBa fixed that shizzle real quick.

stock is the available number of the specified beverage.
amount is the number of the beverage that the user wants.

in function setChoice() we have to return tempchoice. about 80% sure why.
*/

let balance;	// ingeworpenGeld.
let tempchoice;	// index van de keuze in Beverages.
let choice;		// permanente keuze.
let exchange;	// string die wordt weergeven met de hoeveel gekochte.
let amount;		// Hoeveelheid blikjes.

//I know write.write is not ver handy, but I DON'T CARE. 
let write = document.getElementById("body").innerHTML;

let Beverages =
 [{
	name: "Cola",
	price: "1.75",
	stock: 0
},
{
	name: "Sprite",
	price: "1",
	stock: 0
},
{
	name: "Fanta",
	price: "1",
	stock: 0
}];

Fill();
Buy();

function Fill()
{
	Beverages.forEach(soda => {
		soda.stock = 6;
	});
}

function Buy(){
	document.clear();
	let wisselgeld;
    ingeworpenGeld = prompt("Hoeveel euro wil je inwerpen?", "10");
    amount = prompt("Hoeveel stuks?", " 9");
    setChoice();
    if(checkStock())
    {
        communication();
    }
	updateInventory();
}

/* 
Had somthing planned for this. Totally forget what it was for XD.

function total(){
    let totalBeverages = 0;
    totalBeverages += choice.stock;
	if(totalBeverages > 0){
		return true;
	}
	else return false;
} */

function setChoice(){
    tempchoice = prompt("kies Cola, Fanta of Sprite", "Cola");
    choice = Beverages.find(tempchoice => {
        return tempchoice;
});
}

function priceCalculation(){
    let cost;
    cost = choice.price * amount;
	return cost;
}

function checkStock(){
    if(choice.stock < amount){
        write.write(`Sorry, not enough ${choice.name} left in stock.`);
	}
	if(choice.stock <= 0){
		write.write(`Sorry, ${choice.name} is out of stock`);
	}
}

function communication(){
    wisselgeld = ingeworpenGeld - priceCalculation();
	exchange = `Hier is de ${amount} ${choice.name} en ${wisselgeld} euro wisselgeld`;
	document.write(exchange);
}

function updateInventory(){
	choice.stock -= amount;
	Beverages.forEach(soda => {
		if(soda.stock < 0){
			soda.stock = 0;
		}
	});
}

function seeInventory(){
	alert(Beverages.forEach(soda =>{
			alert(`${soda.name}, Price: ${soda.price} ${soda.stock} in stock.`)
		})
	);
}