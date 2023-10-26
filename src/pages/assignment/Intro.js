import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
// import Collapsible from '../../components/collapsible/Collapsible';

const Assignment = () => (
  <main>
    <h1>Introductie</h1>
    {/* <Collapsible title="Wat is toegankelijkheid?"> */}
    Toegankelijkheid houdt in dat je bij het maken van producten, diensten,
    omgevingen of informatie er rekening mee houdt dat het product voor
    iedereen, inclusief mensen met een beperking, gemakkelijk te gebruiken en te
    begrijpen is. Het doel is dat iedereen hiermee gelijke kansen en gelijke
    toegang krijgt.
    {/* </Collapsible> */}
    {/* <Collapsible title="Wat leer je in deze workshop?"> */}
    <ul>
      <li>
        Analyseren van een website om te identificeren waar problemen met
        toegankelijkheid liggen
      </li>
      <li>Begrijpen van WCAG rapport</li>
      <li>
        Oplossingen bieden voor deze problemen om de toegankelijkheid te
        verbeteren.
      </li>
    </ul>
    {/* </Collapsible> */}
    {/* <Collapsible title="Waarom zou je je website toegankelijk willen maken?"> */}
    <li>
      Inclusiviteit: Je wilt dat je applicatie voor iedereen bruikbaar is. Dit
      betekent dat je ondersteuning wilt bieden voor ondersteunende technologie
      wilt bieden, zoals screenreaders of braille lezers. Hierdoor bereik je een
      groter publiek.
    </li>
    <li>
      Verbeterde gebruikers ervaring: Het is een misvatting dat a11y alleen voor
      mensen met een fysieke beperking is.
    </li>
    <li>
      Je kan zelf zelf ook verwond raken, waardoor je de muis even niet meer kan
      gebruiken
    </li>
    <li>
      Je app kan slechter bruikbaar zijn als je in fel zonlicht staat, waardoor
      contrast extra belangrijk wordt.
    </li>
    <li>
      Het kan een juridisch eis zijn. Voor overheidsorganisaties is het
      verplicht om te werken aan toegankelijkheid.
    </li>
    {/* </Collapsible> */}
    <h2>Voorbeeld gebruik screenreader </h2>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dEbl5jvLKGQ?si=NDdkMR5vIPsYif4A"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <br />
    <Link to="/opdracht-1">
      <Button>Ga naar opdracht 1</Button>
    </Link>
  </main>
);

export default Assignment;
