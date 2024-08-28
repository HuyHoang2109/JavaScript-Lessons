// Chuỗi trong JavaScript
function showMessage (fullName) {
    ketqua = ''
    ketqua += fullName + ' choi game'
    console.log(ketqua)
}

showMessage('con ga');

fullName = 'Huy Hoang \'tuoi ngua\''
console.log(fullName)

var firstName = 'Huy Hoang'
var lastName = 'Nguyen'

console.log(`Toi la: ${firstName} ${lastName}`)

// ==============================================================================================================================

// Làm việc với chuỗi

var myString = 'Hoc JS tai F8!'
console.log(myString.slice(-3, -1))
console.log(myString.replace('JS', 'JavaScript'))

var languages = 'JavaScript, Ruby, PHP'
console.log(languages.split(', '))

console.log(Number.parseFloat('238,21'))

var languages = [
    'JavaScript',
    'PHP',
    'Ruby'
]

languages.splice(0, 1, 'Java')
console.log(languages)

// ==============================================================================================================================

// Ví dụ cho hàm join

var cars = ['Honda', 'Mazda', 'Mercedes']
var result = joinWithCharacter(cars, ' - ')

function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}

// ==============================================================================================================================

// Bài tập chương Làm việc với số

function isNumber (value) {
    if(typeof value === 'number' && !isNaN(value)) {
        return true
    }
    else {
        return false
    }
}
console.log(isNumber(999));

// ==============================================================================================================================

// Lý thuyết Object Constructor

function User (firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var user = new User('Hoang', 'Nguyen', 'avatar')

user.email = 'huyhoang4675@gmail.com'

console.log(user, user.getName())

function Student (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Student.prototype.getFullName = function() {
    return `${this.firstName} ${''} ${this.lastName}`
}

var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

// ==============================================================================================================================

// Lý thuyết Math Object

var random = Math.floor(Math.random() * 5 )

var bonus = [
      '10 coin',
      '20 coin',
      '30 coin',
      '40 coin',
      '50 coin',
];
 
console.log(bonus[random])

// ==============================================================================================================================

// Bài tập cho phần Math object

function getRandomItem (array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

var array = [1, 4, 9]
console.log(getRandomItem(array))

// ==============================================================================================================================

// Bài tập Lệnh rẽ nhánh If - else

function run(a) {
    if (a%3 == 0 && a%5 != 0) {
        return 1
    } else if (a%5 == 0 && a%3 != 0 ) {
        return 2
    } else if (a%15 == 0) {
        return 3
    }
}

console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

// ==============================================================================================================================

// Bài tập Vòng lặp For

function getRandNumbers (min, max, length) {
    var arr = [] 
    for(var i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min) + min)
    }
    return arr;
}

console.log(getRandNumbers(1,197,5))

// ==============================================================================================================================

// Bài tập vòng lặp For - phần 2

function getTotal(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i ++) {
        total += arr[i]
    }
    return total
}

console.log(getTotal([1,2,70]))

// ==============================================================================================================================

// Bài tập vòng lặp For - phần 3

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal (a) {
    var aLength = a.length
    var total = 0 
    for (var i = 0; i < aLength; i++) {
        total += a[i].price
    }
    return total
}

getTotal(orders)
console.log(orders[1])

// ==============================================================================================================================

// Bài tập vòng lặp For/in

function run(object) {
    var results = []
    for(var key in object) {
        results.push('Thuộc tính ' + key + ' có giá trị ' + object[key])
    }
    return results
}

console.log(run({ name: 'Nguyen Van A', age: 16 }));

for(var i = 0; i < 10; i++) {
    if(i%2 !== 0) {
        continue; }
    console.log(i) }

// ==============================================================================================================================

// Bài tập Làm việc với Mảng - Phần 2

const sports = [ 
  { name: 'Bóng rổ', like: 6 },
  { name: 'Bơi lội', like: 5 },
  { name: 'Bongs đá', like: 10 }
]

function getMostSportLike(a) {
  var result = a.filter(function (b) {
    return b.like > 5
  })
  return result
  
}

console.log(getMostSportLike(sports))

// ==============================================================================================================================

// Lý thuyết Array map() method. Vì biến name giống với mấy bài tập ở trên nên ở đây đổi lại.

var courses = [
      {
          id: 1,
          ten: 'JavaScript' ,
          coin: 250
      },
      {
          id: 2,
          ten: 'HTML, CSS' ,
          coin: 0
      },
      {
          id: 3,
          ten: 'Ruby' ,
          coin: 700
      },
      {
          id: 4,
          ten: 'PHP' ,
          coin: 400
      },
      {
          id: 5,
          ten: 'ReactJS' ,
          coin: 500
      }]

function courseHandler(course) {
    return {
        id: course.id,
        ten: `Khoa hoc: ${course.ten}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}` }
}

var newCourses = courses.map(courseHandler)
console.log(newCourses)

// ==============================================================================================================================

// Lý thuyết Array reduce() method

