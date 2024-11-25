let wynik = 0 , plusminusPF = false , operator = "" , wartosc = "", usun = false , przycisk = false ,  znak = false, liczba1 = "empty" , liczba2 = "empty";
function przyciski(id) {
    let poleoblicz = document.getElementById("Kalk"), wpis = poleoblicz.value, znaki = ["+","-","*",":","^","%"]
    usun = false
    przycisk = true
    if (znaki.includes(id)) {
        if (znak) {
            poleoblicz.value = wpis.slice(0, -1); 
        }
        poleoblicz.value += id;
        operator = id;
        znak = true;
    } else {
        if (znaki.includes(id)) {
            znak = true
            operator = id; 
        } else {
            poleoblicz.value += id;
        }
    }
}
function usuwanie() {
    let dzialanie = document.getElementById("dzialanie"), poleusun = document.getElementById("Kalk");
    liczba1 = "empty"
    liczba2 = "empty"
    znak = false
    usun = false
    poleusun.value = ""
    dzialanie.value = ""  
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
function obliczanie() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("Kalk");
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
    } else if (operator == "/" && liczba2 == 0 ){
        dzialanie.value = liczba1 + operator + liczba2 + "="
        polewynik.value="Nie można dzielić przez zero"
    } else if (plusminusPF == false){
        dzialanie.value = liczba1 + operator + liczba2 + "="
        polewynik.value = wynik.toString();
        console.log(liczba1);
        console.log(liczba2);
        console.log(wynik);
        liczba1 = wynik
        liczba2 = "empty"
        znak = false
    } else if (plusminusPF == true) {
        dzialanie.value = liczba1.toString() + liczba2.toString() + "="
        polewynik.value = wynik.toString();
        console.log(liczba1);
        console.log(liczba2);
        console.log(wynik);
        liczba1 = wynik
        liczba2 = "empty"
        znak = false 
    }
}
function plusminus() {
    let polewynik = document.getElementById("Kalk");

    if (znak== false  && !isNaN(liczba1)) {
        liczba1 = -liczba1 
        liczba1 = parseFloat(liczba1); 
        console.log(liczba1)
        polewynik.value = liczba1.toString()
    } else if (znak == true && !isNaN(liczba2)){
        if (operator == "+") {
            polewynik.value = polewynik.value - liczba2
            liczba2 = parseFloat(liczba2);
            liczba2 = -liczba2
            console.log(liczba1)
            console.log(liczba2)
            polewynik.value = liczba1.toString() + liczba2.toString() 
            if (plusminusPF == false) {
                plusminusPF = true
            } else {
                plusminusPF = false
            }
        } else{
            polewynik.value = polewynik.value - liczba2
            liczba2 = parseFloat(liczba2);
            liczba2 = -liczba2
            console.log(liczba1)
            console.log(liczba2)
            polewynik.value = liczba1.toString() + operator + liczba2.toString()   
        }
    }
}
//Dodatkowe funkcje kalkulatora
function pierwiastek() {
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("Kalk");
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
    let dzialanie = document.getElementById("dzialanie"), polewynik = document.getElementById("Kalk"), suma = 1
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