<?php

namespace App\Controller;

use App\Entity\Evenement;
use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;


class DefaultController extends AbstractController
{
    private function chargeDonnees() {
        $ev1=new Evenement("test1",new \DateTime('2022-09-23'),"img/dummies/430x500a.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev2=new Evenement("test2",new \DateTime('2022-09-25'),"img/dummies/430x500b.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev3=new Evenement("test3",new \DateTime('2022-10-01'),"img/dummies/430x500c.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev4=new Evenement("test4",new \DateTime('2022-10-23'),"img/dummies/430x500d.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev5=new Evenement("test5",new \DateTime('2022-11-12'),"img/dummies/430x500e.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev6=new Evenement("test6",new \DateTime('2022-11-15'),"img/dummies/430x500f.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev7=new Evenement("test7",new \DateTime('2022-12-23'),"img/dummies/430x500a.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev8=new Evenement("test8",new \DateTime('2022-12-25'),"img/dummies/430x500b.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $ev9=new Evenement("test9",new \DateTime('2023-01-05'),"img/dummies/430x500c.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid beatae consectetur consequatur corporis, culpa delectus deserunt dolor dolorem dolorum ea exercitationem fuga id illum, incidunt iste iure, laborum libero modi natus nobis nulla officia officiis perferendis provident quam quasi quisquam quo quos repellendus saepe sunt temporibus totam unde veritatis vitae voluptas. Accusamus dignissimos, distinctio dolore enim eos esse est excepturi explicabo inventore libero pariatur perspiciatis quas quasi quod, sit? Accusamus amet assumenda atque distinctio eius expedita explicabo itaque labore magnam, magni molestias nobis non, pariatur perferendis quaerat qui sit veniam vero voluptatem voluptatum. Aliquid commodi debitis excepturi natus quas?");
        $evs=[$ev1,$ev2,$ev3,$ev4,$ev5,$ev6,$ev7,$ev8,$ev9];
        return $evs;
    }


    #[Route('/', name: 'app_homepage')]
    public function index(Request $request): Response
    {
        $routeName = $request->attributes->get('_route');
        $date = new \DateTime('11-11-2023');
        #$evenement1 = new Evenement('Premier evenement', 'La description de l\'evenement numero 1', 'bird.png', $date);
        $evenements = array_slice($this->chargeDonnees(), 0, 6);
        return $this->render('default/index.html.twig', [
            'routeName' => $routeName,
            #'evenement1' => $evenement1,
            'evenements' => $evenements,

        ]);
    }


    #[Route('/contact', name: 'app_contact')]
    public function contact(Request $request): Response
    {
        $routeName = $request->attributes->get('_route');
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $rep=$form->getData();
            $this->addFlash('success', 'Votre message a été envoyé avec succès.');
            return $this->redirectToRoute('app_contact');
        }

        return $this->render('default/contact.html.twig', [
            'routeName' => $routeName,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/evenements', name: 'app_evenements')]
    public function evenements(Request $request): Response
    {
        $routeName = $request->attributes->get('_route');
        $evenements = array_slice($this->chargeDonnees(), 0, 6);
        return $this->render('default/evenements.html.twig', [
            'routeName' => $routeName,
            'evenements' => $evenements,
        ]);
    }

    #[Route('/about', name: 'app_about')]
    public function about(Request $request): Response
    {
        $routeName = $request->attributes->get('_route');
        return $this->render('default/about.html.twig', [
            'routeName' => $routeName,
        ]);
    }

    #[Route('/panier', name: 'app_panier')]
    public function panier(RequestStack $requestStack, Request $request, SessionInterface $session)
    {
        $nom = $request->query->get('nom');
        if ($nom) {
            $panier = $session->get('panier', []);
            if (!in_array($nom, $panier)) {
                array_push($panier, $nom);
            }
            $session->set('panier', $panier);
        } else {
            $panier = $session->get('panier', []);
        }
        $routeName = $request->attributes->get('_route');
        $evenements = $this->chargeDonnees();
        return $this->render('default/panier.html.twig', [
            'routeName' => $routeName,
            'panier' => $panier,
            'evenement' => $nom,
        ]);
    }


    #[Route('/evenement/{nom}', name: 'app_evenement')]
    public function single(Request $request, String $nom): Response
    {
        $routeName = $request->attributes->get('_route');
        $evenements = $this->chargeDonnees();

        foreach ($evenements as $e) {
            if($e->getNom() == $nom) {
                return $this->render('default/single.html.twig', [
                    'routeName' => $routeName,
                    'evenement' => $e,
                ]);
            }
        }
        return $this->render('default/single.html.twig', [
            'routeName' => $routeName,
        ]);
    }

    #[Route('/vider-panier', name: 'vider_panier')]
    public function viderPanier(SessionInterface $session)
    {
        $session->remove('panier');
        return $this->redirectToRoute('app_panier');
    }
}
