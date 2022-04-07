var x = Math.random()*10;
var i = '';
do {
  var y = prompt("entrez un nombre");
  if (y<x) {
    alert("le nombre y est plus petit");
  }
  else if (y>x) {
    alert("le nombre y est plus grand");}
  else {
    alert("le nombre est trouvé en " + i, "coups");
  }
  i++;
}
while (x != y)


