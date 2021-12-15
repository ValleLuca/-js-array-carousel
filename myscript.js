const imgArr = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const titoloArr = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const paragrafoArr = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let cont = 0;
let imgGrandi = '';

for(let isx = 0; isx < imgArr.length; isx++)
{
    imgGrandi += `
    <div class="imgFunction" id="item-${isx+1}">
        <img class="imgFunction" src="${imgArr[i]}">
    </div>
    `;
}

let imgGrandi = document.querySelector('img-grandi');
imgGrandi.innerHTML = img-grandi;

