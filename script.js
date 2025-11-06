// Password check untuk page1
function checkPassword(nextPage){
    const input = document.getElementById("password");
    if(!input) return;
    const pass = input.value.trim();
    if(pass === "17072025"){
        window.location = nextPage;
    } else {
        const el = document.getElementById("pw-msg");
        el.style.display = "block";
        el.style.color = "#e91e63";
        el.textContent = "Password salah — coba lagi!";
        input.focus();
    }
}

// Audio setup untuk page2
let autoAudio;
let manualAudio;

function initAudio(){
    // Autoplay audio
    autoAudio = new Audio("music/autoplay.mp3");
    autoAudio.loop = true;
    autoAudio.volume = 0.6;
    autoAudio.play().catch(()=>console.log("Autoplay diblokir browser, diam saja."));

    // Manual audio object
    manualAudio = new Audio("music/manual.mp3");
    manualAudio.loop = true;
    manualAudio.volume = 0.6;

    // Tombol play/pause manual
    window.playManualMusic = function(){
        if(manualAudio.paused){
            manualAudio.play().catch(e=>{
                console.log("Audio manual diblokir:", e);
                alert("Klik tombol sekali lagi jika audio tidak muncul.");
            });
        } else {
            manualAudio.pause();
        }
    }
}
