const React = document.getElementById('container-react');
const PopUpReact = document.getElementById('PopUpReact');
const Supp = document.getElementById('supp');

PopUpReact.style.display = 'none';
let supprim = false; // Bool�en initialis� correctement

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
    document.body.style.overflow = ''; // R�activer le scroll
    supprim = true; // Mettre supprim � true pour indiquer qu'il est supprim�
});
