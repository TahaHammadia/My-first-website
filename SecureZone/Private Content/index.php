<?php
	if($_SERVER['REMOTE_ADDR'] != "127.0.0.1" || ! array_key_exists("FCIOROSKTIE", $_COOKIE)) {
		echo "<script>document.location='../../'</script>";
	}
?>

<html>
	<h1>Contents</h1>
	<ul>
		<li><a href="DVWA - all/index.php">DVWA - all</a></li>
		<li><a href="Internet/index.php">Internet</a></li>
	</ul>
</html>