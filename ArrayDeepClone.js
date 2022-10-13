Array.prototype.deepClone = function(callback) {
    let newArray = [];
    let x = this.length;
    for (let i=0; i < x; i++) {
        let value = callback(this[i]);
        newArray.push(value);
    }
    return newArray;
}
