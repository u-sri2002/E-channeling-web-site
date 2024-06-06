// Redirect to a page (Used with 'onclick' inside HTML element)
function redirectToPage(page) {
    
    // For Github Pages (Remove for pure project)
    if (window.location.origin === "https://u-sri2002.github.io") {
        window.location.href = window.location.origin + "/E-channeling-web-site/" + page;
    
     // For local
    }else {
        window.location.href = window.location.origin + "/" + page;
    }
}


// Fill specialists cards
const speData = [
    {
        "title": "Cardiologist",
        "description": "Expert in heart health, diagnosing and treating conditions like heart disease and hypertension to ensure optimal cardiovascular function."
    },{
        "title": "Dermatologist",
        "description": "Specialist in skin health, treating acne, eczema, and skin cancers, and providing advanced skincare solutions for all skin types."
    },{
        "title": "Endocrinologist",
        "description": "Focuses on hormonal health, managing diabetes, thyroid disorders, and metabolic imbalances to maintain the body's endocrine system."
    },{
        "title": "Gastroenterologist",
        "description": "Provides care for digestive health, addressing issues like IBS, ulcers, and liver diseases, ensuring a healthy digestive tract."
    },{
        "title": "Neurologist",
        "description": "Treats brain and nervous system disorders, such as epilepsy, migraines, and Parkinson’s disease, enhancing neurological health."
    },{
        "title": "Oncologist",
        "description": "Specializes in cancer care, offering chemotherapy, radiation, and surgical treatments while supporting patients through their cancer journey."
    },{
        "title": "Psychiatrist",
        "description": "Expert in mental health, addressing disorders like depression through therapy and medication, promoting psychological well-being."
    }
];


function specialistsCardSet() {
    const speCardContainer = document.querySelector('.spe-card-container');

    for(let i = 0; i < 7; i++) {
        let speCardObj = speData[i];

        let speCardTitle = speCardObj.title;
        let speCardDesc = speCardObj.description;

        let speCard = document.createElement('div');
        speCard.classList.add('spe-card');

        let speCardFormat = `
                <img class="spe-card-img" src="./img/Cardiologist-vector.jpeg" alt="${speCardTitle}">
                <h6 class="spe-card-title">${speCardTitle}</h6>
                <p class="spe-card-desc">${speCardDesc}</p>`;

        speCard.innerHTML = speCardFormat;

        speCardContainer.appendChild(speCard);
        
    }

    let speFinalCard = document.createElement('div');
    speFinalCard.classList.add('spe-card','final-card');

    speFinalCard.innerHTML = `
        <span class="spe-more-text">See More</span>
        <img class="spe-more-icon" src="./img/see-more-arrow.svg" alt="">`;

    speCardContainer.appendChild(speFinalCard);
}

specialistsCardSet();

// Fill services cards
const serData = [
    {
        "title": "Doctor Appointments",
        "img": "Cardiologist"
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

function servicesCardSet() {
    const serCardContainer = document.querySelector('.ser-card-container');

    let j = 0;
    while(j < 8) {

        let serCardObj = serData[j];

        let serCardTitle = serCardObj.title;
        let serCardImg = serCardObj.img;

        let serCard = document.createElement('div');
        serCard.classList.add('ser-card');

        let speCardFormat = `
        <img class="ser-card-img" src="./img/${serCardImg}-vector.jpeg" alt="${serCardTitle}">
        <h6 class="ser-card-title">${serCardTitle}</h6>`;

        serCard.innerHTML = speCardFormat;

        serCardContainer.appendChild(serCard);

        j++;
    }
}

servicesCardSet();