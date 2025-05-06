var clothesLinks = [];
var colors = ["White", "White", "Black", "Black", "Grey", "Grey", "Blue", "Blue", "Blue", "Blue", "White", "White", "Grey", "Grey", 
"Black", "Black", "Black", "Black", "Black", "Grey", "Grey", "Grey", "Blue", "Blue", "White", "White"];
var type = ["Tennis Shoes", "Tennis Shoes", "Tennis Shoes", "Tennis Shoes", "Tennis Shoes", "Tennis Shoes", "Tennis Shoes", "Tennis Shoes"
, "Casual", "Casual", "Casual", "Casual", "Casual", "Casual", "Casual", "Casual", "Boots", "Boots", "Boots", "Boots", "Boots", "Boots", "Boots", 
"Boots", "Boots", "Boots"];
var genders = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "Male", "Female", "Male", "B", "Male", "Male", "Female", "B", "Female", "Male", 
"Female", "Female", "Male", "Female", "Male", "B", "Female"];
var names = [];
var clothing;
var color;
var filteredList1 = [];
var filteredList11 = [];
var filteredList111=[];
var filteredList1111 = [];
var filteredList11111 = [];
var filteredList2 = [];
var filteredList22 = [];
var filteredList222 = [];
var filteredList2222 = [];
var filteredList22222 = [];
var filteredList3 = [];
var filteredList33 = [];
var filteredList333 = [];
var filteredList3333 = [];
var filteredList33333 = [];




createClothesLinks();
createNamesList();

//Codes for different buttons

onEvent("searchButton", "click", function( ) {
	setScreen("homeScreen");
});

onEvent("homeButton", "click", function() {
  setScreen("homeScreen");
});



onEvent("homeButtonShoeScreen", "click", function( ) {
	setScreen("homeScreen"); //When the user wamts to find more shoes, the lists are cleared
  filteredList1 = [];
  filteredList11 = [];
  filteredList111=[];
  filteredList1111 = [];
  filteredList11111 = [];
  filteredList2 = [];
  filteredList22 = [];
  filteredList222 = [];
  filteredList2222 = [];
  filteredList22222 = [];
  filteredList3 = [];
  filteredList33 = [];
  filteredList333 = [];
  filteredList3333 = [];
  filteredList33333 = [];
	
});

onEvent("mensButton", "click", function () {
  findShoe("Male"); //Mens shoes
});
  
onEvent("womensButton", "click", function () {
  findShoe("Female"); //Women's shoes
});


function findShoe(gender) {
  //Lines 77-82 were made by my partner
  clothing = getText("typeDropdown"); //Get type and color
  color = getText("colorDropdown");
  if (clothing == "Choose a Type of Shoe") { //If the user doesn't choose a type and a color
    setScreen("invalid"); 
  } else if (color == "Choose a Color") {
    setScreen("invalid");

  }else {
  for (var a = 0; a < clothesLinks.length; a++) { //Traverse through list of links
    if(type[a] == clothing) { //Check if the type if correct
      clothing = getText("typeDropdown");
      appendItem(filteredList1, clothesLinks[a]);
      appendItem(filteredList11, colors[a]);
      appendItem(filteredList111, names[a]);
      appendItem(filteredList1111, genders[a]);
      appendItem(filteredList11111, type[a]);
    } else {
    }
  }
  for (var b = 0; b < filteredList1.length; b++) { //Traverse through filtered list
    color = getText("colorDropdown");
    if(filteredList11[b] == color) {
      appendItem(filteredList2, filteredList1[b]);
      appendItem(filteredList22, filteredList11[b]);
      appendItem(filteredList222, filteredList111[b]);
      appendItem(filteredList2222, filteredList1111[b]);
      appendItem(filteredList22222, filteredList11111[b]);
    } else {
    }
  }
  
  //Lines 109-125 were made by my partner
  for (var c = 0; c < filteredList2.length; c++) { 
    if (filteredList2222[c] == gender) {
      appendItem(filteredList3, filteredList2[c]);
      appendItem(filteredList33, filteredList22[c]);
      appendItem(filteredList333, filteredList222[c]);
      appendItem(filteredList3333, filteredList2222[c]);
      appendItem(filteredList33333, filteredList22222[c]);
    }else if (filteredList2222[c] == "B") {
      appendItem(filteredList3, filteredList2[c]);
      appendItem(filteredList33, filteredList22[c]);
      appendItem(filteredList333, filteredList222[c]);
      appendItem(filteredList3333, filteredList2222[c]);
      appendItem(filteredList33333, filteredList22222[c]);
    } else {
      filteredList3 = filteredList3;
    }
  }
  
  setScreen("shoeScreen");
  
  if (filteredList3.length == 1) { //If there is only one shoe
    setProperty("shoe1", "image", filteredList3[0]);
    setProperty("shoeLabel", "text", filteredList333[0]);
    setProperty("shoe2", "image", "assets/Screenshot-2023-04-19-1.32.40-PM.png");
    setText("shoeLabel2", "");
  }
  else { //If there are two shoes
    setProperty("shoe1", "image", filteredList3[0]);
    setProperty("shoeLabel", "text", filteredList333[0]);
    
    setProperty("shoe2", "image", filteredList3[1]);
    setProperty("shoeLabel2", "text", filteredList333[1]);
  }
  
}
}

