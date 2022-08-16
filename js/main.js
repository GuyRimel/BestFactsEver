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
			subcatBtnContainer.classList.add("subcatBtnContainer", "hide");

			subcatBtnContainer.innerHTML = `<div class="subcatBtn animate-right" onclick="showSlide(${i}, ${ii})" id="${subcatBtnId}">${subcatBtnText}</div>`;
			
			$('homepage__main').appendChild(subcatBtnContainer);
		}
	}
}

function showHomepage(){
	$('homepage').style.display = 'flex';
	$('homepage').style.flexFlow = 'column';
	$('slidepage').style.display = 'none';
}

function showSubcats(c){
	totalSubcats = Object.keys(factsObj[c]).length-1;
	for(let ii = 0; ii < totalSubcats; ii++) {
		let subcatId = `subcat${c}_${ii}`;
		$(subcatId).classList.toggle('hide');
	}
}

function showSlide(c, sc) {
	cat = c;
	subcat = sc;
	slide = factsObj[c][sc].config.index;
	totalSubcatSlides = Object.keys(factsObj[c][sc]).length -1;

	catColor = factsObj[c].config.catColor;
	subcatColor = factsObj[c][sc].config.subcatColor;

	if(slide < 0) {
		slide = totalSubcatSlides - 1;
	} else if (slide > totalSubcatSlides - 1) {
		slide = 0;
	}

	factsObj[c][sc].config.index = slide;

	$('slidepage').style.backgroundImage = `linear-gradient(${subcatColor}, ${catColor}, black)`;
	$('slidepage__catTitle').innerHTML = factsObj[c].config.catTitle;
	$('slidepage__catTitle').style.color = catColor;
	$('slidepage__subcatTitle').innerHTML = factsObj[c][sc].config.subcatTitle;
	$('slidepage__subcatTitle').style.color = subcatColor;
	$('slidepage__pageTracker').innerHTML = `${slide + 1} of ${totalSubcatSlides}`;
	$('slide__img').src =  `img/${factsObj[c].config.catTitle}/${factsObj[c][sc].config.subcatTitle}/${factsObj[c][sc][slide].pic}`;
	$('slide__img').alt =  `src is... img/${factsObj[c].config.catTitle}/${factsObj[c][sc].config.subcatTitle}/${factsObj[c][sc][slide].pic}`;
	$('slide__text').innerHTML = factsObj[c][sc][slide].text;

	$('homepage').style.display = 'none';
	$('slidepage').style.display = 'flex';
	$('slidepage').style.flexFlow = 'column';
}

function changeSlide(n) {
	factsObj[cat][subcat].config.index += n;

	console.log(`cat:${cat}, subcat:${subcat}, slide:${slide}, of:${totalSubcatSlides}, change:${n}`);
	showSlide(cat, subcat);
}

function slideClicked() {
	$('slide__text').classList.toggle("hide");
	$('slidepage__header').classList.toggle("hide");
	$('navBtnContainer').classList.toggle("hide");
	$('slide').classList.toggle("vh100");
}
