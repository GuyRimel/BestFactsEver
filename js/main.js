// totalCats is -1 bc of the "config" object
let totalCats = Object.keys(factsObj).length-1;

// Structure: category (mythology) > sub-category (greek) > current index (slide) of (totalSubcatSlides)
// Any variable with "total" or "Num" refers to a number type
let cat;
let subcat;
let slide;
let totalSubcatSlides;

// Declarations for element creation;
// totalCats - 1 to skip the "config" object
let catBtnContainer;
let catBtnId;
let catBtnText;
let subcatBtnContainer;
let delay = 0;
let totalSubcats;
let catColor;
let subcatColor;

// $(idString) == document.getElementById(idString);
function $(id) { 
	return document.getElementById(id); 
}

// Attached to <body onload="">
function startup() {
	generateHomepage();
	showHomepage();
}

// Performed ONCE during startup (body onload). Populates #homepage__main
function generateHomepage() {
	for (cat = 0; cat < totalCats; cat++) {
		catBtnId = `cat${cat}Btn`;
		catBtnText = factsObj[cat].config.catTitle;
		catBtnContainer = document.createElement('div');
		catBtnContainer.style.backgroundColor = factsObj[cat].config.catColor;
		catBtnContainer.classList.add("catBtnContainer", "animate-right");
		catBtnContainer.innerHTML = `<button class="catBtn" onclick="showSubcats(${cat})" id="${catBtnId}">${catBtnText}</div>`;

		$('homepage__main').appendChild(catBtnContainer);

		// totalSubcats -1 to skip the "config" object
		totalSubcats = Object.keys(factsObj[cat]).length-1;
		for(subcat = 0; subcat < totalSubcats; subcat ++) {
			subcatBtnContainer = document.createElement('div');
			subcatBtnText = factsObj[cat][subcat].config.subcatTitle;
			subcatBtnId = `subcat${cat}_${subcat}Btn`;

			subcatBtnContainer.style.backgroundImage = `linear-gradient(${factsObj[cat][subcat].config.subcatColor}, ${factsObj[cat][subcat].config.subcatColor}, black)`;

			subcatBtnContainer.id = `subcat${cat}_${subcat}`;
			subcatBtnContainer.classList.add("subcatBtnContainer");
			subcatBtnContainer.classList.add("hide");

			subcatBtnContainer.innerHTML = `<div class="subcatBtn animate-right ${delay}" onclick="showSlide(${cat}, ${subcat}, 0)" id="${subcatBtnId}">${subcatBtnText}</div>`;
			
			$('homepage__main').appendChild(subcatBtnContainer);
		}
	}
}

function showHomepage(){
	$('homepage').style.display = "flex-column";
	$('slidepage').style.display = "none";
}

function showSubcats(cat){
	totalSubcats = Object.keys(factsObj[cat]).length-1;
	for(i = 0; i < totalSubcats; i ++) {
		let subcatId = `subcat${cat}_${i}`;
		$(subcatId).classList.toggle("hide");
	}
}

function showSlide(cat, subcat, slide){
	totalSubcatSlides = Object.keys(factsObj[0][0]).length -1;
	slide = factsObj[cat][subcat].config.index;

	if(slide > totalSubcatSlides ) { slide = 0; }
	if(slide < 0) { slide = totalSubcatSlides }
	
	console.log(`${slide} of ${totalSubcatSlides}`);	
	
	$('slidepage').style.backgroundImage = "linear-gradient("+factsObj[cat][subcat].config.subcatColor+", "+factsObj[cat].config.catColor+",black)";
	$('slide__img').src =  'img/' + factsObj[cat].config.catTitle + '/' + factsObj[cat][subcat].config.subcatTitle + '/' + factsObj[cat][subcat][slide].pic;
	$('slide__img').alt =  'image src is... ' + 'img/' + factsObj[cat].config.catTitle + '/' + factsObj[cat][subcat].config.subcatTitle + '/' +  factsObj[cat][subcat][slide].pic;
	$('slide__text').innerHTML = factsObj[cat][subcat][slide].text;

	$('homepage').style.display = 'none';
	$('slidepage').style.display = 'flex-column';
}

function changeSlide(n) {
	index += n;
	factsObj[cat][subcat].config.index = index;
	showSlide(index);
}

function slideClicked() {
	$('slide__text').classList.toggle("hide");
	$('slide__title').classList.toggle("hide");
	$('navBtnContainer').classList.toggle("hide");
	$('slide').classList.toggle("fullscreen");
	$('slide__img').classList.toggle("height-95vh");
}