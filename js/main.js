var elForm = document.querySelector('.distance__form');
var elInput = document.querySelector('.distance__input');
var elPedestrian = document.querySelector('.distance__pedestrian');
var elbycycle = document.querySelector('.distance__bycycle');
var elCar = document.querySelector('.distance__car');
var elPlane = document.querySelector('.distance__plane');




 
elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var inputValue = Number(elInput.value.trim());

    var pedestrianSpeed = 3.6;
var bycycleSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;
    if(isNaN(inputValue) || inputValue <= 0){
        alert('Wrong number entered !')
        return;
    }

 
    function speedoMetr (objectSpeed){
        var hour = Math.floor(inputValue / objectSpeed);
        var minute = Math.floor(((inputValue / objectSpeed - hour)*60));
        var second = Math.floor((((inputValue / objectSpeed - hour)*60)-minute)*60)
        return hour + ' hour, ' + minute + ' minute, ' + second + ' second';
    }

    elPedestrian.textContent = speedoMetr(pedestrianSpeed);
    elbycycle.textContent = speedoMetr(bycycleSpeed);
    elCar.textContent = speedoMetr(carSpeed);
    elPlane.textContent = speedoMetr(planeSpeed);

})






