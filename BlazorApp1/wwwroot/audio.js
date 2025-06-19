window.initAudio = () => {
    window.sounds = {
        successSound: document.getElementById("successSound"),
        loseSound: document.getElementById("loseSound"),
        defaultSound: document.getElementById("defaultSound")
    };
}

window.playSound = (soundName) => {
    if (window.sounds && window.sounds[soundName]) {
        window.sounds[soundName].currentTime = 0;
        window.sounds[soundName].play();
    }
}
