//1
localStorage.setItem('name','Nguyễn Phúc Anh');
localStorage.setItem('age','16');
localStorage.setItem('address','Ha Noi');
//2
alert(localStorage.getItem('name')+' năm nay cháu '+localStorage.getItem('age')+' tuổi');
//3
localStorage.removeItem('address')
//4+5
var em=[{
    ten: "PA",
    tuoi: 16,
    phone: '12345678910JQK',
    address: "Han"}]
    localStorage.setItem('me', JSON.stringify(em))
    var pa=localStorage.getItem("me")
    alert(pa) 