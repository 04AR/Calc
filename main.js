// math.import(require('mathjs-simple-integral'));
function eval() {
    var eq = document.querySelector(".Equation").value;
    alert(math.evaluate(eq));
}

function deriv() {
    var eq = document.querySelector(".Equation").value;
    alert(math.derivative(eq,'x'));
}

function inte() {
    var eq = document.querySelector(".Equation").value;
    alert(math.integral(eq,'x'));
}