<?php
$j = 1;

function comptage($min, $max) {
    $res = 0;
    for ($i = $min; $i <= $max; $i++) :
        if ($i % 2 == 0) :
            $res += $i;
        endif;
    endfor;
    return $res;
}

function prixCinema(int $age, int $reduction, int $jour) {
    $tarif = 8;

    if($age<=14):
        $tarif = 4;
    elseif($age<18):
        $tarif = 5;
    elseif($jour==1):
        $tarif = 6;
    elseif($reduction):
        $tarif = 7;
    endif;

    return $tarif;
}

$ageEtudiants = [];
for($i=0; $i<10; $i++):
    $ageEtudiants[] = rand(18, 40);
endfor;

$ageMinimum = $ageEtudiants[0];
$ageMaximum = $ageEtudiants[0];
$ageSomme = 0;

foreach ($ageEtudiants as $age):
    if($age < $ageMinimum):
        $ageMinimum = $age;
    endif;
    if($age > $ageMaximum):
        $ageMaximum = $age;
    endif;
    $ageSomme += $age;
endforeach;

$ageMoyen = $ageSomme/sizeof($ageEtudiants);

include 'donnees.php';

$nbJoursAnnee = 0;

$locale = 'fr_FR';
$formatter = new IntlDateFormatter($locale, IntlDateFormatter::NONE, IntlDateFormatter::NONE);
$mois = date('n'); // Récupère le mois actuel (1-12)
$annee = date('Y');  // Récupère l'année actuelle
$premierJourDuMois = new DateTime("$annee-$mois-01");
$dernierJourDuMois = new DateTime("$annee-$mois-" . date('t', strtotime($premierJourDuMois->format('Y-m-d'))));
$formatter->setPattern("'Le mois de' MMMM 'contient' d 'jours'");
$moisEtJoursActuels = $formatter->format($dernierJourDuMois);


print_r($citizenships['FRA']);

?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h2>Les boucles</h2>
<h3>For</h3>

<ul>
    <?php for($i=1;$i<=10;$i++) : ?>
        <li style="display: inline"><?= $i ?></li>
    <?php endfor ?>
</ul>


<h3>While</h3>
<ul>
    <?php while($j<=10) : ?>
        <li style="display: inline"><?= $j ?></li>
        <?php $j++;
    endwhile ?>
</ul>

<h3>Pairs entre 4 et 200</h3>
<?= comptage(4, 200) ?>

<h2>Prix du cinéma</h2>
<?= prixCinema(35, 0, 5) ?>

<h2>Âge des étudiants</h2>
<ul>
    <?php foreach ($ageEtudiants as $age): ?>
    <li style="display: inline"><?= $age?></li>
    <?php endforeach;?>
</ul>
<h3>Âge minimum</h3>
    <?= $ageMinimum  ?>
<h3>Âge maximum</h3>
    <?= $ageMaximum  ?>
<h3>Moyenne d'âge</h3>
    <?= $ageMoyen  ?>

<h2>Calendrier</h2>


<?php foreach ($jourMois as $annee=>$tabDetails):?>

    <?= $annee?> <br>

    <?php foreach ($tabDetails as $mois=>$jours): ?>
        Le mois de <?= $mois ?> contient <?= $jours ?> jours <br>
        <?php $nbJoursAnnee += $jours?>
    <?php endforeach;?>
    L'année contient <?= $nbJoursAnnee?> jours
    <?php $nbJoursAnnee = 0;?>
    <br> <br>
<?php endforeach;?>

<?= $moisEtJoursActuels ?>

<h2>Choix de pays</h2>

<select name="pays">
    <option value="">Choisir un pays</option>
    <?php foreach ($citizenships as $paysAbrege => $details): ?>
        <?php $pays = $details['pays']; ?>
        <?php $nationalite = $details['nationalite']; ?>
        <option value="<?=$pays?> : <?=$nationalite?>"><?= $paysAbrege ?></option>
    <?php endforeach; ?>
</select>


Bonus :
<select name="pays">
    <option value="">Choisir un pays</option>
    <?php foreach ($citizenships as $paysAbrege => $details): ?>
        <?php $pays = $details['pays']; ?>
        <?php $nationalite = $details['nationalite']; ?>
        <option value="<?=$paysAbrege?> : <?=$nationalite?>"><?= $pays ?></option>
    <?php endforeach; ?>
</select>


</body>
</html>