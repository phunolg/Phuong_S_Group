<script setup>
import { ref } from "vue";
import { ref as ref1 } from "vue";
const name = "Phuong";
const htmlstring = "<b>bold</b>";
const isRed = false;
const isBlue = true;
const className = isRed ? "isRed" : "isBlue";
const count = ref(0);
const count1 = ref1(0);
const count2 = ref(359);
const isRedd = ref("hehe");
const currentAction = ref(null);
function handleClick() {
  alert("Click");
}

const hasClicked = ref(false);

function increment() {
  if (currentAction.value !== "increment") { 
    count.value = 1;
    count2.value = 360;
    currentAction.value = "increment";
  }
}

function decrement() {
  if (currentAction.value !== "decrement") {
    count.value = -1;
    count2.value = 358;
    currentAction.value = "decrement";
  }
}

function increment1() {
  if (!hasClicked.value) {
    count1.value = count1.value + 1;
    hasClicked.value = true;
  }
}
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
  <!-- <div>
    <h1>Hello {{ name }}</h1>
    <p v-html="htmlstring"></p>
    <p :class="className">hehehe</p>
    <button v-on:click="handleClick">Click me</button>
    <button @click="handleClick">Click me</button>  
  </div>

  <div>
    <p :class="'isRed'" :style="{ color: 'red', backgroundColor: 'yellow' }">Hello</p>
    <p>hello {{ count === 0 ? 'world' : 'vue' }}</p>
  </div>

  <div> 
    <p :id="'hello-' + count">Hello</p>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increase</button>
  </div>

  <div>
    <p v-if="isRedd === 'hehe'">hello red</p>
    <p v-else-if="isRedd === 'haha'">hello blue</p>
    <p v-else>hello yellow</p>
  </div> -->


  <div class="header">
        <div class="left-section">
            <div class="logo">
                <img src="https://viblo.asia/logo_full.svg">
            </div>
            <div class="nav-links">
                <a href="#">Bài Viết</a>
                <a href="#">Hỏi Đáp</a>
                <a href="#">Thảo Luận</a>
            </div>
        </div>

        <div class="search-box">
            <input type="text" placeholder="Tìm kiếm trên Viblo">
            <button>
                &#128269;
            </button>
        </div>

        <div class="right-section">
            <div class="flag"></div>
            <div class="new-badge">
                new
            </div>
            <div class="login-link">
                <a href="#">
                    &#10150; Đăng nhập/Đăng ký
                </a>
            </div>
        </div>
    </div>

    <div class = "image">
        <img src="https://images.viblo.asia/full/c503a078-5e1b-4795-bead-80f31cc9efbd.png" width="1140" height="168" alt="">
    </div>

    <div class = "container">
        <div class = "content">
            <div class = "header_left">
                <img class="avatar" src="https://images.viblo.asia/avatar-retina/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg">
                <div class="icon-container">
                    <button @click="increment" class = "icon1 upvote"></button>
                    <span class="tooltip">Upvote</span>
                    <p class = "icon2 plus-one">{{ count }}</p>
                    <button @click="decrement" class = "icon1 downvote"></button>
                    <button @click="increment1" class = "icon bookmark"></button>
                    <div class="icon text-a"></div>
                    <div class="icon facebook"></div>
                    <div class="icon twitter"></div>
                </div>
            </div>
            <div class = "main_content">
                <div class="user-info">
                    <img src="https://images.viblo.asia/avatar-retina/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg" alt="Huỳnh Thanh Tùng" class="avatar">
                    <div class="user-details">
                        <div class="name">
                            <a href="#" class="username">Huỳnh Thanh Tùng</a>
                            <span class="handle">@Thanh_Tung</span>
                            <button class="follow-btn">Theo dõi</button>
                        </div>
                        <div class="stats">
                            <span class="stars">{{ count2 }}</span>
                            <span class="followers"> 8</span>
                            <span class="posts"> 29</span>
                        </div>
                    </div>

                    <div class="user-details2">
                        
                        <div class="meta">
                            <span class="time">Đã đăng vào thg 12 23, 2019 8:22 CH - 4 phút đọc</span>
                        </div>
                        <div class="engagement">
                            <span class="views"> 11.1K</span>
                            <span class="comments"> 0</span>
                            <span class="bookmarks">                  
                              <p class = "plus-one">{{ count1 }}</p>
                            </span>
                        </div>
                    </div>
                </div>

                <h1>Những chú ý khi sử dụng v-model trong vue js</h1>

                <h2>Mở đầu</h2>
                <p>
                    v-model là chức năng được sử dụng rất nhiều khi tạo form sử dụng Vue.js. Bạn có thể sử dụng v-model để tạo ra các ràng buộc dữ liệu hai chiều trên các ô input hoặc textarea hay thậm chí là file. Nó sẽ tự động chọn đúng cách để cập nhật các phần tử dựa trên kiểu nhập. 
                </p>
                <p>
                    Mặc dù khi sử dụng bạn sẽ thấy có đôi chút magic, nhưng v-model thực sự là một cú pháp không thể thiếu mỗi khi bạn muốn handle một form một cách thuận tiện và ngon lành 😍. Note: v-model sẽ bỏ qua các giá trị ban đầu, "checked" hoặc "selected" attribute được tìm thấy trên bất kì form elements nào. Nó sẽ luôn luôn xử lý các dữ liệu của Vue instance như là những dữ liệu luôn đúng. Bạn nên khai báo giá trị ban đầu ở phía Javascript bên trong các component.
                </p>
                <h2>Hoạt động của v-model</h2>
                <p>
                    v-model là một syntax sugar (cú pháp ngọt - dễ nhìn) để viết v-on và v-bind với nhau trong một dòng. Tổng quan, hai dòng sau thực hiện cùng một hoạt động:
                </p>
            
                <div class = "codeType">
                    &lt;input v-model="searchText"&gt;
                    &lt;input :value="searchText" @change="searchText = $event.target.value"&gt;
                </div>

                <p>
                    Thành phần tùy chỉnh của v-model Trường hợp sử dụng v-model đối với thành phần tùy chỉnh, 
                    mặc định thì props được gọi là value và sự kiện của input được sử dụng. 
                    Value này có thể thay đổi được bằng định nghĩa ở phía thành phần tùy chỉnh.
                </p>

                <p class = "exp">
                    Ví dụng sau được trích từ trang tài liệu tham khảo chính thức:
                </p>

                <pre class="codeType">
                    Vue.component('my-checkbox', {
                        model: {
                            prop: 'checked',
                            event: 'change'
                        },
                        props: {
                            // Tùy theo điều này, cho phép sử dụng thuộc tính `value` với mục đích riêng biệt.
                            value: String,
                            // `checked` sẽ được sử dụng như thuộc tính thay thế `value`
                            checked: {
                                type: Number,
                                default: 0
                            }
                        },
                        // ...
                    })
                </pre>
            </div>




            <div class = "header_right">
                <div class="toc">
                    <div class="toc-title">MỤC LỤC</div>
                    <ul class="toc-list">
                        <li>Mở đầu</li>
                        <li>Hoạt động của v-model</li>
                        <li>Những lỗi thường gặp</li>
                        <li>Tổng quan</li>
                    </ul>
                </div>
            </div>
        </div>
        

    </div>










