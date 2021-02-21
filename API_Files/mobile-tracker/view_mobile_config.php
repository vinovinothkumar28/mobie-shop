<?php
include("db.php");

$id = $_GET["id"];

$qry = "SELECT GROUP_CONCAT(img.image)'pics',
		 mob.id 'id',brand_name,model_name,price,display,processor,internal_storage,external_storage,ram,camera,camera_front_pixel,battery,operating_system,weight,sim_features,fingerprint_sensors 
FROM mobile AS mob JOIN mobile_image as img 
WHERE mob.id='$id' AND mob.id=img.mobile_id";


$result = $conn->query($qry);

if ($result->num_rows > 0)
{

	$row["specs"] = $result->fetch_assoc();
	
}


$qry2 = "SELECT color,image FROM mobile_image WHERE mobile_id='$id' AND featured_image='NO' GROUP BY color;";
$result2 = $conn->query($qry2);

if ($result2->num_rows > 0)
{

	if ($result2->num_rows > 0)
		{
			$cr = 0;
			while($row2 = $result2->fetch_assoc())
			{
				$a[$cr]["color"] = $row2["color"];
				$a[$cr]["image"] = $row2["image"];
				$cr = $cr+1;
			}
		}

	$row["color_pics"] = $a;
	
}

echo json_encode($row);

?>