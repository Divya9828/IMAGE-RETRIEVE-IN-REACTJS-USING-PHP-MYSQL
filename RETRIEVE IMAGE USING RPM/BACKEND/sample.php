<?php
header("Access-Control-Allow-Origin: *");
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "crud"; 

 
$con = mysqli_connect($host, $user, $password,$dbname);
$sql=mysqli_query($con,"select * from img");
$rows=array();
while($r=mysqli_fetch_assoc($sql))
{
    $rows[]=$r;
}
echo json_encode($rows);
?>