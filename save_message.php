<?php
$user = $_POST['user'];
$message = $_POST['message'];

$conn = new mysqli('localhost', 'root', '', 'chatroom');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$stmt = $conn->prepare('INSERT INTO messages (user, message) VALUES (?, ?)');
$stmt->bind_param('ss', $user, $message);

$stmt->execute();

$stmt->close();
$conn->close();
?>
