<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
<div class="w3-container" style="margin-top:75px">
      <h1 class="w3-xxxlarge w3-text-red"><b><?php the_title(); ?></b></h1>
      <hr style="width:50px;border:5px solid red" class="w3-round">
      <p><?php the_content() ?></p>
</div>
<?php endwhile; ?>

<?php get_footer(); ?>