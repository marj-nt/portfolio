// Changes the description under my sprite every 3 seconds

function changeTagline(){

    var words = [
        'Technical Designer.', 'Creative.', 'Techreator.'
    ], i = 0;
    
    var taglineNew = $('#tagline')

    // video

    var video = document.getElementById('video');
// var source = document.createElement('source');

// source.setAttribute('src', 'images/index/phone-1.mp4');

// video.appendChild(source);
// video.play();

//     var videos = [ 
//         'images/index/phone-1.mp4', 'images/index/phone-2.mp4', 'images/index/phone-3.mp4',
//     ];

    // setInterval(function(){

    //     taglineNew.fadeOut(function(){
    //         taglineNew.html(words[i]).fadeIn();
    //     });

    //     i=(i+1)%words.length;
        
    // }, 3250);

    // video.pause();

    // source.setAttribute('src', 'images/index/phone-2.mp4'); 

    video.load();
    video.play();
    

    setInterval(function(){

        $('#tagline').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
            console.log('words changed')
        });

        video.currentTime = (i+1)*3;
        
       // 2 seconds
    }, 3000);

}

changeTagline();