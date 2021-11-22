const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



function data(created) {
    let mese = created.substring(5,7);
    const d = new Date;
    let m = d.getMonth() + 1;
    let date = parseInt(m) - parseInt(mese);
    let vDate = date + " mesi fa" ;
    return vDate;
}


function profileImage(name, image) {
    let nome = name.split(" ");
    let content = "";
    if (image == null) {
        let imageName = nome[0][0].toUpperCase() + nome[1][0].toUpperCase(); 
        content = `<div class="profile-pic-default">${imageName}</div>`
    }
    else {
        content = `<img class="profile-pic" src="${image}" alt="${name}">`
    }
    return content;
}
function creaPost(i){
    const{content,media,likes,created} = posts[i];
    let name = posts[i].author.name;
    let image = posts[i].author.image;
    let date = data(created);

    let immagineProfile = profileImage(name, image);
    cont = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${immagineProfile}        
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src=${media} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${parseInt(i)+1}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${parseInt(i)+1}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div> `
    return cont;
}


// function aumentaLike(lunghezza){
    
// }
let contenuto = "";
let container = document.getElementById("container");
for (let i in posts) {
    contenuto += creaPost(i);
    
}
container.innerHTML = contenuto;
// aumentaLike(posts);

for (let j in posts) {
    j= parseInt(j) +1;
    console.log(j);
    let v = "like-counter-"+ j;
    let contatore = document.getElementById(v);
    let a = 'a[data-postid=' + j.toString() + ']';
    let bottone = document.querySelector(a);
    bottone.addEventListener("click", function(event) {
        event.preventDefault();
        let newContatore = parseInt(contatore.textContent) + 1;
        contatore.innerHTML = newContatore;
        bottone.classList.add("like-button--liked");
    })

}

 