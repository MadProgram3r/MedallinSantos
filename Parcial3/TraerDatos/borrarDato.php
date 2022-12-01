<?php
$Id = $_POST['idBorrar'];

//$ID = 94;
$baseDatos = "pokedex";
$usuario = "root";
$password = "";
$servidor = "";

$con = mysqli_connect($servidor, $usuario, $password, $baseDatos) or die("Problemas de conexion");
$consulta = "DELETE From pokemon WHERE Id = $Id";

if(mysqli_query($con, $consulta)){
    if(mysqli_affected_rows($con) > 0){
        $response["estado"] = "Ok";
        $response["message"] = "Registro borrado correctamente";
    }else{
        $response["estado"] = "Bad";
        $response["message"] = "Ningun registro borrado";
    }
}else{
    $response["estado"] = "Bad";
    $response["message"] = "Error al borrar";
}



mysqli_close($con);
echo json_encode($response, JSON_INVALID_UTF8_IGNORE);
?>