<?php

add_theme_support( 'post-thumbnails' );

add_action('init', 'ajouter_menu');
function ajouter_menu() {
register_nav_menu('main_menu', 'Menu de navigation');
}

add_action('wp_enqueue_scripts', 'appel_css');
function appel_css() {
    wp_enqueue_style( 'interior', get_template_directory_uri() . '/css/interior.css' );
    wp_enqueue_script( 'global', get_template_directory_uri() . '/js/global.js', array(), '1.0.0', true );
}
