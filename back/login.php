<?php
header("Access-Control-Allow-Origin: *");
/* Si es una prueba prevuelo no debemos ejecutar el script */
if ($_SERVER['REQUEST_METHOD'] === "OPTIONS") {
    die();
}
/* Si no nos han enviado el formulario */
if ($_SERVER['REQUEST_METHOD'] !== "POST") {
    header("HTTP/1.1 400 Bad Request");
    exit(1);
}
$DATA = json_decode(file_get_contents("php://input"));
print_r(json_encode($DATA));
die();
// Generar respuesta default
$res = array(
    "status" => 500,
    "message" => "",
    "data" => "",
    "debug" => ""
);
//
if (!file_exists('./app.php')) {
    $res['message'] = 'No se ha establecido un archivo de configuración.';
    print_r(json_encode($res));
    die();
}
require './app.php';
require $APP->rutacomun . 'todas.php';
require $APP->rutacomun . 'libs/clsdbad.php';
require $APP->rutacomun . 'librerias_v2.php';
require $APP->rutacomun . 'xajax/xajax_core/xajax.inc.php';
require $APP->rutacomun . 'libxajax_v2.php';
require $APP->rutacomun . 'libdatos.php';
$iCodModulo = 0;
if ((int)$_SESSION['u_idtercero'] != 0) {
    $res['status'] = 200;
    $res['message'] = 'Ya existe una sesión';
    $res['debug'] = $_SESSION['u_idtercero'];
    print_r(json_encode($res));
    die();
}
// Verificar variables antes de hacer algo
// if (isset($_SESSION['u_identidad']) == 0 || isset($_SESSION['u_idtercero']) == 0) {
//     $res['message'] = 'No hay una sesion activa.';
//     print_r(json_encode($res));
//     die();
// }
// Recibir los datos
$DATA = json_decode(file_get_contents('php://input'), true);
// Verificar la data
if (isset($DATA) && !empty($DATA)) {
    $std = htmlspecialchars($DATA['cbotipoid']);
    $sid = htmlspecialchars($DATA['txtid']);
    $spw = $DATA['txtclave'];
    require './app.php';
    $objDB = new clsdbad_v2($APP->db_servidor, $APP->db_usuario, $APP->db_clave, $APP->db_nombre);
    if ($APP->db_puerto != '') {
        $objDB->dbPuerto = $APP->db_puerto;
    }
    if ($objDB->conectar()) {
        list($res['message'], $res['debug']) = login_validar_v4($std, $sid, $spw, $APP->idsistema, $objDB, true);
    } else {
        $res['message'] = '' . $objDB->serror . ' <br>Por favor informa al administrador del sistema.';
    }
    if ($res['message'] == 'pasa') {
        $res['status'] = 200;
        $res['message'] = 'Ingresando...';
        $res['debug'] = $_SESSION;
    }
}
print_r(json_encode($res));
die();
