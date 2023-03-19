/* PSEUDO-CODE:
JS
L'utilisateur click sur une image à droit
En fonction du choix de l'image , l'image s'affiche en grand à gauche

JS
Récupérer les elements neccéssaires
ajouter un ecouteur d'element(click sur les petits images)
 une redirection de parametre d'une image 
 */

//  recuperer les elements grande image et petites images
 let grandImage = document.querySelector('div.bigZone img');
 let smallImages = document.querySelectorAll('.img_small_container img');

//  console.log(grandImage);
//  console.log(smallImages);

// add eventEcouteur dans chaque petite image et ajouter le bordure en cliquant
 for(let i=0;i<smallImages.length;i++){
     

     smallImages[i].addEventListener('click',function(){
        grandImage.src = smallImages[i].src ;
        for(let i=0;i<smallImages.length;i++){
            smallImages[i].style.borderColor = 'transparent';
        }
        smallImages[i].style.border = "2px solid red";
        let desc = document.querySelector('.bigZone p');
        desc.innerHTML = smallImages[i].alt;

     })
    
 } 