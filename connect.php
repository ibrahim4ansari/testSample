<?php
$servername = "localhost:5433";
$username = "postgres";
$password = "alpha98";
$dbname = "bst_prop";

$conn_str = " host=localhost port=5433 dbname=$dbname user=$username password=$password";
//echo $conn_str;

$conn = pg_connect($conn_str) or die("Connection Failed") ;
$result = pg_query($conn," select * from prop_table");
if (!$result) {
	echo "An error occurred.\n";
	exit;
}
$data = array();
while ( $row = pg_fetch_assoc($result)){
	//echo $row['id']."\n";
	//echo $row['img'].".jpeg";
	$data[]=$row;
}
print json_encode($data);
pg_close($conn);


