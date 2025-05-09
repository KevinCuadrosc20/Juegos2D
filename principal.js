var juego = new Phaser.Game(370,550,Phaser.CANVAS,'bloqueJuego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal = {
    preload: function() {
        juego.load.image('fondo','img/bg.jpeg');
        juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
        juego.load.audio('sonidoFondo','audio/audio.mp3');
    },
    
    create: function() {
        juego.add.tileSprite(0,0,370,550,'fondo');
        flappy= juego.add.sprite(100,100,'pajaros');
        flappy.frame=1;
        flappy.animations.add('vuelo' ,[0,1,2],10,true);
        teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        var musicaFondo = juego.add.audio('sonidoFondo');
        musicaFondo.loop = true;
        musicaFondo.play();
    },
    update: function() {
        flappy.animations.play('vuelo');
        if(teclaDerecha.isDown){
            flappy.x+=3;
        }else if(teclaIzquierda.isDown){
            flappy.x-=3;
        }else if(teclaArriba.isDown){
            flappy.y-=3;
        }else if(teclaAbajo.isDown){
            flappy.y+=3;
        }
    }
};
juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');