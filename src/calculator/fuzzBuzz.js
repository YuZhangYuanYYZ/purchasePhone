function fuzzBuzz(num){
    if (num%2===0){
        return "fuzz";
    }
    else if (num%3===0){
        return "buzz";
    }
    else if (num%7===0){
        return "fuzzbuzz";
    }
}

module.exports  = fuzzBuzz;