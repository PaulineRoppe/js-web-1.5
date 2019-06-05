
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

//importe les images du fichier
import imgs from "./img/*.jpg";

//modifie le style css
var cats = document.querySelector("#cat");
cats.style.height="500px";
cats.style.width="500px";
cats.style.objectFit="cover";

//
let i=2;
document.getElementById("cat").src = imgs['cat'+1];

//fait défiler les 12 images avec une intervale de 5 secondes
//et recommence quand la boucle est finie
setInterval( function(){
  document.getElementById("cat").src = imgs['cat'+i];
   i ++;
  if(i > 12){
    i = 1;
  }
}, 5000);
