let procentPF = false, wynik = 0 , plusminusPF = false , operator = "" , wartosc = "", usun = false , przycisk = false ,  znak = false, liczba1 = "empty" , liczba2 = "empty",obliczono = false;

function przyciski(id) {
    let poleoblicz = document.getElementById("dzialanie"), wpis = poleoblicz.value, znaki = ["+","-","*",":","^","%"], polewynik = document.getElementById("wynik");
    
    usun = false
    przycisk = true
    if (znaki.includes(id) && obliczono == false && liczba2 == "empty") {
        console.log(liczba2)
        if (znak && liczba2 == "empty") {
            poleoblicz.value = wpis.slice(0, -1); 
        }
        poleoblicz.value = polewynik.value
        poleoblicz.value += id;
        operator = id;
        znak = true;
        polewynik.value = ""
    } else {
        if(znaki.includes(id)|| poleoblicz.value.includes("=")) {
        } else{
            let dlugosc1 = liczba1.length, dlugosc2 = liczba2.length 
            if (dlugosc1 > 20 && znak == false) {
                alert("Liczba może mieć maksymalnie 20 znaków")
            } else if (dlugosc2 > 20 && znak == true){
                alert("Liczba może mieć maksymalnie 20 znaków")
            } else {
                polewynik.value += id;
            }

        }
    }
}
function pobieranie_liczby(id) {
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
}
function usuwanie() {
    let dzialanie = document.getElementById("dzialanie"), poleusun = document.getElementById("wynik");
    liczba1 = "empty"
    liczba2 = "empty"
    znak = false
    usun = false
    plusminusPF = false
    obliczono = false
    poleusun.value = ""
    dzialanie.value = ""  
}
function CE(){
    let dzialanie = document.getElementById("dzialanie"), poleusun = document.getElementById("wynik");
    if (znak == true && liczba2 == "empty"  || (znak == false)) {
        usuwanie()
    }else { 
        dzialanie.value = dzialanie.value.slice(0, -liczba2.length); 
        liczba2 = "empty"
    }
}
function obliczanie() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("wynik");
    let dlugosc1 = liczba1.length, dlugosc2 = liczba2.length 
    liczba1 = parseFloat(liczba1);
    liczba2 = parseFloat(liczba2);
    if (operator == "+"){
        wynik = liczba1 + liczba2;
    } else if (operator == "-") {
        wynik = liczba1 - liczba2;
    } else if (operator == "*") {
        wynik = liczba1 * liczba2;
    } else if (operator == ":") {
        wynik = liczba1 / liczba2;
    } else if (operator == "^") {
        wynik = liczba1 ** liczba2;
    } else if (operator == "%") {
        wynik = liczba1 % liczba2
    }
    if (isNaN(liczba1)||isNaN(liczba2)) {
        polewynik.value = "ERROR"
    } else if (operator == ":" && liczba2 == 0 ){
        polewynik.value="Nie można dzielić przez zero"
    } else if (plusminusPF == false){
        dzialanie.value = liczba1 + operator + liczba2 + "="
        if (liczba1 === Math.floor(liczba1) && liczba2 != Math.floor(liczba2)){
            polewynik.value = wynik.toFixed(dlugosc1).toString()
        } else if (liczba2 === Math.floor(liczba2) && liczba1 != Math.floor(liczba1)){
            polewynik.value = wynik.toFixed(dlugosc2).toString()
        } else {
            polewynik.value = wynik.toFixed(parseFloat(dlugosc1) + parseFloat(dlugosc2)).toString()
        }
        liczba1 = wynik;
        liczba2 = "empty";
        znak = false;
    } else if (plusminusPF == true) {
        dzialanie.value = liczba1.toString() + liczba2.toString() + "="
        if (liczba1 === Math.floor(liczba1) && liczba2 != Math.floor(liczba2)){
            polewynik.value = wynik.toFixed(liczba2.length).toString()
        } else if (liczba2 === Math.floor(liczba2) && liczba1 != Math.floor(liczba1)){
            polewynik.value = wynik.toFixed(liczba1.length).toString()
        } else {
            polewynik.value = wynik.toFixed(liczba1.length + liczba2.length).toString()
        }
        liczba1 = wynik;
        liczba2 = "empty";
        znak = false ;
    }
    obliczono = true
}
function plusminus() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("wynik");

    if (znak== false  && !isNaN(liczba1)) {
        liczba1 = -liczba1;
        liczba1 = parseFloat(liczba1); 
        console.log(liczba1)
        dzialanie.value = liczba1.toString()
    } else if (znak == true && !isNaN(liczba2)){
        if (operator == "+") {
            dzialanie.value = dzialanie.value - liczba2
            liczba2 = parseFloat(liczba2);
            liczba2 = -liczba2
            dzialanie.value = liczba1.toString() + "-"
            if (plusminusPF == false) {
                plusminusPF = true
            } else {
                plusminusPF = false
            }
        } else{
            dzialanie.value = dzialanie.value - liczba2
            liczba2 = parseFloat(liczba2);
            liczba2 = -liczba2
            dzialanie.value = liczba1.toString() + operator + liczba2.toString()   
        }
    }
}
function pierwiastek() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("wynik");
    liczba1 = parseFloat(liczba1); 
    console.log(liczba1);   
    if (isNaN(liczba1) || liczba1 <= 0 ) {
        polewynik.value = "ERROR"
    } else {
        wynik = Math.sqrt(liczba1)
        liczenie = true
        polewynik.value = wynik.toString();
        dzialanie.value = "\u221A" + liczba1
        liczba1 = wynik
        liczba2 = "empty"
    }

}   
function silnia() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("wynik"), suma = 1
    liczba1 = parseFloat(liczba1); 
    console.log(liczba1);  
    if (isNaN(liczba1) || liczba1 <= 0 || !Number.isInteger(liczba1)) {
        polewynik.value = "ERROR"
    } else {
        for (let i = 1; i <= liczba1; i++) {
            suma *= i
        }
        polewynik.value = suma.toString();
        dzialanie.value = liczba1+ "!"
    }
}
function procent() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("wynik")
    if (isNaN(liczba1)){
        polewynik.value="ERROR"
    } else if (znak== false  && !isNaN(liczba1)) {
        liczba1 = parseFloat(liczba1); 
        liczba1 = liczba1/100
        dzialanie.value = liczba1.toString()
    } else{
        liczba2 = parseFloat(liczba2);
        dzialanie.value = dzialanie.value - liczba2
        liczba2 = liczba2/100
        dzialanie.value = liczba1.toString() + operator + liczba2.toString()   
    }
}