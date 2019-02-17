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

// The player is Darth Vader
$('.character').on('click', function() {
    var clicked = $(this).attr('imageFilename');
    $('.character').remove();
    var character = $('<img>');
    character.addClass('character');
    character.attr('src', 'assets/images/' + clicked);
    $('.player').append(character);

    for (let id of imageOptions) {
        if (id !== 'darth-vader.jpeg') {
            var defender = $('<img>');
            defender.addClass('character');
            defender.attr('src', 'assets/images/' + id);
            $('.defender').append(defender);
        }
    }
});