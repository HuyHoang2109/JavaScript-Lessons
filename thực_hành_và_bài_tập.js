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
            let result2 = callback(this[i])
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
    // Phương thức này cũng chỉ duyệt các phần tử thực, không quan tâm đến biến khai báo length,
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
    // cần thêm 1 if để lấy KQ này, nếu true thì push cái phần tử hiện tại đó vào mảng mới.

// ==============================================================================================================================
    
// My some() method
    
    // let result4 = khoaHoc4.some(function(khoaHoc) {
    //     return khoaHoc.isFinish == true
    // })
    // Làm sao cho giống cái filter() này là oke.
    // Phương thức này cũng chỉ duyệt các phần tử thực, không quan tâm đến biến khai báo length,
    // hoặc khai báo mảng (var courses = new Array(1000)).

    // Array.prototype.some2 = function(callback) {
    //     let output6 = false
    //     for(var index in this) {
    //         if(this.hasOwnProperty(index)){
    //             if(callback(this[index], index)) {
    //                 console.log(this[index])
    //                 output6 = true
    //                 break
    //             }
    //         }
    //     }
    //     return output6
    // }
    // Cách này cho kết quả giống cách dưới, chỉ khác là cách này đặt biến ở ngoài

    Array.prototype.some2 = function(callback) {
        for(var index in this) {
            if(this.hasOwnProperty(index)){
                if(callback(this[index], index)) {
                    console.log(this[index])
                    return true
                }
            }
        }
        return false
    }


    let khoaHoc4 = [
        {
            name: 'JavaScript',
            coin: 680,
            isFinish: true
        },
        {
            name: 'NodeJS',
            coin: 860,
            isFinish: true
        },
        {
            name: 'Python',
            coin: 980,
            isFinish: false
        }
    ]

    let result4 = khoaHoc4.some2(function(khoaHoc) {
        return khoaHoc.isFinish;
    })

    console.log(result4)

    // Giải thích:
    // Cần thêm một hàm điều kiện: check nếu có phần tử nào đủ điều kiện, thì in ra rồi return true.
    // Ngược lại, nếu không có phần tử nào thỏa mãn, return false.

// ==============================================================================================================================

// My every() method

    //Bài này sử dụng mảng khoaHoc4 ở trên

    Array.prototype.every2 = function(callback) {
        var output7 = true
        for(var index in this) {
            if(this.hasOwnProperty(index)){
                var result = callback(this[index], index, this)
                console.log(result)
                if(!result) {
                    output7 = false
                    break
                }
            }
        }
        return output7
    }

    let result5 = khoaHoc4.every2(function(khoaHoc) {
        return khoaHoc.isFinish;
    })

    console.log(result5)

    // Giải thích:
    // Thêm một hàm điều kiện: chỉ cần một trong các phần tử trả về false, lập tức trả về false.

// ==============================================================================================================================

// Get element methods

var headingNode = document.getElementById('heading')

var headingNodes = document.getElementsByClassName('heading')

var headingNodesTag = document.getElementsByTagName('h1')

var headingNodeSelector = document.querySelector('.heading')

var headingNodeSelectorAll = document.querySelectorAll('.heading')


console.log(headingNode)
console.log(headingNodes)
console.log(headingNodesTag)
console.log(headingNodeSelector)
console.log(headingNodeSelectorAll)
console.log(headingNodeSelectorAll[2])
console.log(document.forms)
console.log(document.forms[1])
console.log(document.forms['form-2'])
console.log(document.forms.testForm)
console.log(document.anchors)

// Thực hành get Element

    /** Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:

    1. productsListElement: thẻ div có class là products-list.
    2. firstProductElement: thẻ div đầu tiên có class là product.
    3. buttonElements: tất cả các thẻ button. */

    var productsListElement = document.querySelector("div.products-list")
    var firstProductElement = document.querySelector("div.product:first-child")
    var buttonElements = document.querySelectorAll("button")

// ==============================================================================================================================

