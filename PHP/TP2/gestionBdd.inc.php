<?php
setlocale (LC_TIME, 'fr_FR.utf8','fra');

define("SERVEUR","localhost");
define("USER","adelapor");
define("MDP","YYlrmeo3");
define("BD","adelapor");

function connexionBd($hote=SERVEUR,$username=USER,$mdp=MDP,$bd=BD) {
    try {
        $connex= new PDO('mysql:host='.$hote.';dbname='.$bd, $username, $mdp);
        $connex->exec("SET CHARACTER SET utf8");	//Gestion des accents
        return $connex;
    } catch(Exception $e) {
        echo 'Erreur : '.$e->getMessage().'<br>';
        echo 'N° : '.$e->getCode();
        return null;
    }
}