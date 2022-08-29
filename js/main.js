let cat;
let subcat;
let slide;
let totalSubcatSlides;

// $(idString) == document.getElementById(idString);
function $(selector) { 
	return document.querySelector(selector);
}

// Attached to <body onload="">
function startup() {
	generateHomepage();
	showHomepage();
}

// Performed ONCE during startup (body onload). Populates #homepage__main
function generateHomepage() {
	// totalCats is -1 bc of the "config" object
	let totalCats = Object.keys(factsObj).length-1;
	for (let i = 0; i < totalCats; i++) {
		let catBtnId = `cat${i}Btn`;
		let catBtnText = factsObj[i].config.catTitle;
		let catBtnContainer = document.createElement('div');
		let homepageMainElement = $('#homepage__main')
		catBtnContainer.style.backgroundColor = factsObj[i].config.catColor;
		catBtnContainer.classList.add("catBtnContainer", "animate-right");
		catBtnContainer.innerHTML = `<button class="catBtn" onclick="showSubcats(${i})" id="${catBtnId}">${catBtnText}</div>`;

		homepageMainElement.appendChild(catBtnContainer);

		// totalSubcats -1 to skip the "config" object
		let totalSubcats = Object.keys(factsObj[i]).length-1;
		for(let ii = 0; ii < totalSubcats; ii++) {
			let subcatBtnContainer = document.createElement('div');
			let subcatBtnText = factsObj[i][ii].config.subcatTitle;
			let subcatBtnId = `subcat${i}_${ii}Btn`;

			subcatBtnContainer.style.backgroundColor = factsObj[i][ii].config.subcatColor;

			subcatBtnContainer.id = `subcat${i}_${ii}`;
			subcatBtnContainer.classList.add("subcatBtnContainer", "hide");

			subcatBtnContainer.innerHTML = `<div class="subcatBtn animate-right" onclick="showSlide(${i}, ${ii})" id="${subcatBtnId}">${subcatBtnText}</div>`;
			
			$('#homepage__main').appendChild(subcatBtnContainer);
		}
	}
}

function showHomepage(){
	$('#homepage').style.display = 'flex';
	$('#homepage').style.flexFlow = 'column';
	$('#slidepage').style.display = 'none';
}

function showSubcats(c){
	let totalSubcats = Object.keys(factsObj[c]).length-1;
	for(let ii = 0; ii < totalSubcats; ii++) {
		let subcatId = `#subcat${c}_${ii}`;
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

	$('#slidepage').style.backgroundImage = `linear-gradient(${subcatColor}, ${catColor}, black)`;
	$('#slidepage__catTitle').innerText = factsObj[c].config.catTitle;
	$('#slidepage__catTitle').style.color = catColor;
	$('#slidepage__subcatTitle').innerText = factsObj[c][sc].config.subcatTitle;
	$('#slidepage__subcatTitle').style.color = subcatColor;
	$('#slidepage__pageTracker').innerHTML = `${slide + 1} of ${totalSubcatSlides}`;
	$('#slide__img').src = `img/${factsObj[c].config.catTitle.toLowerCase()}/${factsObj[c][sc].config.subcatTitle.toLowerCase()}/${factsObj[c][sc][slide].pic}`;
	$('#slide__img').alt =  `picture for ${factsObj[c][sc].config.subcatTitle} slide ${slide + 1}`;
	$('#slide__text').innerHTML = factsObj[c][sc][slide].text;

	$('#homepage').style.display = 'none';
	$('#slidepage').style.display = 'flex';
	$('#slidepage').style.flexFlow = 'column';

}

function changeSlide(n) {
	factsObj[cat][subcat].config.index += n;

	console.log(`cat:${cat}, subcat:${subcat}, slide:${slide}, of:${totalSubcatSlides}, change:${n}`);
	showSlide(cat, subcat);
}

function slideClicked() {
	$('#slide__text').classList.toggle("hide");
	$('#slidepage__header').classList.toggle("hide");
	$('#navBtnContainer').classList.toggle("hide");
	$('#slide').classList.toggle("vh100");
}