// Get element methods - 2

    let listItemNodes = document.querySelectorAll('.box-1 li')
    console.log(listItemNodes)
    //Cái này là xong bài toán 1

    let boxNode = document.querySelector('.box-1')
    console.log(boxNode.querySelectorAll('li'))
    //2 dòng này có nghĩa là, lấy boxNode gọi querySelectorAll, là lấy các thẻ <li> là con của .box-1
    //Hoặc có thể dùng: console.log(boxNode.getElementsByTagName('li')), KQ trả về là như nhau.

// ==============================================================================================================================

// DOM Attribute

    var headingElement = document.querySelector('h1')
    headingElement.style.color = 'blue'

    //Một bài tập thực hành nhỏ. Bên file html mình đã set thẻ <h1> đầu tiên màu là red, nhưng ở file js mình đổi
    //thành màu blue. Comment dòng sau để thấy nó thay đổi.

// Thực hành với DOM Attribute
    //Nhớ so với file index bên lý thuyết.
    var h1Element = document.querySelector('h1')
    h1Element.title = 'F8 - Học lập trình để đi làm'

    h1Element.setAttribute('data-title', 'F8 - Học lập trình để đi làm')

    var aElement = document.querySelector('a')
    aElement.href = "https://fullstack.edu.vn/"

    aElement.target = "_blank"

// ==============================================================================================================================

// InnerText vs textContent Property

    console.log(headingElement.innerText)
    console.log(headingElement.textContent)

    var headingElement2 = document.querySelectorAll('h1')[3]

    headingElement2.innerText = ` 
    
    New Heading`

// ==============================================================================================================================

// innerHTML vs outerHTML Property

    var boxElement = document.querySelector('.box')
    
    boxElement.innerHTML = '<h1>Heading</h1>'

    boxElement.outerHTML = '<span>Test</span>'

    console.log(boxElement.innerHTML)

    console.log(boxElement.outerHTML)

// Thực hành sử dụng innerHTML #1

    //Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ chèn giá trị của html vào 
    //trong thẻ ul đã cho trước. Có chỉnh sủa lại khác với bài tập của thầy Sơn cho phù hợp file .html.

    function render(html) {
        var arr = document.querySelectorAll('ul')[2]
        arr.innerHTML = html
    }

    render(`
        <li>Khóa học HTML</li>
        <li>Khóa học JS</li>
        <li>Khóa học PHP</li>
    `)

// Thực hành sử dụng innerHTML #2

    var courses3 = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

    function render2(john) {
        // console.log(john);
        var stringA = john.map(function (course3) {
            return `<li>${course3}</li>`
        }).join('')
        // stringA = stringA.join('')
        var ulElement = document.querySelector('ul')
        ulElement.innerHTML = stringA
    }

    render2(courses3)


// ==============================================================================================================================

// DOM CSS

    boxElement.style.width = '100px'
    boxElement.style.height = '200px'
    boxElement.style.backgroundColor = 'red'
    //Comment dòng boxElement.outerHTML bên trên mới thấy được sự thay đổi
    //Tên biến divElement có đổi lại cho phù hợp.

    var divElementRed = document.querySelector('div.red')

    Object.assign(divElementRed.style, {backgroundColor: '#f00'})

    var pElement = document.querySelector('p')

    Object.assign(pElement.style, {color: '#f05123'})

// ==============================================================================================================================

// ClassList Property
    // Bài toán: có sẵn 1 class .blue trong thẻ <style>. Dùng phương thức này để thêm class .blue vào trong thẻ <h1>
    let boxElement2 = document.querySelectorAll('#heading')[1]
    console.log(boxElement2)
    boxElement2.classList.add('blue')

// Thực hành sử dụng classList #2
    //Để không ảnh hưởng file index, mình sẽ thêm class .blue chứ không thêm class .box
    let divElement = document.querySelectorAll('div')
    divElement.forEach(function(abc) {
        abc.classList.add('blue')
    })

// ==============================================================================================================================

