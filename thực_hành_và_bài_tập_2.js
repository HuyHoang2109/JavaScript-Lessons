// Từ bài Destructuring & Rest paremeters trong ECMAScript 6 trở đi là làm bên file html mới, vì file cũ nhiều quá rồi.
// Destructuring & Rest paremeters trong ECMAScript 6

var mang = ['Huy Hoang', 'Trung Kien', 'Cong Lap']
var [a] = mang
console.log(a)

var doiTuong = {
    name: 'Huy Hoang',
    age: 23,
    // description: '',
    children: {
        name: 'John'
    }
}
var {name: parentName, children: {name} } = doiTuong
console.log(`${parentName}, ${name}`)

var {parentName, description = 'default value'} = doiTuong
console.log(description)

// ==============================================================================================================================

// Spread
// a. Sử dụng để nối mảng
var array1 = ['Huy', 'Hoang', 'Tuan', 'Kien']
var array2 = ['Tran', 'Nguyen', 'Pham', 'Dao']

var array3 = [...array2, ...array1] //muốn cái nào đứng trước thì để lên trước
console.log(array3)

// b. Sử dụng để hợp nhất 2 object
var object1 = { name: 'Huy Hoang'}
var object2 = { age: 23}

var object3 = { ...object1, ...object2}
console.log(object3)

