/*d = new Date();
document.write(d.toLocaleDateString() + ' - ' + d.toLocaleTimeString() + '');*/

//affichage de l'heure et la date actuelle
var date = new Date();
var heure = date.getHours();
var minute = date.getMinutes();
var seconde = date.getSeconds();
annee = date.getFullYear();
moi = date.getMonth();
mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
j = date.getDate();
jour = date.getDay();
jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
h = date.getHours();
if (h < 10) { h = "0" + h; }
m = date.getMinutes();
var f = function() {
    date = new Date;
    annee = date.getFullYear();
    moi = date.getMonth();
    mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
    j = date.getDate();
    jour = date.getDay();
    jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    h = date.getHours();
    if (h < 10) { h = "0" + h; }
    m = date.getMinutes();
    if (m < 10) { m = "0" + m; }
    s = date.getSeconds();
    if (s < 10) { s = "0" + s; }
    document.getElementById("horloge").textContent = '' + jours[jour] + ' ' + j + ' ' + mois[moi] + ' ' + annee + ' ' + h + ':' + m + ':' + s;
    setTimeout(ff, 1000);
}
setTimeout(f, 1000);

//affichage de la saison en fonction du mois
date = new Date();
mois = new Array(00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11);
var moisCourant = date.getMonth();

function change(moisCourant) {

    if (moisCourant == 06 || moisCourant == 07 || moisCourant == 08) {

        document.getElementById("dateC").innerHTML = "HIVER";

    } else {
        document.getElementById("dateC").innerHTML = "ETE";

    }

}
change(moisCourant);