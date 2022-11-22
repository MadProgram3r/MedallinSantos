<?php
$ID = $_POST['id'];
//$ID = 94;
$baseDatos = "pokedex";
$usuario = "root";
$password = "";
$servidor = "";

$con = mysqli_connect($servidor, $usuario, $password, $baseDatos) or die("Problemas de conexion");
$consulta = "SELECT * FROM pokemon WHERE ID = $ID";
$registros = mysqli_query($con, $consulta);
$result = mysqli_fetch_all($registros, MYSQLI_ASSOC);


mysqli_free_result($registros);
mysqli_close($con);
echo json_encode($result, JSON_INVALID_UTF8_IGNORE);
?>