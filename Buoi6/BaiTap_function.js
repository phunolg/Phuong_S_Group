// bài 1
// viết chương trình để hiển thị ngày giờ
console.log("Bài 1: Viết chương trình để hiển thị ngày giờ")
var today = new Date();
var date = today.getDate()
var month = today.getMonth() + 1
var year = today.getFullYear()

var hour = today.getHours()
var minute = today.getMinutes()
var second = today.getSeconds()

var dateTime = date + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second
console.log(dateTime)



// bài 2
// in ra ngày tháng năm theo dạng mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
console.log('\n')
console.log("Bài 2: In ra ngày tháng năm theo dạng mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy")
var today1 = new Date();
var date1 = today.getDate()
var month1 = today.getMonth() + 1
var year1 = today.getFullYear()

var dateTime1 = month1 + '/' + date1 + '/' + year1 
console.log(dateTime1)

var dateTime2 = month1 + '-' + date1 + '-' + year1
console.log(dateTime2)

var dateTime3 = date1 + '-' + month1 + '-' + year1
console.log(dateTime3)

var dateTime4 = date1 + '/' + month1 + '/' + year1
console.log(dateTime4)

 

// bài 3
//kiểm tra 1 số nguyên xem có phải chuỗi tăng không
console.log('\n')
console.log("Bài 3: Kiểm tra 1 số nguyên xem có phải chuỗi tăng không")
let a = 1122345
a = a.toString()
for(i = 1; i < a.length; i++) {
    if(a[i] > a[i+1]) {   
    console.log(false)
    break
    }
}
console.log(true)



// bài 4
// thay thế mọi ký tự trong 1 chuỗi bằng ký tự tiếp theo trong bảng chữ cái
console.log('\n')
console.log("Bài 4: Thay thế mọi ký tự trong 1 chuỗi bằng ký tự tiếp theo trong bảng chữ cái")
const p = 'abcaerihf'
let newString = ''
for(i = 0; i < p.length; i++) {
    newString += String.fromCharCode(p.charCodeAt(i) + 1)
}
console.log(newString)



// bài 5
//tạo 1 chuỗi sử dụng 3 ký tự ở giữa chuỗi lẻ, nếu là chuỗi chẳn thông báo chẳn
console.log('\n')
console.log("Bài 5: Tạo 1 chuỗi sử dụng 3 ký tự ở giữa chuỗi lẻ, nếu là chuỗi chẳn thông báo chẳn")
const b = '12345'
for(i = 0; i < b.length; i++) {
    if(b.length % 2 === 0) {
        console.log('chẳn')
    }else {
        console.log(b.slice(b.length/2 - 1, b.length/2 + 2)) //còn cách chạy vòng for để lấy 3 ký tự ở giữa
    }
}



//bài 6
// viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng
console.log('\n')
console.log("Bài 6: Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng")
const array = [2,3,4,5,2,3,4,5,4,3,3,3]
let max1 = 0
let result = 0
for(i = 0; i < array.length; i++) {
    let count = 0
    for(j = 0; j < array.length; j++) {
        if(array[i] === array[j]) {
            count++
        }
    }
    if(count > max1) {
        max1 = count
        result = array[i]
    }
}
console.log(result)



//bài 7
// kiểm tra xem chuỗi có chứa java hay không
console.log('\n')
console.log("Bài 7: Kiểm tra xem chuỗi có chứa java hay không")
const jv = 'javssascriptjava'
for(i = 0; i < jv.length; i++) {
    if(jv[i] === 'j' && jv[i+1] === 'a' && jv[i+2] === 'v' && jv[i+3] === 'a') {
        console.log(true)
        break
    }
    else {
        console.log(false)
        break
    }
}



// bài 8
// viết 1 hàm để lấy tên tháng từ 1 số cụ thể 
console.log('\n')
console.log("Bài 8: Viết 1 hàm để lấy tên tháng từ 1 số cụ thể")
const thang = 1
for(i = 1; i <= 12; i++) {
    if(thang === 1) {
        console.log('Tháng một')
    }
    else if(thang === 2) {
        console.log('Tháng hai')
    }
    else if(thang === 3) {
        console.log('Tháng ba')
    }
    else if(thang === 4) {
        console.log('Tháng bốn')
    }
    else if(thang === 5) {
        console.log('Tháng năm')
    }
    else if(thang === 6) {
        console.log('Tháng sáu')
    }
    else if(thang === 7) {
        console.log('Tháng bảy')
    }
    else if(thang === 8) {
        console.log('Tháng tám')
    }
    else if(thang === 9) {
        console.log('Tháng chín')
    }
    else if(thang === 10) {
        console.log('Tháng mười')
    }
    else if(thang === 11) {
        console.log('Tháng mười một')
    }
    else if(thang === 12) {
        console.log('Tháng mười hai')
    }
}



// bài 9
//nhập 1 chuỗi và tìm từ dài nhất tronng chuỗi
console.log('\n')
console.log("Bài 9: Nhập 1 chuỗi và tìm từ dài nhất tronng chuỗi")
const c = 'abc; 1;ha;gfiwayoir'
const d = c.split(';')
let max = d[0]
for(i = 0; i < d.length; i++) {
    if(d[i].length > max.length) {
        max = d[i]
    }
}
console.log(max)



// bài 10
// nhập 2 số và in ra giá trị là số nguyên tố giữa 2 số đó
console.log('\n')
console.log("Bài 10: Nhập 2 số và in ra giá trị là số nguyên tố giữa 2 số đó")
const e = 12
const f = 25
function isPrime(n) {
    if (n === 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function prime(e, f) {
    for (let i = e + 1; i < f; i++) {
        if (isPrime(i)) {
                console.log(i);
        }
    }
}

prime(e, f)