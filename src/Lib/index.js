
const now = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = days[now.getDay()];
const month = months[now.getMonth()];

function tdate(args = []) {
    if (args.length == 0) {
        const WeekDay = require("./Calendar/WeekDay").getWeekThelemicEmoji(day)
        const moonPharse = require("./Calendar/MoonPharse").getLunarPhaseIcons()
        const yearThelemic = require("./Calendar/ThelemicYear").getThelemicYear(now.getFullYear())
        const sunSign = require("./Calendar/SunSign").getSunSignEmoji(month, now.getDay())
        const moonSign = require("./Calendar/MoonSign").getMoonSignEmoji()
        console.log(`Anno ${yearThelemic}, Sol 🌞 in ${sunSign}, Dies ${WeekDay}, Luna ${moonPharse} in ${moonSign}, aerae legis `)
    } else {
        switch (args[0]) {
            case "--noIcon": case "-n": 
                noIcon(args)
                break
            case "-d": case "--day":
                console.log(`Dies ${require("./Calendar/WeekDay").getWeekThelemicEmoji(day)}`)
                break;
            case "-m": case "--moon":
                console.log(`Luna ${require("./Calendar/MoonPharse").getLunarPhaseIcons()} in ${require("./Calendar/MoonSign").getMoonSignEmoji()}`)
                break
            case "-s": case "--sun":
                console.log(`Sol 🌞 in ${require("./Calendar/SunSign").getSunSignEmoji(month, now.getDay())}`)
                break
            case "-y": case "--year":
                console.log(`Anno ${require("./Calendar/ThelemicYear").getThelemicYear(now.getFullYear())}`)
                break
            case "-h": case "--help": 
            default:
                help()
                break;
        }
    }
}

function noIcon(args){
    if(args[1] == undefined){
        const WeekDay = require("./Calendar/WeekDay").getWeekThelemic(day)
        const moonPharse = require("./Calendar/MoonPharse").getLunarPhase()
        const yearThelemic = require("./Calendar/ThelemicYear").getThelemicYear(now.getFullYear())
        const sunSign = require("./Calendar/SunSign").getSunSign(month, now.getDay())
        const moonSign = require("./Calendar/MoonSign").getMoonSign()
        console.log(`Anno ${yearThelemic}, Sol  in ${sunSign}, Dies ${WeekDay}, Luna (${moonPharse}) in ${moonSign}, aerae legis `)
    }
    else{
        switch (args[1]) {
            case "-d": case "--day":
                console.log(`Dies ${require("./Calendar/WeekDay").getWeekThelemic(day)}`)
                break;
            case "-m": case "--moon":
                console.log(`Luna (${require("./Calendar/MoonPharse").getLunarPhase()}) in ${require("./Calendar/MoonSign").getMoonSign()}`)
                break
            case "-s": case "--sun":
                console.log(`Sol in ${require("./Calendar/SunSign").getSunSign(month, now.getDay())}`)
                break
            case "-y": case "--year":
                console.log(`Anno ${require("./Calendar/ThelemicYear").getThelemicYear(now.getFullYear())}`)
                break
            case "-h": case "--help": 
            default:
                help()
                break;
        }
    }
}

function  help() {
    console.log(`Arguments:
    -n or --noIcon use this if want get without emoji, after her you can use a another argument
    -d or --day to get actual day
    -m or --mon get the moon phase and sign
    -s or --sun you can get sun sign 
    -y or -year get the year thelemic
    `)
}
module.exports = { tdate }