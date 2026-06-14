// oop abstraction

// implement after the idea that is abstraction


// interface then abstract class


// idea

// example

// interface MediaPlayer {
//     play():void;
//     pause():void;
//     stop():void;

// }

// class MusicPlayer implements MediaPlayer{
//         play(){
//             console.log('music playing......')
//         }

//         pause(){
//             console.log("music is paused .....")
//         }

//         stop(){
//             console.log("Music is off....")
//         }

//     }

// const fahad = new MusicPlayer()

// fahad.play()



// alternative example

abstract class fahadplayer{
    play():void;
    pause():void;
    stop():void;
}


class eshu implements fahadplayer{
    play(){
        console.log('music playing....')
    }
    pause(){
        console.log("music paused.....")
    }
    stop(){
        console.log("music is off")
    }
}

const eshikaplayer = new eshu()

eshikaplayer.pause()
