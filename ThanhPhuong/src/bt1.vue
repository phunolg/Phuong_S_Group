* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Roboto', sans-serif;
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
}

.icon1.plus-one {
    font-size: 24px;
    font-weight: bold;
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

.toc-list li::before {
    background: blue;
}

.name{
    width: 350px;
}

.follow-btn:hover {
    background-color: #4a90e2;
    color: #fff;
}