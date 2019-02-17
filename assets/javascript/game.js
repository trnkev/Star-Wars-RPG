var myCharacter = {
    healthPoints : 0,
    attackPower : 0,
    counterAttackPower : 0
};

var enemy = {
    healthPoints: [0,0,0,0],
    counterAttackPower: [0,0,0,0]
};
var imageOptions = ['darth-vader.jpeg', 'luke-skywalker.jpeg', 'rey.jpeg', 'yoda.jpeg'];

// generate an HP from 100 to 200
var randomHP = function() {
    return Math.floor(Math.random()*100 + 100);
}

$('.character').on('click', function() {
    // move the image down to where player is supposed to be
    var clicked = $(this).attr('imageFilename');
    $('.queue').remove();
    var player = $('<img>');
    player.addClass('character');
    player.attr('src', 'assets/images/' + clicked);
    $('.your-character').append('<div class=\'player card\'></div>');
    $('.player').append(player);
    $('.player').append('<p class=\'hp\'>' + myCharacter.healthPoints + '</p>');


    // create defenders
    var count = 1;
    for (var i = 0; i < imageOptions.length; i++) {
        if (imageOptions[i] !== clicked) {
            var unique = '#defender' + count;
            var defender = $('<img>');
            defender.addClass('character');
            defender.attr('src', 'assets/images/' + imageOptions[i]);
            $(unique).addClass('card').append(defender);
            $(unique).append('<p class=\'hp\'>' + enemy.healthPoints[i] + '</p>');
            count++;
        }
    }


});