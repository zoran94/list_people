
const isSensitive = (names) => {
    const Fname = names.split('')[0].toUpperCase() + names.slice(1)
   // const Lname = names.split("")[0].toUpperCase() + names.slice(1);
    return `${Fname} `

//     var first = str.split(" ")
//   var second = first.map(item => {
//     return item[0].toUpperCase() + item.slice(1)
//   })
//   return second
 }
export default isSensitive;