<?php

$nombre = $_POST["nombre"];
$mail = $_POST["email"];
$mensaje = $_POST["Text-area"];

$para = "joseparraga18@gmail.com"
$asunto = "mail-de-la-web"

mail($para, $asunto, utf8_decode($mensaje, $mail, $nombre))

header("location:exito.html")






?>