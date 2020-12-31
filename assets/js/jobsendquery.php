<?php 

extract($_REQUEST);
$date=date("Y-m-d H:i:s");
if($emailId){
$to  = "palak@globalauto.co.in, asivakumar@globalauto.co.in";
$subject = 'Message From Global AutoTech Website';
// message
$message = '
<html>
<head> 
  <title></title>
</head>
<body>
  <p></p>
  <table>
   
    <tr>
      <td>Name: '.$name.'</td>
    </tr>
	 <tr>
      <td>EmailId: '.$emailId.'</td>
    </tr>
	<tr>
      <td>Query: '.$typequery.'</td>
    </tr>
         <tr>
      <td>Description: '.$desc.'</td>
    </tr>
  </table>
</body>
</html>
';

$headers .= 'From:Global AutoTech' . "\r\n";
$headers = "From:info@globalauto.co.in\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
if(mail($to, $subject, $message, $headers)){
$val["Status"]="Success";
$val["Message"]="";
}else{
$val["Status"]="Failure";
$val["Message"]="Email does not match";
}
}else{
$val["Status"]="Failure";
$val["Message"]="Email does not match";		
}

$jsondata =json_encode($val);
echo $jsondata;
?>
