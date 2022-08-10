// Structure: category home (facts) > category (mythology) > sub-category (greek) > current index (slide)
let catHome = 0;
let cat = 0;
let subCat = 0;
let currIndex = 0;
let numSlides = 0;
let imgFolder = "https://guyrimel.github.io/BestFactsEver/img/"

// *feature request* need to make a slide index and numSlides for each subCategory to keep place when returning
// AND to never have an index greater than the total number of slides

let catHomes = [FactsObj];

// to use "$()" instead of "document.getElementById()"
function $(id) { 
	return document.getElementById(id); 
}

// generates then shows the category homepage. currently statically loading "0" which is "Facts"
function startup() {
	genCatHome(0);
	showCatHome(0);
}


function genCatHome(n) {
	let numCats = Object.keys(catHomes[n]).length-1;
	// console.log("numCats: " + numCats);

	// create category button container elements
	for (i=0; i < numCats; i++) {
		let catBtnContainer = document.createElement('div');
		let catBtnText = catHomes[n][i].config.catTitle;
		let catBtnId = "cat" + n + "_" + i + "Btn";

		catBtnContainer.classList.add("catBtnContainer");

		// give each catBtnContainer an alternating animation
		if(i % 2){
			catBtnContainer.classList.add("animate-left1");
		} else{
			catBtnContainer.classList.add("animate-right1");
		}

		// create category elements inside the created containers
		catBtnContainer.innerHTML = '<button class="catBtn" onclick="showCat(' + n + ', ' + i + ')" id="' + catBtnId + '">'+catBtnText + '</div>';
		catBtnContainer.style.backgroundColor = catHomes[n][i].config.catColor;
		
		// append id="catHomeContent" with the created category button container
		$('catHomeContent').appendChild(catBtnContainer);

		// empty string = .3s, 1 = .6s, 2 = .9s
		let delayMod = '';
		let numSubCats = Object.keys(catHomes[n][i]).length - 1;
		console.log("n: " + n + "  i: " + i + "  numSubCats: " + numSubCats);

		for(ii=0; ii < numSubCats; ii++){
			let subCatBtnContainer = document.createElement('div');
			let subCatBtnText = catHomes[n][i][ii].config.subCatTitle;
			let subCatBtnId = "subCat" + n + "_" + i + "_" + ii + "Btn";

			subCatBtnContainer.style.backgroundColor = catHomes[n][i][ii].config.subCatColor;
			subCatBtnContainer.id = "subCat" + n + "_"+i + "_" + ii
			subCatBtnContainer.classList.add("subCatBtnContainer");
			subCatBtnContainer.classList.add("hide");

			delayMod = ii % 3;
			subCatBtnContainer.innerHTML = '<div class="subCatBtn animate-right' + delayMod + '" onclick="showSubCat('+n+', '+i+', '+ii+')" id="' + subCatBtnId+'" style="' + '">'+subCatBtnText + '</div>';
			
			$("catHomeContent").appendChild(subCatBtnContainer);
		}
	}
}

function showStartPage(){
	$('startPage').style.display = "flex";
	$('catHome').style.display = "none";
	$('slidePage').style.display = "none";
}

function showCatHome(n){
	catHome = n;
	// console.log("catHome: " + n);

	$('startPage').style.display = "none";
	$('catHome').style.display = "block";
	$('slidePage').style.display = "none";

	$('catHomeTitle').style.color = catHomes[n].config.catHomeColor;
}

function showCat(ch, n){
	catHome = ch;
	cat = n;
	console.log("cat: " + n);

	let numSubCats = Object.keys(catHomes[ch][n]).length - 1;

	for(i=0;i<numSubCats; i++){
		let subCatId = "subCat"+ch+"_" + n + "_" + i;
		$(subCatId).classList.toggle("hide");
	}
}

function showSubCat(ch, c, n){
	catHome = ch;
	cat = c;
	subCat = n;
	console.log("subCat: " + n);

	$('startPage').style.display = "none";
	$('catHome').style.display = "none";
	$('slidePage').style.display = "flex";

	$('cTitle').innerHTML = catHomes[ch][c].config.catTitle;
	$('cTitle').style.color = catHomes[ch][c].config.catColor;

	$('scTitle').innerHTML = catHomes[ch][c][n].config.subCatTitle;
	$('scTitle').style.color = catHomes[ch][c][n].config.subCatColor;

	currIndex = catHomes[ch][c][n].config.index;
	numSlides = Object.keys(catHomes[catHome][cat][subCat]).length - 2;

	showSlide(currIndex);
}

function showSlide(n){
	currIndex = n;

	if(currIndex > numSlides) { currIndex = 0; }
	if(currIndex < 0){ currIndex = numSlides; }

	catHomes [catHome] [cat] [subCat].config.index = currIndex;

	console.log("n: "+currIndex+" of "+numSlides);

	$('slidePage').style.backgroundImage = "linear-gradient(" + catHomes[catHome][cat][subCat].config.subCatColor+", " + catHomes[catHome][cat].config.catColor + ",black)";
	$('slideImg').src =  '/img/' + catHomes[catHome][cat].config.catTitle + '/' + catHomes[catHome][cat][subCat].config.subCatTitle + '/' +  catHomes[catHome][cat][subCat][currIndex].pic;
	$('slideImg').alt =  'image src is... ' + '/img/' + catHomes[catHome][cat].config.catTitle + '/' + catHomes[catHome][cat][subCat].config.subCatTitle + '/' +  catHomes[catHome][cat][subCat][currIndex].pic;
	$('slideText').innerHTML = catHomes[catHome][cat][subCat][currIndex].text;
}

function changeSlide(n) {
	currIndex += n;
	catHomes[catHome][cat][subCat].config.index = currIndex;
	showSlide(currIndex);
}

function slideClicked() {
	$('slideText').classList.toggle("hide");
	$('slideTitle').classList.toggle("hide");
	$('navBtnContainer').classList.toggle("hide");
	$('slide').classList.toggle("fullscreen");
	$('slideImg').classList.toggle("height-95vh");
}