</template>

<style scoped>

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: unset;
    --color-background-soft: unset;
    --color-background-mute: unset;
    --color-border: unset;
    --color-border-hover: unset;
    --color-heading: unset;
    --color-text: unset;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --color-background: #ffffff!important;
    --color-background-soft: #f5f5f5!important;
    --color-background-mute: #eeeeee!important;
    --color-border: #dddddd!important;
    --color-border-hover: #cccccc!important;
    --color-heading: #222222!important;
    --color-text: #333333!important;
  }
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff!important;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
}
.left-section {
    display: flex;
    align-items: center;
    gap: 20px;
}
.logo img {
    height: 40px;
}
.nav-links a {
    text-decoration: none;
    color: #777;
    margin-right: 20px;
    font-weight: 500;
}
.nav-links a:hover {
    color: #333;
}
.search-box {
    flex: 1;
    margin: 0 20px;
    display: flex;
    align-items: center;
}
.search-box input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    font-size: 14px;
    outline: none;
}
.search-box button {
    padding: 8px 12px;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
}
.right-section {
    display: flex;
    align-items: center;
    gap: 15px;
}
.flag {
    width: 24px;
    height: 16px;
    background: url('https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg') no-repeat center/cover;
    border-radius: 2px;
}
.new-badge {
    color: #fff;
    background-color: red;
    font-size: 10px;
    padding: 2px 4px;
    border-radius: 5px;
    position: relative;
    top: -10px;
}
.login-link a {
    text-decoration: none;
    color: #4a90e2;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
}

