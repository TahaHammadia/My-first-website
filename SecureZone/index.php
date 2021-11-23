<?php
	if($_SERVER['REMOTE_ADDR'] != "127.0.0.1") {
		echo "<script>document.location = '../'</script>";
	}
	setcookie("GIOPOADDR", random_bytes(32), 0, '/');
	echo "<script>document.location = 'signin.html'</script>";
?>