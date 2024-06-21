function start() {

    for (let index = 0; index < 5; index++) {
        var ele = document.getElementById("car-" + (index + 1))
        ele.style.animationName = '';
        ele.style.marginLeft = '0vw';

    }
    setTimeout(() => {
        watch();
        for (let index = 0; index < 5; index++) {
            var ele = document.getElementById("car-" + (index + 1))
            ele.style.animationName = 'move';
            ele.style.animationFillMode = "forwards";
            // var arr = [2, 2.5, 3.5, 2.4, 3];
            var time = ((Math.random() * 10) % 2) + 2;
            ele.style.animationDuration = time + "s";
        }
    }, 1000);
}

Math.random()


function watch() {
    // car id base. store in array
    var cars = [];
    var finalList = [];

    for (let i = 0; i < 5; i++) {
        const element = document.getElementById('car-' + (i + 1));
        cars.push(element);
    }
    var interval = setInterval(function () {
        for (let i = 0; i < 5; i++) {
            var coordinate = cars[i].getBoundingClientRect();
            var carName = "car-" + (i + 1);
            if (coordinate.left > 240 && !finalList.includes(carName)) {
                finalList.push(carName);
            }
        }
    }, 500);
    setTimeout(() => {
        console.log("race result", finalList);
        clearInterval(interval);
    }, 5000);
}