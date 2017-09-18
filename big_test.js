var total = 0;
function Price(price, picture) {
    total = Number(price);
    document.getElementById("price").innerHTML = "Rs. "+price;
    if(total==500){ document.getElementById("div2").innerHTML = '<img src="bat.jpg" height=100px width=100px>';}
    if(total==100) {document.getElementById("div2").innerHTML = '<img src="ball.jpg" height=100px width=100px>';}
    if(total==300) {document.getElementById("div2").innerHTML = '<img src="wicket.jpg" height=100px width=100px>';}
     
}

function AddQuant(q) {
    total = total*Number(q);
    document.getElementById("quant").innerHTML = " "+q; 
}

function AddPay(pay) {
    total = total + Number(pay);
    document.getElementById("paycharge").innerHTML = " Rs. "+pay; 
}

function AddDel(deli) {
    if (deli) {
        total = total + 40;
        document.getElementById("del").innerHTML = " Rs. 40"; 
    }
    else {
        total = total - 40;
        document.getElementById("del").innerHTML = " Rs. 0"; 
    }
}

function Total() {
    msg = "Your total charges are Rs. "+total;
    document.getElementById("summary").innerHTML = msg;
}

function Purge() {
    document.getElementById("summary").innerHTML = "";
    document.getElementById("price").innerHTML = "";
    document.getElementById("quant").innerHTML = "";
    document.getElementById("paycharge").innerHTML = "";
    document.getElementById("del").innerHTML = "";
    document.getElementById("div2").innerHTML = "";

    total = 0;
}
