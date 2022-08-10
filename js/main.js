// Structure: category home (facts) > category (mythology) > sub-category (greek) > current index (slide)
let catHome = 0;
let cat = 0;
let subCat = 0;
let currIndex = 0;
let numSlides = 0;

// *bug alert* need to make a slide index and numSlides for each subCategory to keep place when returning
// AND to never have an index greater than the total number of slides

let catHomes = [FactsObj];

// var catHomeTitles = [ "Facts", "Jokes", "Memes" ];

// var cat0Titles = [
// 	"Philosophy", 			"Cosmology", 	"Biology",		"History",
// 	"Mythology", 			"Psychology", 	"Nutrition", 	"Deaths",
// 	"Art",					"Culture",		"Words",		"Feats",
// 	"Counter Intuitive", 	"Anomalies",	"Practical",	"Quotes"
// ];

// var catHome0Colors = [
// 	"#1C7ED5", 				"#8E3068", 		"#92DE37",		"#DB9F4B",
// 	"#F4C13B", 				"#EFB9B1", 		"#D64A37", 		"#860303",
// 	"#45DDDA", 				"#F2BB6C",		"#BDD2F7",		"#F75700",
// 	"#E45C56", 				"#932291",		"#4A9529",		"#aabbcc"
// ];

function $(id) { 
	return document.getElementById(id); 
}

function startup() {
	genCatHome(0);
	showCatHome(0);
}

function genCatHome(n) {
	let numCats = Object.keys(catHomes[n]).length-1;
	console.log("numCats: " + numCats);

	for (i=0; i < numCats; i++) {
		let catBtnContainer = document.createElement('div');
		let catBtnText = catHomes[n][i].config.catTitle;
		let catBtnId = "cat"+n+"_"+i+"Btn";

		catBtnContainer.classList.add("catBtnContainer");
		if(i%2){
			catBtnContainer.classList.add("animate-left");
		} else{
			catBtnContainer.classList.add("animate-right");
		}
		catBtnContainer.innerHTML = '<button class="catBtn" onclick="showCat('+n+', '+i+')" id="'+catBtnId+'">'+catBtnText+'</div>';

		catBtnContainer.style.backgroundImage = "linear-gradient("+catHomes[n][i].config.catColor+", "+catHomes[n][i].config.catColor+", black)";
		
		$('catHomeContent').appendChild(catBtnContainer);

		let delayNum = 0;
		let numSubCats = Object.keys(catHomes[n][i]).length-1;
		console.log("n: "+n+"  i: "+i+"  numSubCats: "+numSubCats);

		for(ii=0;ii<numSubCats;ii++){
			let subCatBtnContainer = document.createElement('div');
			let subCatBtnText = catHomes[n][i][ii].config.subCatTitle;
			let subCatBtnId = "subCat"+n+"_"+i+"_"+ii+"Btn";

			subCatBtnContainer.style.backgroundImage = "linear-gradient("+catHomes[n][i][ii].config.subCatColor+", "+catHomes[n][i][ii].config.subCatColor+", black)";

			subCatBtnContainer.id = "subCat"+n+"_"+i+"_"+ii
			subCatBtnContainer.classList.add("subCatBtnContainer");
			subCatBtnContainer.classList.add("hide");

			delayNum = ii%3;
			subCatBtnContainer.innerHTML = '<div class="subCatBtn animate-right'+delayNum+'" onclick="showSubCat('+n+', '+i+', '+ii+')" id="'+subCatBtnId+'" style="'+'">'+subCatBtnText+'</div>';
			
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
	console.log("catHome: "+n);

	$('startPage').style.display = "none";
	$('catHome').style.display = "block";
	$('slidePage').style.display = "none";

	$('catHomeTitle').style.color = catHomes[n].config.catHomeColor;
}

function showCat(ch, n){
	catHome = ch;
	cat = n;
	console.log("cat: "+n);

	let numSubCats = Object.keys(catHomes[ch][n]).length-1;

	for(i=0;i<numSubCats;i++){
		let subCatId = "subCat"+ch+"_"+n+"_"+i;
		$(subCatId).classList.toggle("hide");
	}
}

function showSubCat(ch, c, n){
	catHome = ch;
	cat = c;
	subCat = n;
	console.log("subCat: "+n);

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

	if(currIndex > numSlides){ currIndex = 0;}
	if(currIndex < 0){ currIndex = numSlides}

	catHomes[catHome][cat][subCat].config.index = currIndex;

	console.log("n: "+currIndex+" of "+numSlides);

	$('slidePage').style.backgroundImage = "linear-gradient("+catHomes[catHome][cat][subCat].config.subCatColor+", "+catHomes[catHome][cat].config.catColor+",black)";
	$('slideImg').src =  'img/' + catHomes[catHome][cat].config.catTitle + '/' + catHomes[catHome][cat][subCat].config.subCatTitle + '/' +  catHomes[catHome][cat][subCat][currIndex].pic;
	$('slideImg').alt =  'image src is... ' + 'img/' + catHomes[catHome][cat].config.catTitle + '/' + catHomes[catHome][cat][subCat].config.subCatTitle + '/' +  catHomes[catHome][cat][subCat][currIndex].pic;
	$('slideText').innerHTML = catHomes[catHome][cat][subCat][currIndex].text;
}

function changeSlide(n) {
	currIndex+=n;
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