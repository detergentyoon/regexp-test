const str = `
010-7183-2963
detergentyoon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const h = `  the hello  world  !

`

console.log(
  str.match(/(?<=@).{1,}/g)
)