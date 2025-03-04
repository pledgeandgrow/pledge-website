import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="pt-20 bg-[#0e130f] text-white">
      <div className="container mx-auto pb-20 flex flex-col space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-10">
          {/* First Column - Logo & Description (Takes up more width) */}
          <div className="sm:col-span-2">
            <Link href="#" className="block mb-5">
              <img src="assets/imgs/logo-dark.png" alt="logo" className="w-24" />
            </Link>
            <p className="text-lg">
              Avec un engagement indéfectible envers l’excellence, l’intégrité et la satisfaction du client,
              nous nous efforçons de dépasser les attentes à chaque engagement. Découvrez la puissance du
              partenariat avec Pledge and Grow et façonnons ensemble un avenir meilleur.
            </p>
          </div>

          {/* Second Column - Policies */}
          <div>
            <h6 className="text-lg font-semibold my-10">POLITIQUES</h6>
            <ul className="space-y-2 text-[15px] mt-2 leading-[2rem]">
              <li><Link href="/mentions-legales">Mentions Légales</Link></li>
              <li><Link href="/donnees-personnelles">Données Personnelles</Link></li>
              <li><Link href="/politique-de-cookies">Politique de cookies</Link></li>
              <li><Link href="/conditions-generales-de-vente">Conditions générales de vente</Link></li>
              <li><Link href="/conditions-generales-dutilisation">Conditions générales d'utilisation</Link></li>
            </ul>
          </div>

          {/* Third Column - Other Links */}
          <div>
            <h6 className="text-lg font-semibold my-10">AUTRES</h6>
            <ul className="space-y-2 text-[15px] mt-2 leading-[2rem]">
              <li><Link href="/reglement-interieur">Règlement intérieur</Link></li>
              <li><Link href="/annuaires">Annuaires</Link></li>
              <li><Link href="/press-et-media">Press & Media</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/plan-du-site">Plan du site</Link></li>
            </ul>
          </div>

          {/* Fourth Column - Contact Info */}
          <div>
            <h6 className="text-lg font-semibold my-10">Contact</h6>
            <p className="text-sm">Disponible du Lundi au Dimanche de 8h à 20h.</p>
            <p className="text-green-500 mt-2">
              <Link href="tel:+33 7 53 69 58 40">+33 7 53 69 58 40</Link>
            </p>
            <p className="text-green-500">
              <Link href="mailto:contact@pledgeandgrow.com">contact@pledgeandgrow.com</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Social Links */}
      <div className="container mx-auto px-6 border-t border-gray-700 py-6 text-center text-sm flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; 2024 Pledge And Grow</p>
        <div className="flex justify-center items-center gap-4 mt-4 sm:mt-0">
          <Link target='_blank' href={'https://www.instagram.com/pledgeandgrow'}>
            <Instagram />
          </Link>
          <Link target='_blank' href={'https://fr.linkedin.com/company/pledge-and-grow'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="0.89em" height="1em" viewBox="0 0 750 850">
              <path fill="currentColor" d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58M0 750h165V214H0zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13" />
            </svg>
          </Link>
          <Link target='_blank' href={'https://www.tiktok.com/@pledgeandgrowfr'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
            </svg>
          </Link>
          <Link target='_blank' href={'https://x.com/pledgeandgrow'}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
              <linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056" y2="49.954" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#4b4b4b"></stop>
                <stop offset=".247" stopColor="#3e3e3e"></stop>
                <stop offset=".686" stopColor="#2b2b2b"></stop>
                <stop offset="1" stopColor="#252525"></stop>
              </linearGradient>
              <path fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28 C42,40.209,40.209,42,38,42z"></path>
              <path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
              <polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
              <polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
            </svg>
          </Link>

          <Link target='_blank' href={'https://web.facebook.com/people/Pledge-Grow/100095753672290/'}>
            <Facebook />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
