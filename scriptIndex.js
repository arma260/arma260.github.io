
//
//Pair 1
//
let eImageScrollerPair1 = document.getElementById("imageScrollerPair");  //Overarching div
let rangeSlider1 = eImageScrollerPair1.getElementsByTagName('input')[0];  //Range slider
let image1 = eImageScrollerPair1.getElementsByTagName('img')[0];         //Image to change

//Initialising Images
var imgSrcArray = new Array();
for (let i = 0; i < 10; i++) { //starts at 0, ends at 10 (number of images)
    imgSrcArray[i] = new String();
    imgSrcArray[i] = "images/pair1/img" + (i+1) + ".jpg";
}

//Event listener to change image when the slider changes
rangeSlider1.value = 0;
rangeSlider1.addEventListener('input', updateImage); //Adds event listener for rangeSlider that runs updateImage when input is satisfied (range value is changed)
function updateImage(e) {
    //Changes image based on range value
    let rangeValue = this.value;
    image1.src = imgSrcArray[rangeValue];
}