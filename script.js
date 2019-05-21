
console.log(document);


// Exo 1

let footer = document.querySelector('footer');

function printClick() {
  console.log("clique");
  };

footer.addEventListener("click", printClick);

// Exo 1-bis

let numberOfClick = 1;

let countClick = function() { 
	console.log("clique numéro " + numberOfClick);
	numberOfClick += 1;
};

footer.addEventListener("click", countClick);

// Exo 2

let menu = document.querySelector('.navbar-toggler');

let header = document.getElementById("navbarHeader");

let removeAddCollapse = function() {
	header.classList.toggle("collapse");
};

menu.addEventListener("click", removeAddCollapse);

// Exo 3

let card = document.querySelector('.card.mb-4.box-shadow');
console.log(card);

let button = document.querySelector('.btn-outline-secondary');
console.log(button);

let changeToRed = function() {
	card.style.color = "red";
};

button.addEventListener("click", changeToRed);

// Exo 4

let card1 = document.querySelectorAll('.card.mb-4.box-shadow')[1];
console.log(card1);

let button1 = document.querySelectorAll('.btn-outline-secondary')[1];
console.log(button1);

function changeToGreen() {
  if(card1.style.color !== "green"){
    card1.style.color = "green"; 
  } else {
    card1.style.color = "";
  }
};

button1.addEventListener("click", changeToGreen);

// Exo 5

let navbar = document.querySelector('.navbar');
console.log(navbar);

let bootstrap = document.querySelector("link");
console.log(bootstrap);

function onOff() {
  if(bootstrap.disabled === true){
    bootstrap.disabled = false; 
  } else {
    bootstrap.disabled = true;
  }
};

navbar.addEventListener("dblclick", onOff);

// Exo 6

let cards = document.querySelectorAll('.card-text');
console.log(cards);

let views = document.querySelectorAll('.btn-success');
console.log(views);

let images = document.querySelectorAll('.card-img-top');
console.log(images);

let reduce = function(index) {
	images[index].style.width = "20%";
	cards[index].style.display = "none";
};

let enlarge = function(index) {
	images[index].style.width = "100%";
	cards[index].style.display = "block";
};

views.forEach(function (view, index) {
  view.addEventListener("mouseover", function () {
    if (cards[index].style.display === "block") {
      reduce(index); 
    } else {
  	  enlarge(index);
  	}
  });
});   