$(document).ready(function () {

    // jQuery selectors for keys and screen

    var negActive = false;

    $('#syb-1').click(function () {
        equation.push(1);
        updateScreen();
    });
    $('#syb-2').click(function () {
        equation.push(2);
        updateScreen();
    });
    $('#syb-3').click(function () {
        equation.push(3);
        updateScreen();
    });
    $('#syb-4').click(function () {
        equation.push(4);
        updateScreen();
    });
    $('#syb-5').click(function () {
        equation.push(5);
        updateScreen();
    });
    $('#syb-6').click(function () {
        equation.push(6);
        updateScreen();
    });
    $('#syb-7').click(function () {
        equation.push(7);
        updateScreen();
    });
    $('#syb-8').click(function () {
        equation.push(8);
        updateScreen();
    });
    $('#syb-9').click(function () {
        equation.push(9);
        updateScreen();
    });
    $('#syb-0').click(function () {
        equation.push(0);
        updateScreen();
    });

    $('#syb-add').click(function () {
        equation.push('+');
        negActive = false;
        updateScreen();
    });
    $('#syb-sub').click(function () {
        equation.push('-');
        negActive = false;
        updateScreen();
    });
    $('#syb-mult').click(function () {
        equation.push('*');
        negActive = false;
        updateScreen();
    });
    $('#syb-div').click(function () {
        equation.push("/");
        negActive = false;
        updateScreen();
    });

    $('#syb-sq').click(function () {
        equation.push('^');
        updateScreen();
    });
    $('#syb-sr').click(function () {
        equation.push('#');
        updateScreen();
    });

    $('#syb-dec').click(function () {
        equation.push('.');
        updateScreen();
    });
    $('#syb-neg').click(function () {
        if (!negActive) {
            equation.push('_');
            negActive = true;
        } else {
            console.log('already neg')
        }
        updateScreen();
    });

    $('#syb-del').click(function () {
        equation.pop();
        updateScreen();
    });
    $('#syb-ce').click(function () {
        for (var i = equation.length - 1; i >= 0; i--){
            var element = equation[i];
            if (element !== '+' && element !== '-' && element !== '*' && element !== '/') {
                equation.pop();
            } else {
                break;
            }
        }
        updateScreen();
    });

    $('#syb-c').click(function () {
        equation = [];
        updateScreen();
    });

    $('#syb-eql').click(function () {
        // execute equation
    });

    $('#screen');

    var equation = [];

    function updateScreen() {
        $('#screen').text(equation.join(''))
    }


});