const bitArray = createBitAccessor(new Uint8Array([0b1111, 0b1101]));


function createBitAccessor(bytes) {

    return {
        get: function(itemIndex, bitNumber) {
            let num = bytes[itemIndex];

            console.log(num.toString(2))

            return (num >> bitNumber) % 2;
        },
        set: function(itemIndex, bitNumber, value) {
            let num = bytes[itemIndex];

            if (value === 1) {
                bytes[itemIndex] = num | (value << bitNumber);
            } else {
                bytes[itemIndex] = num & (value << bitNumber);
            }

            console.log(bytes[itemIndex].toString(2))

        }
    }
}


console.log(bitArray.get(0, 1));
bitArray.set(0, 3, 0);
console.log(bitArray.get(0, 1));