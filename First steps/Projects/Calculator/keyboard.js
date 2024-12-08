document.addEventListener("keydown", (event) => {
    let klawisz = event.key;
    console.log(klawisz);
    const klawisze = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "=", "Enter", "Backspace"];
    if (klawisze.includes(klawisz)) {
        let przycisk;
        if (klawisz === "Enter") {
            przycisk = document.getElementById("=");
        } else if (klawisz === "Backspace") {
            przycisk = document.getElementById("usun2");
        } else {
            przycisk = document.getElementById(klawisz);
        }
        if (przycisk) {
            przycisk.click();
        } else {
            console.warn(`Brak elementu o id: ${klawisz}`);
        }
    }
});