const containerElement = document.querySelector('#container');


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

posts.forEach((calogero, index )=> {

    let italianDate = calogero.created.split('-').reverse().join('-')

    
    containerElement.innerHTML +=
    `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${calogero.author.image}" alt="Phil Mangione">                   
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${calogero.author.name}</div>
                    <div class="post-meta__time">${italianDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${calogero.content}</div>
        <div class="post__image">
            <img src="${calogero.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="${calogero.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${calogero.id}" class="js-likes-counter">${calogero.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `

    const postMetaElement = document.querySelectorAll('.post-meta__icon');

    if (calogero.author.image == null) {
        postMetaElement[index].removeChild;
        postMetaElement[index].innerHTML = 
        `
        <div class="profile-pic-default">
            <span>LF</span>
        </div>
        `
    }
    
})



const likesButtonElement = document.querySelectorAll('.like-button');

likesButtonElement.forEach(function(bottone) {
    
    bottone.addEventListener("click", () => {
        const postId = bottone.dataset.postid; 

        let likesNumberElement = document.querySelector(`#like-counter-${postId}`);
        const readi = bottone.classList.contains('like-button--liked')

        console.log(likesNumberElement.innerText);

        if (readi) {

            bottone.classList.remove('like-button--liked');

            likesNumberElement.innerText --;

        } else {

            bottone.classList.add('like-button--liked');

            likesNumberElement.innerText ++;
            

        }

    
    })
})

