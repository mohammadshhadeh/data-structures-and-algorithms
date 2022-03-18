// combinations of [a, b, c]
// []
// [a]
// [b]
// [c]
// [a, b]
// [a, c]
// [b, c]
// [a, b, c]


const combinations = (elements) => {
    if (elements.length === 0) return [ [] ];

    const firstEl = elements[0];
    const rest = elements.slice(1);
    const combsWithoutFirst = combinations(rest);

    const combsWithFirst = [];
    combsWithoutFirst.forEach((comb) => {
        const combWithFirst = [...comb, firstEl];
        combsWithFirst.push(combWithFirst);
    });

    return [ ...combsWithFirst, ...combsWithoutFirst ]
} // O(2^n) time, O(n^2) space

// a                                     a
// b                 []                                      [a]
// c          []             [b]                 [a]                 [a, b]
//     []        [c]    [b]      [b, c]      [a]      [a, c]   [a, b]       [a, b, c]
combinations(['a', 'b', 'c'])
// console.log('combinations: ', combinations(['a', 'b', 'c']));
