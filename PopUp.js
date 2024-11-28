const React = document.getElementById('container-react');
const PopUpReact = document.getElementById('PopUpReact');
const Supp = document.getElementById('supp');

PopUpReact.style.display = 'none';
let supprim = false; // Booléen initialisé correctement

React.addEventListener('click', function () {
    if (PopUpReact.style.display === 'none' || PopUpReact.style.display === '' || supprim === true) {
        PopUpReact.style.display = 'block'; 
        document.body.style.overflow = 'hidden'; 
        supprim = false; 
    } else {
        PopUpReact.style.display = 'none'; 
        document.body.style.overflow = ''; 
    }
});

Supp.addEventListener('click', function () {

    PopUpReact.style.display = 'none';
    document.body.style.overflow = ''; // Réactiver le scroll
    supprim = true; // Mettre supprim à true pour indiquer qu'il est supprimé
});