var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) { 
//accumulator ở đây là biến lưu trữ, và giá trị khởi tạo là 0 như bên dưới. Accumulator có thể là bất cứ kiểu giá trị nào.
    i++
    var total = accumulator + currentValue.coin
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    })
    // return currentValue.coin
    return total
     
}

var totalCoin = courses.reduce(coinHandler, 0)
console.log(totalCoin) 

    // Ở đây ghi đầy đủ ra cho hiểu cách hoạt động thôi. Còn để giải quyết bài toán thì ngắn gọn như sau:
    // Để '2' vào mấy tên biến cho không trùng với cái bên trên
var totalCoin2 = courses.reduce(function(accumulator2, currentValue2){
    return accumulator2 + currentValue2.coin
}, 0)

console.log(totalCoin2)

// ==============================================================================================================================

// Thực hành sử dụng phương pháp reduce() #1
    // Sửa cái thành sports2 cho khỏi trùng bên trên

var sports2 = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold (a) {
    var totalGoldMedal = a.reduce(function(b, c){
        return b + c.gold
    }, 0)
    return totalGoldMedal
}

console.log(getTotalGold(sports2))

// ==============================================================================================================================

// Ví dụ Array reduce() method #1

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, [])

console.log(flatArray)

// ==============================================================================================================================

// Ví dụ Array reduce() method #2
    // Vì có sự trùng nhau, nên tên các biến sẽ khác với video

var chuDeHoc = [
    {
        chuDe: "Front-end",
        khoaHoc: [
            {
                stt: 1,
                tenKhoaHoc: "HTML, CSS"
            },
            {
                stt: 2,
                tenKhoaHoc: "JavaScript"
            },
        ]
    },
    {
        chuDe: "Back-end",
        khoaHoc: [
            {
                stt: 1,
                tenKhoaHoc: "PHP"
            },
            {
                stt: 2,
                tenKhoaHoc: "NodeJS"
            },
        ]
    }
 ]  

var newKhoaHoc = chuDeHoc.reduce(function(bienLuuTru, bienHienTai) {
    return bienLuuTru.concat(bienHienTai.khoaHoc)
}, [])

console.log(newKhoaHoc)

// ==============================================================================================================================

// Thực hành sử dụng phương thức reduce() #2

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
];
  
    function calculateRating(data) {
        var phimCuaCN = data.filter(function(daoDien) {
            return daoDien.Director == "Christopher Nolan" 
    })
    console.log(phimCuaCN)
  
    var trungBinhIDM = phimCuaCN.reduce(function(c, d) { //c là biến lưu trữ, d là biến hiện tại (currentValue)
        return c + Number(d.imdbRating)/phimCuaCN.length
    } , 0)
    return trungBinhIDM
  }
  
  console.log(calculateRating(watchList)); // Output: 8.675

// ==============================================================================================================================

//  Phương thức reduce() có logic như thế nào?

    Array.prototype.reduce2 = function(callback, result) { 
        let i = 0
        if (arguments.length < 2){ //Đây là trường hợp khi KHÔNG truyền GTKT. Dòng này kiểm tra xem người dùng có nhập đối số thứ 2 không.
            i = 1
            result = this[0] //Lúc này sẽ gán cho GTKT là giá trị đầu tiên trong mảng, và currentValue sẽ là giá trị thứ 2.
        }

        for (; i < this.length; i++) { //Đây là trường hợp khi CÓ truyền GTKT
            result = callback(callback, this[i], i, this) //1 vòng lặp, gọi lại hàm callback. Callback nhận 4 tham số, trong đó biến tích trữ (chính là result luôn)
        }
        return result
    }
    //Đối số của function() 1 là callback, có thể hiểu là hàm gọi lại. Đối số 2 là GTKT, nhưng đặt là result luôn,
    //vì khi return ra ngoài nó vẫn sẽ trở thành kết quả cuối cùng. VD trong 1 mảng, GTKT là 10, thì sau khi
    //callback, biến GTKT này sẽ lưu kết quả của những lần lặp (10 + x + y +...) -> chính nó là biến kết quả.

// Đây là bài tập cho phần trên luôn
    const daySo = [1, 2, 3, 4, 5]

    var ketQua = daySo.reduce2((tong, soHienTai) => {
        return tong + soHienTai
    })
    //Video này ông Sơn dùng ES6, nên chịu khó một chút.
  
// ==============================================================================================================================
    
// Thực hành sử dụng phương thức reduce() #3

    var arr = [
        ['name', 'Sơn Đặng'],
        ['age', 18],
    ];
    
    var arrToObj = function(array) {
    return array.reduce(function(acc, cur) {
        acc[cur[0]] = cur[1];
        return acc;
    }, {});
    };
    // acc is an object, acc['key'] = value; assigns value to the property key in the object acc.
    // The key is 'name'. The value associated with this key is 'Sơn Đặng'.
    // So, the object acc now looks like this: { name: 'Sơn Đặng' }

    console.log(arrToObj(arr)); 
    // Expected results: { name: 'Sơn Đặng', age: 18 }

