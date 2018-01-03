$(document).ready(function () {

    // jQuery selectors for keys and screen

    var negActive = false;
    var previousIsOperator = false;
    var decimalActive = false;

    function negActiveOn() {
        negActive = true;
    }

    function negActiveOff() {
        negActive = false;
    }

    function previousIsOperatorOn() {
        previousIsOperator = true;
    }

    function previousIsOperatorOff() {
        previousIsOperator = false;
    }

    function decimalActiveOn() {
        decimalActive = true;
    }

    function decimalActiveOff() {
        decimalActive = false;
    }

    $('#syb-1').click(function () {
        equation.push(1);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-2').click(function () {
        equation.push(2);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-3').click(function () {
        equation.push(3);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-4').click(function () {
        equation.push(4);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-5').click(function () {
        equation.push(5);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-6').click(function () {
        equation.push(6);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-7').click(function () {
        equation.push(7);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-8').click(function () {
        equation.push(8);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-9').click(function () {
        equation.push(9);
        previousIsOperatorOff();
        updateScreen();
    });
    $('#syb-0').click(function () {
        equation.push(0);
        previousIsOperatorOff();
        updateScreen();
    });


    // OPERATORS
    $('#syb-add').click(function () {
        equation.push('+');
        decimalActiveOff();
        negActiveOff();
        previousIsOperatorOn();
        updateScreen();
    });
    $('#syb-sub').click(function () {
        equation.push('-');
        decimalActiveOff();
        negActiveOff();
        previousIsOperatorOn();
        updateScreen();
    });
    $('#syb-mult').click(function () {
        equation.push('*');
        decimalActiveOff();
        negActiveOff();
        previousIsOperatorOn();
        updateScreen();
    });
    $('#syb-div').click(function () {
        equation.push("/");
        decimalActiveOff();
        negActiveOff();
        previousIsOperatorOn();
        updateScreen();
    });

    $('#syb-sq').click(function () {
        equation.push('^');
        previousIsOperatorOn();
        updateScreen();
    });
    $('#syb-sr').click(function () {
        equation.push('#');
        previousIsOperatorOn();
        updateScreen();
    });

    $('#syb-dec').click(function () {
        equation.push('.');
        decimalActiveOn();
        updateScreen();
    });
    $('#syb-neg').click(function () {
        if (!negActive) {
            equation.push('_');
            negActiveOn();
        } else {
            console.log('already neg')
        }
        updateScreen();
    });

    //
    $('#syb-del').click(function () {
        equation.pop();
        updateScreen();
    });

    //
    $('#syb-ce').click(function () {
        for (var i = equation.length - 1; i >= 0; i--){
            var element = equation[i];
            if (element !== '+' && element !== '-' && element !== '*' && element !== '/') {
                equation.pop();
            } else {
                negActiveOff();
                break;
            }
        }
        updateScreen();
    });

    //
    $('#syb-c').click(function () {
        equation = [];
        updateScreen();
    });


    var equation = [];

    //
    function updateScreen() {
        $('#screen').text(equation.join(''))
    }

    $('#syb-eql').click(function () {
        var parts = [];
        var funct1;
        var funct2;
        var funct3;
        var makeNeg = false;
        for (var i = 0; i < equation.length; i++) {
            if (equation[i] === '_') {
                makeNeg = true;
                continue;
            }
            if (equation[i] === '+') {

            }
        }

        // make a delimiter symbol to break apart operands during calculation but removed for screen display





        // execute equation
    });

    var test = '-434.4/6';
    console.log(parseFloat(test));

});