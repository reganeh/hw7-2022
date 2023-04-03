window.addEventListener("load", function() {
    console.log("Good job opening the window");
  
    // initialize the video element and turn off autoplay and turn off looping
    var video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;

    // video.load();
  
    // Play the video and update the volume information.
    document.getElementById("play").onclick = function() {
      video.play();
      document.querySelector('#slider').innerHTML = video.volume*100 + '%';
    };
  
    // function setVolume() {
    //   var volume = document.getElementById("slider").value;
    //   video.volume = volume / 100;
    //   document.getElementById("volume").innerHTML = volume;
    // }
  
    // pause the video
    document.getElementById("pause").onclick = function() {
      video.pause();
    };
  
    // Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
    const slowButton = document.querySelector("#slower");
    let currentSpeed = 1;
  
    slowButton.addEventListener("click", () => {
      currentSpeed -= 0.1;
      video.playbackRate = currentSpeed;
      console.log(`New speed: ${currentSpeed}`);
    });
  });

 // Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down.
    const speedUpButton = document.querySelector("#faster");
    let fastSpeed = 1;


    speedUpButton.addEventListener("click", () => {
        fastSpeed += 0.1;
        video.playbackRate = fastSpeed;
        console.log(`Fast speed: ${fastSpeed}`);
    });

 // Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
 const advanceButton = document.querySelector("#skip");

 advanceButton.addEventListener("click", () => {
   const videoLength = video.duration;
   const currentLocation = video.currentTime;
   let newLocation = currentLocation + 10;
   
   if (newLocation >= videoLength) {
     newLocation = 0;
   }
   
   video.currentTime = newLocation;
   console.log(`New location: ${newLocation}`);
 });

 // Mute/unmute the video and update the text in the button.
 const muteButton = document.querySelector("#mute");

 muteButton.addEventListener("click", () => {
   if (video.muted) {
     video.muted = false;
     document.querySelector('#mute').textContent = 'Mute';
   } else {
     video.muted = true;
     document.querySelector('#mute').textContent = 'Unmute';
   }
 });

 // Change the volume based on the slider and update the volume information.
 video.volume = document.querySelector('#slider').value/100;
 document.querySelector('#slider').innerHTML = video.volume*100 + '%';


 // Utilize the existing oldSchool class on the video element
 const oldSchoolButton = document.querySelector("#vintage");

 oldSchoolButton.className = 'oldSchool'


 // Remove the oldSchool class from the video.
 const originalButton = document.querySelector("#orig");
 oldSchoolButton.className = 'video'





window.addEventListener("load", function() {
    var video = document.getElementByIdS("player1");
    console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// // initialize the video element and turn off autoplay and turn off looping
// var video = document.createElementById("player1");
// video.autoplay = false;
// video.loop = false;
// video.load();


// // Play the video and update the volume information.  
// document.getElementById('play').onclick = function () {
//     video.play();
// };

// function setVolume() {
//     var volume = document.getElementById("slider").value;
//     video.volume = volume / 100;
//     document.getElementById("volume").innerHTML = volume;
//   }

// // pause the video 
// document.getElementById('pause').onclick = function () {
//     video.pause();
// };

// // Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  

// const slowButton = document.querySelector('#slower');
// let currentSpeed = 1;

// slowButton.addEventListener('click', () => {
//   currentSpeed -= 0.1;
//   video.playbackRate = currentSpeed;
//   console.log(`New speed: ${currentSpeed}`);
// });