var catHome = 0;
var cat = 0;
var subCat = 0;
var currIndex = 0;
var numSlides = 0;

// *bug alert* need to make a slide index and numSlides for each subCategory to keep place when returning
// AND to never have an index greater than the total number of slides

var catHomes = [FactsObj];

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

function startup(){
	genCatHome(0);
	showCatHome(0);
}

function genCatHome(n){
	let numCats = Object.keys(catHomes[n]).length-1;
	console.log("numCats: "+numCats);

	for(i=0;i<numCats;i++){
		let catBtn = document.createElement('div');
		let catBtnText = catHomes[n][i].config.catTitle;
		let catBtnId = "cat"+n+"_"+i+"Btn";
		let  catBtnStyle = "background-image: linear-gradient("+catHomes[n][i].config.catColor+", "+catHomes[n][i].config.catColor+", black)";

		catBtn.classList.add("catBtnContainer");
		if(i%2){
			catBtn.classList.add('animate-left')
		} else{
			catBtn.classList.add('animate-right')
		}

		catBtn.innerHTML = '<button class="catBtn" onclick="showCat('+n+', '+i+')" id="'+catBtnId+'" style="'+catBtnStyle+'">'+catBtnText+'</div>';
		
		$('catHomeRow').appendChild(catBtn);

		let delayNum = 0;
		let numSubCats = Object.keys(catHomes[n][i]).length-1;
		console.log("n: "+n+"  i: "+i+"  numSubCats: "+numSubCats);

		for(ii=0;ii<numSubCats;ii++){
			let subCatBtn = document.createElement('div');
			let subCatBtnText = catHomes[n][i][ii].config.subCatTitle;
			let subCatBtnId = "subCat"+n+"_"+i+"_"+ii+"Btn";
			let subCatBtnStyle = "background-image: linear-gradient("+catHomes[n][i][ii].config.subCatColor+", "+catHomes[n][i][ii].config.subCatColor+", black)";

			subCatBtn.style = "background-image: linear-gradient("+catHomes[n][i].config.catColor+", "+catHomes[n][i].config.catColor+", black)";
			subCatBtn.id = "subCat"+n+"_"+i+"_"+ii
			subCatBtn.classList.add("subCatBtnContainer");
			subCatBtn.classList.add("hide");

			delayNum = ii%3;
			subCatBtn.innerHTML = '<div class="subCatBtn animate-right'+delayNum+'" onclick="showSubCat('+n+', '+i+', '+ii+')" id="'+subCatBtnId+'" style="'+subCatBtnStyle+'">'+subCatBtnText+'</div>';
			subCatBtn.classList.add('bottomMargin');
			
			$("catHomeRow").appendChild(subCatBtn);
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
	$('slideImg').src =  'images/' + catHomes[catHome][cat].config.catTitle + '/' + catHomes[catHome][cat][subCat].config.subCatTitle + '/' +  catHomes[catHome][cat][subCat][currIndex].pic;
	$('slideText').innerHTML = catHomes[catHome][cat][subCat][currIndex].text;
}

function changeSlide(n) {
	currIndex+=n;
	catHomes[catHome][cat][subCat].config.index = currIndex;
	showSlide(currIndex);
}

function slideClicked() {
	$('slide').classList.toggle("fullscreen");
	$('imgContainer').classList.toggle('overflowHidden');
	$('slideText').classList.toggle("hide");
	$('slideTitle').classList.toggle("hide");
	$('navBtnContainer').classList.toggle("hide");
}