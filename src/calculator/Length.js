function Length(len, unit){
    this.len = len;
    this.unit = unit;
}
Length.prototype.getLen = function(){
    return this.len
}
Length.prototype.getUnit = function(){
    return this.unit;
}

Length.prototype.add = function(){
    // TODO
}

Length.prototype.subtract = function(){
    //TODO
}

Length.prototype.isEqual = function(){
    //TODO
}

module.exports = Length;

