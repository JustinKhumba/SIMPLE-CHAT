<?php
$conn = new mysqli('localhost', 'root', '', 'chatroom');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$result = $conn->query('SELECT * FROM messages ORDER BY id DESC LIMIT 10');

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row['user'] . ': ' . $row['message'] . '<br>';
    }
} else {
    echo 'No messages';
}

$conn->close();
?>
