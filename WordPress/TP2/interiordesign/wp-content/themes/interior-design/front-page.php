<?php get_header(); ?>

<?php
while (have_posts()) : the_post();?>

<div class="w3-container" style="margin-top:75px">
      <h1 class="w3-xxxlarge w3-text-red"><b><?php the_title(); ?></b></h1>
      <hr style="width:50px;border:5px solid red" class="w3-round">
      <?php the_content();?>
    </div>
<?php endwhile;?>     
    <div class="w3-container">
      <h2 class="w3-text-red">Nos 3 dernières actualités</h1>
    </div>
    <div class="w3-row-padding">

      <!-- Actu 1 -->
      <div class="w3-col m4 w3-margin-bottom">
        <div class="w3-light-grey">
          <a href=""><img src="<?=get_stylesheet_directory_uri();?>/img/bedroom.jpg" alt=""></a>
          <div class="w3-container">
            <h3><a href="">Les grandes lignes intemporelles</a></h3>
            <p class="w3-opacity"><a href="">Chambre</a></p>
            <p><small><i>Le 12/12/2019</i></small></p>
            <p>On trouve de plus en plus de mobilier en rotin, qui était déjà bien présent, me direz-vous [ Voir ou
              revoir [ Tendance déco ] Le rotin, stop ou encore ? ], mais dans des teintes naturelles.</p>
          </div>
        </div>
      </div>

      <!-- Actu 2 -->
      <div class="w3-col m4 w3-margin-bottom">
        <div class="w3-light-grey">
          <a href=""><img src="<?=get_stylesheet_directory_uri();?>/img/diningroom.jpg" alt=""></a>
          <div class="w3-container">
            <h3><a href="">Le vintage est tendance, n’oubliez pas !</a></h3>
            <p class="w3-opacity"><a href="">Salon</a>, <a href="">Séjour</a></p>
            <p><small><i>Le 23/06/2020</i></small></p>
            <p>Le vintage est tendance depuis déjà une bonne dizaine d’année et plus. Les marques comme Urban Outfitters
              n’en finissent pas de surfer sur la vague. </p>
          </div>
        </div>
      </div>

      <!-- Actu 3 -->
      <div class="w3-col m4 w3-margin-bottom">
        <div class="w3-light-grey">
          <a href=""><img src="<?=get_stylesheet_directory_uri();?>/img/livingroom2.jpg" alt=""></a>
          <div class="w3-container">
            <h3><a href="">Donnez du style grâce aux détails</a></h3>
            <p class="w3-opacity"><a href="">Salle de bain</a></p>
            <p><small><i>Le 06/10/2020</i></small></p>
            <p>Hello, hello les Amoureux de la déco,Je suis tombée dernièrement sur deux mises en scène réalisées par
              deux grandes maques de la grande distribution, j’ai nommé Zara Home et Ikea.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>