// DOM Events
    
    let h2Elements = document.querySelectorAll('h2')

    for(var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].onclick = function(e) {
            console.log(e.target)
        }
    }//Khi click vào sẽ in ra đối tượng nào đang được click

    // h2Elements.forEach(function(h2) {
    //     h2.onclick = function(e) {
    //         console.log(e.target)
    //     }
    // })
    // Cũng giống cách trên, nhưng sử dụng phương thức forEach()

    // Thực hành sử dụng DOM Events

    var buttonElement = document.querySelector('button')

    buttonElement.onclick = function() {
        return this.style.color = '#fff'
    }

// DOM Events Example

    //Bài toán a.
    let inputElement = document.querySelector('input[type="text"]')

    let inputValue

    inputElement.oninput = function(e) {
        inputValue = e.target.value
        console.log(inputValue)
    }
    //comment dòng console.log. Điền trực tiếp inputValue vào Console Tab trên trình duyệt để thấy nó lưu hết 1 lần
    //chứ không lưu rồi xuất ra từng ký tự. Vì inputValue là biến global nên có thể làm được điều này.

    //Bài toán b.
    let checkboxElement = document.querySelector('input[type="checkbox"]')

    checkboxElement.onchange = function(e) {
        console.log(e.target.checked)
    }

    //Bài toán c.
    let selectElement = document.querySelector('select')

    selectElement.onchange = function(e) {
        console.log(e.target.value)
    }//Lưu ý: giá trị của thuộc tính value và cái hiển thị trên màn hình (text node) có thể khác nhau.

    //Bài toán d.
        //Bài này sử dụng inputElement ở phía trên
    
    inputElement.onkeyup = function(e) {
        console.log(e.which)
        switch(e.which) {
            case 27:
                console.log('Escape')
                break
        }
    }//which sẽ cho mình biết được mã phím mình vừa bấm. Thêm switch để rõ hơn.

// ==============================================================================================================================

// PreventDefault and StopPropagation

    //PreventDefault
    //Bài toán 1
    //Bài này chỉ lấy 2 thẻ <a> là My Google với My Youtube, mà chỉ có My Youtube mới chuyển trang

    aElements = document.anchors

    for(var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = function(e) {
            if(!e.target.href.startsWith('https://www.youtube.com')) {//startsWith là phương thức của ES6 JS.
                e.preventDefault()
            }
        }
    }

    //Bài toán 2
    var ulPreventElement = document.querySelector('.preventDefaultUl')

    ulPreventElement.onmousedown = function(e){
        e.preventDefault()
    }
    //Khi nhấn chuột xuống là danh sách khóa học biến mất rồi, nên ta cần ngăn chặn hành động này xảy ra.

    ulPreventElement.onclick = function(e) {
        console.log(e.target)
    }

    //StopPropagation

    var stopPropagationDiv = document.querySelector('.stopPropagationDiv')

    var stopPropagationBtn = document.querySelector('.stopPropagationBtn')

    stopPropagationDiv.onclick = function() {
        console.log('DIV')
    }//Chỉ in ra, không có trả về nên không có e

    stopPropagationBtn.onclick = function(e) {
        e.stopPropagation()
        console.log('Click me!')
    }

// ==============================================================================================================================

// Event Listener

    var btn = document.getElementById('btn')
    
    btn.addEventListener('click', function(e) {
        console.log(Math.random())
    })

    function viec1() {
        console.log('Viec 1')
    }

    btn.addEventListener('click', viec1)

    setTimeout(function() {
        btn.removeEventListener('click', viec1)
    }, 3000)

// ==============================================================================================================================

// JSON

    var a = '["John", "Harry"]'
    console.log(JSON.parse(a))
    console.log(JSON.stringify(['John', 'Harry']))//Kết quả là dạng chuỗi
    console.log(JSON.stringify({"name": "Huy Hoàng", "age": 22}))

// ==============================================================================================================================

