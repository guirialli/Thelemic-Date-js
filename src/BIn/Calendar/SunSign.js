function getSunSign(month, day) {
    switch (month) {
        case "January": return (day < 20)? "Capricornius" : "Aquarius"
        case "February": return (day < 19)? "Aquarius" : "Pisces"
        case "March": return (day <  20)? "Pisces" : "Aries"
        case "April": return (day < 20)? "Aries" : "Taurus"
        case "May": return (day < 21)? "Taurus" : "Gemini"
        case "June": return (day < 21)? "Gemini" : "Cancer"
        case "July": return (day < 23)? "Cancer" : "Leo"
        case "August": return (day < 22)? "Leo" : "Virgem"
        case "September": return (day < 23)? "Virgem" : "Libra"
        case "October": return (day < 23)? "Libra" :"Escorpius"
        case "November": return (day < 22)? "Escorpius": "Sagitarius"
        case "December": return (day < 22)? "Sagitarius" : "Capricornius"
        default:
            break;
    }
}

function getSunSignEmoji(month, day) {
    switch (month) {
        case "January": return (day < 20)? "Capricornius ♑" : "Aquarius ♒"
        case "February": return (day < 19)? "Aquarius ♒" : "Pisces ♓"
        case "March": return (day <  20)? "Pisces ♓" : "Aries ♈"
        case "April": return (day < 20)? "Aries ♈" : "Taurus ♉"
        case "May": return (day < 21)? "Taurus ♉" : "Gemini ♊"
        case "June": return (day < 21)? "Gemini ♊" : "Cancer ♋"
        case "July": return (day < 23)? "Cancer ♋" : "Leo ♌"
        case "August": return (day < 22)? "Leo ♌" : "Virgem ♍"
        case "September": return (day < 23)? "Virgem ♍" : "Libra ♎"
        case "October": return (day < 23)? "Libra ♎" :"Escorpius"
        case "November": return (day < 22)? "Escorpius ♏": "Sagitarius ♐"
        case "December": return (day < 22)? "Sagitarius ♐" : "Capricornius ♑"
        default:
            break;
    }
}

module.exports = {getSunSign, getSunSignEmoji}