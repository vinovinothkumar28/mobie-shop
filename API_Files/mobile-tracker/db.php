<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mobile_tracker";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// to convert float
//  echo sprintf("%.2f", $b);


// to select customer names

// SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country ORDER BY COUNT(CustomerID) DESC;

// SELECT COUNT(id) AS totalInvoiceCount, btcname,btgstno FROM billing_details GROUP BY btcname,btgstno ORDER BY COUNT(id) DESC;

//split a variables

// $str = "21/20-21";
// $result=explode("/",$str);
// echo "<br>ID  :".$result[0];
// echo "<br>ACADAMIC - :".$result[1];
// $er =  $result[0]+1;
// echo "<br>".$er;

?>