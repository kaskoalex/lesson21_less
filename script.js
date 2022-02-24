// //const regexp1 = new RegExp('привет','g')//  g ищет глобально все совпадения

// //const regexp1 = new RegExp('привет', 'gi')//  gi ищет глобально все совпадения игнорируя заглавные быквы
// const regexp2 = /привет/gi
// const str = 'grüsse привет dich, grüsse euch привет und grüsse Sie привет'
// // let reg
// // const arr = []

// // reg =regexp1.exec(str)
// // while(reg) {

  
// //   arr.push(reg[0])
// //   reg = regexp1.exec(str)
  
// // }

// // console.log(arr)

// // //console.log(regexp1.test(str))// ищет есть ли такое слово и при первом даёт труе и останавливается
// // console.log(regexp1.exec(str)) // iqet wse совпадения index указывает на начало совпадения
// // console.log(regexp1.exec(str))

// // console.dir(regexp1) // lastIndex показывает окончание найденого члова, после второго вызова указывает на второе найденное слово

// console.log(/привет/gi.test(str));


// console.log(regexp1.test(str));
// console.log(regexp1.test(str));
// console.log(regexp1.test(str));
// console.dir(regexp1);

// const str='serdionum@web.de'

// console.log(/@/gi.test(str));

const str = 'grüsse привет dich, grüsse euch привет und grüsse Sie привет'

console.log(str.search(/привет/i)) // peredaöt index nacala совпадения
console.log(str.match(/привет/gi))  // выдаёт масив всех соввпадений

console.log(str.replace(/привет/gi, 'zu'))  // замена совпадения на другое слово или елемент
console.log(str.replace(/привет/g, 'zu'))  // отвязаличь от регистра
console.log(str.replace(/привет/i, 'zu')) // меняется только первое слово, 