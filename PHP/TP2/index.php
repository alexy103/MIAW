<?php
include('elements/head.inc.php');

print_r($_COOKIE);

?>
<body>
    <header>
        <a name="top"></a>
        <h1>Initiation à la programmation</h1>
        <?php  include('elements/menu.inc.php') ; ?>
    </header>
    <main id="corps">
        <section>
            <h2>Exercice 1</h2>
            <article>
                <h3>Traitement d'un formulaire</h3>
                <form method="get"  id="commandeTS" action="traiterCommande.php">
                    <label for="saisieNbTS">Nombre de t-shirts :</label>
                    <input type="number" name="nbTS"  id="saisieNbTS" class="validate"/>
                    <input type="radio" name="modele" value="F" id="femme"  class="with-gap" checked/>
                    <label for="femme">Femme</label>
                    <input type="radio" name="modele" value="H"  class="with-gap" id="homme"/>
                    <label for="homme">Homme</label>
                    <input type="submit" class="btn" value="Commander"/>
                </form>
            </article>
            <article>
                <h3>Commande rapide</h3>
                <p><a class="btn rapide" href="traiterCommande.php?nbTS=1&modele=F">Commander un t-shirt féminin immédiatement !</a></p>
            </article>
        </section>
        <section>
            <h2>Exercice 2</h2>
            <article>
                <h3>Inscription en tant que client</h3>
                <form method="post"  id="inscription" action="inscription.php" enctype="multipart/form-data">
                    <input type="text" name="nom"  id="saisieNom" class="validate" required/>
                    <label for="saisieNom">Nom</label>
                    <input type="text" name="prenom"  id="saisiePrenom" class="validate" required/>
                    <label for="saisiePrenom">Prénom</label>
                    <input type="email" name="email"  id="saisieEmail" class="validate" required/>
                    <label for="saisieEmail">E-mail</label>
                    <input type="password" name="mdp"  id="saisieMdp" class="validate" required/>
                    <label for="saisieMdp">Mot de passe</label>
                    <input type="password" name="mdpConfirmation"  id="saisieMdpConfirmation" class="validate" required/>
                    <label for="saisieMdpConfirmation">Confirmer le mot de passe</label>
                    <input type="text" name="adresse"  id="saisieAdresse" class="validate" required/>
                    <label for="saisieAdresse">Adresse</label>
                    <input type="number" name="cp"  id="saisieCp" class="validate" required/>
                    <label for="saisieCp">Code postal</label>
                    <input type="text" name="ville"  id="saisieVille" class="validate" required/>
                    <label for="saisieVille">Ville</label>

                    <h4>Tendances vestimentaires :</h4>
                    <input type="checkbox" name="tendances[]" id="saisieCoton" class="validate" value="Coton">
                    <label for="saisieCoton">Coton</label>
                    <input type="checkbox" name="tendances[]" id="saisieLycra" class="validate" value="Lycra">
                    <label for="saisieLycra">Lycra</label>
                    <input type="checkbox" name="tendances[]" id="saisieManchesLongues" class="validate" value="Manches longues">
                    <label for="saisieManchesLongues">Manches longues</label>
                    <input type="checkbox" name="tendances[]" id="saisieManchesCourtes" class="validate" value="Manches courtes">
                    <label for="saisieManchesCourtes">Manches courtes</label>

                    <h4>Choisir une photo de profil (facultatif) :</h4>
                    <input type="file" name="avatar"  id="uploadAvatar" class="validate" accept=".jpg"/>

                    <input type="submit" class="btn" value="S'inscrire"/>
                </form>
            </article>
        </section>
    </main>
    <aside>
    </aside>
    <?php include('elements/footer.inc.php') ; ?>
