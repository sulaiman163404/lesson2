// && and ||
// var userInn = '20907199000740'
// var firstNum = Number(userInn[0])
// if (userInn.length === 14 && (firstNum === 0 || firstNum === 1 || firstNum === 2)){
//     console.log('ИНН найден')
// }else{
//     alert('ИНН ненайден')
// }




//switch..case
// switch (5-2){
//     case 1:
//         console.log('Результат 1')
//         break
//     case 2:
//         console.log('Результат 2')
//         break
//     case 3:
//         console.log('Результат 3')
//         break
//     default:
//         console.log('Error')
// }

switch (new Date().getDay()){
    case 1:
        console.log('Понедельник')
        break
    case 2:
        console.log('Вторник')
        break
    case 3:
        console.log('Среда')
        break
    case 4:
        console.log('Четверг')
        break
    case 5:
        console.log('Пятница')
        break
    case 6:
        console.log('Суббота')
        break
    case 7:
        console.log('Воскресенье')
        break
}


//4) Undefined - язык сам присваивает значение, создается переменная без ничего
let address;
console.log(address)


//5) null - мы должны присвоить значение в ручную, создается пустая ячейка
var address1 = null
console.log(address1)


// 6) object
var user = {
    name: 'Sulaiman',
    phoneNumber: 35364556768,
    secondNumber: null,
    address: undefined,
    isMarried: false,
    profession: {
        d:{
            s: 's'
        }
    },
}

console.log(user)
console.log(user.name)
console.log(user.profession.d)

// Добавление
user.laptop = true
console.log(user)

// Удаление
delete user.phoneNumber
console.log(user)

// Изменение
user['name'] = 'qwerty'
console.log(user)

// Методы
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('nameasdf'))


