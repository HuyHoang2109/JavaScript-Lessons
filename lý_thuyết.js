/** Toán tử số học*
 * +    Cộng
 * -    Trừ
 * *    Nhân
 * **   Lũy thừa
 * /    Chia
 * %    Chia lấy dư
 * ++   Tăng 1 giá trị số
 * --   Giảm 1 giá trị số   */ 

/** Toán tử gán
 * Toán tử          Ví dụ       Tương đương
 * =                x = y       x = y
 * +=               x += y      x = x + y
 * -=               x -= y      x = x - y
 * *=               x *= y      x = x * y
 * /=               x /= y      x = x / y
 * **=              x **= y     x = x ** y  */ 

/* Toán tử ++

Đây là 2 toán tử nghe qua thì rất dễ hiểu, nhưng để hiểu nguyên lý về cách hoạt động của nó chúng ta sẽ phải mất thêm một chút thời gian đó. Để hoàn thành bài học về 2 toán tử này, chúng ta sẽ cùng trải qua một số bài học sau nhé.
Ok, bắt đầu thôi!

Toán tử ++
Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:

Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
Dùng làm tiền tố: ++variable (toán tử nằm trước biến)

#1 Sử dụng ++ làm hậu tố
Ở đây, chúng ta sẽ xét ví dụ sử dụng toán tử ++ làm hậu tố trước (vì trong thực tế, chúng ta thường dùng kiểu hậu tố nhiều hơn):

var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3

Sau mỗi khi sử dụng toán tử ++, giá trị của biến number được tăng lên 1. Có vẻ khá dễ dàng để hiểu cách hoạt động của nó phải không?

Tuy nhiên, hãy xem xét thêm ví dụ sau:

var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3

--> Toán tử ++ khi dùng là hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng.

#2 Sử dụng ++ làm tiền tố
Ở ví dụ này, chúng ta sử dụng ++ làm tiền tố. Tuy nhiên, kết quả trông sẽ không khác gì khi dùng ++ làm hậu tố:

var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3

Nhưng khi xem xét kỹ hơn, các bạn sẽ nhìn ra điểm khác:

var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3

--> Toán tử ++ khi dùng là tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.

Toán tử - -
Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.

Tổng kết:

x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
--x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm */

// Toán tử chuỗi - String operator

/** Toán tử so sánh
*Toán tử so sánh
* ==      -->   Bằng
* !=      -->   Không bằng/khác
* >       -->   Lớn hơn
* <       -->   Bé hơn
* >=      -->   Lớn hơn hoặc bằng
* <=      -->   Bé hơn hoặc bằng */ 

// Kiểu dữ liệu Boolean

// If - else

/** Toán tử logic
    1. && - And
    2. || - Or
    3. ! - Not */ 

/**Kiểu dữ liệu trong JavaScript
 * 1. Dữ liệu nguyên thủy - Primitive Data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex Data
 * - Function
 * - Object */ 

/*VD khai báo Function type:
var myFunction = function() {
    alert('Hello World')
}*/

/*VD khai báo Object type:
var myObject = {
    name: "Huy Hoang",
    age: 22,
    address: "Ho Chi Minh",
    myFunction: function() {
        (ví dụ để cho thấy trong object có thể khai báo cả function luôn)
    }
}*/ 

/*VD khai báo Array type:
var myArray = [
    'Huy Hoang',
    'Kieu Oanh',
    'N Huu Duyen',
    'N Thi Hong Thuy'
]*/ 

/** Toán tử so sánh P2
 * ===
 * !==
 * Khác ở chỗ, toán tử so sánh (==, !=) chỉ quan tâm tới value. Còn cái này so sánh cả value & data type
 * VD:
 * var a = '1';
 * var b = 1;
 * 
 * console.log (a == b); --> true
 * console.log (a === b); --> false (vì 2 data type không giống nhau)
 * 
 * console.log (a != b); --> false (vì 2 cái đều đang là 1)
 * console.log (a !== b); --> true (vì 2 cái đều là 1, nhưng khác data type) */ 

