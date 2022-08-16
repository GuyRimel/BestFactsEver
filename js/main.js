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
	for (let i = 0; i < totalCats; i++) {
		catBtnId = `cat${i}Btn`;
		catBtnText = factsObj[i].config.catTitle;
		catBtnContainer = document.createElement('div');
		catBtnContainer.style.backgroundColor = factsObj[i].config.catColor;
		catBtnContainer.classList.add("catBtnContainer", "animate-right");
		catBtnContainer.innerHTML = `<button class="catBtn" onclick="showSubcats(${i})" id="${catBtnId}">${catBtnText}</div>`;

		$('homepage__main').appendChild(catBtnContainer);

		// totalSubcats -1 to skip the "config" object
		totalSubcats = Object.keys(factsObj[i]).length-1;
		for(let ii = 0; ii < totalSubcats; ii++) {
			subcatBtnContainer = document.createElement('div');
			subcatBtnText = factsObj[i][ii].config.subcatTitle;
			subcatBtnId = `subcat${i}_${ii}Btn`;
			slide = factsObj[i][ii].config.index;

			subcatBtnContainer.style.backgroundColor = factsObj[i][ii].config.subcatColor;

			subcatBtnContainer.id = `subcat${i}_${ii}`;
			subcatBtnContainer.classList.add("subcatBtnContainer");
			subcatBtnContainer.classList.add("hide");

			subcatBtnContainer.innerHTML = `<div class="subcatBtn animate-right ${delay}" onclick="showSlide(${i}, ${ii}, ${slide})" id="${subcatBtnId}">${subcatBtnText}</div>`;
			
			$('homepage__main').appendChild(subcatBtnContainer);
		}
	}
}

function showHomepage(){
	$('homepage').style.display = 'flex';
	$('homepage').style.flexFlow = 'column';
	$('slidepage').style.display = 'none';
}

function showSubcats(cat){
	totalSubcats = Object.keys(factsObj[cat]).length-1;
	for(let ii = 0; ii < totalSubcats; ii++) {
		let subcatId = `subcat${cat}_${ii}`;
		$(subcatId).classList.toggle('hide');
	}
}

function showSlide(cat, subcat) {
	cat = factsObj[cat];
	sub = factsObj[cat][subcat];
	slide = factsObj[cat][subcat].config.index;
	totalSubcatSlides = Object.keys(factsObj[cat][subcat]).length -1;

	if(slide > totalSubcatSlides ) { slide = 0; }
	if(slide < 0) { slide = totalSubcatSlides; }
	
	console.log(`${slide} of ${totalSubcatSlides}`);	
	
	$('slidepage').style.backgroundImage = "linear-gradient("+factsObj[cat][subcat].config.subcatColor+", "+factsObj[cat].config.catColor+",black)";
	$('slide__img').src =  'img/' + factsObj[cat].config.catTitle + '/' + factsObj[cat][subcat].config.subcatTitle + '/' + factsObj[cat][subcat][slide].pic;
	$('slide__img').alt =  'image src is... ' + 'img/' + factsObj[cat].config.catTitle + '/' + factsObj[cat][subcat].config.subcatTitle + '/' +  factsObj[cat][subcat][slide].pic;
	$('slide__text').innerHTML = factsObj[cat][subcat][slide].text;

	$('homepage').style.display = 'none';
	$('slidepage').style.display = 'flex';
	$('slidepage').style.flexFlow = 'column';
}

function changeSlide(n) {
	slide += n;
	console.log(cat, subcat, slide, n);
	showSlide(cat, subcat, slide);
	factsObj[cat][subcat].config.index = slide;
}

function slideClicked() {
	$('slide__text').classList.toggle("hide");
	$('slide__title').classList.toggle("hide");
	$('navBtnContainer').classList.toggle("hide");
	$('slide').classList.toggle("fullscreen");
	$('slide__img').classList.toggle("height-95vh");
}
