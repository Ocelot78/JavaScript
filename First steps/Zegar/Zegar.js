function mijanie() //definiowanie funkcji
{
    var dzisiaj = new Date(); //Pobieranie daty z czasu lokalnego klienta
    var dzien = dzisiaj.getDate(); //Pobieranie dnia za pomocą funkcji .getDate
    var miesiac = dzisiaj.getMonth(); //Pobieranie miesiąca za pomocą funkcji .getMonth
    var rok = dzisiaj.getFullYear(); //Pobieranie roku np.:(2024) za pomocą funkcji .getFullYear
    
    var godzina = dzisiaj.getHours(); //Pobieranie Godzin za pomoca funkcji .getHours
    if (godzina<10) godzina = "0"+godzina;
    var minuta = dzisiaj.getMinutes(); //Pobieranie minut za pomoca funkcji .getMinutes
    if (minuta<10) minuta = "0"+minuta;
    var sekunda = dzisiaj.getSeconds(); //Pobieranie sekundy za pomoca funkcji .getSeconds
    if (sekunda<10) sekunda = "0"+sekunda;

    //Tablica z nazwami miesiecy
    var miesiace = ["Styczeń","Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień","Październik", "Listopad", "Grudzień"]
    miesiac = miesiace[miesiac]
    document.getElementById("czas").innerHTML = 
    dzien + "/" + miesiac + "/" + rok + " | " + godzina + "/" + minuta + "/" + sekunda ; //wypisyanie czasu do html

    setTimeout("mijanie()",1000) //czas w milisekundach i wykonywanie funkcji co sekunde

}
