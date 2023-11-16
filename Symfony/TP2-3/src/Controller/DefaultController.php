<?php

namespace App\Controller;

use App\Form\InscriptionType;
use App\Form\SpectacleType;
use App\Repository\LieuRepository;
use App\Repository\ParticipantRepository;
use App\Repository\SpectacleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Spectacle;


class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [

        ]);
    }

    #[Route('/spectacle/test', name: 'app_spectacle_test')]
    public function spectacleTest(): Response {
        $spectacle = new Spectacle('Spectacle 1', 'La description du premier spectacle', 'images/20.jpg', new \DateTime('2023-10-15'));
        return $this->render('default/spectacleTest.html.twig', [
            'spectacle' => $spectacle,
        ]);
    }

    #[Route('/spectacles', name: 'app_spectacles')]
    public function spectacles(SpectacleRepository $spectacleRepository): Response {
        return $this->render('default/spectacles.html.twig', [
            'spectacles' => $spectacleRepository->findAll(),
        ]);
    }

    #[Route('/lieux', name: 'app_lieux')]
    public function lieux(LieuRepository $lieuRepository): Response {
        return $this->render('default/lieux.html.twig', [
            'lieux' => $lieuRepository->findAll(),
        ]);
    }

    #[Route('/spectacle/ajout', name: 'app_addSpectacle')]
    public function addSpectacle(Request $request, EntityManagerInterface $entityManager): Response {
        $spectacle = new Spectacle();
        $form = $this->createForm(SpectacleType::class, $spectacle);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($spectacle);
            $entityManager->flush();
            return $this->redirectToRoute('app_addSpectacle');
        }
        return $this->render('default/addSpectacle.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/spectacle{id}', name: 'app_spectacle')]
    public function spectacle(int $id, SpectacleRepository $spectacleRepository): Response {
        $spectacle = $spectacleRepository->find($id);
        return $this->render('default/spectacle.html.twig', [
            'id' => $id,
            'spectacle' => $spectacle,
        ]);
    }

    #[Route('/inscription', name: 'app_inscription')]
    public function inscription(Request $request, EntityManagerInterface $entityManager, SpectacleRepository $spectacleRepository, ParticipantRepository $participantRepository): Response {
        $form = $this->createForm(InscriptionType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $participantData = $form['participant']->getData();
            $participant = $participantRepository->find($participantData);

            $spectacleData = $form['spectacle']->getData();
            $spectacle = $spectacleRepository->find($spectacleData);

            if($spectacle->getParticipants()->contains($participant)) {
                return $this->render('default/inscription.html.twig', [
                    'form' => $form,
                    'done' => false,
                    'alreadyDone' => true,
                    'spectacle' => $spectacle
                ]);
            }

            $participant->addReservation($spectacle);
            $spectacle->addParticipant($participant);

            $entityManager->persist($participant);
            $entityManager->persist($spectacle);
            $entityManager->flush();

            return $this->render('default/inscription.html.twig', [
                'form' => $form,
                'done' => true,
                'spectacle' => $spectacle
            ]);
        }
        return $this->render('default/inscription.html.twig', [
            'form' => $form,
            'done' => false,
        ]);
    }





}
