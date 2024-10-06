var courseAPI = 'http://localhost:3000/courses'

    // var options = {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    // Đống này thử sửa để nhập được kiểu form-urlencoded trên Postman, nhưng không được

    fetch(courseAPI)
        .then(function(response) {
            return response.json()
        })
        // .then(function(courses) {
        //     console.log(courses)
        // })
        //Tới đây là hiện xong tất cả thông tin rồi, nhưng muốn code cho đẹp nên tự mò
        .then(function(courses) {
            let webhtml = courses.map(function(course) {
                return `
                    <h1 style="color: orange">${course.name}</h1>
                    <p style="color: green; font-size: 24px">${course.description}</p>
                `
            }).join('')
            //So với baì ở trên thì ở đây skip một bước: không tạo thêm biến mới nữa, là .join() luôn
            document.getElementById('json-server-test').innerHTML = webhtml
        })