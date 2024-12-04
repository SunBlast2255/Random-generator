function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomString(length, letters, numbers, symbols){

    let charSet = "";
    let result = "";

    if(letters){
        charSet += "abcdefghijklmnopqrstuvwxyz"
    }

    if(numbers){
        charSet += "0123456789"
    }

    if(symbols){
        charSet += "!@#$%&?*";
    }

    charSet = shuffleStr(charSet);

    for(let i = 0; i < length; i++){
        result += charSet[Math.floor(Math.random() * charSet.length)];
    }

    return result;
}

function generateRandomColor(rMin, rMax, gMin, gMax, bMin, bMax){
    
}

function generateRandomDate(minDate, maxDate){
    
}

function shuffleStr(str){
    return str.split("").sort(() => Math.random() - 0.5).join('');
}