// Promise

    //VD về Callback Hell
    // setTimeout(function(){
    //     console.log(1)
    //     setTimeout(function() {
    //         console.log(2)
    //         setTimeout(function() {
    //             console.log(3)
    //             setTimeout(function() {
    //                 console.log(4)
    //             }, 1000)
    //         }, 1000)
    //     }, 1000)
    // }, 1000)

    //Promise
    var promise = new Promise (
        function (resolve, reject) {
            //Fake call API
            // resolve([
            //     {
            //         id: 1,
            //         name: 'John'
            //     }
            // ])

            reject('Co loi!')
        }
    )

    promise
        .then(function(course) {
            console.log('Successfully!')
            console.log(course)
        })
        .catch(function(error) {
            console.log('Failure!')
            console.log(error)
        })//Muốn thằng catch() thực thi thì phải comment thằng resolve
        // .finally(function() {
        //     console.log('Done!')
        // })

    //VD về việc promise giải quyết Callback Hell
    var promise2 = new Promise (
        function (resolve, reject) {
            resolve()
        }
    )

    promise2
        .then(function() {
            return 1
        })
        .then(function(data) {
            console.log(data)
            return 2
        })
        .then(function(data) {
            console.log(data)
            return 3
        })
        .then(function(data) {
            console.log(data)
        })
        //Đoạn này là VD return một new Promise
        .then(function() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    resolve([1,2,3])
                }, 1000)
            })
        })
        // .then(function(data){
        //     console.log(data)
        // })
        //Cái này chạy theo tuần tự từ trên xuống dưới, mặc dù cũng là lấy data từ thằng trước để gán vào thằng sau -> không bị Callback Hell và rõ nghĩa.

    //Bài toán Promise (tương tự như VD Callback Hell, nhưng sử dụng Promise)
    function sleep(ms) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms)
        })
    }//Hàm sleep() trả về 1 Promise -> về cơ bản, sleep() chính là một Promise
    // Promise thực hiện setTimeout -> có nghĩa là hàm sleep truyền vào bao nhiêu ms, thì sau ms mới thực hiện việc resolve.

    sleep(1000)
        .then(function() {
            console.log(1)
            return sleep(1000)
        })
        //Vì sleep() là một Promise, nên khi return, phải thực hiện xong Promise đó rồi mới nhảy xuống chạy tiếp phía dưới.
        .then(function() {
            console.log(2)
            return sleep(1000)
        })
        .then(function() {
            console.log(3)
            return sleep(1000)
        })
        .then(function() {
            console.log(4)
            return sleep(1000)
        })

    //VD khác về Callback Hell và khi sử dụng Promise để thay thế
    function hell(value, cb) {
        cb(value);
    }
    
        // Không sử dụng Promise dẫn đến tạo ra callback hell 
    hell(1, function (valueFromA) {
        hell(valueFromA + 1, function (valueFromB) {
            hell(valueFromB + 1, function (valueFromC) {
                hell(valueFromC + 1, function (valueFromD) {
                    console.log(valueFromD + 1);
                });
            });
        });
    });
    
        // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
    function notHell(value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    }
    
    notHell(1)
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            console.log(value + 1);
        });
    
// ==============================================================================================================================

// Promise Methods
    
    let promise3 = new Promise (function (resolve) {
        setTimeout(function(){
            resolve([1])
        }, 1000)
    })

    let promise4 = new Promise (function (resolve) {
        setTimeout(function(){
            resolve([2, 3])
        }, 2000)
    })

    Promise.all([promise3, promise4])
        .then(function(result) {
            console.log(result)//Log ra được 2 mảng, nhưng chưa nối với nhau, nên mới có mấy dòng code sau
            let result1 = result[0]
            let result2 = result[1]

            console.log(result1.concat(result2))
        })

// ==============================================================================================================================

// Fetch
    var postAPI = 'https://jsonplaceholder.typicode.com/posts'
    fetch(postAPI)
        .then(function (response) {
            return response.json()
            //JSON.parse: JSON -> JavaScript type (in this case, the result is an array of objects (each representing a post))
        })
        // .then(function (posts) {
        //     console.log(posts)
        // })
        //Tới đây là hiện xong tất cả thông tin rồi, nhưng cần lấy theo yêu cầu cụ thể nên phải code tiếp
        .then(function(posts) {
            let htmls2 = posts.map(function(post) {
                return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </li>`
            })

            let html2 = htmls2.join('')
            document.getElementById('post-block').innerHTML = html2

        })

// ==============================================================================================================================

// JSON Server
    
        


    


    