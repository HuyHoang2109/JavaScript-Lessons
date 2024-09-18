// File này chỉ để làm bài tập fetch & REST API



var courseAPI = 'http://localhost:3000/courses'

function start() {
  // getCourses(displayCourses)
  getCourses(renderCourses)

  handleCreateForm()
}

start()


// Functions
  // Fetch() nó đã tự tạo phương thức GET, nên không cần phải tạo thêm
function getCourses(callback) {
  fetch(courseAPI)
    .then(function(response) {
      return response.json()
    })
    .then(callback)
}


function displayCourses(courses) {
  console.log(courses)
}


  // Function này sẽ nhận được 1 object gồm name & description nên để tham số là data
  // Dùng thằng fetch để tạo ra phương thức POST tạo ra thằng mới
function createCourses(data, callback) {
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(courseAPI, options)
    .then(function(response) {
      response.json()
    })
    .then(callback)
}


function handleDeleteCourses(id) {
  console.log('Deleting course with ID:', id);  // Debugging ID
  var options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`${courseAPI}/${id}`, options)
    .then(function(response) {
      if (!response.ok) {
        // Handle the error when the response is not ok (e.g., 404)
        return response.text().then(text => {
          throw new Error(`Error: ${text}`);  // Throw error with the text response
        });
      }
      return response.json();  // Proceed with parsing JSON if the response is ok
    })
    .then(function() {
      getCourses(renderCourses);  // Re-render courses after successful deletion
    })
    .catch(function(error) {
      console.error('There was a problem with the delete request:', error);
    });
}
// 27:00, còn 1 cách để xóa nữa mà không cần phải call API.



function renderCourses(courses) {
  var listCoursesBlock = document.querySelector('#list-courses')
  var htmls = courses.map(function(course) {
    return `
      <li>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        
        <button onclick="handleDeleteCourses(${course.id})">&times; Xóa</button>
      </li>
    `
  }).join('')
  listCoursesBlock.innerHTML = htmls
  
}


function handleCreateForm() {
  var createBtn = document.querySelector('#create')
  createBtn.onclick = function() {
    var name = document.querySelector('input[name="name"]').value
    var description = document.querySelector('input[name="description"]').value
    // Chọn ra nội dung (value) của thẻ <input> có thuộc tính name là name
    // console.log(name)
    // console.log(description)

    // Vì id của cái mới tạo nó là 1 chuỗi ngẫu nhiên, nên phải tạo hàm để nó biến thành số tăng dần.
    // Nhưng số (numeric) thì không xử lý được, mà phải chuyển thành dạng chuỗi. Cũng không hiểu tại sao...
    // Xử lý dạng chuỗi thì tạo/xóa gì cũng ngon ăn.
    getCourses(function(courses) {
      var lastId = courses.length ? courses[courses.length - 1].id : 0;  // Fallback to 0 if no courses
      var newId = (parseInt(lastId) + 1).toString();  // Increment the ID

    // Tạo ra 1 form chứa dữ liệu mới get (cho tiện dùng thôi chứ không có gì)
    var formData = {
      id: newId,
      name: name,
      description: description
    }

    createCourses(formData)
    // Tới đây là mình đã hoàn thành rồi, là bấm Create là nó lưu vào db.json và hiện lên màn hình luôn. Còn không hiểu sao thầy Sơn vẫn phải làm thêm để load lên màn hình.
  })}
}

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// 1. Tạo form bên HTML
// 2. Tạo 1 hàm start() để khởi động chương trình. Bên trong start() này sẽ có các hàm khác.
// 3. Tạo hàm getCourses() để lấy dữ liệu từ db.json
// 4. Tạo hàm renderCourses() để render ra màn hình.
// 5. Tạo hàm handleCreateForm(). Hàm này sẽ quản lý việc nhập và in ra màn hình thông tin nhập từ form. Việc xử lý nhập dữ liệu là hàm khác.
// 6. Tạo hàm createCourses(). Hàm này sẽ lưu và thực hiện POST dữ liệu người dùng nhập vào db.json.
