function transformInRoman(num=0){
    const numsRoman = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
    return numsRoman[num]
}
function getThelemicYear(year){
    const ano = ((year - 1904)%22).toFixed(0)
    const  ciclo = ((year - 1904)/ 22).toFixed(0)
    return `${transformInRoman(ciclo)}:${(transformInRoman(ano).toLowerCase())}`
}
module.exports = {getThelemicYear}