.image{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: #000;
}

.container {
    width: 100%;
    max-width: 1140px;
    padding: 90px 15px 15px 15px;
    margin: 0 17.4rem;
}

.content{
    display: flex;

}

.main_content{
    margin: 0 15px;
    min-width: 700px;
}

.header_left{
    position: sticky;
    top: 0;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 180px;
}

.header_right{
    position: sticky;
    top: 0;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 800px;
    align-items: flex-start;
    float: left;
}

.user-info {
    display: flex;
    align-items: center;
    font-family: 'Arial', sans-serif;
    color: #555;
}
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}
.user-details {
    display: flex;
    flex-direction: column;
    margin-right:75px;
}
.user-details2 {
    display: flex;
    flex-direction: column;
    float: left;
}
.username {
    color: #3b5998;
    font-weight: bold;
    text-decoration: none;
}
.handle {
    margin-left: 5px;
    color: #999;
}
.follow-btn {
    margin-left: 10px;
    padding: 2px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    font-size: 12px;
}
.stats, .meta, .engagement {
    margin-top: 5px;
    float: right;
}
.stars::before {
    content: "\f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 5px;
}
.followers::before {
    content: "\f500";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 5px;
}
.posts::before {
    content: "\f15c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 5px;
}
.views::before {
    content: "\f06e";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 5px;
}
.comments::before {
    content: "\f075";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 5px;
}
.bookmarks::before {
    content: "\f02e";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 5px;
}


h1 {
    font-size: 28px;
    color: #222;
}

h2 {
    font-size: 22px;
    color: #222;
    margin-top: 20px;
}

p {
    font-size: 16px;
    color: #333;
    letter-spacing: 1px;
    line-height: 24px;
}


.codeType{    
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 14px;
    border: 1px solid #ccc;
    white-space: pre-wrap;
    overflow-x: auto;
}

.header_left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.exp {
    margin-top:20px;
}

.icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.icon-button img {
    width: 30px;
    height: 30px;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.icon-button img:hover {
    opacity: 1;
}

.vote-count {
    font-size: 16px;
    font-weight: bold;
    color: #555;
}

.icon-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #ccc;
    font-size: 24px;
    color: gray;
    background: white;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
}

.icon1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: gray;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

.icon2.plus-one {
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
}

.icon::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}

.icon1::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}

.icon1.upvote::before { 
    content: "\f0d8"; 
}
.icon.plus-one { 
    font-size: 18px; 
    font-weight: bold; 
}

.icon1.downvote::before { 
    content: "\f0d7"; 
}
.icon.bookmark::before { 
    content: "\f02e"; 
}
.icon.text-a::before { 
    content: "\f031"; 
}
.icon.facebook::before { 
    content: "\f39e"; 
}
.icon.twitter::before { 
    content: "\f099"; 
}

.icon:hover {
    color: black;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}

.icon1:hover {
    color: black;
}

.toc {
    max-width: 200px;
}

.toc-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.toc-title::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background: #ccc;
    margin-left: 10px;
}

.toc-list {
    list-style: none;
    padding-left: 0;
}

.toc-list li {
    position: relative;
    padding: 5px 0;
    cursor: pointer;
}

.toc-list li::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 100%;
    background: transparent;
    transition: background 0.3s ease;
}



.name{
    width: 350px;
}

.follow-btn:hover {
    background-color: #4a90e2;
    color: #fff;
}












</style>


<head>

</head>