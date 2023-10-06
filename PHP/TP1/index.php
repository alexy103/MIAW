<?php

//  l j F o

date_default_timezone_set('UTC');

$date = new DateTimeImmutable();
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TP1 PHP</title>
</head>
<body>

<h2>Aujourd'hui nous sommes le <?= $date->format('l j F o') ?></h2>

</body>
</html>
