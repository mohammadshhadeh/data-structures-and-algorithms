const permutations = (elements) => {
    if (elements.length === 0) return [ [] ];

    const firstEl = elements[0];
    const rest = elements.slice(1);
    const permsWithoutFirst = permutations(rest);

    const allPermutations = [];
    permsWithoutFirst.forEach((perm) => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
            allPermutations.push(permWithFirst);
        }
    });


    return allPermutations;
}   // O(n!) time, O(n^2) space

// a                          []
// a                         [a]
// b          [b, a]                     [a, b]
//   [c,b,a]  [b,c,a]  [b,a,c]    [c,a,b]  [a,c,b]     [a,b,c]
console.log('permutations: ', permutations(['a', 'b', 'c']));
// console.log('combinations: ', combinations(['a', 'b', 'c']));
// [c,b,a]
// [b,c,a]
// [b,a,c]
// [c,a,b]
// [a,c,b]
// [a,b,c]