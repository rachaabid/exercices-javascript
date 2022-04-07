var tab = [];
for (i = 0; i<6; i++) {
  tab[i] = prompt("entrez un nombre");
}

function somme(){
var s = ' ';
for (i = 0; i<tab.length; i++){
  s += tab[i] ;
  return s;
}
}
alert("mon tableau est " + tab + 
"\nla somme est " + somme());