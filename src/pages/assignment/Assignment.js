import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const Assignment = () => (
  <main>
    <h1>Introductie</h1>
    <p>
      Je opdrachtgever heeft door een extern bureau een WCAG toetsing op een
      aantal pagina's van zijn website. Jouw opdracht is om al deze bevindingen
      te analyseren en stap-voor-stap op te lossen.
    </p>
    <Link to="/wcag-rapport">
      <Button>Bekijk het WCAG Rapport</Button>
    </Link>
    <Link to="/website">
      <Button>Bekijk de website</Button>
    </Link>
  </main>
);

export default Assignment;
