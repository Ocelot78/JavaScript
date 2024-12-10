let procentPF = false, wynik = 0 , operator = "" , wartosc = "", usun = false , przycisk = false ,  znak = false, liczba1 = "0" , liczba2 = "0",obliczono = false;

function przyciski(id) {
    let poleoblicz = document.getElementById("dzialanie"), wpis = poleoblicz.value, znaki = ["+","-","*",":","^","%"], polewynik = document.getElementById("wynik");
    usun = false
    przycisk = true
    if (obliczono == true && znaki.includes(id)){
        poleoblicz.value = polewynik.value + id
        operator = id;
        znak = true;
        polewynik.value = ""
    }else if (znaki.includes(id) && obliczono == false && liczba2 == "0") {
        if (znak && liczba2 == "0") {
            poleoblicz.value = wpis.slice(0, -1); 
        }
        poleoblicz.value = liczba1.toString()
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
        if (liczba1 == "0") {
            liczba1 = wartosc;
        } else {
            liczba1 += wartosc ;
        }
    } else {
        if (przycisk == true) {
            wartosc = id;
        }
        if (liczba2 == "0") {
            liczba2 = wartosc
        } else {
            liczba2 += wartosc
        }
    }
}
function usuwanie() {
    let dzialanie = document.getElementById("dzialanie"), poleusun = document.getElementById("wynik");
    liczba1 = "0"
    liczba2 = "0"
    znak = false
    usun = false
    obliczono = false
    poleusun.value = ""
    dzialanie.value = ""  
}
function CE(){
    let polewynik = document.getElementById("wynik");
    if (znak == true && liczba2 == "0"  || (znak == false)) {
        usuwanie()
    }else { 
        polewynik.value = polewynik.value.slice(0, -liczba2.length); 
        liczba2 = "0"
    }
}
function zmiennoprzecinkowe() {
    let polewynik = document.getElementById("wynik");
    let dlugosc1 = liczba1.length, dlugosc2 = liczba2.length 
    if (liczba1 === Math.floor(liczba1) && liczba2 != Math.floor(liczba2)){
        polewynik.value = wynik.toFixed(dlugosc2).toString()
    } else if (liczba2 === Math.floor(liczba2) && liczba1 != Math.floor(liczba1)){
        polewynik.value = wynik.toFixed(dlugosc1).toString()
    } else if (liczba2 === Math.floor(liczba2) && liczba1 != Math.floor(liczba1) && (liczba1 === Math.floor(liczba1) && liczba2 != Math.floor(liczba2))) {
        polewynik.value = wynik.toFixed(dlugosc1 + dlugosc2).toString()
    } else {
        polewynik.value = wynik.toString()
    }
}
function plusminus() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("wynik");

    if (znak== false  && !isNaN(liczba1)) {
        liczba1 = -liczba1 
        liczba1 = parseFloat(liczba1); 
        console.log(liczba1)
        polewynik.value = liczba1.toString()
    } else if (znak == true && !isNaN(liczba2)){
        if (operator == "+") {
            polewynik.value = -liczba2
            liczba2 = parseFloat(liczba2);
            liczba2 = -liczba2
            console.log(liczba1)
            console.log(liczba2)
        } else{
            dzialanie.value = dzialanie.value - liczba2
            liczba2 = parseFloat(liczba2);
            liczba2 = -liczba2
            if (operator == "-"){
                dzialanie.value = liczba1.toString() + "-"
                polewynik.value = liczba2.toString()
            } else {
                dzialanie.value = liczba1.toString() + operator 
            }
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
        liczba2 = "0"
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
        liczba1 = polewynik.value
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
function obliczanie() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("wynik");
    console.log(liczba1)
    console.log(liczba2)
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
        wynik = liczba1 ** liczba2
    } else if (operator == "%") {
        wynik = liczba1 % liczba2
    }
    if (isNaN(liczba1)||isNaN(liczba2)) {
        polewynik.value = "ERROR"
    } else if (operator == ":" && liczba2 == 0 ){
        dzialanie.value = ""
        polewynik.value="Nie można dzielić przez zero"
    } else if (operator == "-" && liczba2 < 0) {
        dzialanie.value = liczba1.toString() + "+" + -liczba2.toString() + "="
        zmiennoprzecinkowe()
        liczba1 = wynik
        liczba2 = "0"
        znak = false
        obliczono = true
    } else if (operator == "+" && liczba2 < 0) {
        dzialanie.value = liczba1.toString() + liczba2.toString() + "="
        zmiennoprzecinkowe()
        liczba1 = wynik
        liczba2 = "0"
        znak = false
        obliczono = true
    }else {
        dzialanie.value = liczba1.toString() + operator + liczba2.toString() + "="
        zmiennoprzecinkowe()
        liczba1 = wynik
        liczba2 = "0"
        znak = false
        obliczono = true
    }

}