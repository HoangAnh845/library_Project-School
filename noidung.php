<?php
    $servername = "localhost";
    $username = "root";
    $password = "duyanh123";
    $dbname = "library";

    // tạo kết nối
    $conn = new mysqli($servername, $username, $password, $dbname);
    // kiểm kết nối
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, title, content, date FROM posts";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    // Load dữ liệu lên website
    while($row = $result->fetch_assoc()) {
    echo "Tiêu đề: ". $row["title"]."<br>";
    echo "Ngày: ". $row["date"]."<br>";
    echo "Nội dung: ". $row["content"]."<br>";
    }
    } else {
    echo "0 results";
    }
    $conn->close();
?>