/**Truthy và Falsy là gì? 
 * Truthy - to bool is true
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
 * Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập trong ví dụ dưới đây là Truthy vì khi chuyển sang Boolean ta nhận được giá trị true.
 * 
 *  console.log(Boolean(1)) // true
    console.log(Boolean(['BMW'])) // true
    console.log(Boolean({ name: 'Miu' })) // true
    console.log(!!'hi') // true

    !! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định".
    Trong Javascript thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.

    console.log(!!1) // true
    console.log(!!'f8') // true
    console.log(!!['Mercedes']) // true

    Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.
    
*   Falsy - to bool is false
*   Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
    Trong Javascript có 6 giá trị sau được coi là Falsy:

    1. false
    2. 0 (số không)
    3. '' or "" (chuỗi rỗng)
    4. null
    5. undefined
    6. NaN
    
    VD:
    console.log(!!false) // false
    console.log(!!0) // false
    console.log(!!'') // false
    console.log(!!null) // false
    console.log(!!undefined) // false
    console.log(!!NaN) // false

    Chú ý!
    Nội dung đã đề cập phía trên đã đầy đủ khi nói về Truthy và Falsy trong Javascript. Tuy nhiên mình vẫn cần nhấn mạnh lại với các bạn rằng:
    Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

    1. '0' (một chuỗi chứa số không)
    2. ' ' (một chuỗi chứa dấu cách)
    3. 'false' (một chuỗi chứa từ khóa false)
    4. [] (một array trống)
    5. {} (một object trống)
    6. function(){} (một hàm "trống")

    Một số người chuyển từ ngôn ngữ khác sang rất có thể sẽ bị nhầm [] (mảng "rỗng") là falsy, bởi vì trong ngôn ngữ họ đã học trước đó [] là falsy.

    Với những người hiểu nhầm [] là falsy sẽ gặp trường hợp khó hiểu sau:

    var cars = [] // Dù là mảng "rỗng" vẫn là truthy

    if (!cars) {
        // Họ sẽ thắc mắc: "Tại sao lại không lọt vào đây?"
    }

    Vì [] là truthy nên !cars sẽ trả về false. Câu lệnh if sẽ nhận được kết quả của mệnh đề so sánh là false, vì vậy đoạn mã trong if trên sẽ không được lọt vào.

    Ngoại lệ? - document.all

    Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?

    Bản thân mình cũng thắc mắc điều này nên mình đã search Google "Why document.all is falsy?" và mình đã tìm được câu trả lời tại đây (https://stackoverflow.com/questions/10350142/why-is-document-all-falsy)

    Tóm tắt câu trả lời:

    document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ.

    Cụ thể như sau:

    1. document.all chuyển sang boolean sẽ là false
    2. document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
    3. Khi typeof document.all sẽ trả về "undefined"

    ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA. */

//  Toán tử logical và câu lệnh điều kiện If (xem video để hiểu, bài này hay)

/** Hàm (Function)
 * 1. Hàm?
 *  - Một khối mã
 *  - Làm 1 việc cụ thể
 * 
 * 2. Loại hàm
 *  - Built-in
 *  - Tự định nghĩa
 * 
 * 3. Tính chất
 *  - Không thực thi khi định nghĩa
 *  - Sẽ thực thi khi được gọi
 *  - Có thể nhận tham số
 *  - Có thể trả về 1 giá trị.
 * 
 * 4. Tạo hàm đầu tiên */

