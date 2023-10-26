import Button from '../components/button/Button';
import { Link } from 'react-router-dom';

export const Home = () => (
  <main>
    <div>
      <h1>React Accessibility workshop</h1>
      <p>
        Tijdens deze workshop zullen we de basisprincipes van
        webtoegankelijkheid verkennen, inclusief de Web Content Accessibility
        Guidelines (WCAG) van het World Wide Web Consortium (W3C). We zullen
        praktische tips delen om ervoor te zorgen dat je websites, applicaties
        en digitale content toegankelijk zijn voor mensen met visuele,
        auditieve, motorische en cognitieve uitdagingen.
      </p>
      <p>
        <Link to="/intro">
          <Button>Ga naar de introductie</Button>
        </Link>
      </p>
      <div className="card program">
        <h2>Programma</h2>
        <ul>
          <li>
            Introductie <span>15 min</span>
          </li>
          <li>
            Opdracht 1: Zoek de a11y fouten in de webshop. <span>30 min</span>
          </li>
          <li>
            Opdracht 1: Bespreken <span>15 min</span>
          </li>
          <li>
            Pauze / Avondeten <span>60 min</span>
          </li>
          <li>
            Opdracht 2: Introductie WCGA Rapport <span>15 min</span>
          </li>
          <li>
            Opdracht 2: WCAG overtredingen oplossen <span>60 min</span>
          </li>
          <li>
            Nabespreking <span>15 min</span>
          </li>
        </ul>
      </div>

      <div>
        <h2>Nuttige links</h2>
        <ul>
          <li>
            <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer">https://www.w3.org/TR/WCAG21/</a>
          </li>
          <li>
            <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">Contrast checker tool</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Web_accessibility" target="_blank" rel="noreferrer">Web accessibility op wikipedia</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
);

export default Home;
