<?php
class Tech {
    public $Id;
    public $Name;
    public $Description;
    public $Logo;
    public function __construct($id, $n, $d, $l) {
        $this->Id = $id;
        $this->Name = $n;
        $this->Description = $d;
        $this->Logo = $l;
    }
}
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
$db = new PDO('mysql:host=localhost;dbname=nlc;charset=UTF8','nlc','12345');
if(isset($_GET['id']))
{
    $id = $_GET['id'];
    $q = $db->query("SELECT * FROM techs WHERE tech_id = $id");
    $s = $q->fetch();
    $res = new Tech($s['tech_id'], $s['name'], $s['descr'], $s['logo']);
    echo json_encode($res,true);
}
else
{  
    echo "Введенные данные некорректны";
}

// if(isset($_GET['number']))
// {
    
//     $q = $db->query('SELECT * FROM exam_marks');
//     $res = [];
//     while ($row = $q->fetch()) {
//         $res[] = new Entree($row['MARK']*1, $row['EXAM_DATE']);
        
//     }
//     echo json_encode($res,true);
// }
// else
// {  
//     echo "Введенные данные некорректны";
// }
?>