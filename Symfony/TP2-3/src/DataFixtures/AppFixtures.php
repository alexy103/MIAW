<?php

namespace App\DataFixtures;

use App\Entity\Lieu;
use App\Entity\Participant;
use App\Entity\Spectacle;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
// Noms des lieux autour de La Rochelle
        $lieuxNoms = [
            'Tour Saint-Nicolas', 'Musée Maritime', 'Aquarium de La Rochelle',
            'Parc Charruyer', 'Plage des Minimes', 'Port des Minimes',
            'Le Gabut', 'La Coursive', 'Vieux-Port',
            'Tour de la Lanterne', 'Parc des Expositions', 'Jardin des Plantes',
            'Musée d\'Histoire Naturelle', 'Musée des Beaux-Arts', 'Fort Boyard',
            'Île de Ré', 'Cathédrale Saint-Louis', 'Bunker de La Rochelle',
            'Le Carré Amelot', 'Place de Verdun'
        ];

// Noms de spectacles inventés
        $spectaclesNoms = [
            'Les Voiles du Destin', 'Marées du Passé', 'La Danse des Océans',
            'Chant des Sirènes', 'Rêves de Phare', 'L\'Écho des Vagues',
            'Sables Étoilés', 'Mystères du Large', 'Horizons Lointains',
            'Vent Marin', 'Reflets d\'Azur', 'Ombres du Fort',
            'Lumières du Port', 'Voyage en Mer', 'Secrets de l\'Île',
            'Récits de Marins', 'Voix de la Tempête', 'Clarté de la Lanterne',
            'Esprits du Bunker', 'Échos de la Place'
        ];

        $lieux = [];

// Créer les lieux
        foreach ($lieuxNoms as $nomLieu) {
            $lieu = new Lieu($nomLieu, "Adresse de $nomLieu", "17000", "La Rochelle");

            $manager->persist($lieu);
            $lieux[] = $lieu;
        }

        // Créer les participants
        $participant1 = new Participant();
        $participant1->setNom('Nom 1');
        $participant1->setPrenom('Prenom 1');
        $participant1->setMail('Mail 1');

        $participant2 = new Participant();
        $participant2->setNom('Nom 2');
        $participant2->setPrenom('Prenom 2');
        $participant2->setMail('Mail 2');

        $participant3 = new Participant();
        $participant3->setNom('Nom 3');
        $participant3->setPrenom('Prenom 3');
        $participant3->setMail('Mail 3');

        $manager->persist($participant1);
        $manager->persist($participant2);
        $manager->persist($participant3);

// Créer les spectacles
        foreach ($spectaclesNoms as $nomSpectacle) {
            $spectacle = new Spectacle();
            $spectacle->setNom($nomSpectacle);
            $spectacle->setDescription("Description pour $nomSpectacle");
            $numImage = rand(1, 17);
            $spectacle->setImage("images/$numImage.jpg");
            $spectacle->setDate(new \DateTime());

            $lieuRandom = $lieux[array_rand($lieux)];
            $spectacle->setLieu($lieuRandom);

            $spectacle->addParticipant($participant1);
            $spectacle->addParticipant($participant2);


            $manager->persist($spectacle);
        }

        $manager->flush();
    }
}