/**Tham số trong hàm 
 * 1. Tham số?
 *  - Định nghĩa
 *  - Kiểu dữ liệu? - vô hạn kiểu dữ liệu, muốn thêm kiểu dữ liệu nào cũng được
 *  - Tính private? - chỉ chạy trong chính hàm đó, mang tham số ra ngoài hàm sẽ không dùng được
 *  - 1 tham số
 *  - Nhiều tham số
 * 
 * 2. Truyền tham số
 *  - 1 tham số
 *  - Nhiều tham số
 * 
 * 3. Arguments?
 *  - Đối tượng arguments
 *  - Giới thiệu vòng for of
 * 
 * VD:
 * 
 * function writeLog (message) {
 *      console.log(message)
 * } //message ở đây được gọi là tham số (parameter), vì nó được định nghĩa ở trong 1 hàm
 * 
 * writeLog('Test message'); //ghi gọi hàm đó và truyền vào nó 1 giá trị, thì nó gọi là đối số (argument)
 * 
 * VD về vòng for of:
 * 
 * function writeLog() {
 *      for (var param of arguments) {
 *          console.log(param)
 *      }
 * }
 * 
 * writeLog('Log 1', 'Log 2', 'Log 3')
 * 
 * Vòng lặp for sẽ chạy trong mảng arguments, cứ gặp giá trị nào trong mảng này, sẽ gắn giá trị đó vào tham số param rồi xuất ra. Lặp lại đến hết mảng. */

/** Return trong hàm
 * 
 * var isConfirm = confirm('Message')
 * console.log(isConfirm)
 * 
 * dòng code đầu để mở hộp thoại confirm và ghi lại lựa chọn của người dùng. dòng 2 để xuất ra log. */

/** Hàm sum cơ bản
 * 
 * var tong; //khai báo biến tổng
 * function sum (a, b) {
 *      tong = a + b;
 *      return tong;
 * }
 * 
 * sum (5, 10) //gọi hàm sum để tính toán
 * console.log(tong) //gọi log để xuất tổng
 * 
 * hoặc là
 * function sum (a, b) {
 *      return a + b;
 * }
 * 
 * var tong = sum(5, 10)
 * console.log(tong) */

/** Hiểu hơn về hàm 
 * 1. Khi function đặt trùng tên? - function nào gọi sau thì sẽ thực hiện nó (thường không xảy ra trong thực tế)
 * 2. Khai báo biến trong hàm? - được, nhưng biến chỉ gọi được trong hàm đó, vì có tính private
 * 3. Định nghĩa hàm trong hàm? - được, nhưng khai báo hàm ở đâu thì phải gọi luôn ở đó, vì hàm có tính private */

/** Các loại function
 * 1. Declaration Function
 * 2. Expression Function
 * 3. Arrow Function - chỉ dừng lại ở mức giới thiệu
 * 
 * VD khai báo Declaration Function:
 * function showMessage() {
 * }
 * 
 * VD1 khai báo Expression Function:
 * var showMessage 2 = function() {
 * }
 * 
 * VD2 khai báo Expression Function:
 * setTimeout(function() {
 * })
 * 
 * VD3 khai báo Expression Function:
 * var myObject = {
 *      myFunction: function() {
 *      }
 * }
 * 
 * Tên function lúc khai báo kiểu Expression có thể đặt tên hoặc không. Mục đích đặt tên là để dễ hiểu.
 * Khai báo kiểu Declaration thì được gọi hàm trước khi khai báo hàm, còn Expression thì không, do đặc tính hosting mà sau này mới học. */

/** Chuỗi trong JavaScript 
 * 1. Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào? Lý do?
 *  - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 * 
 * Cách khai báo chuỗi:
 * C1:  var fullName = 'Huy Hoang'
 * C2:  var fullName = new String('Huy Hoang') (cách này giống Java)
 * 
 * Lý do nên dùng cách 1:
 * 1. Ngắn gọn hơn cách 2
 * 2. Nhanh hơn
 * 3. Sinh ra kiểu dữ liệu không mong muốn (test với cách 2. Sử dụng đoạn code sau: "console.log(typeof fullName)" 
 * sẽ ra object chứ không phải string, do khai báo new String như một object)
 * 
 * Sử dụng backslash để ghi được dấu nháy đơn hoặc nháy kép. Còn muốn ghi được dấu backslash thì thêm một dấu nữa (\\ như này thì sẽ hiển thị một dấu \)
 * VD:
 * 
 * fullName = 'Huy Hoang \'tuoi ngua\''
 * console.log(fullName)
 * 
 * Xem độ dài chuỗi: console.log(fullName.length)
 * 
 * Sử dụng template string ES6:
 * 
 * var firstName = 'Huy Hoang'
 * var lastName = 'Nguyen'
 * 
 * console.log(`Toi la: ${firstName} ${lastName}`)
 * thay vì dùng: console.log('Toi la: ' + firstName + ' ' + lastName)
*/

