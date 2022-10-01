import React from 'react';
import './App.css';
import NavigationMention from './NavigationMention';
import './styles.css';
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import FooterTwo from './Footer';
import './Mentions.css'

class Mentions extends React.Component {
  render(){
    return (
        <>
        <NavigationMention />
        <div class="container-fluid ">
            <h2 class="legal-h2 text-primary">Mentions Légales</h2>
            <h4 class="firsttitle text-primary">1. Présentation du site</h4>
            <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site <strong>https://www.arabet.net</strong> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
            <strong>Responsable et hébergeur  :</strong>
            <p class="alinea">Aurélien RABET<br></br>
            30200 Bagnols-sur-Cèze<br></br>
            arabet37@gmail.com
            </p>
            <h4 class="text-primary">2. Propriété intellectuelle et contrefaçons</h4>
            <p><strong> M. Aurélien RABET</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong> M. Aurélien RABET</strong>.

Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
            <h4 class="text-primary">3. Limitations de responsabilité</h4>
            <p><strong>M. Aurélien RABET</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <strong>https://www.arabet.net</strong>. 

<strong> M. Aurélien RABET</strong> décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <strong>https://www.arabet.net</strong>. 

<strong> M. Aurélien RABET</strong> s’engage à sécuriser au mieux le site <strong>https://www.arabet.net</strong>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.

Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. <strong>M. Aurélien RABET</strong> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.

Le cas échéant, <strong>M. Aurélien RABET</strong> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
            <h4 class="text-primary">4. CNIL et gestion des données personnelles</h4>
            <p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <strong>https://www.arabet.net</strong> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données</p>
            <h4 class="text-primary">5. Liens hypertextes et cookies</h4>
            <p>Le site <strong>https://www.arabet.net</strong> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <strong>https://www.arabet.net</strong>.

La navigation sur le site <strong>https://www.arabet.net</strong> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.

Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.

Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.</p>
            <h4 class="text-primary">6 - Droit applicable et attribution de juridiction</h4>
            <p>Tout litige en relation avec l’utilisation du site <strong>https://www.arabet.net</strong> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents.</p>

      </div>
      <hr style={{color:"black"}}></hr>
      <div class="container-aide ">
        Ces mentions légales ont été rédigées avec l’aide de <a href='https://la-webeuse.com/generateur-mentions-legales/#lwptoc15'>LaWebeuse</a>.
      </div>
      <hr style={{color:"black"}}></hr>
      <FooterTwo></FooterTwo>
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </>
    );
  }
}

export default Mentions;
