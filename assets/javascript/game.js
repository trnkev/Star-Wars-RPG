var myCharacter = {
    healthPoints : 0,
    attackPower : 0,
    counterAttackPower : 0
}
var targetNumber = 0;
var imageOptions = ['#darth-vader', '#luke-skywalker', '#rey', '#yoda'];

function generateGems() {
    for (let id of imageOptions) {
        var random = Math.floor(Math.random() * 12 + 1);
        var chracterImage = $(id);
        chracterImage.attr('data-value', random);
    }
}

function reset() {
    var random = Math.floor(Math.random() * 101 + 19);
    targetNumber = random;
    counter = 0;
    $('#score').html(0);
    generateGems();
}

reset();

$('.character').on('click', function () {
    var crystalValue = $(this).attr('data-value');
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $('#score').html(counter);

    if (counter === targetNumber) {
        alert('You win!');
        ++wins;
        $('#wins').html(wins);
        reset();
    } else if (counter > targetNumber) {
        alert('Sorry, you lost!');
        ++losses;
        $('#losses').html(losses);
        reset();
    }
    $('#number-to-guess').text(targetNumber);

});

