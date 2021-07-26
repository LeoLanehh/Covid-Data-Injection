
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>SQL Injection Search</title>
  </head>
  <body>

<?php
include ('search.html');
include ('adminconnect.php'); ?>

    <p>
    <?php

        $iso_code = $_GET['iso_code'];
	$continent = $_GET['Continent'];
    
     
        echo "Are you searching for ISO_CODE :$iso_code ";
    
        
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
  			$query ="SELECT * FROM `owid-covid-data` WHERE `iso_code`='$iso_code' AND `continent`='$continent'";
  			$exec =mysqli_query($con,$query);
  			if(mysqli_num_rows($exec)>0)
        {
  				$i=1;
  				foreach ($exec as $row) {
  					?>
  					<tr>
  						<td><?php echo $row['iso_code']; ?></td>
  						<td><?php echo $row['continent']; ?></td>
                        <td><?php echo $row['location']; ?></td>
                        <td><?php echo $row['date']; ?></td>

  					</tr>
  				<?php }
  			}
  ?>
  	</table>
    </center>

    

  </body>
</html>
