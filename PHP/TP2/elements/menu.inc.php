<?php
print_r($_COOKIE);
?>
<nav>
<?php if (empty($_COOKIE['user'])):?>
    <ul>
        <li><a  href="index.php">Accueil</a></li>
        <li><a  href="traiterCommande.php">Commande</a></li>
        <li><a  href="login.php">Connexion</a></li>
    </ul>
<?php else: ?>
        Connecté en tant que <?= $_COOKIE['user'] ?>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="traiterCommande.php">Commande</a></li>
            <li><a href="logout.php">Déconnexion</a></li>
        </ul>
<?php endif ?>
</nav>
