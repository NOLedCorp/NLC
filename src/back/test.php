<?php
class Entree {
    public $Mark;
    public $Date;
    public function __construct($m, $d) {
        $this->Mark = $m;
        $this->Date = $d;
    }
}
class Lecturer {
    public $Name;
    public $Email;
    public $Password;
}
header('Content-type: text/html');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
$db = new PDO('mysql:host=localhost;dbname=nomokoiw_nlc;charset=UTF8','nomokoiw_nlc','9GeRox%c');
$user = json_decode(file_get_contents('php://input'), true);
if(isset($user['Name']))
{
    $u = new Lecturer;
    $u -> Name = $user['Name'];
    $u -> Email = $user['Email'];
    $u -> Password = $user['Password'];
    //$stmt = $db->prepare('INSERT INTO dishes (dish_name, price, is_spicy) VALUES (?,?,?)');
    $result = $db->prepare('INSERT INTO users (NAME, EMAIL, PASSWORD) VALUES (?,?,?)');
    $result->execute(array($u -> Name, $u -> Email, $u -> Password));
    //$stmt->execute(array($_POST['new_dish_name'], $_POST['new_price'], $_POST('is_spicy']));
    //$result = $db->exec("INSERT INTO lecturer (NAME, SURNAME, CITY, UNIV_ID) VALUES ('Ivan', 'Ivanov', 'Voronezh', 22)");
    echo json_encode($u);
}
else
{  
    echo "веденные данные некорректны";
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