var myCharacter = {
    healthPoints : 0,
    attackPower : 0,
    counterAttackPower : 0
};

var enemy = {
    healthPoints: 0,
    counterAttackPower: 0
};

var targetNumber = 0;
var imageOptions = ['darth-vader.jpeg', 'luke-skywalker.jpeg', 'rey.jpeg', 'yoda.jpeg'];

$('.character').on('click', function() {
    // move the image down to where player is supposed to be
    var clicked = $(this).attr('imageFilename');
    $('.character').remove();
    var character = $('<img>');
    character.addClass('character card');
    character.attr('src', 'assets/images/' + clicked);
    $('.player').append(character);

    // create defenders
    for (let id of imageOptions) {
        if (id !== clicked) {
            var defender = $('<img>');
            defender.addClass('character card');
            defender.attr('src', 'assets/images/' + id);
            $('.defender').append(defender);
        }
    }


});