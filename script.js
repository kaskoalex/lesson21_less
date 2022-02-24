// Символьные классы

// \d - любая цифра
// \w - любая лат буква цифра или подчёркивание
// \s - любой пробельный символ

// \D всё кроме \d - любая цифра
// \W всё кроме \w - любая лат буква цифра или подчёркивание
// \S всё кроме \s - любой пробельный символ
// \. всё кроме \n - переноса строки


const phone = ' 8 (817) 444 - 55 - 66'

console.log(phone.match(/\d/g));// massiw so wsemi цифрами

console.log(phone.match(/\d/g).join('')); // perewili w строку чисел

console.log(phone.replace(/\D/g, '*'));


// ------------   ЯКОРЯ      ----------------------------

//  ^ - начало строки
//  $ - конец строки
//  \b  -  граница слова



const date = '22 october 1987'

//console.log(date.match(/22/g))

console.log(date.match(/\d\d/g)); // считывает по две цифры(знака)

console.log(date.match(/^\d\d/g)); // считывает первые две цифры(знака) в начале строки

console.log(date.match(/\b\d\d/g)); // считывает первые две цифры pered i posle слова


//------------   Наборы и диапазоны   ---------------

const string ='deduska i dewuska'

console.log(string.match(/de[dw]uska/g));  // замена быквы на другие

console.log(string.match(/de[a-w]uska/g));  // замена быквы на диапазон других букв
console.log(string.match(/de[a-wA-W0-9]uska/g));

console.log(string.match(/de[A-W]uska/gi));  // i  -  уберает регистр А=а

console.log(string.match(/de[^a-w]uska/g));  // ^  знак отрицания при запросе

console.log(string.match(/de[\^]uska/g));  // \^  запрос на знак 
const strin = 'de^uska i dewuska'
const reg = new RegExp('de[\\^]uska','gi')
console.log(strin.match(reg));

//--------------   квантификаторы   -----------------------


console.log(string.match(/[a-w]+[dw][a-w]{4}/gi));// все слова у которых 3-4 буквы dw  {1,} = +   //  {0,}  = *
//   {0,1}  = ?


// ----------------   скобочные группы   ------------------

const stri = 'google.com'

console.log(stri.match(/[a-z]+/gi));  // ['google', 'com']

console.log(stri.match(/[\w]+\.[a-z]+/gi));   //  ['google.com']  ,  \w  =  [a-z]


const strik = 'google.com site.google.com'
console.log(strik.match(/([\w]+\.)+[\w]+/gi)); // ['google.com', 'site.google.com']


const strike = 'test@google.com '
console.log(strike.match(/\w+@([\w]+\.)+[\w]+/gi)); // ['test@google.com']

const striket = 'test-test.test@google.com '
console.log(striket.match(/[\-\.\w]+@([\w]+\.)+[\w]+/gi)); // ['test-test.test@google.com']
//проверка на маил адресс


const striketa = 'Это мой test-test.test@google.com '
const testEmail = /(([\-\.\w]+)(@)([\w]+\.)+([\w]+))/gi


console.log(testEmail.test(striketa))  // true


const result = striketa.replace(testEmail, 'email')
console.log(result) // email 

const resulta = striketa.replace(testEmail, (str,$1,$2,$3,$4,$5)=> {
  console.log($1) //  test-test.test@google.com
  console.log($2) //  test-test.test
  console.log($3)  //  @
  console.log($4)   // google.
  console.log($5) // com
  return 'email ' + str
}) 
console.log(result);