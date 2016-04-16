require.config({
    paths: {
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1-rc2/jquery.min',
    }

    , shim: {
    }
});

require([], function() {
    var game = new Phaser.Game(1250, 520, Phaser.AUTO, 'game');
});
