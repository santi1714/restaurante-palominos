<?php
$usuario = "root"; 
$password = ""; 
$servidor = "localhost"; 
$basededatos = "db_formulario"; 
$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos);
if (!$conexion) {
    die("Error al conectarse a la base de datos: " . mysqli_connect_error());
}
$nombre = $_POST['NOMBRE'];
$mesa = $_POST['MESA'];
$comentarios = $_POST['COMENTARIOS'];
$sql = "INSERT INTO encuesta_opinion (nombre, mesa, comentarios) VALUES ('$nombre', '$mesa', '$comentarios')";
$ejecutar = mysqli_query($conexion, $sql); 
if (!$ejecutar) {
    echo "Hubo un error: " . mysqli_error($conexion);
} else {
    echo "Datos Guardados Correctamente<br><a href='index.html'>volver</a>";
}
mysqli_close($conexion);
?>