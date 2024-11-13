// script.js

const excuses = {
    work: [
        "My keyboard is on strike until I get a raise.",
        "I’m pretty sure my computer is catching a virus – better not risk it.",
        "The Wi-Fi is feeling shy today and refuses to connect."
    ],
    social: [
        "I promised my dog I’d teach him how to fetch.",
        "My fridge just reminded me that it’s time for a thorough clean.",
        "I’m documenting a case study on the lifespan of lazy Sundays."
    ],
    random: [
        "I need to chase down my hat – it blew away.",
        "I’ve been challenged to a thumb-wrestling competition with myself.",
        "My horoscope advised me against going out today."
    ]
};

function generateExcuse(category) {
    const categoryExcuses = excuses[category];
    const randomIndex = Math.floor(Math.random() * categoryExcuses.length);
    const excuse = categoryExcuses[randomIndex];
    document.getElementById("excuseDisplay").textContent = excuse;
}
