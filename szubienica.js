var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugoscHasla = haslo.length;
var hasloZasloniete = "";
var iloscBledow = 0;

for (i = 0; i < dlugoscHasla; i++) {
    if (haslo.charAt(i) == " ") hasloZasloniete = hasloZasloniete + " ";
    else hasloZasloniete = hasloZasloniete + "-";
}

function wypiszHaslo() {
    document.getElementById("plansza").innerHTML = hasloZasloniete;
}

window.onload = start;
var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start() {
    var trescDiva = "";

    for (i = 0; i <= 34; i++) {
        var element = "lit" + i;
        trescDiva = trescDiva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) trescDiva = trescDiva + '<div style="clear:both;"></div>'
    }
    document.getElementById("alfabet").innerHTML = trescDiva;
    wypiszHaslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr) {

    var trafiona = false;

    for (i = 0; i < dlugoscHasla; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            hasloZasloniete = hasloZasloniete.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
        if (trafiona == true) {
            var element = "lit" + nr;
            document.getElementById(element).style.background = "#003300";
            document.getElementById(element).style.color = "#00C000";
            document.getElementById(element).style.border = "3px solid #00C000";
            document.getElementById(element).style.cursor = "default";
        }
        else {
            var element = "lit" + nr;
            document.getElementById(element).style.background = "#330000";
            document.getElementById(element).style.color = "red";
            document.getElementById(element).style.border = "3px solid red";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute("onclick",";");
            iloscBledow++;
            var obraz = "img/s" + iloscBledow + ".png";
            document.getElementById("szubienica").innerHTML = '<img src ="' + obraz + '">';
        }
        wypiszHaslo();
// wygrana
if (haslo == hasloZasloniete)
document.getElementById("alfabet").innerHTML = " wygrana " + haslo + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
// przegrana
if (iloscBledow>=9)
document.getElementById("alfabet").innerHTML = " przegrana "  +""+ '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}