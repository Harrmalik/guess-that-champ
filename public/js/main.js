$(function() {
    var champs;
    var currentChamp;
    var playAudio = function(champ) {
        var audio = new Audio('../sounds/' + champ + '.mp3');
        audio.play();
    }

    $.get( "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=dd5063aa-3221-473c-a0f1-2d4aa525dcfd", function( data ) {
        champs = _.keys(data.data);
    });

    $('#btnRandomize').on('click', function(){
        currentChamp = _.shuffle(champs)[0];
        playAudio(currentChamp);
        $('#message').text(currentChamp);
    });
});
