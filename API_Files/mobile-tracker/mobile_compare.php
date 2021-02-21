<?php

include("db.php");

$id_1 = $_GET["id_1"];
$id_2 = $_GET["id_2"];

$qry1 = "SELECT brand_name,model_name,price,display,processor,internal_storage,external_storage,ram,camera,camera_front_pixel,battery,operating_system,weight,sim_features,fingerprint_sensors FROM mobile  
WHERE id='$id_1'";


$result1 = $conn->query($qry1);

if ($result1->num_rows > 0)
{
	

	while($row1 = $result1->fetch_assoc())
	{

		$a["brand_name"] = $row1["brand_name"];
		$a["model_name"] = $row1["model_name"];
		$a["ram"] = $row1["ram"];
		$a["storage"] = $row1["internal_storage"];
		$a['display'] = $row1["display"];
		$a["processor"] = $row1["processor"];
		$a["camera_front_pixel"] = $row1["camera_front_pixel"];
		$a["operating_system"] = $row1["operating_system"];
		$a["sim_features"] = $row1["sim_features"];
		$a["camera"] = $row1["camera"];
		$a["price"] = $row1["price"];
		$a["battery"] = $row1["battery"];
		$a["fingerprint"] = $row1["fingerprint_sensors"];
		$a["weight"] = $row1["weight"];

		$qry2 = "SELECT image FROM mobile_image WHERE mobile_id='".$id_1."' AND featured_image='YES'";
		$result2 = $conn->query($qry2);
		if ($result2->num_rows > 0)
		{
			while($row2 = $result2->fetch_assoc())
			{
				$a["image"] = $row2["image"];
			}
		}

		$qry5 = "SELECT color,image FROM mobile_image WHERE mobile_id='$id_1' AND featured_image='NO' GROUP BY color;";
		$result5 = $conn->query($qry5);

		if ($result5->num_rows > 0)
		{

			if ($result5->num_rows > 0)
				{
					$cr = 0;
					while($row5 = $result5->fetch_assoc())
					{
						$c[$cr]["color"] = $row5["color"];
						$c[$cr]["image"] = $row5["image"];
						$cr = $cr+1;
					}
				}

			$a["color_pics"] = $c;
			
		}

	}

	$returnData["mobile_1"] = $a;
	
}



$qry3 = "SELECT brand_name,model_name,price,display,processor,internal_storage,external_storage,ram,camera,camera_front_pixel,battery,operating_system,weight,sim_features,fingerprint_sensors FROM mobile
WHERE id='$id_2'";


$result3 = $conn->query($qry3);

if ($result3->num_rows > 0)
{
	

	while($row3 = $result3->fetch_assoc())
	{

		$b["brand_name"] = $row3["brand_name"];
		$b["model_name"] = $row3["model_name"];
		$b["ram"] = $row3["ram"];
		$b["storage"] = $row3["internal_storage"];
		$b['display'] = $row3["display"];
		$b["processor"] = $row3["processor"];
		$b["camera_front_pixel"] = $row3["camera_front_pixel"];
		$b["operating_system"] = $row3["operating_system"];
		$b["sim_features"] = $row3["sim_features"];
		$b["camera"] = $row3["camera"];
		$b["price"] = $row3["price"];
		$b["battery"] = $row3["battery"];
		$b["fingerprint"] = $row3["fingerprint_sensors"];
		$b["weight"] = $row3["weight"];

		$qry4 = "SELECT image FROM mobile_image WHERE mobile_id='".$id_2."' AND featured_image='YES'";
		$result4 = $conn->query($qry4);
		if ($result4->num_rows > 0)
		{
			while($row4 = $result4->fetch_assoc())
			{
				$b["image"] = $row4["image"];
			}
		}


		$qry6 = "SELECT color,image FROM mobile_image WHERE mobile_id='$id_2' AND featured_image='NO'  GROUP BY color;";
		$result6 = $conn->query($qry6);

		if ($result6->num_rows > 0)
		{

			if ($result5->num_rows > 0)
			{
					$cr = 0;
					while($row6 = $result6->fetch_assoc())
					{
						$d[$cr]["color"] = $row6["color"];
						$d[$cr]["image"] = $row6["image"];
						$cr = $cr+1;
					}
			}

			$b["color_pics"] = $d;
			
			}

		}

	

	$returnData["mobile_2"] = $b;
	
}

echo json_encode($returnData);


?>