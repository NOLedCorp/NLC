<?php
class Entree {
    public $Mark;
    public $Date;
    public function __construct($m, $d) {
        $this->Mark = $m;
        $this->Date = $d;
    }
}
class User {
    public $Name;
    public $Email;
    public $Password;
    public function __construct($n, $e, $p) {
        $this->Name = $n;
        $this->Email = $e;
        $this->Password = $p;
    }
}
header('Content-type: text/html');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
$db = new PDO('mysql:host=localhost;dbname=nomokoiw_nlc;charset=UTF8','nomokoiw_nlc','9GeRox%c');
$q = $db->query('SELECT * FROM users');
    $res = [];
    while ($row = $q->fetch()) {
        $res[] = new User($row['name'], $row['email'], $row['password']);
        
    }
    echo json_encode($res,true);

?>