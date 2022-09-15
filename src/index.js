const process = require("process")

const now = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const day = days[ now.getDay() ];
const month = months[ now.getMonth() ];

(function main(){
    const args = process.argv.slice(2)
    if(args.length ==  0 ){
        const WeekDay  = require("./Calendar/WeekDay").getWeekThelemic(day)
        const moonPharse = require("./Calendar/MoonPharse").getLunarPhaseIcons()
        const yearThelemic = require("./Calendar/ThelemicYear").getThelemicYear(now.getFullYear())
        console.log(`Anno ${yearThelemic}, Sol 🌞 in, Dies ${WeekDay}, Luna ${moonPharse} in, aerae legis `)        
    }else{
        console.log(`Esses args infomados: ${args}`)
    }
})()