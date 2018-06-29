<?php

$username = "root";
$password = "";
$hostname = "localhost"; 
// Fetching Values From URL
$name2 = $_POST['name1'];
$email2 = $_POST['email1'];
$message2 = $_POST['message1'];
$connection = mysql_connect($hostname, $username , $password); // Establishing Connection with Server..	
$db = mysql_select_db("test", $connection); // Selecting Database
if (isset($_POST['name1'])) {
	$query = mysql_query("insert into submit_request(id,name, email, message) values (NULL, 'asf', 'ffsd@fsad', 'fdsafawetytredvzsdfas', CURRENT_TIMESTAMP)"); //Insert Query
	echo "Form Submitted succesfully";
}
mysql_close($connection); // Connection Closed
?>