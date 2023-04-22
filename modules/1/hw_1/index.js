const bitArray = createBitAccessor(new Uint8Array([0b1111, 0b1101]));


function createBitAccessor(bytes) {

    return {
        get: function(itemIndex, bitNumber) {
            let num = bytes[itemIndex];

            return (num >> bitNumber) % 2;
        },
        set: function(itemIndex, bitNumber, value) {
            let num = bytes[itemIndex];

            console.log(num.toString(2));

            const mask = 1 << bitNumber;

            if (value === 1) {
                num = num | mask;
            } else if (value === 0) {
                num = num & (~mask);
            }

            console.log(num.toString(2));
            bytes[itemIndex] = num;

        }
    }
}


console.log(bitArray.get(0, 1));
bitArray.set(0, 1, 0);
bitArray.set(0, 0, 0);
console.log(bitArray.get(0, 1));