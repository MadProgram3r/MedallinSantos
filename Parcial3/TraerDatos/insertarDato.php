<?php
$Id = $_POST['id'];
$Categoria = $_POST['categoria'];
$Nombre = $_POST['nombre'];
$Tipo1 = $_POST['tipo1'];
$Tipo2 = $_POST['tipo2'];
$Descripcion = $_POST['descripcion'];

//$ID = 94;
$baseDatos = "pokedex";
$usuario = "root";
$password = "";
$servidor = "";

$con = mysqli_connect($servidor, $usuario, $password, $baseDatos) or die("Problemas de conexion");
$consulta = "INSERT INTO pokemon (ID, Nombre, Categoria, Tipo1, Tipo2, Descripcion) VALUES ($Id , $Categoria , $Nombre , $Tipo1 , $Tipo2 , $Descripcion)";
if(mysqli_query($con, $consulta)){
    $response["message"] = "Registro agregado correctamente";
}else{
    $response["message"] = "Error al insertar";
}


mysqli_close($con);
echo json_encode($response, JSON_INVALID_UTF8_IGNORE);
?>