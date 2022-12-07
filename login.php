<?php
//Khai báo sử dụng session
// session_start();
 
//Khai báo utf-8 để hiển thị được tiếng việt
// header('Content-Type: text/html; charset=UTF-8');

echo isset($_POST['dangnhap']);

//Xử lý đăng nhập
if (isset($_POST['dangnhap'])) // Hàm isset này trả về true nếu biến tồn tại và không phải là NULL, ngược lại, nó trả về false.
// $ _POST là một biến siêu toàn cục PHP được sử dụng để thu thập dữ liệu biểu mẫu sau khi gửi biểu mẫu HTML với method = "post". $ _POST cũng được sử dụng rộng rãi để chuyển các biến.
{
    //Kết nối tới database
    // include('ketnoi.php');
   
    $conn = mysqli_connect('localhost', 'root', 'duyanh123', 'library') or die ('Lỗi kết nối');
    mysqli_set_charset($conn, "utf8");
     
    //Lấy dữ liệu nhập vào
    $username   = isset($_POST['username']) ? ($_POST['username']) : '';
    $password   = isset($_POST['password']) ? ($_POST['password']) : '';
     
    //Kiểm tra đã nhập đủ tên đăng nhập với mật khẩu chưa
    // if (!$username || !$password) {
    //     // echo '<script type="text/JavaScript"> history.back();</script>'; // Nhúng js vào php  
    //     // echo '<script type="text/JavaScript"> cl("sssssssssssss")</script>';
    //     echo "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu. <a href='javascript: history.go(-1)'>Trở lại</a>";
    //     exit; // Xuất một thông báo và kết thúc tập lệnh hiện tại
    // }
     
    // mã hóa pasword
    // $password = md5($password);
     
    //Kiểm tra tên đăng nhập có tồn tại không
    // mysql_query gửi một truy vấn duy nhất (nhiều truy vấn không được hỗ trợ) đến cơ sở dữ liệu hiện đang hoạt động trên máy chủ được liên kết với chỉ định
    $query = mysqli_query($conn,"SELECT username, password FROM readers WHERE username='$username'");
    if (mysqli_num_rows($query) == 0) {
        echo "Tên đăng nhập này không tồn tại. Vui lòng kiểm tra lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
     
    //Lấy mật khẩu trong database ra
    $row = mysqli_fetch_array($query);
     
    //So sánh 2 mật khẩu có trùng khớp hay không
    if ($password != $row['password']) {
        echo "Mật khẩu không đúng. Vui lòng nhập lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
     
    //Lưu tên đăng nhập
    $_SESSION['username'] = $username;
    echo "Xin chào " . $username . ". Bạn đã đăng nhập thành công. <a href='/'>Về trang chủ</a>";
    die();
}
?>
