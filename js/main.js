// Fill specialists cards
function specialistsCardSet() {
    const speCardContainer = document.querySelector('.spe-card-container');

    if(speCardContainer) {

        for(let i = 0; i < speData.length; i++) {
            let speCardObj = speData[i];

            let speCardTitle = speCardObj.title;
            let speCardDesc = speCardObj.description;

            let speCard = document.createElement('div');
            speCard.classList.add('spe-card');
            speCard.setAttribute('onclick', `redirectToPageId('specialists.html', 'doc-table-${speCardTitle.toLowerCase()}')`);

            let speCardFormat = `
                    <img class="spe-card-img" src="./img/Cardiologist-vector.jpeg" alt="${speCardTitle}">
                    <h6 class="spe-card-title">${speCardTitle}</h6>
                    <p class="spe-card-desc">${speCardDesc}</p>
                    <img class="see-more-arrow" src="./img/see-more-arrow.svg" alt="see more">
                    `;

            speCard.innerHTML = speCardFormat;

            speCardContainer.appendChild(speCard);
            
        }
    }
}

specialistsCardSet();

// Fill services cards
function servicesCardSet() {
    const serCardContainer = document.querySelector('.ser-card-container');
    
    if(serCardContainer) {

        let j = 0;
        while(j < serData.length) {

            let serCardObj = serData[j];

            let serCardTitle = serCardObj.title;
            let serCardImg = serCardObj.img;
            let serCardId = serCardTitle.replace(/\s+/g, '');

            let serCard = document.createElement('div');
            serCard.id = serCardId;
            serCard.classList.add('ser-card');
            serCard.classList.add('ser-round');

            let speCardFormat = `
            <img class="ser-card-img" src="./img/${serCardImg}-vector.jpeg" alt="${serCardTitle}">
            <h6 class="ser-card-title">${serCardTitle}</h6>`;

            serCard.innerHTML = speCardFormat;

            serCardContainer.appendChild(serCard);

            j++;
        }
    }
}

servicesCardSet();