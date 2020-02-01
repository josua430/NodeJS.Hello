function add(n1, n2){
    return n1+n2;
}

function substract(n1,n2){
    return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    if (n2 == 0)
    {
        console.log('No se puede dividir por 0');
    }else{
        return n1/n2;
    }
    
}

exports.suma = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;