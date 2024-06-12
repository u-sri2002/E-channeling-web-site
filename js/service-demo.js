// Services Categories
const serData = [
    {
        "title": "Doctor Appointments",
        "img": "Cardiologist",
    },
    {
        "title": "Online Consultation",
        "img": "Cardiologist"
    },
    {
        "title": "Medical Records Management",
        "img": "Cardiologist"
    },
    {
        "title": "Lab Test Bookings",
        "img": "Cardiologist"
    },
    {
        "title": "Pharmacy Services",
        "img": "Cardiologist"
    },
    {
        "title": "Emergency Services",
        "img": "Cardiologist"
    },
    {
        "title": "Health Packages",
        "img": "Cardiologist"
    },{
        "title": "Health Information",
        "img": "Cardiologist"
    }
];


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
            <h6 class="ser-card-title">${serCardTitle}</h6>            `;

            serCard.innerHTML = speCardFormat;

            serCardContainer.appendChild(serCard);

            j++;
        }
    }
}

servicesCardSet();