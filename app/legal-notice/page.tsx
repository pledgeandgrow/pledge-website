"use client";

import { CanonicalUrl } from "@/components/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LegalNotice() {
  return (
    <div className="flex flex-col min-h-screen">
      <CanonicalUrl />
      <Navbar />
      
      <main className="flex-grow pt-16" id="main-content">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>
          
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">
              Dernière mise à jour : 01/09/2024
            </p>
            
            <section className="mb-8">
              <p className="mb-6">
                Bienvenue sur la page des mentions légales de Pledge and Grow. Nous nous engageons à la transparence et au respect des réglementations. 
                Cette section présente notre structure légale, nos pratiques, et les conditions générales d'utilisation de notre site. 
                L'utilisation de nos services implique l'acceptation de ces termes.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Identification de l'éditeur et de l'hébergeur du site</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Éditeur et Propriétaire :</h3>
              <ul className="list-none space-y-2">
                <li><strong>Raison social :</strong> PLEDGE AND GROW</li>
                <li><strong>Siège Social :</strong> 4Bis Rue Alfred Nobel – Champs-sur-Marne – France</li>
                <li><strong>SIREN :</strong> 931577662</li>
                <li><strong>N° TVA Intracommunautaire :</strong> FR38931577662</li>
                <li><strong>Code NAF :</strong> 62.01Z - Programmation informatique</li>
                <li><strong>Téléphone :</strong> +33 7 53 69 58 40</li>
                <li><strong>Site Web :</strong> pledgeandgrow.com</li>
                <li><strong>Mail :</strong> contact@pledgeandgrow.com</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Hébergeurs :</h3>
              <ul className="list-none space-y-2">
                <li>Vercel Inc</li>
                <li>440 N Barranca Ave #4133</li>
                <li>Covina, CA 91723</li>
                <li><strong>Mail :</strong> privacy@vercel.com</li>
              </ul>
              
              <p className="mt-4">
                Pour les utilisateurs de l'EEE, du Royaume-Uni et de Californie, Vercel peut collecter vos données personnelles en tant que « contrôleur de données » 
                lorsqu'il détermine les moyens et objectifs du traitement (ex. : données des visiteurs, participants à des événements, ou clients). 
                En tant que « processeur de données » ou « fournisseur de services », Vercel traite les données pour le compte de ses clients qui utilisent 
                ses services d'hébergement ou ses outils d'analyse. Plus d'informations sont disponibles sur : Vercel.com
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Accès au site</h2>
              <p>
                Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler 
                d'une nécessité de maintenance. En cas de modification, interruption ou suspension des services le site pledgeandgrow.com ne saurait être tenu responsable.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Collecte de données</h2>
              <p>
                L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation. 
                En naviguant sur le site, il choisit de les accepter ou non. Un cookie est un élément qui ne permet pas d'identifier l'Utilisateur mais sert 
                à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L'Utilisateur pourra désactiver ce cookie par 
                l'intermédiaire des paramètres figurant au sein de son logiciel de navigation.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
