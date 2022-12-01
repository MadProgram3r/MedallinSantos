<?php
session_start();

if(isset($_SESSION['usuario'])){
    printf("Hola de nuevo ".$_SESSION['usuario']);
}else{
    $_SESSION['usuario'] = $_POST['usuario'];
    $_SESSION['password'] = $_POST['password'];
    printf("Nuevo usuario ".$_SESSION['usuario']);
}

?>