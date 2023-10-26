import './WCAGReport.scss';
import { Link } from 'react-router-dom';
import WCAGViolation from '../../components/WCAGViolation/WCAGViolation';

const WCAGReport = () => (
  <main>
    <div className="wcagReport">
      <h1>
        WCAG Rapport | <small>Candleleaf webshop</small>
      </h1>

      <WCAGViolation
        successCriterion="1.3.1"
        id="1"
        solutionLink="https://github.com/developers-chrisdh/react-a11y-workshop/tree/feat/accessible-info-and-relations"
      >
        Succescriterium 1.3.1 vereist dat informatie en relaties in de inhoud
        correct worden gemarkeerd, zodat gebruikers met assistieve
        technologieën, zoals schermlezers, de structuur en betekenis van de
        inhoud begrijpen. Hieronder vallen onder andere de juiste toepassing van
        kopniveaus, zoals h1, h2, h3, enz., om de hiërarchische structuur van de
        pagina aan te geven.
        <br />
        <br />
        Op de <Link to="/website">product pagina </Link> zijn niet alle
        kopniveau's correct aangegeven.
      </WCAGViolation>

      <WCAGViolation
        successCriterion="1.3.1"
        id="2"
        solutionLink="https://github.com/developers-chrisdh/react-a11y-workshop/tree/feat/accessible-info-and-relations"
      >
        Als een input geen label heeft, kan dit leiden tot het falen van Succescriterium 1.3.1, omdat het de informatie en relatie tussen het inputveld
        en de bijbehorende context niet duidelijk maakt. Om aan dit criterium te
        voldoen, is het essentieel om inputs te voorzien van duidelijke en
        betekenisvolle labels, zodat gebruikers begrijpen welk type informatie
        ze moeten invoeren.
        <br />
        <br />
        Op de <Link to="/website/checkout/shipping">checkout pagina </Link> zijn
        niet alle input's voorzien van de juiste labels.
      </WCAGViolation>

      <WCAGViolation
        successCriterion="1.4.3"
        id="3"
        solutionLink="https://github.com/developers-chrisdh/react-a11y-workshop/tree/feat/accessible-color-contrast"
      >
        Op verschillende pagina's in de webshop heeft de tekst niet voldoende
        contrast. WCAG 2.0 level AA vereist een contrast ratio van minimaal
        4.5:1 voor normale tekst en 3:1 voor grote tekst. Gebruik bijvoorbeeld
        deze tool om te controleren of de contrast waarde groot genoeg is.
        <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">
          https://webaim.org/resources/contrastchecker/
        </a> of de Chrome DevTools
      </WCAGViolation>

      <WCAGViolation
        successCriterion="1.1.1"
        id="4"
        solutionLink="https://github.com/developers-chrisdh/react-a11y-workshop/tree/feat/product-image"
      >
        De product afbeelding op de pagina <Link to="/website">website</Link>{' '}
        heeft geen tekstalternatief
      </WCAGViolation>

      <WCAGViolation
        successCriterion="2.1.1"
        id="5"
        solutionLink="https://github.com/developers-chrisdh/react-a11y-workshop/tree/feat/accessible-keyboard-navigation"
      >
        Let op dat de coupon code ook in te voeren door enkel het toetsenbord te
        gebruiken. Als de dialoog geopend is, moet de focus op een element
        binnen de dialoog gezet zijn. Ga naar de{' '}
        <Link to="/website/checkout/shipping">checkout pagina </Link>
      </WCAGViolation>

      <WCAGViolation
        successCriterion="1.3.1"
        id="6"
        solutionLink="https://github.com/developers-chrisdh/react-a11y-workshop/tree/feat/accessible-info-and-relations"
      >
        Succescriterium 1.3.1 vereist dat informatie en relaties in de inhoud
        correct worden gemarkeerd, zodat gebruikers met assistieve
        technologieën, zoals schermlezers, de structuur en betekenis van de
        inhoud begrijpen. Hieronder vallen onder andere de juiste toepassing van
        kopniveaus, zoals h1, h2, h3, enz., om de hiërarchische structuur van de
        pagina aan te geven.
        <br />
        <br />
        Op de <Link to="/website/checkout/cart">winkelwagen pagina </Link> is
        het gebruik van kopniveau's niet correct.
      </WCAGViolation>

      <WCAGViolation
        successCriterion="2.4.4"
        id="7"
        solutionLink="https://github.com/developers-chrisdh/react-a11y-workshop/tree/feat/accessible-link-purpose"
      >
        De "Lees meer" knop op de <Link to="/website">product pagina </Link>{' '}
        geeft niet duidelijk het doel aan van de link. Door het gebrek aan
        context zal dit voor een screenreader gebruiker niet voldoende
        begrijpelijk zijn.
      </WCAGViolation>

      <WCAGViolation successCriterion="1.3.1" id="8" solutionLink="TODO">
        Op de <Link to="/website">product pagina </Link> pagina zijn de relaties
        binnen de tabel onjuist aangegeven, de screenreader weet niet dat de
        labels een relatie hebben met de waardes.
      </WCAGViolation>

      <WCAGViolation successCriterion="1.3.1" id="9" solutionLink="TODO">
        Op de <Link to="/website/checkout/shipping">checkout pagina </Link> is
        de inhoud van de afrekenen knop niet leesbaar als je inzoomt, waardoor
        het doel van de knop mogelijk niet duidelijk is.
      </WCAGViolation>

      <WCAGViolation successCriterion="2.1.1" id="10" solutionLink="TODO">
        Op de <Link to="/website">product pagina </Link> zijn de radiobuttons
        niet bedienbaar via het toetsenbord. Hierdoor kunnen toetsenbord &
        screenreader gebruikers deze input niet bedienen.
      </WCAGViolation>
    </div>
  </main>
);

export default WCAGReport;
