const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = []
let counter =1 

/*
GET /users สำหรับแสดงข้อมูล user ทั้งหมดที่บันทึกไว้
POST /user สำหรับสร้างข้อมูล user ใหม่ที่บันทึกเข้าไป
GET /user/:id สำหรับดึงข้อมูล user รายคนออกมา
PUT /user/:id สำหรับแก้ไขข้อมูล user รายคน(ตาม id ที่บันทึกเข้าไป)
DELETE /user/:id สำหรับลบข้อมูล user รายคน(ตาม id ที่บันทึกเข้าไป)
*/



//path: GET/users ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users', (req, res) => {
   res.json(users);

})
//path: /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter+=1
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });
})
//path: PUT /user/:id ใช้สำหรับเเก้ไขข้อมูล user ตาม id ที่ระบุ
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    //ค้นหา users ที่ต้องการเเก้ไข
    let selectindex = users.findIndex(user => user.id == id)

    //เเก้ไขข้อมูล user 
    if(updateUser.firstname){
       users[selectindex].firstname = updateUser.firstname || users[selectindex].firstname
    }
    if(updateUser.lastname){
       users[selectindex].lastname = updateUser.lastname || users[selectindex].lastname
    }

    res.json({
        message: 'Update user successfully',
        data: {
        user: updateUser,
        indexUpdated: selectindex
        
        }
    })

    
})

//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectindex = users.findIndex(user => user.id == id)

    //ลบ
    users.splice[selectindex]
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectindex
    })
})

app.listen(port, (req,res) => {
    console.log('Http Server is running on port' + port)
});
