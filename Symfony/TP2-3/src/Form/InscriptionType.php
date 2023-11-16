<?php

namespace App\Form;

use App\Entity\Participant;
use App\Entity\Spectacle;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class InscriptionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('participant', EntityType::class, [
                'class' => Participant::class,
                'choice_label' => 'nom',
                'label' => 'Je veux inscrire :'
            ])
            ->add('spectacle', EntityType::class, [
                'class' => Spectacle::class,
                'choice_label' => 'nom',
                'label' => 'au spectacle :'
            ])
            ->add('save', SubmitType::class, ['label' => 'Inscription'])
            ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
