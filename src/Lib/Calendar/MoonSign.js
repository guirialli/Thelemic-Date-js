const anoBissesto = (ano) => (ano % 400 == 0) || (ano % 4 == 0) && (ano % 100 != 0)
const maskDate = () =>{
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`
}

function intervaloBissesto(anoI=1921, anoF=1970) {
    if (anoI > anoF)
        return intervaloBissesto(anoF, anoI)
    aux = 0;
    for (let ano = anoI; ano <= anoF; ano++)
        if (anoBissesto(ano))
            aux++
    return aux
}

const calcularDiferancaAno = ()  => (1970 - 1921) * 365 + 21 + intervaloBissesto() + (Date.parse(maskDate())/1000/60/60/24)
function getPartDecimal(num){
    const str = num.toString()
    const splited = str.split('.')
    return parseInt(splited[1])/10000
}

function calculoDoAngulo() {
    let D = calcularDiferancaAno()
    D = 13.1762 * D + 12.0947 * Math.cos(0.11403*D) * Math.sin(0.11403*(D+1))- 6.627
    D = D/360
    D = getPartDecimal(D.toFixed(4))
    return (D * 360)   
}

function getMoonSign(){
    const angulo = calculoDoAngulo()
    if(angulo < 30) return "Leo"
    else if(angulo < 60) return "Virgo"
    else if (angulo < 90 ) return "Libra"
    else if (angulo < 120) return "Scopio"
    else if (angulo < 150) return "Sagittarius"
    else if (angulo < 180) return "Capricorn"
    else if (angulo < 210) return "Aquarius"
    else if (angulo < 240) return "Pisces"
    else if (angulo < 270) return "Aries"
    else if (angulo < 300) return "Taurus"
    else if (angulo < 330) return "Gemini"
    return "Cancer"
}

function getMoonSignEmoji(){
    const angulo = calculoDoAngulo()
    if(angulo < 30) return "Leo ♌"
    else if(angulo < 60) return "Virgo ♍"
    else if (angulo < 90 ) return "Libra ♎"
    else if (angulo < 120) return "Scopio ♏"
    else if (angulo < 150) return "Sagittarius ♐"
    else if (angulo < 180) return "Capricorn ♑"
    else if (angulo < 210) return "Aquarius ♒"
    else if (angulo < 240) return "Pisces ♓"
    else if (angulo < 270) return "Aries ♈"
    else if (angulo < 300) return "Taurus ♉"
    else if (angulo < 330) return "Gemini ♊"
    return "Cancer ♋"
}
const getAngle = () => calculoDoAngulo().toFixed(2) 
module.exports = {getMoonSign, getMoonSignEmoji, getAngle}