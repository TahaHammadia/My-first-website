<?php
	if(! array_key_exists("FCIOROSKTIE", $_COOKIE)) {
		echo "<script>document.location='../../../../../'</script>";
	}
	echo "<script>document.location='form.html'</script>";
?>