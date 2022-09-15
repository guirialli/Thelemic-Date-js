function getWeekThelemic(day) {
    switch (day) {
        case "Sunday":
            return "Sun"
        case "Monday":
            return "Mon"
        case "Tuesday":
            return "Mars"
        case "Wednesday":
            return "Mercury"
        case "Thursday":
            return "Jupiter"
        case "Friday":
            return "Venus"
        case "Saturday":
            return "Saturn"
        default:
            return null
    }
}

module.exports ={ getWeekThelemic}