
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>SQL Injection Search</title>
  </head>
  <body>

<?php
include ('searchwithsecurity.html');
include ('adminconnect.php'); ?>

    <p>
    <?php

        $iso_code = mysqli_real_escape_string($con,$_GET['iso_code']); 
	    $continent = mysqli_real_escape_string($con,$_GET['Continent']); 
    
     
        echo "Are you searching for ISO_CODE in a secured way :$iso_code ";
    
        
       ?>
    </p>
    <center>
    <h1>List of Covid patients</h1>
    <table cellpadding="5" cellspacing="0" border="1">
  		<tr>
      <th>ISO_CODE</th>
  		<th>Continent</th>
  		<th>Location</th>
      <th>Date</th>
  		</tr>
  		<?php
  			$sql ="SELECT * FROM `owid-covid-data` WHERE `iso_code`=? AND `continent`=?;";
            $stmt = mysqli_stmt_init($con);
            if(!mysqli_stmt_prepare($stmt, $sql))
            {
                echo "SQL statement failed";
            }
            else
            {
                mysqli_stmt_bind_param($stmt,"ss",$iso_code, $continent);
                mysqli_stmt_execute($stmt);
            }

            $sendsql = mysqli_stmt_get_result($stmt);
            $count = mysqli_num_rows($sendsql);
  			if($count>0)
        {           
			echo ("<SCRIPT LANGUAGE='JavaScript'>
			window.alert('Seraching in a secured way.')
			</SCRIPT>");
  				foreach ($sendsql as $row) {
  					?>
  					<tr>
  						<td><?php echo $row['iso_code']; ?></td>
  						<td><?php echo $row['continent']; ?></td>
                        <td><?php echo $row['location']; ?></td>
                        <td><?php echo $row['date']; ?></td>

  					</tr>
  				<?php }
                  exit;
  			}
              else{

                echo ("<SCRIPT LANGUAGE='JavaScript'>
                window.alert('HACKERS ARE NOT ALLOWED OR Wong parameters. Please re-enter.')
          
                </SCRIPT>");
                exit();
              }
  ?>
  	</table>
    </center>

    

  </body>
</html>
