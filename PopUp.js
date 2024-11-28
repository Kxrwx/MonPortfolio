const React = document.getElementById('container-react');
const PopUpReact = document.getElementById('PopUpReact');
const Supp = document.getElementById('supp');

let supprim = false; 

React.addEventListener('click', function () {
    if (PopUpReact.style.display === 'none' || PopUpReact.style.display === '' || supprim === true) {
        PopUpReact.style.display = 'block'; 
        PopUpReact.style.opacity = '1';
        document.body.style.overflow = 'hidden'; 
        supprim = false; 
    } else {
        PopUpReact.style.display = 'none'; 
        PopUpReact.style.opacity = '0';
        document.body.style.overflow = ''; 
    }
});

Supp.addEventListener('click', function () {

    PopUpReact.style.display = 'none';
    document.body.style.overflow = ''; 
    supprim = true; 
});
