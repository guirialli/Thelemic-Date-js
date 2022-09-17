function getWeekThelemic(day) {
    switch (day) {
        case "Sunday":
            return "Solis"
        case "Monday":
            return "Luna"
        case "Tuesday":
            return "Mars"
        case "Wednesday":
            return "Mercurius"
        case "Thursday":
            return "Luppiter"
        case "Friday":
            return "Venus"
        case "Saturday":
            return "Saturnia"
        default:
            return null
    }
}

function getWeekThelemicEmoji(day) {
    switch (day) {
        case "Sunday":
            return "Solis ☼"
        case "Monday ☾":
            return "Luna"
        case "Tuesday":
            return "Mars ♂"
        case "Wednesday":
            return "Mercurius ☿"
        case "Thursday":
            return "Luppiter ♃"
        case "Friday":
            return "Venus ♀"
        case "Saturday":
            return "Saturnia ♄"
        default:
            return null
    }
}

module.exports ={ getWeekThelemic, getWeekThelemicEmoji}