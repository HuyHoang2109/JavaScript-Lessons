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

// ==============================================================================================================================

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

// ==============================================================================================================================

/** Toán tử so sánh P2
 * ===
 * !==
 * Khác ở chỗ, toán tử so sánh (==, !=) chỉ quan tâm tới value. Còn (===, !==) này so sánh cả value & data type
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

// ==============================================================================================================================

//  Toán tử logical và câu lệnh điều kiện If (xem video để hiểu, bài này hay)

// ==============================================================================================================================

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

/** Tham số trong hàm 
 * 1. Tham số?
 *  - Định nghĩa
 *  - Kiểu dữ liệu? - vô hạn kiểu dữ liệu, muốn thêm kiểu dữ liệu nào cũng được
 *  - Tính private? - chỉ chạy trong chính hàm đó, mang tham số ra ngoài hàm sẽ không dùng được
 *  - Một tham số
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
 * writeLog('Test message'); //khi gọi hàm đó và truyền vào nó 1 giá trị, thì nó gọi là đối số (argument)
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
 * Dòng code đầu để mở hộp thoại confirm và ghi lại lựa chọn của người dùng, dòng 2 để xuất ra log. */

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

// ==============================================================================================================================

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
 * var showMessage2 = function() {
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

// ==============================================================================================================================

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
 * sẽ ra kiểu dữ liệu là object chứ không phải string, do new String là một object)
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

// ==============================================================================================================================

/** Làm việc với chuỗi
 * Lấy ví dụ với chuỗi sau:
 * 
 * var myString = 'Hoc JS tai F8!'
 * 
 * 1. Length
 * Cú pháp:     console.log(myString.length)
 * 
 * 2. Find index
 * Trả về vị trí đầu tiên khi gặp chuỗi cần tìm.
 * Cú pháp:     console.log(myString.indexOf('chuỗi cần tìm'))
 * Nếu có sẽ trả về vị trí đứng, không có sẽ trả về -1
 * 
 * var myString = 'Hoc JS tai JS JS F8!'
 * 
 * Cú pháp:     console.log(myString.indexOf('chuỗi cần tìm', 6))
 * Số 6 có nghĩa là bắt đầu tìm từ index số 6.
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
 * Muốn tìm từ phải sang trái, thì sử dụng số âm, từ 0, -1, -2,...
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
 * Đưa chuỗi vào trong 1 mảng mới. Cần tìm điểm chung trong chuỗi cũ, giữa các chuỗi với nhau để cắt.
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
 * Cú pháp:     console.log(myString2.charAt(vị trí trong chuỗi))
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

// ==============================================================================================================================

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
 * Number.prototype.toFixed()               Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân. Kết quả trả về là 1 string chứ không phải number, nên cần parseFloat() hoặc parseInt() để đổi lại kiểu number.
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

/** Khi chia một số cho một chuỗi, hoặc bất cứ cái gì không hợp lệ, thì kết quả là NaN.
 *  Khi typeof kết quả này, vẫn ra number, nhưng số này là số không hợp lệ.
 * 
 * console.log(isNaN('giá trị cần xét')) //hàm kiểm tra số có hợp lệ */

// ==============================================================================================================================

/** Bài tập trong chương "Làm việc với số" 
 * Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:

    1. Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
    2. Hàm isNumber có 1 tham số, hãy đặt tên nó là value
    3. Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
    4. Số đó là phải là số hợp lệ (không phải NaN)
    
    Cách giải phía dưới */

