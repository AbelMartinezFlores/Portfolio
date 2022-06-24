function showModal(title, image_src, image_alt, text) {

    let div = document.createElement('div');
    div.classList.add('modal-container');

    div.innerHTML = 
    `
        <div class="modal">
            <h1 class="modal__title">${title}</h1>
            <div class="modal__content">
                <img class="modal__image" src="${image_src}" alt="${image_alt}">
                    <p class="modal__text">${text}</p>
            </div>
            <a href="#m2-c" class="link-2" onClick="document.querySelector('.modal-container').remove();"></a>
        </div>
    `;

    document.body.appendChild(div);
    return false;
}

/*
<div class="modal-container">
    <div class="modal">
        <h1 class="modal__title">${title}</h1>
        <div class="modal__content">
            <img class="modal__image" src="${image_src}" alt="${image_alt}">
                <p class="modal__text">${text}</p>
        </div>
        <a href="#m2-c" class="link-2"></a>
    </div>
</div>
*/