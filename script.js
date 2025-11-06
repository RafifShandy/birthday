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

// Autoplay aman di page2
function initAudio(){
    let autoAudio = new Audio("music/autoplay.mp3");
    autoAudio.loop = true;
    autoAudio.play().catch(()=>console.log("Autoplay diblokir browser, diam saja."));
    
    window.playManualMusic = function(){
        let manualAudio = new Audio("music/manual.mp3");
        manualAudio.loop = true;
        manualAudio.play().catch(()=>console.log("Audio manual diblokir."));
    }
}
