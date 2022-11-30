<?php
if(isset($_COOKIE['Fecha'])){
    printf( "Tu ultimo chequeo fue: %s", $_COOKIE['Fecha']);
    setcookie( 'Fecha' , date('l jS \of F Y h:i:s A'));
}else{
    echo "Es la primera vez que ingresas";
    setcookie('Fecha' , date('l jS \of F Y h:i:s A'));
}
?>