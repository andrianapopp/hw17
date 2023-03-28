const str = prompt(`Write some word`)
const num = Number(prompt(`Write some number`))
const sym = prompt(`Write one symbol`)

function padString (str, num, sym, place = true){
    if (typeof str !== `string`|| !str){
        return `Fill in the string!`
    }
    if (typeof num !== `number` || !num){
        return `Write a number!`
    }
    if (sym.length !==1){
        return `No more than one symbol!`
    }
    if (num <= str.length){
        return str.substr(0,num)
    }

    const replacementLength = num - str.length
    const replacement = sym.repeat(replacementLength)

    if (place === false){
        return replacement + str
    } else {
        return str + replacement
    }
}

alert(padString(str, num, sym))