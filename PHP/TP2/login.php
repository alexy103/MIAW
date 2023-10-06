<?php
include('gestionBdd.inc.php');
$connex = connexionBd();

if (isset($_POST['email']) && isset($_POST['mdp'])) {

    $mdp = htmlspecialchars($_POST['mdp']);
    $email  = htmlspecialchars($_POST['email']);
    $sql = "select * from man_client where email='".$email."'";
    $res = $connex->query($sql);
    $data = $res->fetch(PDO::FETCH_ASSOC);

    if (password_verify($mdp, $data['mot_de_passe'])) {
        setcookie('user', $data['prenom'], time() + 3600);
        header ('location: index.php');
    } else {
        echo '<body onLoad="alert(\'Membre non reconnu...\')">';
        #echo '<meta http-equiv="refresh" content="0;URL=index.php">';
    }
}
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Connexion</title>
</head>
<?php include('elements/head.inc.php') ; ?>
<body>
<h1>Connexion</h1>
<form method="post"  id="inscription" action="login.php" enctype="multipart/form-data">
    <label for="saisieEmail">Adresse e-mail </label>
    <input type="email" name="email"  id="saisieEmail" class="validate" required/>
    <br> <br>

    <label for="saisieMdp">Mot de passe </label>
    <input type="password" name="mdp"  id="saisieMdp" class="validate" required/>
    <br> <br>

    <input type="submit" class="btn" value="Connexion"/>
</form>

</body>
</html>