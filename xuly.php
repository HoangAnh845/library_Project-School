<?php
    // Thiết lập charset utf8
    // header('Content-Type: text/html; charset=utf-8');
    
    // Kết nối CSDL
    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
    mysqli_set_charset($conn, "utf8");
   
    if (isset($_POST['dangky'])) {
        //Lấy dữ liệu từ file dangky.php
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
        $fullname = isset($_POST['fullname']) ? $_POST['fullname'] : '';
        $gender = isset($_POST['gender']) ? $_POST['gender'] : '';
        $purpose = isset($_POST['purpose']) ? $_POST['purpose'] : '';
        $birthday = isset($_POST['birthday']) ? $_POST['birthday'] : '';
        
        //Kiểm tra người dùng đã nhập liệu đầy đủ chưa
        if (!$username || !$password || !$email || !$fullname || !$birthday || !$sex){
            // echo '<script type="text/JavaScript">cl("AAAAAAAAAAAA")</script>'; // Nhúng js vào php  
            echo "Vui lòng nhập đầy đủ thông tin. <a href='javascript: history.go(-1)'>Trở lại</a>";
            exit; //Xuất một thông báo và kết thúc tập lệnh hiện tại
        }
        
        
        //Kiểm tra tên đăng nhập này đã có người dùng chưa
        if (mysqli_num_rows(mysqli_query($conn,"SELECT username FROM readers WHERE username='$username'")) > 0){
            // Hàm mysqli_num_rows () trả về số hàng trong tập kết quả.
            // Hàm mysqli_query () thực hiện một truy vấn đối với cơ sở dữ liệu.
            echo "Tên đăng nhập này đã có người dùng. Vui lòng chọn tên đăng nhập khác. <a href='javascript: history.go(-1)'>Trở lại</a>";
            exit;
        }

        //Kiểm tra email đã có người dùng chưa
        if (mysqli_num_rows(mysqli_query($conn,"SELECT email FROM readers WHERE email='$email'")) > 0)
        {
            echo "Email này đã có người dùng. Vui lòng chọn Email khác. <a href='javascript: history.go(-1)'>Trở lại</a>";
            exit;
        }

        //Kiểm tra dạng nhập vào của ngày sinh
        // if (!ereg("^[0-9]+/[0-9]+/[0-9]{2,4}", $birthday))
        // {
        //     echo "Ngày tháng năm sinh không hợp lệ. Vui long nhập lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        //     exit;
        // }
        
        // Thực thi câu truy vấn thêm dữ liệu vào bảng
        $sql = "INSERT INTO readers (username, password, email, fullname, birthday, sex) VALUES ('$username','$password','$email','$fullname', '$birthday', '$sex')";
        
        // Trả về thông báo sau khi đăng ký
        if (mysqli_query($conn, $sql)){
            echo '<script language="javascript">alert("Đăng ký thành công"); window.location="home.php";</script>';
        }
        else {
            echo '<script language="javascript">alert("Có lỗi trong quá trình xử lý"); window.location="dangky.php";</script>';
        }
    }

?>

<?php
// Thiết lập charset utf8
try{
    header('Content-Type: text/html; charset=utf-8');

    // Kết nối CSDL
    $conn = mysqli_connect('localhost', 'root', '', 'sql_library') or die ('Lỗi kết nối');
    mysqli_set_charset($conn, "utf8");
    
    if (isset($_POST['dangky'])) {
        //Lấy dữ liệu từ file dangky.php
        // $username   = isset($_POST['username']) ? ($_POST['username']) : '';
        // $password   = isset($_POST['password']) ? ($_POST['password']) : '';
        // $email      = isset($_POST['email']) ? ($_POST['email']) : '';
        // $fullname   = isset($_POST['fullname']) ? ($_POST['fullname']) : '';
        // $birthday   = isset($_POST['birthday']) ? ($_POST['birthday']) : '';
        // $sex        = isset($_POST['sex']) ? ($_POST['sex']) : '';
    
        //Kiểm tra người dùng đã nhập liệu đầy đủ chưa
        // if (!$username || !$password || !$email || !$fullname || !$birthday || !$sex){
        //     // echo '<script type="text/JavaScript">cl("AAAAAAAAAAAA")</script>'; // Nhúng js vào php
        //     echo "Vui lòng nhập đầy đủ thông tin. <a href='javascript: history.go(-1)'>Trở lại</a>";
        //     exit; //Xuất một thông báo và kết thúc tập lệnh hiện tại
        // }
    
        // //Kiểm tra tên đăng nhập này đã có người dùng chưa
        // if (mysqli_num_rows(mysqli_query($conn,"SELECT username FROM readers WHERE username='$username'")) > 0){
        //     // Hàm mysqli_num_rows () trả về số hàng trong tập kết quả.
        //     // Hàm mysqli_query () thực hiện một truy vấn đối với cơ sở dữ liệu.
        //     echo "Tên đăng nhập này đã có người dùng. Vui lòng chọn tên đăng nhập khác. <a href='javascript: history.go(-1)'>Trở lại</a>";
        //     exit;
        // }
    
        // //Kiểm tra email đã có người dùng chưa
        // if (mysqli_num_rows(mysqli_query($conn,"SELECT email FROM readers WHERE email='$email'")) > 0)
        // {
        //     echo "Email này đã có người dùng. Vui lòng chọn Email khác. <a href='javascript: history.go(-1)'>Trở lại</a>";
        //     exit;
        // }
    
        //Kiểm tra dạng nhập vào của ngày sinh
        // if (!ereg("^[0-9]+/[0-9]+/[0-9]{2,4}", $birthday))
        // {
        //     echo "Ngày tháng năm sinh không hợp lệ. Vui long nhập lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        //     exit;
        // }
    
        // Thực thi câu truy vấn thêm dữ liệu vào bảng
        // Lấy dữ liệu từ form đăng ký
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        // $password = isset($_POST['password']) ? $_POST['password'] : '';
        // $email = isset($_POST['email']) ? $_POST['email'] : '';
        // $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
        // $fullname = isset($_POST['fullname']) ? $_POST['fullname'] : '';
        // $gender = isset($_POST['gender']) ? $_POST['gender'] : '';
        // $purpose = isset($_POST['purpose']) ? $_POST['purpose'] : '';
        // $birthday = isset($_POST['birthday']) ? $_POST['birthday'] : '';
    
        // echo 'cl("LOG_","' . $username . '")';
        // Thực thi câu truy vấn thêm dữ liệu vào bảng
        $sql = "INSERT INTO member(User)
        /* , Name, Password, Email, Birtday, Gender,Purpose */ 
              VALUES ('$username)";
              /*  ,'$password' ,'$email' ,'$phone' ,'$fullname' ,'$gender' ,'$purpose' ,'$birthday' */
    
        //   // Trả về thông báo sau khi đăng ký
        //   if ($sql){
        //       echo 'cl("LOG_","Thành công")';
        //   }
        //   else {
        //       echo 'cl("LOG_","Thất bại")';
        //   }
    
        // Trả về thông báo sau khi đăng ký
        if (mysqli_query($conn,$sql)) {
            echo '<script language="javascript">alert("Đăng ký thành công"); window.location="home.php";</script>';
        } else {
            echo '<script language="javascript">alert("Có lỗi trong quá trình xử lý"); window.location="dangky.php";</script>';
        }
    }    
}catch(e){

}

?>
