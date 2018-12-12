<?php
class Entree {
    public $Mark;
    public $Date;
    public function __construct($m, $d) {
        $this->Mark = $m;
        $this->Date = $d;
    }
}
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
$db = new PDO('mysql:host=localhost;dbname=university','nlc','12345');

if(isset($_GET['number']))
{
    
    $q = $db->query('SELECT * FROM exam_marks');
    $res = [];
    while ($row = $q->fetch()) {
        $res[] = new Entree($row['MARK']*1, $row['EXAM_DATE']);
        
    }
    echo json_encode($res,true);
}
else
{  
    echo "Введенные данные некорректны";
}
?>