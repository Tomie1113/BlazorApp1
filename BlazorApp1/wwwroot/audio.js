window.playSound = function (audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play().catch(e => console.warn("Audio play error:", e));
    }
}
window.initAudio = function () {
    const sounds = ["successSound", "loseSound", "defaultSound"];
    for (const id of sounds) {
        const audio = document.getElementById(id);
        if (audio) {
            audio.play().catch(() => { }); // пытаемся воспроизвести чтобы браузер дал разрешение
            audio.pause();
            audio.currentTime = 0;
        }
    }
}
window.setMusicVolume = function (vol) {
    const bg = document.getElementById("backgroundMusic");
    if (bg) bg.volume = vol;
};

window.setEffectsVolume = function (vol) {
    ["successSound", "loseSound", "defaultSound"].forEach(id => {
        const s = document.getElementById(id);
        if (s) s.volume = vol;
    });
};