var Minute = document.getElementById('Minute');
var Seconde = document.getElementById('Seconde');

var minute = 59;
var seconde = 60;

var Tps;

var Audio = document.getElementById('AudioPlayer');


var TimeOut = function () {

    clearTimeout(Tps);

    Tps = setTimeout(TimeOut, 1000);

    if ( seconde > 0 ) {
        seconde = seconde - 1;

        if(seconde<10)
        {
            secondeDisplay = '0' + seconde;
        }
        else {
            var secondeDisplay = seconde;
        }

        Seconde.innerHTML = secondeDisplay;

    }

    if ( minute < 10) {

        minuteDisplay = '0' + minute;

    }
    else {
        var minuteDisplay = minute;
    }

    Minute.innerHTML = minuteDisplay;


    if ( seconde == 0) {


        if ( minute > 0) {

            minute = minute - 1;

            if ( minute < 10 ) {
                MinuteDisplay = '0' + minute;
            }
            else {
                var MinuteDisplay = minute;
            }

                Minute.innerHTML = MinuteDisplay;
                seconde = 59;


        }

        Seconde.innerHTML = seconde;

    }

    if ( seconde == 0 && minute == 0) {

        Audio.play();

    }

};

TimeOut();

// Bouton Stop

var StopTimeOut = function () {

    clearTimeout(Tps);

};

var StopBouton = document.getElementById('Pause');
StopBouton.addEventListener("click", StopTimeOut);

// Bouton Play

document.getElementById('Start').addEventListener("click", TimeOut
);

// Bouton Reset

document.getElementById('Reset').addEventListener("click",

    function () {

    seconde = 60;
    minute = 59;

});

// Changer Temps Minuteur

document.getElementById('Submit').addEventListener("click",

    function () {

    var Min = document.getElementById('SubmitMinute').value;
    var Sec = document.getElementById('SubmitSeconde').value;

    minute = Min;
    seconde = Sec;

});
