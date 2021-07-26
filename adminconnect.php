<?php

  if(session_status() === PHP_SESSION_NONE){
  	session_start();
  }
  
	$serverName = "localhost";
	$username = "root";
	$password = "";
	$dbName = "sqlinjection";
	
	$con = mysqli_connect($serverName, $username, $password, $dbName) OR die("Query failed.");