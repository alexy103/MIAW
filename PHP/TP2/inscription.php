<?php
include('gestionBdd.inc.php');

$tendances = $_POST['tendances'];
$nom = htmlspecialchars($_POST['nom']);
$prenom = htmlspecialchars($_POST['prenom']);
$email = htmlspecialchars($_POST['email']);
$mdp = $_POST['mdp'];
$mdpConfirmation = $_POST['mdpConfirmation'];
$adresse = htmlspecialchars($_POST['adresse']);
$cp = htmlspecialchars($_POST['cp']);
$ville = htmlspecialchars($_POST['ville']);
$avatar = htmlspecialchars($_FILES['avatar']['name']);
$hashedMdp = password_hash($mdp, PASSWORD_DEFAULT);
$inscrit = false;

if(isset($nom, $prenom, $email, $adresse, $cp, $ville, $mdp) && $mdp===$mdpConfirmation)
    $inscrit = true;

if(isset($avatar))
    move_uploaded_file($_FILES['avatar']['tmp_name'], "./photo/avatar.jpg");

$connex = connexionBd();
$sql = 'INSERT INTO man_client (nom, prenom, email, mot_de_passe, adresse, code_postal, ville) VALUES (:nom, :prenom, :email, :mot_de_passe, :adresse, :code_postal, :ville)';
$requete = $connex->prepare($sql);
$requete->execute([
    'nom' => $nom,
    'prenom' => $prenom,
    'email' => $email,
    'mot_de_passe' => $hashedMdp,
    'adresse' => $adresse,
    'code_postal' => $cp,
    'ville' => $ville
]);

?>
<?php include('elements/head.inc.php') ; ?>
<body>
<header>
    <h1>Initiation à la programmation</h1>
    <?php
    include('elements/menu.inc.php') ;
    ?>
</header>
<section id="corps">
    <header></header>
    <main>
        <article>
            <?php if ($inscrit): ?>
                <h2>Inscription terminée !</h2>
                <h3>Récapitulatif :</h3>
                <?= $prenom ?> <?= $nom ?> <br>
                <?= $email ?> <br>
                <?= $adresse ?> <br>
                <?= $cp ?> <?= $ville ?>
                <?php if (count($tendances)>0): ?>
                    <br> <br>
                    <h4>Vos tendances vestimentaires :</h4>
                    <?php foreach ($tendances as $tendance): ?>
                        <?= $tendance ?> <br>
                    <?php endforeach ?> <br> <br>
                <?php endif ?>
                <?php if (isset($avatar)): ?>
                    <img src='./photo/avatar.jpg' alt="Avatar" style="width: 200px; height: 200px">
                <?php endif?>
            <?php elseif ($mdp != $mdpConfirmation): ?>
                <p>Les deux mots de passe ne correspondent pas.</p>
            <?php else: ?>
                <p>L'inscription n'a pas été effectuée. Veuillez vérifier les champs.</p>
            <?php endif ?>
        </article>
    </main>
    <aside>

    </aside>
</section>

<?php include('elements/footer.inc.php') ; ?>
