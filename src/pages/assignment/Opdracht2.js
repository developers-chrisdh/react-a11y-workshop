import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const Opdracht2 = () => (
  <main>
    <h1>Opdracht 2</h1>
    <p>
      We hebben eerst bekeken welke toegankelijkheids issues we zelf konden
      vinden.
      </p>
    <p>
      Nu presenteren we jullie het officiële WCAG rapport, waar alle
      issues samengevat zijn. <br />
      De volgende opdracht is om alle problemen die beschreven staan in het rapport stap
      voor stap op te lossen. <br />
      De relevante bestanden voor de webshop waarin je gaat werken vind je in de map <code>/src/pages/webshop</code>
    </p>
    <Link to="/website">
      <Button>Bekijk de website</Button>
    </Link>
    <Link to="/wcag-rapport">
      <Button>Bekijk het WCAG rapport</Button>
    </Link>
  </main>
);

export default Opdracht2;
