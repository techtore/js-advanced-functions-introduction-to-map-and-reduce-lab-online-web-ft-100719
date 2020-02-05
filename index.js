// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(src => src * (-1))
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    return sourceArray.map(src => src * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(src => src** 2)
}


function reduceToTotal(sourceArray, startingPoint=0){    
    const reducer = function(acc, currV){ return acc + currV }

    return sourceArray.reduce(reducer, startingPoint)
}


function reduceToAllTrue(sourceArray){
    const reducer = function(acc, currV){

        if (!!acc == true && !!currV == true){
        return true;
    }
    
    else {
        return false;
    }
    }
    

    return sourceArray.reduce(reducer, true)
    }

     
    


function reduceToAnyTrue(sourceArray){
    const reducer = function(acc, currV){

        if (acc == true){
        return true;
    }
    else {
        return !!currV
    }
    }
    return sourceArray.reduce(reducer, false)
}
