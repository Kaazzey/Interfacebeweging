var buttonSchoonmaker = document.getElementById('button_waterval');
var buttonBoef = document.getElementById('button_paris');
var buttonHond = document.getElementById('button_hawaii');
var video = document.getElementById('video');


buttonSchoonmaker.addEventListener('click', speelWaterval);
buttonBoef.addEventListener('click', speelParis);
buttonHond.addEventListener('click', speelHawaii);

function speelWaterval() {
    // video.src = "img/video/schoonmaker.mov";

    // document.getElementById("body").classList.add('body1');
    // document.getElementById("body").classList.remove('body2' && 'body3');

    setTimeout(function(){  
        video.src = "img/video/watervalsound.mp4";   
        document.getElementById("body").classList.add('body1');
        document.getElementById("body").classList.remove('body2' && 'body3');
    }, 750);

    document.getElementById("transistion").classList.add('animated');
    setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
    }, 1500);

    console.log('run waterval');
}

function speelParis() {
    // video.src = "img/video/boef.mov";

    // document.getElementById("body").classList.add('body2');
    // document.getElementById("body").classList.remove('body1' && 'body3');

    setTimeout(function(){    
        video.src = "img/video/parissound.mp4"; 
        document.getElementById("body").classList.add('body2');
        document.getElementById("body").classList.remove('body1' && 'body3');
    }, 750);

    document.getElementById("transistion").classList.add('animated');
    setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
    }, 1500);

    console.log('run paris');
}

function speelHawaii() {
    // video.src = "img/video/hond.mov";

    // document.getElementById("body").classList.add('body3');
    // document.getElementById("body").classList.remove('body1' && 'body2');

    setTimeout(function(){     
        video.src = "img/video/hawaiisound.mp4";
        document.getElementById("body").classList.add('body3');
        document.getElementById("body").classList.remove('body1' && 'body2'); 
    }, 750);

    document.getElementById("transistion").classList.add('animated');
    setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
    }, 1500);

    console.log('run Hawaii');
}

// setTimeout(function(){     
//     document.getElementById("body").classList.add('body3');
//     document.getElementById("body").classList.remove('body1' && 'body2'); 
// }, 3000);