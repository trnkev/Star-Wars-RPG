var myCharacter = {
    healthPoints : 0,
    attackPower : 0,
    counterAttackPower : 0
};

var characterList = {
    healthPoints: [0,0,0,0],
    counterAttackPower: [0,0,0,0]
};
var imageOptions = ['darth-vader.jpeg', 'luke-skywalker.jpeg', 'rey.jpeg', 'yoda.jpeg'];

function generate() {
    myCharacter.attackPower = Math.floor(Math.random()*10 + 1);
    var hp = characterList.healthPoints;
    var counter = characterList.counterAttackPower;
    var count = 1;
    for (var i = 0; i < hp.length; i++) {
        var unique = '#unique' + count;
        // generate an HP from 100 to 200
        hp[i] = Math.floor(Math.random() * 100 + 100);
        counter[i] = Math.floor(Math.random()*10 + 1);
        $(unique).append('<p class=\'hp\'>' + hp[i] + '</p>');
        count++;
    }
}

function match(item) {
    for (var i = 0; i < imageOptions.length; i++) {
        if (item === imageOptions[i]) {
            myCharacter.healthPoints = characterList.healthPoints[i];
            myCharacter.counterAttackPower = characterList.counterAttackPower[i];
        }
    }
}

generate();

$('.character').on('click', function() {
    // move the image down to where player is supposed to be
    var clicked = $(this).attr('imageFilename');
    match(clicked);
    $('.queue').remove();
    var player = $('<img>');
    player.addClass('character');
    player.attr('src', 'assets/images/' + clicked);
    $('.your-character').append('<div class=\'player card\'></div>');
    $('.player').append(player);
    $('.player').append('<p class=\'hp\'>' + myCharacter.healthPoints + '</p>');


    // create enemies to attack
    var count = 1;
    for (var i = 0; i < imageOptions.length; i++) {
        if (imageOptions[i] !== clicked) {
            var unique = '#defender' + count;
            var defender = $('<img>');
            defender.addClass('character');
            defender.attr('src', 'assets/images/' + imageOptions[i]);
            $(unique).addClass('card').append(defender);
            $(unique).append('<p class=\'hp\'>' + characterList.healthPoints[i] + '</p>');
            $(unique).attr('file-name',imageOptions[i]);
            $(unique).attr('index',i);

            count++;
        } else if (imageOptions[i] === clicked) {
            myCharacter.healthPoints = characterList.healthPoints[i];
        }
    }
});

$('.defender').on('click', function() {
    var clicked = $(this).attr('id');
    var name = $(this).attr('file-name');
    var index = $(this).attr('index');
    var unique = '#' + clicked;
    $(unique).remove();    
    var defender = $('<img>');
    defender.addClass('character');
    defender.attr('src', 'assets/images/' + name);
    $('#fighter').addClass('card').append(defender);
    $('#fighter').append('<p id=\'attacked\' class=\'hp\'>' + characterList.healthPoints[index] + '</p>');
    $('#attacked').attr('index', index);
});

var temp = 0;

$('#attack').on('click', function() {
    var index = parseInt($('#attacked').attr('index'));
    temp = characterList.healthPoints[index] - myCharacter.attackPower;

    $('#attacked').html(temp);
    
});