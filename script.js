const colorone = document.getElementById('colorone');
const colortwo = document.getElementById('colortwo');
const bodybg = document.getElementById('bodybg');
const showdata = document.getElementById('shownvalue');

function setbgcolour(){
    bodybg.style.background = 
    `linear-gradient(to right, ${colorone.value},${colortwo.value})`;

    showdata.textContent = `linear-gradient(to right, ${colorone.value},${colortwo.value})`;
};

colorone.addEventListener('input', setbgcolour);

colortwo.addEventListener('input', setbgcolour);