const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset()

    return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
}

const LUNAR_MONTH = 29.530588853;
const getLunarAge = (date = new Date()) => {
    const percent = getLunarAgePercent(date);
    const age = percent * LUNAR_MONTH;
    return age;
}
const getLunarAgePercent = (date = new Date()) => {
    return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
}
const normalize = value => {
    value = value - Math.floor(value);
    if (value < 0)
        value = value + 1
    return value;
}

const getLunarPhase = (date = new Date()) => {
    const age = getLunarAge(date);
    if (age < 1.84566)
        return "New";
    else if (age < 5.53699)
        return "Waxing Crescent";
    else if (age < 9.22831)
        return "First Quarter";
    else if (age < 12.91963)
        return "Waxing Gibbous";
    else if (age < 16.61096)
        return "Full";
    else if (age < 20.30228)
        return "Waning Gibbous";
    else if (age < 23.99361)
        return "Last Quarter";
    else if (age < 27.68493)
        return "Waning Crescent";
    return "New";
}

const getLunarPhaseIcons = (date = new Date()) => {
    const age = getLunarAge(date);
    if (age < 1.84566)
        return "🌑";
    else if (age < 5.53699)
        return "🌒";
    else if (age < 9.22831)
        return "🌓";
    else if (age < 12.91963)
        return "🌔";
    else if (age < 16.61096)
        return "🌕";
    else if (age < 20.30228)
        return "🌖";
    else if (age < 23.99361)
        return "🌗";
    else if (age < 27.68493)
        return "🌘";
    return "New 🌑";
}

module.exports = {getLunarPhaseIcons, getLunarPhase}