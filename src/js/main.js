const nestedArray = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
]
const doubledNestedArray = nestedArray.map(subarray => subarray.map(part => part.map(particle => particle * 2)))

console.log(nestedArray)

console.log(doubledNestedArray)
