function transformInRoman(num=0){
    const numsRoman = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
    return numsRoman[num]
}
function getThelemicYear(year, day, mounth){
    let ano = ((year - 1904)%22).toFixed(0)
    let  ciclo = ((year - 1904)/ 22).toFixed(0)
    if(mounth < 3 || day < 21 && mounth == 3){
        ano --
        ciclo -- 
    }
    return `${transformInRoman(ciclo)}:${(transformInRoman(ano).toLowerCase())}`
}
module.exports = {getThelemicYear}

