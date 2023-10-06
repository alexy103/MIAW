<?php
include('gestionBdd.inc.php');

if(empty($_COOKIE))
    header ('location: index.php');

print_r($_COOKIE);

$genre = null;
$nbts = $_GET['nbTS'];

if (is_numeric($nbts))
    $total = $nbts*15;

if ($_GET['modele']==='F')
    $genre = 'femme';
elseif($_GET['modele']==='H')
    $genre = 'homme';


$quantite = htmlspecialchars($_GET['nbTS']);
$type = htmlspecialchars($_GET['modele']);
$id_client = htmlspecialchars($_GET[$_COOKIE['user']]);

if(isset($quantite, $type, $id_client))
    $inscrit = true;

$connex = connexionBd();
$sql = 'INSERT INTO man_commande (quantite, type, id_client) VALUES (:quantite, :type, :id_client)';
$requete = $connex->prepare($sql);
$requete->execute([
    'quantite' => $quantite,
    'prenom' => $type,
    'id_client' => $id_client,
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
        <header><h2>Exercice 2</h2></header>
        <main>
            <article>
                <?php if (!empty($nbts) && is_numeric($nbts)): ?>
                    <h3>Récapitulatif</h3>
                    <?php if($nbts>1): ?>
                        <?= $nbts ?> t-shirts <?= $genre ?>
                    <?php else: ?>
                        <?= $nbts ?> t-shirt <?= $genre ?>
                    <?php endif?>
                    <h3>Coût de votre commande</h3>
                    <?php if ($nbts > 50): ?>
                        <?= $nbts ?> * 15€ + 4€ (frais de port) = <?= $total+4 ?>€
                    <?php else: ?>
                        <?= $nbts ?> * 15€ + 8€ (frais de port) = <?= $total+8 ?>€
                    <?php endif ?>
                    <p>
                        <a class="btn" href="index.php?modifier=ok">Modifier la commande</a>
                    </p>
                <?php elseif (!empty($nbts) && !is_numeric($nbts)): ?>
                    <p>Quantité erronée</p>
                <?php else: ?>
                    <p>Erreur : veuillez choisir une quantité de t-shirts</p>
                <?php endif ?>
            </article>
        </main>
        <aside>

        </aside>
    </section>
    
     <?php include('elements/footer.inc.php') ; ?>
