import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const Opdracht1 = () => (
  <main>
    <h1>Opdracht 1</h1>
    <p>
      Je eerste opgave is het analyseren van de webshop.
      Bij de bouw van deze webshop is geen rekening gehouden met toegankelijkheid.
      <br />
      Probeer naar eigen
      inzicht problemen met betrekking tot toegankelijkheid te identificeren.
      <br />
      Dit kun je doen door de devtools te gebruiken, de pagina bron te bekijken of naar de broncode te gaan.
      De relevante bestanden voor de webshop vind je in de map <code>/src/pages/webshop</code>
    </p>
    <p>
      Noteer deze bevindingen in eerste instantie voor jezelf.
      <br />
      Zodra je klaar bent en alle bevinden genoteerd hebt, kun je jouw bevindingen delen in het Slack kanaal.
    </p>
    <Link to="/website">
      <Button>Bekijk de website</Button>
    </Link>
  </main>
);

export default Opdracht1;
