<?php
include("db.php");

$brand_name=$_GET["brand_name"];
$mobile_id=$_GET["mobile_id"];

$qry = "SELECT id,model_name,price,internal_storage,ram FROM mobile WHERE brand_name='".$brand_name."' AND id!='".$mobile_id."'";

$result = $conn->query($qry);

if ($result->num_rows > 0)
{
	$cr = 0;
	$sno =0;
	while($row = $result->fetch_assoc())
	{

		$a[$cr]["id"] = $row["id"];
		$a[$cr]["model_name"] = $row["model_name"];
		$a[$cr]["ram"] = $row["ram"];
		$a[$cr]["internal_storage"] = $row["internal_storage"];
		$a[$cr]["price"] = $row["price"];

		$qry2 = "SELECT image FROM mobile_image WHERE mobile_id='".$row["id"]."' AND featured_image='YES'";
		$result2 = $conn->query($qry2);
		if ($result2->num_rows > 0)
		{
			while($row2 = $result2->fetch_assoc())
			{
				$a[$cr]["image"] = $row2["image"];
			}
		}

		

		
		
		$cr++;

	}

	echo json_encode($a);
}

?>