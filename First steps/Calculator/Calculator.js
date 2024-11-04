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
    let znaki = ["+","-","*","/","^","%"]
    if (znaki.includes(id)) {
        znak = true
        operator = id
    } //else {
        //znak = false
    //}
    console.log("znak "+znak)
    
}
function usuwanie() {
    let dzialanie = document.getElementById("dzialanie");
    let poleusun = document.getElementById("Kalk");
    usun = true
    poleusun.value = ""
    dzialanie.value = ""
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
    let dzialanie = document.getElementById("dzialanie");
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
    } else if (operator == "^") {
        wynik = liczba1 ** liczba2;
    } else if (operator == "%") {
        wynik = liczba1 % liczba2
    }
    dzialanie.value = liczba1 + operator + liczba2 + "="
    polewynik.value = wynik.toString();
    console.log(wynik);
    liczba1 = wynik
    liczba2 = "empty"
    
    znak = false
}
//function oblicz_spec(id) {
//   let dzialanie = document.getElementById("dzialanie");
//    let polewynik = document.getElementById("Kalk");
//    while (liczba1 != 0 && (liczba1 != "empty")) {
//        wynik = Math.sqrt(liczba1)
//    }

//    if (liczba1 != 0 && (liczba1 != "empty")) {
//        wynik = "ERROR"
//        polewynik.value = wynik.toString();
//    } else if (id = "&radic;") {
//        wynik = Math.sqrt(liczba1)
//    }

//    dzialanie.value = id + liczba1
//    polewynik.value = wynik.toString();
//   console.log(wynik);
//    liczba1 = wynik
//    liczba2 = "empty"
//}