/** Làm việc với chuỗi
 * Lấy ví dụ với chuỗi sau:
 * 
 * var myString = 'Hoc JS tai F8!'
 * 
 * 1. Length
 * Cú pháp:     console.log(myString.length)
 * 
 * 2. Find index
 * Cú pháp:     console.log(myString.indexOf('chuỗi cần tìm'))
 * Nếu có sẽ trả về thứ tự vị trí đứng, không có sẽ trả vè -1
 * 
 * var myString = 'Hoc JS tai JS JS F8!'
 * 
 * Cú pháp:     console.log(myString.indexOf('chuỗi cần tìm', 6))
 * Số 6 có nghĩa là yêu cầu tìm 'chuỗi' cần tìm từ vị trị số 6 chứ không phải từ đầu
 * 
 * Cú pháp:     console.log(myString.lastIndexOf('chuỗi cần tìm'))
 * Tìm kiếm từ cuối chuỗi lên đầu
 * 
 * Cú pháp:     console.log(myString.search('chuỗi cần tìm'))
 * a/ Giống với find index, nhưng không tìm được từ vị trí mong muốn mà nó tìm từ đầu
 * b/ Hỗ trợ tìm cả biểu thức chính quy (chưa được học)
 * 
 * 3. Cut string
 * Cú pháp:     console.log(myString.slice(vị trí bắt đầu, vị trí kết thúc))
 * Muốn tìm từ phải trái, thì phải đếm ngược từ 0, -1, -2,...
 * VD muốn cắt chữ F8 trong myString, ta sử dụng: console.log(myString.slice(-3, -1))
 * 
 * 4. Replace
 * Cú pháp:     console.log(myString.replace('chuỗi mong muốn thay thế', 'chuỗi sẽ thay thế'))
 * VD muốn thay thế JS bằng JavaScript trong chuỗi trên thì dùng: console.log(myString.replace('JS', 'JavaScript'))
 * Lưu ý: nó chỉ thay thế thằng đầu tiên nó gặp, chứ không thay thế tất cả
 * 
 * Cú pháp:     console.log(myString.replace(/JS/g, 'JavaScript')
 * Cái này có chứa biểu thức chính quy, sẽ chọn tất cả những chuỗi 'JS' và thay thế bằng JavaScript
 * 
 * 5. Convert to upper case
 * Cú pháp:     console.log(myString.toUpperCase())
 * 
 * 6. Convert to lower  case
 * Cú pháp:     console.log(myString.toLowerCase())
 * 
 * 7. Trim
 * Cú pháp:     console.log(myString.trim())
 * Loại bỏ những khoảng trống thừa ở đầu và cuối chuỗi
 * 
 * 8. Split
 * Cú pháp:     console.log(languages.split('điểm chung để cắt'))
 * Biến một chuỗi (string) thành một array (chưa học tới, ở mức giới thiệu)
 * VD:
 * var languages = 'JavaScript, Ruby, PHP'
 * console.log(languages.split(', '))
 * Điểm chung của chuỗi kia dấu cách một khoảng trắng.
 * 
 * Muốn cắt từng chữ cái trong một chuỗi chỉ có 1 giá trị, ví dụ là JavaScript, thì điểm chung là một chuỗi rỗng
 * console.log(languages.split(''))
 * 
 * 9. Get a character by index
 * Cú pháp:     console.log(myString2.charAt('vị trí trong chuỗi'))
 * Cách khác:   console.log(myString2[10])
 * 
 * const myString2 = 'Huy Hoang'
 * Kết quả trả về là ký tự ở vị trí đó
 * 
 * Bài tập thực hành trên F8 trong chương "Làm việc với chuỗi":
 * Cho trước chuỗi coursesStr chứa tên các khóa học cách nhau bởi dấu ','.
   Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

   Giải:
    var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

    function strToArray(str) {
        return str.split(', ')
    }

    console.log(strToArray(coursesStr)) */

