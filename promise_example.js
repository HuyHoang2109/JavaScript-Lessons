var users = [
    {
        id: 1,
        name: 'Huy Hoang'
    },
    {
        id: 2,
        name: 'Nguyen Chuong'
    },
    {
        id: 3,
        name: 'Van Toi'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Huy Hoang 1'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Huy Hoang 2'
    }
]

// Fake API

function getComments() {
    return new Promise (function(resolve) {
        setTimeout(function(){
            resolve(comments)
        }, 1000)
    })
}
    // Fake setTimeout để giống mạng bị chậm


function getUsersByIds(userIds) {
    return new Promise (function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout(function() {
            resolve(result)
        }, 1000)
    })
}
    // Lọc ra những user nằm trong list userIds

getComments()
    .then(function(data) {
        var userIds = data.map(function(comment) {
            return comment.user_id
        })
        // Trên video để là comments, nhưng mình đổi lại thành data cho không bị nhầm lẫn cái trên. Data ở đây chính là cái mảng comments đã resolve ở trước đó.
        // Phương thức .map() sẽ chạy qua từng comment trong mảng comments để lấy ra user_id và truyền vào userIds.
    //     return getUsersByIds(userIds)
    //         .then(function(users) {
    //             return users
    //         })
    // })
    // .then(function(filteredusers) {
    //     console.log(filteredusers)
    // })
        // userIds được bỏ vào hàm getUsersByIds, lấy ra được user_id của mảng users -> biết được ai là người comment.
        // Trên video để là users thôi, nhưng mình đổi lại thành filteredusers cho không bị nhầm lẫn cái trên. filteredusers ở đây chính là mảng users vừa return trước đó.

        return getUsersByIds(userIds)
            .then(function(filteredusers) {
                return {
                    filteredusers: filteredusers,
                    comments: comments
                }
            })
    })
    // .then(function(finaldata) {
    //     console.log(finaldata)
    // })

    .then(function(finaldata) {
        console.log(finaldata)
        var commentBlock = document.getElementById('comment-block')
        var html =''

        finaldata.comments.forEach(function(currentComment) {
            var commentAuthor = finaldata.filteredusers.find(function(matchingUser) {
                return matchingUser.id === currentComment.user_id
            })
            html += `<li>${commentAuthor.name}: ${currentComment.content}</li>`
        })

        commentBlock.innerHTML = html
    })

    /**Tổng kết luồng đi của đoạn code không comment: 
     * 1. Tạo hàm getComments(). Đơn giản để lấy dữ liệu của mảng comments.
     * 2. Gọi getComments() ở dưới. Biến userIds sẽ lưu các user_id từ mảng comments -> userIds là mảng chứa các user_id.
     * 3. Tạo hàm getUsersByIds() có 1 tham số là mảng userIds. Sau đó so sánh userIds với id của mảng user để lấy ra thông tin của người comment, lưu vào biến result -> result chính là mảng chứa thông tin của các user đã comment.
     * 4. Return hàm getUsersByIds() trong hàm gọi getComments(), mảng result được truyền vào tham số filteredusers, và return về 1 object chứa 2 thuộc tính: 1. filteredusers gồm thông tin người comment (id, name); 2. comments gồm thông tin về comment đó (id, user_id, content).
     * 5. Object của bước trên được truyền vào tham số finaldata.
     * 6. Tạo biến commentBlock để lưu những thẻ có id là comment-block.
     * 7. Tạo biến html là 1 chuỗi rỗng (để thao tác sau này)
     * 8. Hàm forEach() để chạy qua từng comment trong mảng finaldata. Biến commentAuthor sẽ lưu kết quả của hàm find () sau.
     * 9. Dùng hàm find(), xét từng filteredusers trong finaldata, kiếm matchingUser bằng cách so sánh user_id của comment đó với id của filteredusers (matchingUser) -> KQ là các object chứa thông tin của từng người ĐÃ comment (id, name). VD trong trường trường hợp này là 2 object, có dạng như sau: { id: 1, name: 'Huy Hoang' }, { id: 2, name: 'Nguyen Chuong' } -> lưu vào commentAuthor.
     * 10. Đã biết được tác giả của comment (commentAuthor) và nội dung comment (currentComment) -> gán nó vào chuỗi html rỗng.
     * 11. Dùng innerHTML để gán nó vào file index.html    */
    
