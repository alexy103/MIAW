<?php get_header(); ?>

<?php while (have_posts()) : the_post();?>
<div class="w3-container" style="margin-top:75px">
      <a href="<?php the_permalink() ?>"><h1 class="w3-xxxlarge w3-text-red"><b><?php the_title(); ?></b></h1></a>
      <hr style="width:50px;border:5px solid red" class="w3-round">
      <p><?php the_post_thumbnail() ?></p>
      <p><?php the_content() ?></p>
</div>
<?php endwhile; ?>
<?php posts_nav_link() ?>
<?php get_footer(); ?>