

let Timage1 = document.querySelector(".item:nth-child(1) img").naturalHeight;
let Timage2 = document.querySelector(".item:nth-child(2) img").naturalHeight;
let Timage3 = document.querySelector(".item:nth-child(3) img").naturalHeight;
let Timage4 = document.querySelector(".item:nth-child(4) img").naturalHeight;
let Timage5 = document.querySelector(".item:nth-child(5) img").naturalHeight;
let p = [Timage1, Timage2, Timage3, Timage4, Timage5];
let Timage = p[0];
for (let i = 1; i < p.length; i++) {
    if (p[i] > Timage) {
        Timage = p[i];  
    }
}
document.querySelector(".carousel").style.height = `${Tclair}px`;

const slider = document.querySelector('.slider');
function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]); // D�place le premier �l�ment � la fin
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]); // D�place le dernier �l�ment au d�but
  }
}

document.addEventListener('click', activate, false);
