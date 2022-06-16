<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}
// Generar respuesta default
$res = array(
    "status" => 500,
    "message" => "",
    "data" => false,
    "debug" => ""
);
if (isset($_SESSION['u_idtercero']) != 0) {
    $res['status'] = 200;
    $res['message'] = 'Ya existe una sesión';
    $res['data'] = true;
    $res['debug'] = $_SESSION['u_idtercero'];
} else {
    $res['message'] = 'No hay sesión';
}
print_r(json_encode($res));
die();
