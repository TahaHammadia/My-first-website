<?php
	if(! array_key_exists("FCIOROSKTIE", $_COOKIE)) {
		echo "<script>document.location='../../../../../'</script>";
	}
	echo "<script>document.location='change.html'</script>";
?>