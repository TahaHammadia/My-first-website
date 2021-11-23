<html>
<head> <meta charset="utf-8"></head>
<?php
$conn = mysqli_connect('127.0.0.1','root','', 'glory');
if($conn) {
    echo "mysqli connected ";
	//mysqli_query : execute queries, try to test its value before doing anything
	//mysqli_insert_id : returns the id of the last inserted or updated row. The value returned must have AUTO_INCREMENT , logicaly with PRIMARY KEY
	//mysqli_multi_query : execute multiple queries in one "query"
	//mysqli_prepare : returns a prepared query waiting for parameters
	// -> bind_param : "typetype" variable, variable ... binds the prepared query to variables types: i:int, s:string, d:double, b:blob (Binary Large data OBject)
	// -> execute(), executes the prepared query when the parameters get values
	//$res = mysqli_query; mysqli_num_rows($res): $row = mysqli_fetch_assoc($res) : associative array / one line, returns null if nothing is left
	# it's better to test if $row is null than to use mysqli_num_rows each time
	# but it is better to count it one time and use a for loop
	mysqli_close($conn);
	exit;
}
echo 'great work';
?>
</html>