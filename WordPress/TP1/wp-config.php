<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'adelapor' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'adelapor' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'YYlrmeo3' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3*jm~%%zgg?Z[n4ZCC*pWUXsU1RZ<5$0/(zu#%dL/?r:Y.m0JQ8U;D+89#wU9|V(' );
define( 'SECURE_AUTH_KEY',  'TK_YT)#E8fz*qY<MgmQ.c_J>@<mzv_n=E67yB.J(Uvy73E(65y3/}kQY2,NtaJf`' );
define( 'LOGGED_IN_KEY',    'n0JQNzowM ~.Pt!H@r4c[Ly<QFZt/uV7Hddu/-verj<^s bG8V ef)YVH0 DO9B_' );
define( 'NONCE_KEY',        '&`wkQFRylw9p6mVZ![`?lhA,$-4pNuXXe^>9*F7MQ<(<@;1W/<-G(dpu{F`Z=7QB' );
define( 'AUTH_SALT',        '<H5koK<01zv0oo3fADZgP08)y{@i5*Gd>YX?9H{>|4cR8G_NXc?u2tDyr@1{H;tY' );
define( 'SECURE_AUTH_SALT', 'L]}40VfF#5ua4q5FKZS2fk)9_NVDvB.v_2x ):i=u-9I!2?o?Ak]Rc;mErUxj)`V' );
define( 'LOGGED_IN_SALT',   '9$Y0fXKBBV3>0:5RM@>S|0D6M~MH l~g,1U0M@17C2NVv= L`dZ>Cg[1>B*4KQu]' );
define( 'NONCE_SALT',       '_*}`;9vQ{vkC(NS0vg1>YgiG+ay5a:lVQmOJHe}&I&r;b<Lo}*+f`Wp}D&v)viH2' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'tp1_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

define('FS_METHOD','direct');
define('WP_PROXY_HOST','wwwcache.univ-lr.fr');
define('WP_PROXY_PORT','3128');

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
