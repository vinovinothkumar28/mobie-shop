<?php
include("db.php");
// $postdata = file_get_contents("php://input");
// if(isset($postdata) && !empty($postdata))
{


	
	// $id_1 = $_GET["id_1"];
	// $id_2 = $_GET["id_2"];

	//echo json_encode($requestData);

	if($_GET["count"] == 1)
	{
		$qry = "SELECT brand_name,model_name,id FROM mobile WHERE id =".$_GET["id_1"]."";
	}
	elseif($_GET["count"] == 2)
	{
		$id_1 = $_GET["id_1"];
	$id_2 = $_GET["id_2"];
		$qry = "SELECT brand_name,model_name,id FROM mobile WHERE id IN($id_1,$id_2) ";
	}

	

	$result = $conn->query($qry);

if ($result->num_rows > 0)
{
	$cr = 0;

	while($row = $result->fetch_assoc())
	{
		$a[$cr]["brand_name"] = $row["brand_name"];
		$a[$cr]["model_name"] = $row["model_name"];
		$a[$cr]["id"] = $row["id"];
		$cr = $cr+1;
		
	}

	echo json_encode($a);
}

}
?>