/** Kiểu dữ liệu số (number)
 * Kiểu số - Number
 * Trong JavaScript có 2 loại số:
 * 1. Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động).
 * Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.
 * 2. Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.
 * Vì mức độ thông dụng nên ở đây chúng ta chỉ tìm hiểu về loại số thông thường.
 * 
 * Cách khai báo
 * Cách thông thường khi ta khai báo một số. Ví dụ là: 1000000 (một triệu)
 * var million = 1000000;
 * Cũng là khai báo số 1000000 nhưng có cách viết khác. Bạn có thể thêm chữ e vào sau số 1 và chỉ định
 * số số không phía sau chữ e như sau:
 * var million = 1e6; // tương tự: 1000000 hoặc
 * var billion = 2e9; // tương tự: 2000000000 (hai tỏi à nhầm hai tỉ)
 * 
 * Đối tượng Number
 * Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số.
 * Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:
 * 
 * Phương thức                              Vai trò
 * Number.isFinite()                        Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
 * Number.isInteger()                       Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
 * Number.parseFloat()                      Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
 * Number.parseInt()                        Chuyển đổi chuỗi đã cho thành một số nguyên
 * Number.prototype.toFixed()               Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
 * Number.prototype.toString(               Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 * 
 * Number.isFinite(2 / 0); // false
 * Number.isFinite(20 / 5); // true
 * Number.isFinite(0 / 0); // false
 * 
 * Number.isInteger(999999999); // true
 * Number.isInteger(0.2);       // false
 * Number.isInteger(Math.PI);   // false
 * 
 * Number.parseFloat('10') // 10
 * Number.parseFloat('10.00') // 10
 * Number.parseFloat('238,21') // 238
 * Number.parseFloat('237.22') // 237.22
 * Number.parseFloat('34 56 78') // 3
 * Number.parseFloat(' 37 ') // 3
 * Number.parseFloat('18 is my age') // 18
 * 
 * Number.parseInt('10') // 1
 * Number.parseInt('10.00') // 1
 * Number.parseInt('238,21') // 23
 * Number.parseInt('237.22') // 237.22
 * Number.parseInt('34 56 78') // 34
 * Number.parseInt(' 37 ') // 3
 * Number.parseInt('18 is my age') // 18
 * 
 * var numberObject = 1234.56789;
 * 
 * numberObject.toFixed(); // '1235
 * numberObject.toFixed(1); // '1234.6
 * numberObject.toFixed(6); // '1234.567890'

 * (11).toString();    // '11'
 * (18).toString();     // '18'
 * (17.3).toString();   // '17.3' */

/**Khi chia một số cho một chuỗi, hoặc bất cứ cái gì không hợp lệ, thì kết quả là NaN.
 * Khi typeof kết quả này, vẫn ra number, nhưng số này là số không hợp lệ.
 * 
 * console.log(isNaN('giá trị cần xét')) //hàm kiểm tra số có hợp lệ */

/** Bài tập trong chương "Làm việc với số" 
 * Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:

    1. Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
    2. Hàm isNumber có 1 tham số, hãy đặt tên nó là value
    3. Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
    4. Số đó là phải là số hợp lệ (không phải NaN)
    
    Giải:
        function isNumber (value) {
            if(typeof value === 'number' && !isNaN(value)) {
                return true
            }
            else {
                return false
            }
        }
        console.log(isNumber(999)); */

