
//
//Pair 1
//
let eImageScrollerPair1 = document.getElementById("imageScrollerPair");  //Overarching div
let rangeSlider1 = eImageScrollerPair1.getElementsByTagName('input')[0];  //Range slider
let image1 = eImageScrollerPair1.getElementsByTagName('img')[0];         //Image to change

//Initialising Images
var imgSrcArray1 = new Array();
for (let i = 0; i < 10; i++) { //starts at 0, ends at 10 (number of images)
    imgSrcArray1[i] = new String();
    imgSrcArray1[i] = "images/pair1/img" + (i+1) + ".jpg";
}

//Event listener to change image when the slider changes
rangeSlider1.value = 0;
rangeSlider1.addEventListener('input', updateImage1); //Adds event listener for rangeSlider that runs updateImage when input is satisfied (range value is changed)
function updateImage1(e) {
    //Changes image based on range value
    let rangeValue = this.value;
    image1.src = imgSrcArray1[rangeValue];
}


//
//Pair 2
//
let eImageScrollerPair2 = document.getElementById("imageScrollerPair2");  //Overarching div
let rangeSlider2 = eImageScrollerPair2.getElementsByTagName('input')[0];  //Range slider
let image2 = eImageScrollerPair2.getElementsByTagName('img')[0];         //Image to change

//Initialising Images
var imgSrcArray2 = new Array();
for (let i = 0; i < 123; i++) { //starts at 0, ends at 123 (number of images)
    imgSrcArray2[i] = new String();
    imgSrcArray2[i] = "images/pair2/image (" + (i+1) + ").gif";
}

//Event listener to change image when the slider changes
rangeSlider2.value = 0;
rangeSlider2.addEventListener('input', updateImage2); //Adds event listener for rangeSlider that runs updateImage when input is satisfied (range value is changed)
function updateImage2(e) {
    //Changes image based on range value
    let rangeValue = this.value;
    image2.src = imgSrcArray2[rangeValue];
}