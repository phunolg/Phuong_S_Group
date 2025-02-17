<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="viblo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

</head>
<body>
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
                    <div class="icon1 upvote"></div>
                    <div class="icon1 plus-one">0</div>
                    <div class="icon1 downvote"></div>
                    <div class="icon bookmark"></div>
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
                            <span class="stars"> 359</span>
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
                            <span class="bookmarks"> 1</span>
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


    <!-- <script src="viblo.js"></script> -->
</body>
</html>