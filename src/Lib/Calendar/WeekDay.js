function getWeekThelemic(day) {
    const planetaryDay = ["Solis", "Luna", "Mars", "Mercurius", "Luppiter", "Venus", "Saturnia"]
    return planetaryDay[day]
}

function getWeekThelemicEmoji(day) {
    const planetaryDay = ["Solis ☼", "Luna ☾", "Mars ♂", "Mercurius ☿", "Luppiter ♃", "Venus ♀", "Saturnia ♄"]
    return planetaryDay[day]
}

module.exports ={ getWeekThelemic, getWeekThelemicEmoji}