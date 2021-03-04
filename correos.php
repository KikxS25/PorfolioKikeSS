<?php

$destinatarios = 'cooltv2552@gmail.com';
//esto es al correo que se enviará el mensaje
$nombre = $_POST ['nombre'];
$email = $_POST ['email'];
$asunto = $_POST ['asunto'];
$mensaje = $_POST ['mensaje];


$header = $"Enviado desde Portafolio CVKike"
$mensajeCompleto = $mensaje . "\nAtenteamente: " . $nombre

mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTime out(\"location.href='index.html'\",1000)</script>";



?>