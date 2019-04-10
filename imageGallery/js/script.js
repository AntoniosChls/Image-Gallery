var i = 0;
var Clicks = 0;
var images = []; //set Array
time = 0

// Array
images[0] = 'images/pic1.jpg';
images[1] = 'images/pic2.jpg';
images[2] = 'images/pic3.jpg';
//changeImage
function Thumbnails() {

}

function changeImg() {

    if (i == 0) {
        document.getElementById("Thumb1").className = "goAwayOpacity";
        document.getElementById("Thumb3").className = "getOpacity";

    } else if (i == 1) {
        document.getElementById("Thumb2").className = "goAwayOpacity";
        document.getElementById("Thumb1").className = "getOpacity";
    } else if (i == 2) {

        document.getElementById("Thumb3").className = "goAwayOpacity";
        document.getElementById("Thumb2").className = "getOpacity";

    }

    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

}

function pickTime() {
    var selectTime = document.getElementById("pickTime").value;
    if (selectTime == "" || selectTime == "2000")
        return 2000;
    else if (selectTime == "5000")
        return 5000;
    else
        return 10000;
}


function playSlider() {

    if (Clicks != 0) {
        clearInterval(timer);
    } else {
        var x = pickTime();
        timer = setInterval("changeImg()", x);
        Clicks = Clicks + 1;
    }


}

function stopSlider() {

    clearInterval(timer)
    Clicks = 0
}



function goToFirst() {
    i = 0;

}

function goToSecond() {
    i = 1;
}

function goToThird() {
    i = 2;
}