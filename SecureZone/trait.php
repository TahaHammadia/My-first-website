<?php
	sleep(rand(5, 15));   //to make automation harder and give the impression of not working  ;-)
	$username = $_POST["username"];
	$pass = $_POST["password"]; 
	if(! empty($_COOKIE["GIOPOADDR"]) && password_verify($username, "$2y$10$1hV/fJQEF8T49SVm7cOVxe16K/LQro0MmWt6M4nQDaM9amdjmAcZK") &&
	password_verify($pass, "$2y$10$3XVn5Rg./kOUnqngq5f2uuLc2Dec/o81D0CSzhtKZd/V.IrZnZYTm")) {
		setcookie("FCIOROSKTIE", random_bytes(64), 0, '/');
		echo "<script>document.location='Private Content'</script>";
	} else {
		echo "<script>document.location='../'</script>";
	}
?>