
const jsRandom = () => Math.floor(Math.random() * 52)

let xorshiftSeed = Date.now()

const xorshift = () => { // Xorshift RNG example
    let x = xorshiftSeed;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    xorshiftSeed = x
    return Math.floor((x >>> 0) / 4294967296) * 52;
}

let state = new Uint32Array(16); // 16 words of 32-bit state
let index = 0;

function seedWell512(seed = Date.now()) {
    for (let i = 0; i < 16; i++) {
        state[i] = (seed + i) >>> 0; // Ensure unsigned 32-bit values
    }
}

function well512() {
    let a, b, c, d;
    a = state[index];
    c = state[(index + 13) & 15];
    b = a ^ c ^ (a << 16) ^ (c << 15);
    c = state[(index + 9) & 15];
    c ^= (c >>> 11);
    a = state[index] = b ^ c;
    d = a ^ ((a << 5) & 0xDA442D24);
    index = (index + 15) & 15;
    return (state[index] = d) / 4294967296;
}

const well512ac = () => {
    let randomIndex = Math.floor(well512() * 52)
    return randomIndex
}

seedWell512()


export default { jsRandom, xorshift, well512ac }