/** Mảng trong JavaScript - Array
 * 
 * 1. Tạo mảng
 *  - Cách tạo
 *  - Sử dụng cách nào? Tại sao?
 *  - Kiểm tra data type?
 * 
 * 2. Truy xuất mảng
 *  - Độ dài mảng
 *  - Lấy phần tử theo index 
 * 
 * Cách tạo:
 * C1: var languages = []
 * C2: var languages = new Array()
 * 
 * Cách kiểm tra có phải mảng không:
 * console.log(Array.isArray('tên mảng cần kiểm tra') 
 * 
 * Cách lấy phần tử theo index:
 * console.log('tên mảng cần lấy index'['số thứ tự phần tử cần lấy'] */

/** Làm việc với Array
 * 
 * Cho trước 1 mảng:
 * var languages = [
 *      'JavaScript',
 *      'PHP',
 *      'Ruby'
 * ]
 * 
 * 1. To string
 * Cú pháp:     console.log(languages.toString())
 * Chuyển từ dạng mảng sang dạng chuỗi
 * 
 * 2. Join
 * Cú pháp:     console.log(languages.join('chuỗi muốn nối'))
 * Để trống thì sẽ các giá trị sẽ bị nối liền. Để ' ' thì sẽ cách ra.
 * 
 * 3. Pop
 * Cú pháp:     console.log(languages.pop())
 * Xóa phần tử cuối mảng và trả về phần tử đã xóa. Khi đã hết phần tử trong mảng, thì 
 * sẽ trả về undefined.
 * 
 * 4. Push
 * Cú pháp:     console.log(languages.push('giá trị muốn thêm'))
 * Thêm phần tử vào cuối mảng. Không giới hạn số lượng thêm.
 * 
 * 5. Shift
 * Cú pháp:     console.log(languages.shift())
 * Xóa phần tử đầu mảng và trả về phần tử đã xóa. Khi đã hết phần tử trong mảng, thì 
 * sẽ trả về undefined.
 * 
 * 6. Unshift
 * Cú pháp:     console.log(languages.unshift())
 * Thêm phần tử vào đầu mảng. Không giới hạn số lượng thêm.
 * 
 * 7. Splicing
 * Cú pháp:     languages.splice('số vị trí index', 'số phần tử muốn xóa tính từ số vị trí index', 'phần tử muốn thêm sau số vị trí index')
 * Hàm này có thể dùng để xóa và thêm phần tử trong array. Trường hợp thêm thì không giới hạn số phần tử có thể thêm.
 * Ví dụ muốn xóa ở vị trí số 0 (JavaScript) và thêm vào đó là (Java) thì nhập:
 * languages.splice(0, 1, 'Java')
 * 
 * 8. Concat
 * Cú pháp:     console.log('tên array 1'.concat('tên array 2'))
 * Dùng để nối 2 mảng với nhau.
 * 
 * 9. Slicing
 * Cú pháp:     console.log(languages.slice('số vị trí index bắt đầu', 'số vị trí index kết thúc'))
 * Hàm này sẽ cắt ra các phần tử tính từ vị trí bắt đầu đến vị trí kết thúc.
 * Khác với các hàm cắt khác, là kết quả sẽ là các phần tử được cắt, chứ không phải cắt là xóa đi.
 * Hoặc dùng để copy mảng (trick): console.log(slice(0));
 * Cũng có thể truyền vào giá trị âm, như đếm ngược vậy.
 * Lưu ý: số vị trí index != số vị trí phần tử. */ 

/** Object trong JavaScript*/ 

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


var myString = 'Hoc JS tai F8!'
console.log(myString.slice(-3, -1))
console.log(myString.replace('JS', 'JavaScript'))

// var languages = 'JavaScript, Ruby, PHP'
// console.log(languages.split(', '))

// console.log(Number.parseFloat('238,21'))

var languages = [
    'JavaScript',
    'PHP',
    'Ruby'
]

languages.splice(0, 1, 'Java')
console.log(languages)

// Ví dụ cho hàm join
var cars = ['Honda', 'Mazda', 'Mercedes']
var result = joinWithCharacter(cars, ' - ')

function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}


