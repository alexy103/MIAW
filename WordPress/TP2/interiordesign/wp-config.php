<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'adelapor' );

/** MySQL database username */
define( 'DB_USER', 'adelapor' );

/** MySQL database password */
define( 'DB_PASSWORD', 'YYlrmeo3' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'jjN,iYoE8Utn>bS0TY?Q.ux(Hk=q6@4ZajC(A=gTQJwTLOkD)zMGoHt b]DhFn|]' );
define( 'SECURE_AUTH_KEY',   'a:kwHlS&B6;f^WsRgz+vP4H 1qYNve4pr E%Fy6Rz(y8a |!!]kkNe._^3q.]1vT' );
define( 'LOGGED_IN_KEY',     'kIJ0Za(ci*|X5EvaBO1Jv|<?UudwWF/wC;q5u|V^VYrUpW;:a_/(k%eAV#=Ts<LS' );
define( 'NONCE_KEY',         'px@:4VevX{,~kg?b7J-B,re>NFxg!gWuYO;$[=gB5it*YMM?Pg+QI}Phy-( :wBT' );
define( 'AUTH_SALT',         '#INdLLJ#iMCZc_Dh@Qia2_y*.^CC](fy{58}2)HTpA0Q@D[KZ^py_otCt])=Y/Ps' );
define( 'SECURE_AUTH_SALT',  '/1Jypg?`jTN=Q5>4qo&(M)=LfH<.n]xLt4nt{ C/jyfJhD dm2`YOWS/*MhQHb%c' );
define( 'LOGGED_IN_SALT',    'R-yp?h_s4t}j@cWRO4WbNdYkGZd/ unx/KVSv5>}eW,|.4`BN)bY2HE86<RASD9G' );
define( 'NONCE_SALT',        '=s)ci?;M^.[7+f`@}q|j&Mt ]8Q-BsFf<|2G_3/EA^#xO1hv#6zZ4eR0I%6Y}{u ' );
define( 'WP_CACHE_KEY_SALT', '<g||{j4V^h!g*{~W4OIqVm3io!P~[,Q*LSX}b:q;t4IzKV{&/2?o!uJ%lM5js~;@' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'interior_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