// ==============================================================================================================================
        
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
 * console.log(Array.isArray(tên mảng cần kiểm tra) 
 * 
 * Cách lấy phần tử theo index:
 * console.log(tên-mảng-cần-lấy-index[số thứ tự phần tử cần lấy] */

// ==============================================================================================================================

/** Làm việc với Array
 * 
 * Cho trước 1 mảng:
 * var languages = [
 *      'JavaScript',
 *      'PHP',
 *      'Ruby' ]
 * 
 * 1. To string
 * Cú pháp:     console.log(languages.toString())
 * Chuyển từ dạng mảng sang dạng chuỗi
 * 
 * 2. Join
 * Cú pháp:     console.log(languages.join('chuỗi muốn nối'))
 * Để trống thì sẽ các giá trị sẽ bị nối liền. Để ' ' thì sẽ cách ra.
 * Khi join('') với mảng thì mảng đó sẽ thành chuỗi.
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
 * Cú pháp:     languages.splice(số-vị-trí-index, số-phần-tử-muốn-xóa-tính-từ-số-vị-trí-index, 'phần tử muốn thêm sau số vị trí index')
 * Hàm này có thể dùng để xóa và thêm phần tử trong array. Trường hợp thêm thì không giới hạn số phần tử có thể thêm.
 * Ví dụ muốn xóa ở vị trí số 0 (JavaScript) và thêm vào đó là (Java) thì nhập:
 * languages.splice(0, 1, 'Java')
 * 
 * 8. Concat
 * Cú pháp:     console.log(tên-array-1.concat(tên-array-2))
 * Dùng để nối 2 mảng với nhau.
 * 
 * 9. Slicing
 * Cú pháp:     console.log(languages.slice(số-vị-trí-index-bắt-đầu, số-vị-trí-index-kết-thúc))
 * Kết quả trả về là ký tự nằm trong khoảng bắt đầu và kết thúc.
 * Hàm này giống "trích" ra chứ không phải cắt phần tử khỏi mảng.
 * Hoặc dùng để copy mảng (trick): console.log(slice(0));
 * Cũng có thể truyền vào giá trị âm, như đếm ngược vậy.
 * Lưu ý: số vị trí index != số vị trí phần tử. */ 

// ==============================================================================================================================

/** Object trong JavaScript
 * Cú pháp:     var 'tên object' = {
 *                      key: 'value' }
 * VD:
 * var myInfo = {
 *      name: 'Huy Hoang,
 *      age: 22,
 *      address: 'TPHCM }
 * 
 * Muốn đặt tên key mà bị trùng với những kí tự vi phạm, ta biến key đó thành dạng chuỗi
 * VD: 'full-name': 'Huy Hoang' //ở đây dấu gạch ngang là vi phạm, nên biến nó thành chuỗi bằng cách thêm cặp nháy đơn
 * 
 * Thêm 1 cặp key:value vào object:
 * Cú pháp:     tên-object.tên-key = 'các value'
 * VD:          myInfo.email = 'huyhoang4675@gmail.com'
 * 
 * Thêm 1 cặp key:value, mà tên key lại bị trùng với kí tự vi phạm:
 * Cú pháp:     tên-object['tên-key'] = 'các value'
 * VD:          myInfo['my-email'] = 'huyhoang4675@gmail.com'
 * 
 * Muốn lấy 1 giá trị ra khỏi object, cần biết key của nó là gì. Ví dụ muốn lấy Huy Hoàng từ myInfo:
 * Cú pháp:     console.log(tên-object.tên-key)
 * VD:          console.log(myInfo.name)
 * 
 * Cách 2:
 * Cú pháp:     console.log(tên-object['tên-key'])
 * VD:          console.log(myInfo['my-email'])
 * 
 * Bài toán: Cho 2 biến với nội dung sau. Lấy nội dung của key address bằng cách dựa vào 1 biến khác.
 * var myInfo như ở trên
 * var myKey = 'address'
 * 
 * Giải:        console.log(myInfo[myKey])
 * Giải thích:
 * Đống trong [] sẽ thực hiện lấy giá trị từ object myInfo thông qua giá trị được lưu trong biến myKey.
 * Mà myKey có giá trị là 'address' -> nó sẽ có dạng myInfo['address'] -> kết quả là 'TPHCM'
 * 
 * Tạo 1 cặp key:value thông qua 1 biến
 * Có 1 biến khác, có dạng như sau. Khi thêm vào object, nhập như sau:
 * var emailKey = 'email'
 * 
 * Cú pháp:
 * var tên-object = {
 *      [tên-biến] = 'các value'
 * }
 * 
 * VD:
 * var myInfo = {
 *      [emailKey] = 'huyhoang4675@gmail.com'
 * }
 *  
 * Xóa 1 cặp key:value trong object
 * Sử dụng từ khóa 'delete'
 * Cú pháp:     delete tên-object.tên-key
 * VD:          delete myInfo.age
 * 
 * Có thể tạo 1 function trong object, và nó vẫn gọi được như thường.
 * VD trong myInfo có 1 hàm getName như sau:
 * var myInfo = {
 *      getName: function {
 *          return this.name
 *      } //hàm này sẽ lấy giá trị ở key 'name'
 * }
 * 
 * Cú pháp:     console.log(tên-object.tên-hàm())
 * VD:          console.log(myInfo.getName())
 * 
 * Trong 1 object, nếu có hàm trong đó, thì hàm đó được gọi là phương thước (method).
 * Những cái khác thì gọi là thuộc tính (property). */

// ==============================================================================================================================

 /** Object Constructor 
 * function User(firstName, lastName, avatar) {
 *      this.firstName = firstName,
 *      this.lastName = lastName,
 *      this.avatar = avatar
 * 
 *      this.getName = function () {
 *          return `${this.firstName} ${this.lastName}`
 *      }
 * }
 * User ở đây là một Object Constructor. Quy ước chung khi đặt tên là luôn viết hoa chữ cái đầu.
 * 
 * var author = new User('Huy Hoang', 'Nguyen', 'avatar')
 * var user = new User('Khoa', 'Nguyen', 'avatar')
 * 
 * author.title = 'Chia sẻ tạo tại F8'
 * user.comment = 'Abc'
 * //Thêm thuộc tính title cho biến author và thêm thuộc tính comment cho biến user
 * 
 * console.log(author.getName())
 * console.log(user.getName())
 * //2 console.log này sẽ gọi hàm getName trong Object Constructor 'User' cho 2 biến author và user. */ 

// ==============================================================================================================================

/** object Prototype - Basic
 * 1. Prototype là gì?
 * 2. Sử dụng khi nào? 
 * 
 * 1. Prototype giống như nguyên liệu để làm ngôi nhà. Chẳng hạn như khi ta đã khai báo một OC trước,
 * bây giờ muốn thêm 1 thuộc tính/phương thức vào đó mà không phải chỉnh sửa trong OC, thì ta sử dụng prototype.
 * 
 * Cú pháp với thuộc tính:
 * tên-object.prototype.tên-thuộc-tính-muốn-tạo = 'nội dung thuộc tính'
 * VD:          User.prototype.className = 'F8' 
 * 
 * Cú pháp với phương thức:
 * tên-object.prototype.tên-phương-thức-muốn-tạo = function() {
 *      'nội dung phương thức'
 * }
 * VD:
 * User.prototype.getClassName = function() {
 *      return this.className
 * } */

/** Đối tượng Date
 * var date = new Date()
 * 
 * console.log(date)
 * Kết quả trả về là một chuỗi gồm thứ, ngày, tháng, giờ hiện tại
 * Search: Date JavaScript Mozilla để tìm hiểu thêm về phương thức Date */ 

// ==============================================================================================================================

/** Math Object
 *  - Math.PI:              lấy số PI
 *  - Math.round():         làm tròn số
 *  - Math.abs():           lấy giá trị tuyệt đối
 *  - Math.ceil():          làm tròn số lên
 *  - Math.floor():         làm tròn số xuống
 *  - Math.random():        tạo số ngẫu nhiên
 *  - Math.min():           tìm số bé nhất trong dãy số   
 *  - Math.max():           tìm số lớn nhất trong dãy số   
 * 
 * VD cho Math.random():
 * 
 * var random = Math.floor(Math.random() * 5 )
 * //Biến random này gồm 1 hàm tạo random từ 1-5, rồi làm tròn số xuống bằng hàm floor
 * 
 * var bonus = [
 *      '10 coin',
 *      '20 coin',
 *      '30 coin',
 *      '40 coin',
 *      '50 coin',
 * ];
 * 
 * console.log(bonus[random]) 
 * 
 * Bài tập cho Math Object:
 * 
 * Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
 * 
 * Bài giải phía dưới.*/

// ==============================================================================================================================

/** Lệnh rẽ nhánh If - else
 * Cho bài tập: Hãy hoàn thành đoạn code sau, đáp ưng các yêu cầu:
 * 1. Khi a chia hết cho 3 thì return về 1
 * 2. Khi a chia hết cho 5 thì return về 2
 * 3. Khi a chia hết cho 15 thì return về 3
 * 
 * Bài giải ở phía dưới.*/

// ==============================================================================================================================

/** Câu lệnh rẽ nhánh Switch
 * Khi bài toán cần so sánh toán tử, đúng sai thì dùng if else: < > != == 
 * Khi bài toán biết trước các điều kiện/kết quả, và có 3 cái trở lên, dùng switch */ 

// ==============================================================================================================================

/** Toán tử 3 ngôi - Ternary Operator 
 * Cú pháp:     điều-kiện ? kết-quả-nếu-điều-kiện-1-đúng : kết-quả-nếu-điều-kiện-1-sai
 * VD:          var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí' 
 * Giải thích:  Nếu course.coin > 0, thì sẽ in ra giá trị với chữ Coins. Những trường hợp < 0 thì in ra Miễn phí */ 

// ==============================================================================================================================

/** Vòng lặp - Loop
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of - Lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 * 
 * 1. Vòng lặp For
 * Cho bài tập sau:
 * Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
 * Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên,
 * giá trị trong khoảng từ min tới max.
 * Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
 * Bài giải phía dưới.
 * 
 * Vòng lặp For - phần 2
 * Cho bài tập sau:
 * Cho trước một mảng chứa số, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
 * Bài giải phía dưới.
 * 
 * Vòng lặp For - phần 3
 * Cho bài tập sau:
 * Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object
 * và đều có 1 key là price để thể hiện giá trị của mặt hàng đó. Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
 * Bài giải phía dưới.
 * 
 * Giải thích 1 chút về cách làm:
 * 1. Tạo 1 biến, lưu vào đó chiều dài mảng
 * 2. Tạo 1 biến lưu tổng tiền
 * 3. Tạo 1 vòng for bắt đầu từ 0, chạy tới khi kết thúc mảng (là biến vừa tạo ở b1), tăng dần
 * Lưu ý: học cách gọi lấy biến từ 1 mảng 
 
 * 2. Vòng lặp For/in
 * 
 * Cho ví dụ sau:
 * 
 * var myInfo = {
 *      name: 'Huy Hoang',
 *      age: 18,
 *      address: 'TPHCM' }
 * 
 * for (var key in myInfo) {
 *      console.log(myInfo[key]) } //Output là từng value trong object trên.
 * 
 * hoặc
 *      console.log(key) } //Output là từng key trong object trên.
 * 
 * Lưu ý: key của 1 object là dạng string
 * 
 * var languages = [
 *      'JavaScript',
 *      'PHP',
 *      'Ruby']
 * 
 * for (var key in languages) {
 *      console.log(languages[key]) } //Output là từng giá trị trong mảng trên.
 * //Giải thích: vì key trong vòng for trên lưu vị trí index (0, 1, 2, ...).
 * 
 * Lưu ý: key của 1 array là dạng number (key của 1 string cũng là 1 number)
 * 
 * var languages = 'JavaScript'
 * 
 * for (var key in languages) {
 *      console.log(languages[key]) } //Output sẽ in ra từng chữ trong chuỗi trên 
 * 
 * Cho bài tập sau:
 * Hãy hoàn thành hàm sao cho kết quả được như kết quả mong đợi.
 *  // Expected results:     console.log(run({ name: 'Nguyen Van A', age: 16 }));
    // Output:
    // [
    //     "Thuộc tính name có giá trị Nguyen Van A",
    //     "Thuộc tính age có giá trị 16"
    // ] 
    
 * Phân tích một tí:
    1. Output là 1 mảng -> cần 1 biến lưu mảng này
    2. Output gồm các câu hoàn chỉnh -> phải dùng nối chuỗi (template ES6) hoặc dùng cách thường
    
 * Bài giải phía dưới
    
 * 3. Vòng lặp For/of 
 * 
 * Sử dụng trong trường hợp muốn lấy ra những phần tử của 1 mảng, hoặc những ký tự của 1 chuỗi.
 * Không áp dụng được với object. Muốn sử dụng phải biến đổi 1 chút.
 * Cho ví dụ sau
 * var languages = [
 *      'JavaSript',
 *      'PHP',
 *      'Ruby' ]
 * 
 * for(var value of languages) {
 *      console.log(value) }  //Output sẽ là từng giá trị trong mảng trên.
 * 
 * var languages = 'JavaScript'
 * for(var value of languages) {
 *      console.log(value) }  //Output sẽ là từng ký tự trong chuỗi đó (giống kết quả với For/in bên trên)
 * 
 * Trong trường hợp muốn sử dụng For/of để lấy value từ 1 object, ta có 2 cách:
 * 
 * Cách 1: duyệt qua từng key trong object
 * console.log(Object.keys(myInfo)) //Hàm này để lấy ra keys trong object. Không cần đưa vào code, nó chỉ được đưa ra để dễ hiểu thôi.
 * 
 * for(var value of Object.keys(myInfo)) {
 *      console.log(value) } 
 * 
 * Cách 2: duyệt thẳng qua từng value trong object
 * console.log(Object.values(myInfo)) //Hàm này để lấy ra keys trong object. Không cần đưa vào code, nó chỉ được đưa ra để dễ hiểu thôi.
 * 
 * for(var value of Object.values(myInfo)) {
 *      console.log(value) } 
 * 
 * Vòng lặp while
 * 
 * Bài toán: In số tăng dần từ 1 tới 100
 * Cách làm:
 * var i = 0;
 * 
 * while (i < 100) {
 *      i++;
 *      console.log(i) } 
 * 
 * Vòng lặp do/while
 * 
 * Bài tập trong phần lý thuyết để suy nghĩ:
 * 
 * var i = 0;
 * var isSuccess = false;
 * 
 * do {
 *      i++;
 *      console.log('Nạp thẻ lần ' + i;
 *      if(true) {
 *          isSuccess = true; }
 * } while (!isSuccess && i <=3)
 * 
 * Giải thích:
 * 1. Phương thức if sẽ gán cho mọi boolean bằng true (theo như code) -> phần code bên trong if sẽ được chạy -> isSuccess = true -> Code được chạy 1 lần
 * 2. So sánh while. Lúc này isSuccess = true -> !isSuccess = !true -> false -> cả vế = false -> sai điều kiện -> dừng code
 * 3. Nếu đổi thành if(false) thì tự giải thích nhé. 
 * 
 * Break và Continue trong vòng lặp
 * Break và Continue có thể sử dụng trong tất cả các vòng lặp đã học
 * 
 * Bài toán 1: In ra chỉ từ số 1 - 5 với vòng for cho trước, sử dụng break hoặc continue.
 * for(var i = 0; i < 10; i++) {
 *      console.log(i)
 *      if(i >= 5) {
 *          break }
 * 
 * Bài toán 2: In ra chỉ các số chẵn/lẻ với vòng for cho trước, sử dụng break hoặc continue.
 * for(var i = 0; i < 10; i++) {
 *      if(i%2 !== 0) {
 *          continue; }
 *      console.log(i) }
 * 
 * Giải thích 1 chút:
 * 1. Phương thức if so sánh điều kiện, nếu i là số lẻ, sẽ thực thi code phía trong, và ngược lại.
 * 2. Khi xét tới các trường  hợp số chẵn -> sai điều kiện -> không chạy code phía trong (continue) -> chạy console.log
 * 3. Khi xét tới các trường hợp số lẻ -> đúng điều kiện -> chạy code phía trong (continue) -> bỏ qua các trường hợp này và không chạy code phía -> console.log không được chạy */ 

// ==============================================================================================================================

/** Vòng lặp lồng nhau - Nested Loop
 * 
 * var array = [
 *      [1, 2]
 *      [2, 3]
 *      [3, 4] ];
 * 
 * for (var i = 0; i < array.length; i++) {
 *      for (var j = 0; j < array[i].length; j++) {
 *          console.log(array[i][j]) } } */ 

// ==============================================================================================================================

/** Bài toán xóa phần tử trùng lặp (không dùng các hàm có sẵn trong JavaScript) 
 * Trong JavaScript, có sẵn 1 Constructor Function tên là "Set". Đặc tính của nó là những element của nó là unique, có nghĩa element có lặp lại 
 * thì vẫn lấy element đó 1 lần thôi.
 * 
 * var array = ['a', 'b', 'c', 'a', 'b', 'c',]
 * console.log(new Set(array))
 * //Kết quả sẽ trả về 1 object có chứa các phần tử unique. Nhưng bài toán lại muốn trả về 1 mảng, nên ta biến đổi một tí, sử dụng Spread Operator trong ES6.
 * console.log([...(new Set(array))])
 * 
 * Muốn sử dụng đệ quy, ta phải tuân thủ các quy tắc sau:
 * 1. Xác định điểm dừng
 * 2. Logic handle => để tạo ra điểm dừng
 * 
 * Ví dụ tạo function countdown:
 * function countDown(num) {
 *      if(num > 0) {
 *          console.log(num)
 *          return countDown(num - 1)
 *      }
 *      return num;
 * }
 * countDown(10)
 * 
 * Ví dụ về đệ quy:
 * function loop(start, end, cb) { // cb ở đây là callback
 *      if( start <= end) {
 *          cb(start)
 *          return loop(start + 1, end, cb)
 *      }
 * }
 * 
 * var array = ['JavaScript', 'PHP', 'Ruby']
 * loop(0, array.length - 1, function(index) {
 *      console.log('index: ', index) }
 * 
 * Ví dụ tính giai thừa:
 * function giaiThua(number) {
 *      var output = 1
 *      for(var i = number; i > 0; i--) {
 *          output = output * il
 *      }
 *      return output;
 * }
 * console.log(giaiThua(6))
 * 
 * Tính giai thừa theo cách dệ quy:
 * function giaiThu(number) {
 *      if (number > 0) {
 *          return number * giaiThua(number - 1)
 *      }
 *      return 1 //return 1 là vì 0! = 1
 * }
 * console.log(giaiThua(3)) */

// ==============================================================================================================================

/** Array methods 
 *      forEach()
 *      every()
 *      some()
 *      find()
 *      filter()
 *      map()
 *      reduce() 
 * 
 * Tại sao các mảng lại gọi được các phương thức này? (VD: courses.map(), courses.filter())
 * Vì Array Constructor nó đã được định nghĩa sẵn (built-in) những phương thức này rồi. Việc ta khai báo 1 Array,
 * thật chất là tạo Array từ Array Constructor, nên nó sẽ thừa hưởng những phương thức sẵn có đó của Array Constructor.
 * 
 * var courses = [
 *      {
 *          id: 1,
 *          name: 'JavaScript' ,
 *          coin: 250
 *      },
 *      {
 *          id: 2,
 *          name: 'HTML, CSS' ,
 *          coin: 0
 *      },
 *      {
 *          id: 3,
 *          name: 'Ruby' ,
 *          coin: 0
 *      },
 *      {
 *          id: 4,
 *          name: 'PHP' ,
 *          coin: 400
 *      },
 *      {
 *          id: 5,
 *          name: 'ReactJS' ,
 *          coin: 500
 *      }]
 * 
 * 1. Phương thức forEach() dùng để duyệt qua từng phần tử của mảng. Bên trong forEach là một function, hay còn gọi là callback.
 * The forEach() method in JavaScript doesn't return a value because it's designed to execute a provided function once 
 * for each element in an array without producing a new array or result. It focuses solely on performing side effects, 
 * like modifying elements, logging to the console, or interacting with external resources.
 * 
 * courses.forEach(function (course, index) {
 *      console.log(index, course)
 * } //course ở đây đại diện cho từng phần tử trong mảng, index là vị trí của phần tử đó (thường không cần, thêm vào để ví dụ thôi)
 * 
 * 
 * 2. Phương thức every() dùng để kiểm tra tất cả các phần tử trong mảng thỏa mãn một điều kiện nào đó. 
 * Giá trị trả về của every() là boolean. Hàm này sẽ xét điều kiện cho từng phần tử, nếu điều kiện sai ngay từ phần tử đầu thì sẽ là false luôn.
 * var isFree = courses.every(function (course, index) {
 *      console log(index) //in ra để thấy hàm đang xét tới đâu
 *      return course.coin === 0
 * })
 * console.log(isFree)
 * //Trả về true nếu tất cả các khoá học đều miễn phí, false nếu ngược lại.
 * 
 * 
 * 3. Phương thức some() cũng duyệt từng phần tử như every(), nhưng some() chỉ cần 1 phần tử đúng điều kiện thì sẽ trả về true và dừng vòng lặp.
 * Kết quả trả về là true/false.
 * var isFree = courses.some(function (course, index) {
 *.     console log(index) //in ra để thấy hàm đang xét tới đâu
 *      return course.coin === 0
 * })
 * console.log(isFree)
 * 
 * 
 * 4. Phương thức find() sẽ tìm và trả về phần tử đầu thoả mãn điều kiện. Nếu không có phần tử nào thoả mãn, sẽ trả về undefined. 
 * Kết quả trả về trong mảng mới.
 * var course = courses.find(function (course) {
 *      return course.name === 'Ruby'
 * })
 * console.log(course)
 * 
 * 
 * 5. Phương thức filter() cũng tìm kiếm giống hàm find(), nhưng nó trả về tất cả những phần tử thoả mãn điều kiện.
 * Kết quả trả về trong mảng mới.
 * var listCourses = courses.filter(function (course) {
 *      return course.name === 'Ruby'
 * })
 * console.log(listCourses) */

// ==============================================================================================================================

 /** Bài tập Làm việc với Mảng - Phần 2
 * Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
 * 
 * Bài giải phía dưới.*/

// ==============================================================================================================================

 /** Phương thức map(). 
 * The map() method in JavaScript is used to create a new array by applying a function to each element of an existing array. 
 * It’s a very handy tool when you want to transform the elements of an array without changing the original array.
 * Trong cái function bên trong map(), nó return lại cái gì, thì những vị trí của element đó sẽ nhận được cái đó trong mảng mới.
 * Phương thức này có 3 tham số: tham số đầu là item của array, tham số thứ 2 là index, tham số thứ 3 là originArray (thường ít khi được dùng, trả về array trước khi sửa đổi)
 * Thử với cách khai báo thứ 3, return 123, thì tất cả phần tử sẽ là 123.
 * 
 * Cú pháp:
 * C1:
 * var newCourses = courses.map(function (course) {})
 * 
 * C2:
 * var courseHandler = function() {}
 * var newCourses = courses.map(courseHandler)
 * 
 * C3:
 * function courseHandler(course) {}
 * var newCourses = courses.map(courseHandler)
 * console.log(newCourses)
 * 
 * Bài toán đặt ra là, với mảng courses cho trước, thêm chữ khóa học trong name, và thêm coinText bằng với coin.
 * 
 * Bài giải phía dưới.*/

// ==============================================================================================================================

 /** Phương thức reduce() sẽ nhận 2 đối số truyền vào: 1 là function(), 2 là giá trị khởi tạo (GTKT)
 * GTKT không bắt buộc, nhưng sẽ ảnh hưởng đến cách reduce() chạy. Khi không có initial value thì nó sẽ lấy phần tử đầu tiên
 * của mảng để làm GTKT. Khi đó, giá trị currentValue lại là giá trị của phần tử thứ 2.
 * VD: var totalCoin = courses.reduce(coinHandler, 0)
 * Trong function, return lại cái gì thì biến lưu trữ sẽ lưu cái đó.
 * 
 * Cú pháp như map() bên trên.
 * 
 * var i = 0;
 * 
 * function coinHandler(accumulator, currentValue, currentIndex, originArray) { 
 * //accumulator ở đây là biến lưu trữ, và giá trị khởi tạo là 0 như bên dưới. Accumulator có thể là bất cứ kiểu giá trị nào.
 *      i++
 *      console.table({
 *          'Lượt chạy: ': i,
 *          'Biến tích trữ: ': accumulator,
 *          'Giá khóa học: ': currentValue.coin
 *      })
 * }
 * 
 * var totalCoin = courses.reduce(coinHandler, 0)
 * 
 * Bài toán đặt ra là, một mảng mới với 1 biến duy nhât là tổng coin của các khóa học. Bài giải phía dưới.*/

// ==============================================================================================================================

 /** Thực hàng sử dụng phương pháp reduce() #1
 * Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. 
 * Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao 
 * Việt Nam đạt được trong kỳ SEA Game lần này.
 * Bài giải phía dưới.
 * 
 * Sử dụng các Array methods thay cho các vòng For có các lợi ich sau:
 * 1. Dễ hiểu (thật ra nếu chưa biết tới các methods này thì vòng for dễ hiểu hơn)
 * 2. Ngắn gọn (các array methods sinh ra để nó làm ngắn gọn đi code)
 * 3. Hiệu năng (các array methods chỉ nhanh hơn khoảng 1/vài nghìn giây thôi, khi xử lý dữ liệu lớn mới thấy rõ) */ 

// ==============================================================================================================================

/** Ví dụ Array reduce() method #1
 * Flat - "Làm phẳng" mảng từ Depth Array (Mảng sâu)
 * Đề và bài giải phía dưới.
 * 
 * Ví dụ Array reduce() method #2
 * Lấy ra các khóa học đưa vào 1 mảng mới
 * Đề và bài giải phía dưới.*/  

// ==============================================================================================================================

/** Thực hành sử dụng phương thức reduce() #2
 * Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.

 * Gợi ý
 * Dùng phương thức filter để lấy ra những bộ phim do Christopher Nolan làm đạo diễn
 * Dùng phương thức reduce để tính tổng điểm IMDB
 * Tính điểm IMDB trung bình 
 * 
 * Bài giải phía dưới. */ 

// ==============================================================================================================================

/** Phương thức reduce() có logic như thế nào? 
 * Bài này khá khó hiểu, chắc phải xem lại cả video thì mới hiểu được.
 * Bài toán đặt ra là tự viết 1 phương thức mới, sao cho hoạt động như phương thức reduce().
 * Bài giải phía dưới. */

// ==============================================================================================================================

/** String/Array includes() method.
 * Phương thức này dùng để tìm kiếm những ký tự có trong chuỗi/mảng đó không.
 * Cú pháp:
 * console.log(tên-mảng-chuỗi.includes('chuỗi ký tự cần tìm', vị-trí-bắt-đầu-tìm-kiếm))
 * Vị trí bắt đầu tìm kiếm có thể là số dương hoặc số âm. Với số âm, nó sẽ lấy độ dài mảng + số đó = vị trí bắt đầu tìm kiếm.
 * 
 * VD với chuỗi:
 * var title = 'Responsive web design'
 * 
 * console.log(title.includes('web')) //Output: true
 * 
 * Tương tự với mảng. */

// ==============================================================================================================================

/** Callback?
 * Là hàm (function) được truyền qua đối số khi gọi hàm khác 
 * 1. Là hàm
 * 2. Được truyền qua đối số 
 * 3. Được gọi lại (trong hàm nhận đối số)
 * 
 * VD:
 * function myFunction(param) {
 *  if (typeof param === 'function') {
 *      param('Học lập trình') } }
 * 
 * function myCallback(value) {
 *  console.log('Value: ',value)}
 * 
 * myFunction(myCallback) //Output: Value: Học lập trình
 * 
 * Giải thích:
 * 
 * myFunction được gọi, myCallback được truyền vào như một đối số, có nghĩa là param trong myFunction là myCallback.
 * -> param('Học lập trình') -> myCallback('Học lập trình')
 * Từ đây, myCallback nhận 'Học lập trình' là value -> KQ: Value: Học lập trình
 * Chỗ if là để kiểm tra myCallback có phải là 1 function không, vì nếu không phải sẽ lỗi.
 * 
 * Thực hành lý thuyết và bài tập bên dưới. */ 

// ==============================================================================================================================

/** Empty element array? 
 * VD cho mảng:
 * var courses = ['JavaScript', 'PHP'] 
 * 
 * courses.length = 10
 * console.log(courses)
 * 
 * for (var i = 0; i < courses.length; i++) { console.log(courses[i]) }
 * 
 * for (var index in courses) { console.log(courses[index]) }
 * 
 * 1286: Mặc dù mảng chỉ có 2 phần tử, nhưng khi console.log thì độ dài là 10 (2 phần tử thực, và 8 phần tử empty)
 * 1288: Tương tự, console.log ra 2 phần tử thực, 8 phần tử undefined. Và dùng vòng for như này không hiệu quả, vì
 * nó vẫn quét cả những phần tử không thực. Vậy nên ta dùng vòng for như dòng 1282, vì nó sẽ chỉ duyệt những phần tử thực. */ 

// ==============================================================================================================================

/** My forEach() method 
 * 
 * Đề và bài giải phía dưới.*/

// ==============================================================================================================================

/** My filter() method
 * 
 * Đề và bài giải phía dưới. */

// ==============================================================================================================================

/** My some() method 
 * 
 * Đề và bài giải phia dưới. */ 

// ==============================================================================================================================

/** My every() method 
 * 
 * Đề và bài giải phia dưới.*/ 

// ==============================================================================================================================

/** HTML DOM là gì?
 * DOM: Document Object Model (mô hình tài liệu đối tượng)
 * DOM tuân theo quy chuẩn W3C (World Wide Web Consortium)
 * DOM gồm 3 thành phần:
 * 1. Element
 * 2. Attribute
 * 3. Text */ 

// ==============================================================================================================================

/** HTML DOM vs DOM API
 * JavaScript # DOM như sau:
 * 
 * JavaScript được thực hiện ở trên Browser hoặc trên Server (NodeJS). Bản thân nó không có DOM.
 * Browser thì có sẵn DOM, thông qua việc gọi WEB API khi khởi tạo 1 website. */ 

// ==============================================================================================================================

/** Document Object
 * Học thêm cách viết vào HTML DOM:
 * 
 * document.write('chuỗi muốn viết')
 * Chuỗi muốn viết sẽ được ghi vào sau <script></script> của file html, hoặc nếu viết ở file html thì viết ở đâu,
 * nó sẽ xuất hiện ở đó.*/ 

// ==============================================================================================================================

/** Get element method 
 * 
 * 1. Có thể get element bằng cách gọi:
 * ID, class, tag, CSS selector, HTML collection
 * 
 * 2. Cú pháp get bằng ID:
 * document.getElementById('id của đối tượng muốn lấy') 
 * 
 * Kết quả trả về là element có id muốn lấy.
 * 
 * 3. Cú pháp get bằng className:
 * document.getElementsByClassName('className của đối tượng muốn lấy')
 * 
 * Kết quả trả về là 1 HTML Collection gồm các phần tử chứa className cần lấy
 * 
 * 4. Cú pháp get bằng tagName:
 * document.getElementsByTagName('tagName của đối tượng muốn lấy') 
 * 
 * Kết quả trả về là 1 HTML Collection gồm các phần tử chứa tagName cần lấy
 * 
 * 5. Cú pháp get bằng CSS selector:
 * a. Chỉ chọn ra phần tử đầu
 * document.querySelector('selector muốn lấy')
 * VD: document.querySelector('.heading')
 * 
 * VD: document.querySelector('html .box .heading')
 * VD: document.querySelector('html .box .heading:first-child')
 * VD: document.querySelector('html .box .heading:nth-child(2)')
 * 
 * Kết quả trả về là phần tử đầu tiên nó gặp thõa mãn điều kiện
 * 
 * b. Chọn tất cả phần tử
 * document.querySelectorAll('selector muốn lấy')
 * VD: document.querySelectorAll('.heading')
 * 
 * Kết quả trả về là 1 NodeList, bao gồm các phần tử chứa selector muốn lấy.
 * 
 * Bonus cách lấy phần tử từ NodeList:
 * console.log(tên-biến-lưu-trữ[vị-trí-phần-tử-muốn-lấy])
 * 
 * 6. Cú pháp get bằng HTML Collection:
 * Thằng này có một số cái gọi trực tiếp được luôn, không cần get bằng ID hay className.
 * VD: console.log(document.forms)
 * 
 * Đặc biệt cái form, ngoài lưu bằng index (0, 1, 2,...) ra thì nó còn lưu theo key (nó tự tạo), với tên key
 * trùng với tên id/tên class.
 * a. Tên id/tên class phải để trong dấu nháy (vì vi phạm quy tắc đặt tên nếu không để dấu '-')
 * VD: console.log(document.forms['tên id/tên class muốn lấy'])
 * 
 * b. Tên id/tên class đặt đúng theo quy tắc (VD: testForm)
 * VD: console.log(document.forms.tên-id-hoặc-tên-class-muốn-lấy)
 * 
 * 7. Cú pháp get bằng tag:
 * document.tên-tag
 * VD: document.anchors, document.images
 * Với VD trên, KQ trả về là tất cả thẻ <a> có thuộc tính name. Còn nếu không có thì sẽ là một mảng HTML Collection trống.
 * -> các thẻ được get bằng tag phải có thuộc tính name.
 * 
 * Bài thực hành giải phía dưới. */ 

// ==============================================================================================================================

/** Get element methods 2
 * Bài toán 1 đặt ra là làm sao lấy được các thẻ <li> trong class box-1.
 * Bài toán 2:
 * Với công việc 1: sử dụng tới `boxNode`
 * Với công việc 2: sử dụng tới các li elements là con của box-1
 * Tương tự nếu muốn gọi các tagName khác là con của box-1, đều sử dụng cách trên.
 * Coi bên file thực hành.*/ 

// ==============================================================================================================================

/** Get element methods 2
 * Ôn lại 5 phương thức đã học & sửa lỗi sai bài tập.
 * 
 * Cho file index.html như sau:
 * 
 * <h1> Học lập trình tại F8</h1>

    <section> 
        <h2>Học JS HTML DOM</h2>
            </section>

    <div>
        <h3>Làm bài tập ngay trên F8</h3>
    </div>

    Yêu cầu:
    1. Lấy h1 element và lưu vào biến h1Element
    2. Lấy h2 element và lưu vào biến h1Element
    3. Lấy h2 element và lưu vào biến h1Element

    Cái sai ở đây là sử dụng getElementsByTagName thì sẽ trả về 1 HTML Collection chứ không phải biến đó.
    -> sử dụng querySelector.
    Nếu muốn sử dụng tagName, thì phải sử dụng gọi index từ mảng HTML Collection.
    VD:
    var h1Element = document.getElementsByTagName('h1')[0]
    hoặc lấy ở console.log
    var h1Element = document.getElementsByTagName('h1')
    console.log(h1Element[0]) */

// ==============================================================================================================================

/** Attribute node & Text node
 * 
 * Attribute node là các thuộc tính. 
 * Text Node là các phần chữ mình viết trong các cặp thẻ. */

// ==============================================================================================================================

/** DOM attribute
 * 
 * 1. Thêm attribute vào 1 cặp thẻ (mà không sửa file html):
 * 
 * var headingElement = document.querySelector('h1') //VD ở đây thẻ này là h1
 * 
 * Cú pháp: headingElement.title('Heading') 
 * Mặc dù Inspect Element ra thấy, nhưng khi vào Page Source thì nó không có, vì nó chỉ thực hiện khi file JS được thực thi. 
 * 
 * Lưu ý, muốn thêm class thì sử dụng className chứ không phải class, vì trùng với từ khóa của quy chuẩn.
 * Cách này không thêm được thuộc tính thuộc cặp thẻ đó. VD: không thêm được atr href nếu không phải thẻ <a>.
 * VD: headingElement.className('Heading')
 * 
 * 2. Thêm attribute bằng phương thức
 * 
 * Cú pháp: headingElement.setAttribute('class', 'Heading')
 * Phương thức nhận 2 đối số. Đối số 1: thuộc tính muốn thêm, đối số 2: tên thuộc tính.
 * 
 * Cách này thêm được các thuộc tính custom, cũng như thuộc tính không thuộc cặp thẻ đó.
 * VD: headingElement.setAttribute('data-1', 'Heading')
 * 
 * 3. Lấy các thuộc tính 
 * 
 * Cú pháp: console.log(headingElement.getAttribute('class'))
 * Vì phương thức này chỉ lấy, nên cần console.log để in ra.
 * Phương thức nhận 1 đối số, là thuộc tính cần lấy. Cái gì setAttribute được thì đều getAttribute được.
 *     
 * Thực hành với DOM Attribute
 * Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:
    
    <!DOCTYPE html>
    <html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>F8 - Học lập trình để đi làm</h1>
        <p>Truy cập <a>fullstack.edu.vn</a> để học lập trình miễn phí các bạn nhé!!!</p>
    </body>
    </html>

    1. Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
    2. Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
    3. Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
    4. Thêm thuộc tính target có giá trị "_blank" cho thẻ a. 
    
 * Bài giải phía dưới. */

// ==============================================================================================================================
    
/** innerText vs textContent Property
 * 
 * 1. innerText
 * var headingElement = document.querySelector('.heading')
 * 
 * Lấy ra:      console.log(headingElement.innerText)
 * Sửa đổi:     headingElement.innerText = 'New heading'
 * 
 * 2. textContent
 * Lấy ra:      console.log(heading.Element.textContent)
 * Sửa đổi:     headingElement.textContent = 'New heading'
 * 
 * 3. Giống nhau
 * Cả 2 đều là các phương thức thuộc Element node, có nghĩa muốn gọi Text node trong Element đó thì phải từ Element
 * node đó gọi phương thức (nào đó) để get Text node, chứ bản thân Text node không có phương thức lấy ra.
 * 
 * 4. Khác biệt giữa innerText & textContent
 * 
 * textContent là phương thức thuộc cả Element node và Text node.
 * 
 * Khi get bằng innerText, nội dung lấy được sẽ giống nội dung thấy trên trình duyệt.
 * Khi get bằng textContent, nội dung lấy được sẽ là nội dung thật, nằm trong DOM.
 * 
 * InnerText sẽ bỏ qua những thẻ span bên trong thẻ <h1>, và in ra nội dung thấy trên màn hình.
 * TextContent sẽ in ra cả những khoảng trắng (là khoảng cách giữa các thẻ), và bỏ qua cả display: none luôn.
 * 
 * Khi sử dụng với ES6, sử dụng innerText, thì mỗi dấu xuống dòng, nó sẽ được hiểu thành 1 thẻ break (<br>)
 * Khi sử dụng với ES6, sử dụng textContent, thì chỉ xuống dòng thôi, không thành 1 thẻ break.
 * 
 * Xem ví dụ bên file thực hành.
 * 
 * 5. Ngoài lề:
 * Tất cả những tag <a>, <meta>, <div>,... đều được xem là Element node. Vì vậy nên nội dung bên trong, ta xem
 * như Text node. */

// ==============================================================================================================================

/** innerHTML vs outerHTML Property
 * 
 * 1. innerHTML
 * a. Set
 * Cú pháp: boxElement.innerHTML = '<h1>Heading</h1>'
 * Có thể thêm cả Element node, Attribute và Text node luôn.
 * VD: boxElement.innerHTML = '<h1 title = 'Heading'>Heading</h1>.
 * 
 * b. Get
 * Cú pháp: console.log(boxElement.innerHTML)
 * KQ trả về dạng chuỗi, là nội dung được thêm bằng innerHTML.
 * 
 * 2. outerHTML
 * a. Set
 * Cú pháp: boxElement.outerHTML = '<span>Test</span>'
 * Nó sẽ ghi đè lên cái thẻ đang lấy -> nếu console.log(boxElement.innerHTML) sẽ in ra những thành phần không còn
 * tồn tại -> đã sử dụng outer, tránh lấy biến đó gọi inner.
 * Xem ở ví dụ file thực hành.
 * 
 * b. Get
 * Cú pháp: console.log(boxElement.outerHTML)
 * KQ trả về dạng chuỗi, là nội dung cũ trước khi bị outerHTML chiếm chỗ. Nội dung này chỉ được lưu trong bộ nhớ,
 * không hiển thị lên website trừ khi được gọi tới.
 * 
 * 3. Giống nhau
 * Cả 2 đều là phương thức thuộc Element node */ 

// ==============================================================================================================================

/** Thực hành sử dụng innerHTML #2
 * 
    Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành
    1 danh sách các khóa học trên giao diện.
    Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:
    * ReactJS
    * AngularJS
    * VueJS

    Gợi ý:
    1. Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
    2. Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé. 
    Bài giải ở file thực hành. */

// ==============================================================================================================================

/** DOM CSS
 * 
 * 1. Truyền 1 thuộc tính
 * Cú pháp: tên-biến.style.tên-thuộc-tính-muốn đặt = 'giá-trị'
 * VD: boxElement.style.width = '100px'
 * 
 * 2. Truyền nhiều thuộc tính
 * Cú pháp: 
 * Object.assign(boxElement.style, {
 *      width: '200px'
 *      height: '100px'
 *      backgroundColor: 'red'
 * })
 * 
 * DOM CSS này sẽ CSS inline vào file html, chứ không CSS internal hay external. 
 * 
 * Khi console.log(boxElement.style), KQ trả về là 1 CSSStyleDeclaration, bao gồm các thuộc tính có thể CSS.*/ 

// ==============================================================================================================================

/** ClassList Propery
 * 
 * Đây là thuộc tính thuộc Element node.
 * Khi console.log(boxElement.classList), KQ trả về là 1 DOMTokenList, gồm class của element được gọi tới, dưới dạng giống mảng,
 * nên có thể truy xuất với các phương thức .length, .value hay [i] đều được.
 * 
 * 1. Add
 * Cú pháp: boxElement.classList.add('tên-class-muốn-thêm', 'tên-class-muốn-thêm',...)
 * Thêm nhiều class thì ngăn cách bằng dấu phẩy.
 * 
 * 2. Contains
 * Dùng để kiểm tra class đó có tồn tại không. KQ trả về là true/false.
 * Cú pháp: boxElement.classList.contains('tên-class-muốn-kiểm-tra')
 * 
 * 3. Remove
 * Cú pháp: boxElement.classList.remove('tên-class-muốn-gỡ')
 * 
 * 4. Toggle
 * Khi được gọi, nó sẽ kiểm tra có class đó không. Nếu có thì nó sẽ gỡ bỏ, nếu không có thì nó thêm vào.
 * Cú pháp: boxElement.classList.toggle('tên-class-muốn-gỡ-hoặc-thêm')
 * 
 * 5. Replace (không có trong bài học, mà sử dụng ở phần bài tập)
 * Cú pháp: boxElement.classList.replace('tên-class-muốn-thay', 'tên-class-sẽ-thay') */


/** Thực hành sử dụng classList #2 
 * Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé.
 * Gợi ý: Bạn có thể sử dụng forEach lặp qua các phần tử div, nhưng trước hết các bạn phải 
 * lấy được danh sách các phần tử div ra nhé.
 * 
 * Bài giải ở file thực hành. */

// ==============================================================================================================================

/** DOM events 
 * Là những hành động mà người dùng tương tác với website
 * 
 * 1. Attribute events
 * Bài toán 1: Khi click vào thẻ <h1> chứa DOM Events, thì console.log ra 1 dãy số ngẫu nhiên.
 * Bài toán 2: Khi click vào thẻ <h1> chứa DOM Events, thì console.log ra đoạn text trong thẻ.
 * Bài toán 3: Khi click vào thẻ nào, thì in ra text Node của thẻ đó.
 * 
 * Bài toán 1 2, giải ở dòng chứa thẻ <h1> bên index.html
 * Bài toán 3 bên file thực hành.
 * 
 * Giải thích code bài toán 3:
 * In this code, you're using document.querySelectorAll('h2') to select all <h2> elements on the page. The reason you need a for loop 
 * here is because document.querySelectorAll() returns a NodeList, which is like an array of elements. To add an onclick event listener 
 * to each <h2> element, you need to loop through each one individually.
 * 
 * Các sự kiên học trong video: onclick, onmouseover, sự kiện nổi bọt (phút 12:00 coi cho rõ)
 * 
 * 2. Assign events using the element node */ 


/** Thực hành sử dụng DOM Events
 * 
 * Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
 * Bài giải bên file thực hành. */


/** DOM Events Example
 * 1. Input/Select
 * 2. Key up/down
 * 
 * Bài toán đặt ra là:
 * a. Với ô input thì lấy được value
 * b. Với ô checkbox thì lấy được thông tin người dùng có đang check không
 * c. Với ô select thì lấy được đang select thằng nào
 * d. Với ô input thì lấy được phím nào người dùng nhấn. 
 * 
 * Tổng kết:
 * Với Input/Select thì sử dụng onchange, oninput
 * Với Key up/down thì sử dụng onkeyup, onkeydown, onkeypress */ 

// ==============================================================================================================================

/** PreventDefault and StopPropagation 
 * 
 * 1. PreventDefault
 * Ngăn chặn hành vi mặc định của trình duyệt trên file HTML.
 * 
 * Bài toán 1:
 * Có 2 thẻ <a>. Làm sao bấm vào thẻ có đường dẫn tới F8 thì mới chuyển trang, còn cái kia thì không làm gì cả.
 * Mình sửa lại thành Youtube, vì có sẵn thẻ Youtube từ bài trước.
 * 
 * Bài toán 2:
 * Có 1 thẻ <input>. Khi focus vào ô input thì hiện ra danh sách các khóa học. Và khi danh sách hiện ra thì phải bấm vào chọn được, chứ không mất đi.
 * 
 * 2. StopPropagation
 * Loại bỏ sự kiện nổi bọt
 * 
 * Bài toán:
 * Có 2 thẻ <div> và <button>. Khi nhấn vào thẻ nào thì in ra thẻ đó. Vấn đề nằm ở <button>. Khi ấn vào thì nó in ra luôn chữ DIV trong thẻ <div>, do sự kiện nổi bọt.
 * 
 * Bài giải bên file thực hành. */

// ==============================================================================================================================

/** Event Listener
 * 
 * 1. Xử lý nhiều việc khi 1 event xảy ra
 * Cú pháp: tên-biến.addEventListener('eventName', 1 function callback)
 * VD: btn.addEventListener('click', function(e) {
 *      console.log(Math.random())
 * 
 * 2. Lắng nghe/hủy bỏ lắng nghe
 * Cú pháp: tên-biến.removeEventListener('eventName', eventListener-muốn-gỡ)
 * VD khi muốn hủy 1 eventListener sau 3s:
 * setTimeout(funtion() {
 *      btn.removeEventListener('click', viec1)
 * }, 3000)
 * 
 * Có thể gọi nhiều eventListener, và nó sẽ thực hiện theo thứ tự từ trên xuống dưới.
 * 
 * 3. Khác nhau giữa DOM Events với Event Listener
 * a. DOM Events sẽ sử dụng cho những trường hợp đơn giản, muốn lắng nghe 1 sự kiện nhưng không có nhu cầu hủy bỏ nó.
 * b. Event Listener thì có công dụng như 1 và 2 nhỏ. */

// ==============================================================================================================================

/** JSON
 * 
 * 1. Là một định dạng dữ liệu (chuỗi)
 * 2. JavaScript Object Notation
 * 3. JSON thể hiện được các dạng dữ liệu: number, string, boolean, null, array, object
 * 4. Mã hóa/Giải mã (Encode/Decode)
 * 5. Stringify/Parse: chuyển đổi dữ liệu sang JSON/trả về kiểu dữ liệu ban đầu
 * 
 * Khi viết JSON trong file JS, phải có cặp dấu nháy đơn trước.
 * 
 * Cú pháp:
 * var json = '1'           ->      dạng number
 * var json = 'null'        ->      dạng null
 * var json = 'true'        ->      dạng boolean
 * var json = '["John", "Harry"]'       ->      dạng array (ngăn cách các key dạng chuỗi bằng nháy kép, ngăn cách các phần tử bằng dấu phẩy)
 * var json = '{"name": "Huy Hoàng", "age": 22}'       ->      dạng object */

// ==============================================================================================================================

/** Promise
 * 
 * 1. Sync - chạy theo luồng/tuần tự
 * VD:
 * console.log(1)
 * console.log(2)
 * -> In ra cả 2 số, theo thứ tự từ trên xuống -> đồng bộ
 * 
 * 2. Async - chạy không theo luồng
 * a. setTimeout, setInterval, fetch, XMLHttpRequest, các phương thức File Reading, các phương thức request animation frame
 * b. VD:
 * setTimeout(function(){
 *      console.log(1)
 * }, 1000)
 * console.log(2)
 * -> In ra số 2 trước, 1 giây sau mới in ra số 1 -> thật ra là console.log(1) chạy trước, nhưng tới 1 giây sau nó mới hiện, còn console.log(2) hiện ra liền
 * -> bất đồng bộ
 * 
 * 3. Pain
 * a. Callback hell (VD bên file thực hành)
 * b. Pyramid of doom
 * 
 * 4. Promise -> cách hoạt động
 * Cú pháp:
 * var promise = new Promise (function(resolve, reject) {
 * })
 * 
 * Ba trạng thái của Promise:
 * a. Pending - đang chờ, xảy ra khi chưa khai báo trường hợp nào
 * b. Fulfilled - xảy ra trong trường hợp resolve
 * c. Rejected - xảy ra trong trường hợp reject
 * 
 * Sau khi khởi tạo phương thức thành công thì có thể gọi phương thức đó qua 3 phương thức:
 * .then(function() {}) -> được gọi khi resolve (hiểu đơn giản là thành công thì làm gì)
 * .catch(function() {}), -> được gọi khi reject (hiểu đơn giản là khi thất bại thì bắt lỗi)
 * .finally(function() {}) -> được gọi, không cần biết resole hay reject
 * 
 * 5. Bonus trả lời phỏng vấn:
 * Là khái niệm sinh ra để giúp chúng ta xử lý những thao tác bất đồng bộ. Trước khi có Promise thì chúng ta sử dụng Callback, và khi sử dụng Callback thì nó hay
 * xảy ra trường hợp Callback Hell, làm cho code rối rắm hơn -> thằng Promise sinh ra để khắc phục tình trạng này -> giúp code dễ đọc dễ hiểu hơn.
 * 
 * Để tạo 1 thằng Promise thì chúng ta sử dụng từ khóa new Prommise. Và trong constructor của nó thì truyền vào 1 Executor là 1 function. Trong Executor function,
 * ta nhận 2 tham số dạng hàm, 1 là resolve, 2 là reject. Resolve được gọi khi thao tác xử lý thành công, Reject được gọi khi thao tác xử lý thất bại.
 * 
 * Khi sử dụng Promise thì chúng ta có 3 phương thức để gọi (như lý thuyết bên trên). */

/** Promise (chain) 
 * 
 * Promise có tính chất chuỗi, chạy từ trên xuống dưới. Cũng lấy data từ trên để gán cho thằng dưới nhưng không bị "lùi dần" vào -> không bị Callback Hell.
 * 
 * Trong function callback của .then(), miễn sao không return một new Promise thì nó sẽ chạy như bình thường:
 * a. return value -> value; return nothing -> undefined
 * b. return một new Promise thì nó phải chạy xong Promise đó rồi mới chạy tiếp thằng đằng sau
 * 
 * Bài toán: sử dụng Promise để thực hiện, cứ 1 giây thì in ra STT tăng dần. VD: 1 giây đầu in ra 1, 1 giây sau in ra 2,... */

// ==============================================================================================================================

/** Promise Methods
 * 
 * 1. Promise.resolve
 * Cú pháp: var promise = Promise.resolve('')
 * Với cú pháp trên, sẽ tạo ra một promise luôn thành công.
 * 
 * 2. Promise.reject
 * Cú pháp: var promise = Promise.reject('')
 * Với cú pháp trên, sẽ tạo ra một promise luôn thất bại.
 * 
 * 3. Promise.all
 * Dành cho những luồng Promise bất đồng bộ nhưng không phụ thuộc lẫn nhau, và muốn những luồng đó chạy song song nhau.
 * Bắt buộc những luồng phải thành công thì mới sử dụng được .all.
 * Bài toán: Hợp nhất 2 mảng của 2 Promise thành 1.
 * Bài giải bên file thực hành. */

// ==============================================================================================================================

/** Promise Example
 * 
 * Dựa vào ảnh, hãy tự tạo dữ liệu và trích được comment cũng như người comment để xuất ra được như hình.
 * 
 * Gợi ý:
 * 1. Lấy comments
 * 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng. */

// ==============================================================================================================================

/** Fetch
 * 
 * API - Application Programming Interface, có thể hiểu đơn giản là cổng giao tiếp giữa các phần mềm
 * 
 * Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> JavaScript type -> Render ra giao diện với HTML
 *  
 * Cú pháp:
 * fetch(API)
 *  .then(function(response) {
 *      return response.json()
 * })
 * 
 * Chính cái response nó là một Promise, nên có thể dùng được các phương thức của Promise.
 * Và vì thế nên khi return nó cũng return một Promise.
 * 
 * Giải thích code bài này:
 * Lấy KQ từ .then() trước, ta có 1 array of objects được truyền vào biến posts. Biến posts này sử dụng phương thức
 * .map() để tạo ra một mảng mới, lưu vào biến htmls2. Trong phương thức map ta khai báo KQ mà ta muốn trả về.
 * Dùng .join('') để biến mảng thành chuỗi, lưu nó vào html2.
 * Dùng DOM get element methods để lấy ra thẻ <ul> cần xài, rồi truyền biến html2 vào phương thức .innerHTML để hiện trên trình duyệt. */ 

// ==============================================================================================================================

/** JSON Server
 * 
 * Bài học này để học làm fake API server/Mock API.
 * Một vài lưu ý: Khi sử dụng JSON Server qua Terminal/PowerShell, đừng tắt hẳn (icon thùng rác) mà chỉ close thôi. Vì tắt hẳn sẽ làm
 * mất luôn json live server. 
 * 
 * Khởi động JSON Server:
 * 1. Start New Terminal trên VSCode
 * 2. Sử dụng: npx json-server db.json hoặc json-server --watch db.json để hiển thì file lên trình duyệt 
 * 
 * Vào trang này để tìm hiểu thêm cách khởi động (hoặc các cái khác): https://github.com/typicode/json-server */

// ==============================================================================================================================

/** Sử dụng Postman làm việc với REST API
 * 
 * 4 hành động thao tác với dữ liệu, CRUD:
 * - Create -> POST
 * - Read -> GET
 * - Update -> PUT/PATCH
 * - Delete -> DELETE */


/**{
      "id": 2,
      "name": "Hãy tôn trọng quá trình, dù không biết trước kết quả",
      "description": "Không có người nào biết trước kết quả mà mình sẽ đạt được, nhưng thay vì ngồi âu sầu thì hãy phát triển bản thân trước. Những điều tốt đẹp sẽ tự đến nếu bạn tin tưởng vào chính mình, quá trình sẽ giúp bạn nhận ra điều này."
    } */


    
    