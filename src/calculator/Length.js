function Length(len, unit) {
    this.len = len;
    this.unit = unit;
}
Length.prototype.getLen = function () {
    return this.len
}
Length.prototype.getUnit = function () {
    return this.unit;
}

Length.prototype.add = function (len1) {
    if (this.unit == len1.unit) {
        return new Length(this.len + len1.len, this.unit)
    } else {
        return new Length(this.len * this.unit + len1.len * len1.unit, 1)
    }
}

Length.prototype.subtract = function (len1) {
    if (this.unit == len1.unit) {
        return new Length(this.len - len1.len, this.unit)
    } else {
        return new Length(this.len * this.unit - len1.len * len1.unit, 1)
    }
}

Length.prototype.isEqual = function (len1) {
    return ((this.len) * (this.unit) == (len1.len) * (len1.unit));
}

module.exports = Length;