// ==============================================================================================================================

// Lý thuyết Callback - phần 2
    // Bài toán đặt ra là tạo ra phương thức map2(), sao cho hoạt động tương tự phương thức map()

    courses2 = ['JavaScript', 'PHP', 'Ruby']

    // var htmls = courses2.map(function(course2) {
    //     return `<h2>${course2}</h2>`
    // })
    // Làm sao cho giống cái map này là oke.
    
    Array.prototype.map2 = function(callback) {
        var arrayLength = this.length
        var output2 = []
        
        for(var i = 0; i < arrayLength; i++){
            var result2 = callback(this[i])
            output2.push(result2)
        }
        return output2
        
    }

    var htmls = courses2.map2(function(course2) {
        return `<h2>${course2}</h2>`
    })

    console.log(htmls.join(''))

    // Đặt biến arrayLenght để tối ưu hiệu năng. Thay vì mỗi vòng for sẽ phải check this.length, thì chỉ cần lưu độ dài mảng 1 lần vào đây thôi.
    // callback(this[i]) sẽ lấy từng chuôi trong mảng ra, nên typeof result2 sẽ là string. 
    // Nhưng cần nó vô 1 mảng mới rồi nối nó lại, chứ không lấy dạng chuỗi -> dùng push đẩy từng chuỗi vào biến mới output2 = []

// ==============================================================================================================================

// Thực hành tạo phương thức myMap()
    // Bài tập này lấy mảng daySo ở trên.

    Array.prototype.myMap = function(cb) {

        var arrLength = this.length
        var output3 = []
            for(var i = 0; i < arrLength; i++){
                var result3 = cb(this[i], i)
                output3.push(result3)
            }
            return output3
        }


    console.log(daySo.myMap(function (number) {
        return number * 2;
    })) // Output: [2, 4, 6]

    console.log(daySo.myMap(function (number, index) {
        return number * index;
    })) // Output: [0, 2, 6]

    // Bài này ban đầu nghĩ là cần chia ra 2 trường hợp, nhưng không cần. Chỉ cần truyền đủ cả 2 đối số, còn
    // trường hợp 1 đối số thì nó lấy cái đầu thôi.

// ==============================================================================================================================

// My forEach() method

    // var output4 = courses2.forEach(function(course2, index, array) {
    //     console.log(course2, index, array)
    // }) 
    // Làm sao cho giống cái forEach() này là oke.

    let khoaHoc2 = ['JavaScript', 'PHP', 'Ruby']

    Array.prototype.forEach2 = function (callback){
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                callback(this[index], index, this)
            }
        }
    }

    khoaHoc2.forEach2(function(course2, index, array) {
        console.log(course2, index, array) 
    }) 

    // Phương thức forEach() chỉ đọc qua các phần tử thực, không quan tâm đến biến khai báo length
    // -> sử dụng vòng for/in tái tạo phương thức forEach2()
    // Vì sử dùng vòng for thường nó sẽ duyệt tất cả phần tử không thực trong biến khai báo length. 
    // VD courses.length = 1000. Sử dụng vòng for/in chỉ duyệt qua phần tử thực, vòng for thường sẽ duyệt đủ 1000 cái. 

    // Nhưng lại có 1 vấn đề: for/in cũng sẽ duyệt qua các phương thức được định nghĩa ở Array.prototype.
    // When you use for...in to loop over the array khoaHoc2, the loop goes through every property in the array, 
    // including methods that you might have added to Array.prototype, like map2 and reduce2, forEach2. 

    // The hasOwnProperty method is used to check if an object has a particular property as its own 
    // (i.e., not inherited from the prototype chain). The results are in boolean, true or false.

// ==============================================================================================================================

// My filter() method

    // var filterKhoaHoc = khoaHoc3.filter(function(khoaHoc){
    //     return khoaHoc.coin > 300
    // })
    // Làm sao cho giống cái filter() này là oke.
    // Phương thức này cung chỉ duyệt các phần tử thực, không quan tâm đến biến khai báo length,
    // hoặc khai báo mảng (var courses = new Array(1000)).

    Array.prototype.filter2 = function(callback){
        var output5 = []
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                var result = callback(this[index], index)
                if(result) { //cái này là nếu result == true
                    output5.push(this[index])
                }
            }
        }
        return output5
    }

    let khoaHoc3 = [
        {
            name: 'JavaScript' ,
            coin: 250
        },
        {
            name: 'PHP' ,
            coin: 400
        },
        {
            name: 'ReactJS' ,
            coin: 500
        }]

    var filterKhoaHoc = khoaHoc3.filter2(function(khoaHoc){
        return khoaHoc.coin > 300 
    })
        
    console.log(filterKhoaHoc)

    // Giải thích:
    // Vì KQ mong muốn là 1 dạng so sánh, nên KQ là dạng boolean (true/false). Nên khi tạo phương thức filter2(),
    // cần thêm 1 if để lấy KQ này, rồi push cái phần tử hiện tại đó vào mảng mới.