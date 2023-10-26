import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Collapsible from '../../components/collapsible/Collapsible';

const Opdracht2 = () => (
  <main>
    <h1>Opdracht 2</h1>

    <Collapsible title="European Accessibility Act (EAA)">
      <strong>
        Overheid is al verplicht te voldoen aan de toegankelijkheidsrichtlijnen
      </strong>
      <br />
      <br />
      <strong>
        e-commerce bedrijven en webshops moeten in juni 2025 voldoen aan de
        toegankelijkheidsrichtlijnen.
      </strong>
      <br />
      Voor wie gedt dat?
      <ul>
        <li>nieuws websites</li>
        <li>verkoop van producten en diensten</li>
        <li>platformen met advertenties</li>
        <li>
          aanbod van professionele diensten (bijvoorbeeld dokters, advocaten,
          makelaars)
        </li>
        <li>aanbod entertainment en media diensten</li>
        <li>verkoop telecommunicatiediensten</li>
      </ul>
      Kans dus dat je als front-end developer bij een organisatie komt die moet
      voldoen aan de toegankelijkheidsrichtlijnen (WCAG niveau AA)
    </Collapsible>

    <Collapsible title="WCAG">
      <strong>Web Content Accessibility Guidelines</strong> <br />
      Dit zijn richtlijnen die je aan kunt houden om zo je website of applicatie
      toegankelijk te maken.
      <br />
      <strong>A</strong>
      <ul>
        <li>Tekst alternatief voor visuele content (bijv. afbeeldingen)</li>
        <li>Toetsenboard navigatie</li>
        <li>
          Toegankelijk voor ondersteunende technologieen (bijv. screenreaders)
        </li>
        <li>
          Informatie moet niet alleen blijken uit vorm, grootte of kleur alleen
        </li>
      </ul>
      <strong>AA</strong>
      <ul>
        <li>
          Voor- en achtergrond moet een goed kleurcontrast hebben. Minstens 4.5
          tegen 1
        </li>
        <li>Content moet een goede heading structuur hebben</li>
        <li>
          Elementen die invloed hebben op navigatie moeten consistent zijn door
          de hele website.
        </li>
      </ul>
      <strong>AAA</strong>
      <ul>
        <li>Kleur contrast van minstens 7 tegen 1</li>
        <li>Opgenomen videos moeten gebarentaal vertaling hebben</li>
        <li>
          Opgenomen videos moeten een uitgebreide audio beschrijving hebben.
        </li>
      </ul>
    </Collapsible>

    <Collapsible title="Opdracht">
      <p>
        We hebben eerst bekeken welke toegankelijkheids issues we zelf konden
        vinden.
      </p>
      <p>
        Nu presenteren we jullie het officiële WCAG rapport, waar alle issues
        samengevat zijn. <br />
        De volgende opdracht is om alle problemen die beschreven staan in het
        rapport stap voor stap op te lossen. <br />
        De relevante bestanden voor de webshop waarin je gaat werken vind je in
        de map <code>/src/pages/webshop</code>
        <br />
        Oplossingen zullen aanpassingen in de html / css / js zijn. Je hoeft
        niet de complete webshop te verbouwen.
      </p>
    </Collapsible>
    <Link to="/website">
      <Button>Bekijk de website</Button>
    </Link>
    <Link to="/wcag-rapport">
      <Button>Bekijk het WCAG rapport</Button>
    </Link>
  </main>
);

export default Opdracht2;
