let usun = false
let przycisk = false
let liczba1 = "empty";
let liczba2 = "empty";
function przyciski(id) {
    var poleoblicz = document.getElementById("Kalk");
    usun = false
    poleoblicz.value += id
    przycisk = true
    
}
function usuwanie() {
    var poleusun = document.getElementById("Kalk")
    usun = true
    poleusun.value = ""
    //console.log(usun)

    
}
function pobieranie_liczby(id) {
    if (usun == true) {
        liczba1 = "empty";
        liczba2 = "empty";
        //console.log("reset")
    }
    if (przycisk == true) {
        wartosc = document.getElementById("Kalk").value;
        wartosc = id;
    }
    if (liczba1 == "empty") {
        liczba1 = wartosc;
    } else {
        liczba1 += wartosc ;
    }

    //console.log(usun);
    //console.log(liczba1);
    //console.log(liczba2);
}