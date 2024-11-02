let usun = false
let przycisk = false
let znak = false
let liczba1 = "empty";
let liczba2 = "empty";
let wartosc = ""
let operator = ""
let wynik = 0

function przyciski(id) {
    let poleoblicz = document.getElementById("Kalk");
    usun = false
    poleoblicz.value += id
    przycisk = true
    let znaki = ["+","-","*","/"]
    if (znaki.includes(id)) {
        znak = true
        operator = id
    } //else {
        //znak = false
    //}
    console.log("znak "+znak)
    
}
function usuwanie() {
    let poleusun = document.getElementById("Kalk");
    usun = true
    poleusun.value = ""
    //console.log(usun)

    
}
function pobieranie_liczby(id) {
    if (usun == true) {
        liczba1 = "empty";
        liczba2 = "empty";
        //console.log("reset")
        znak = false
        usun = false
    }

    //wartosc = document.getElementById("Kalk").value;

    if (znak == false) {
        if (przycisk == true) {
            wartosc = id;
        }
        if (liczba1 == "empty") {
            liczba1 = wartosc;
        } else {
            liczba1 += wartosc ;
        }
    } else {
        if (przycisk == true) {
            wartosc = id;
        }
        if (liczba2 == "empty") {
            liczba2 = wartosc
        } else {
            liczba2 += wartosc
        }
    }
 

    //console.log(usun);
    console.log("liczba1 " +liczba1);
    console.log("liczba2 " +liczba2);
}
function obliczanie() {
    let polewynik = document.getElementById("Kalk");
    liczba1 = parseFloat(liczba1);
    liczba2 = parseFloat(liczba2);
    if (operator == "+"){
        wynik = liczba1 + liczba2;
    } else if (operator == "-") {
        wynik = liczba1 - liczba2;
    } else if (operator == "*") {
        wynik = liczba1 * liczba2;
    } else if (operator == "/") {
        wynik = liczba1 / liczba2;
    }   
    polewynik.value = wynik.toString();
    console.log(wynik);
}