//The images in the code were found by my partner and the citations are below:
function createClothesLinks() { //Add all images to the list
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.51.38-PM.png"); //This image came from https://www.nike.com
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.51.46-PM.png"); //This image came from https://www.underarmour.com/en-us/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.51.55-PM.png"); //This image came from https://www.adidas.com/us
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.52.16-PM.png"); //This image came from https://www.amazon.com/Akk-Womens-Walking-Tennis-Shoes/dp/B07XZ5ZNNM
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.52.25-PM.png"); //This image came from https://stockx.com/air-jordan-1-mid-linen
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.52.34-PM.png"); //This image came from https://www.ebay.com/itm/165936069765
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.52.41-PM.png"); //This image came from https://www.underarmour.com/en-us/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.52.49-PM.png"); //This image came from https://www.underarmour.com/en-us/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.52.57-PM.png"); //This image came from https://soundfeet.com/product/crocs-classic-clog-ice-blue/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.53.07-PM.png"); //This image came from https://www.underarmour.com/en-us/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.53.16-PM.png"); //This image came from https://www.clarksusa.com/c/Seren25-Strap/p/26164894
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.53.34-PM.png"); //This image came from https://www.dillards.com/p/polo-ralph-lauren-mens-polo-logo-slides/513741299
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.53.42-PM.png"); //This image came from https://www.goat.com/sneakers/yeezy-slides-slate-grey-id2350
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.53.49-PM.png"); //This image came from https://www.nike.com
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.53.53-PM.png"); //This image came from https://www.adidas.com/us
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.54.02-PM.png"); //This image came from https://www.nike.com
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.54.10-PM.png"); //This image came from https://www.ugg.com/women-boots/black/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.54.19-PM.png"); //This image came from https://www.aliexpress.us/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.54.22-PM.png"); //This image came from https://www.amazon.com/Jousen-Leather-Motorcycle-Casual-Waterproof/dp/B0BHVHR6DR
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.54.31-PM.png"); //This image came from https://www.ugg.com/women-boots-classic-boots/classic-short-ii/1016223.html?dwvar_1016223_color=GREY
  appendItem(clothesLinks, "assets/Screen-Shot-2023-04-16-at-9.25.20-PM.png"); //This image came from https://www.amazon.com/Linea-Paolo-Pointed-Stiletto-Mid-Height/dp/B0B9FHRJC7
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.54.47-PM.png"); //This image came from https://www.famousfootwear.com/product/nunn-bush-mens-otto-medium-wide-x-wide-plain-toe-chukka-boot-5270193
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.54.56-PM.png"); //This image came from https://www.shoppueblomall.com/shopnow/product/womens-uggr-classic-mini-side-logo-boot-journeys-12d0e4
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.55.13-PM.png"); //This image came from https://www.macys.com/shop/product/polo-ralph-lauren-mens-keaton-suede-chukka-boot?ID=14423079
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.55.22-PM.png"); //This image came from https://www.ugg.com/women-boots/white/
  appendItem(clothesLinks, "assets/Screenshot-2023-04-14-1.55.31-PM.png"); //This image came from https://www.amazon.com/ZSGYCHCY-Boots-Fluffy-Winter-Outdoor/dp/B09J1CJYRX

}

//Lines 178-206 were made by my partner
function createNamesList() { //Add names of shoes to the list
  appendItem(names, "Nike Air Forces ($110.00)");
  appendItem(names, "Under Armour Charged Assert ($48.75)");
  appendItem(names, "Adidas Superstars ($94.99)");
  appendItem(names, "AKK Walking tennis shoes ($39.99)");
  appendItem(names, "Jordan 1 Mid Linen ($175.00)");
  appendItem(names, "Vegan sneaker shoes ($79.99)");
  appendItem(names, "Under Armour Hova Machina ($93.99)");
  appendItem(names, "Under Armour Charged Pursuit 3 Sneakers ($63.99)");
  appendItem(names, "Blue Crocs ($49.99)");
  appendItem(names, "Under Armour Men's Ansa Graphic Sandal ($24.99)");
  appendItem(names, "Clarks Womens Seren25 Strap White Leather ($100.00)");
  appendItem(names, "Polo Ralph Lauren Men's POLO Logo Slides ($59.99)");
  appendItem(names, "Grey Yeezy Slides ($225.00)");
  appendItem(names, "NIKE Mens Offcourt Slide Sandal - Grey ($34.99)");
  appendItem(names, "Adidas Adillete Aqua Slides - Black ($27.00)");
  appendItem(names, "NIKE Womens BENASSI Slide Sandal - Black ($24.99)");
  appendItem(names, "Black Uggs ($140)");
  appendItem(names, "Black Stilettos ($70.00)");
  appendItem(names, "Jousen Mens Boots Leather Motorcycle Casual Boots ($139.99)");
  appendItem(names, "Grey uggs ($150.00)");
  appendItem(names, "Parson Tall Boot Linea Paolo ($103.98)");
  appendItem(names, "Grey Otto Men's Leather Chukka Boots ($90.00)");
  appendItem(names, "Blue Uggs ($100)");
  appendItem(names, "Men's Keaton Suede Chukka Boot ($55.00)");
  appendItem(names, "White UGGS ($110)");
  appendItem(names, "ZSGYCHCY Faux Fur Boots ($71.99)");
  
}





