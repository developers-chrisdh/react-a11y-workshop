import { useState } from 'react';
import Button from '../../components/button/Button';

const wcagInfo = {
  '1.1.1': {
    title: 'Niet-tekstuele content',
    desc: 'Alle niet-tekstuele content die aan de gebruiker wordt gepresenteerd, heeft een tekstalternatief dat een gelijkwaardig doel dient.',
  },
  '1.3.1': {
    title: 'Info & Relaties',
    desc: 'Informatie, structuur, en relaties overgebracht door presentatie kunnen door software bepaald worden of zijn beschikbaar in tekst.',
  },
  '1.4.3': {
    title: 'Contrast',
    desc: (
      <>
        <p>
          De visuele weergave van tekst en afbeeldingen van tekst heeft een
          contrastverhouding van ten minste 4,5:1, behalve in de volgende
          gevallen:
          <ul>
            <li>
              Grote tekst: Grote tekst en afbeeldingen van grote tekst hebben
              een contrastverhouding van ten minste 3:1;
            </li>
            <li>
              Incidenteel: Tekst of afbeeldingen van tekst die deel zijn van een
              inactieve component van de gebruikersinterface, die puur
              decoratief zijn, die voor niemand zichtbaar zijn, of die onderdeel
              zijn van een afbeelding die significant andere visuele content
              bevat, hebben geen contrasteis.
            </li>
            <li>
              Logotypes: Tekst die onderdeel is van een logo of merknaam heeft
              geen contrasteis.
            </li>
          </ul>
        </p>
      </>
    ),
  },

  '2.1.1': {
    title: 'Toetsenbordtoegankelijk',
    desc: 'Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder dat afzonderlijke toetsaanslagen aan tijd gebonden zijn, behalve als de onderliggende functie een invoer vereist die afhangt van het pad dat de gebruiker aflegt en niet alleen van de eindpunten.',
  },

  '2.4.4': {
    title: 'Linkdoel (in context)',
    desc: 'Het doel van elke link kan bepaald worden uit enkel de linktekst of uit de linktekst samen met zijn door software bepaalde linkcontext, behalve daar waar het doel van de link een dubbelzinnige betekenis zou kunnen hebben voor gebruikers in het algemeen.',
  },
};

const WCAGViolation = ({
  children,
  level = 'niveau A',
  successCriterion = '2.2.2',
  solutionLink,
}) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="card">
      <blockquote>
        <span className="label">{level}</span>
        <h4>
          Succescriterium {successCriterion}: {wcagInfo[successCriterion].title}
        </h4>
        <p>{wcagInfo[successCriterion].desc}</p>
      </blockquote>

      <h4>Resultaat</h4>
      <p>
        <span className="icon">&times;</span>
        VOLDOET NIET: De onderzochte set pagina’s voldoet niet aan dit
        succescriterium.
      </p>
      <h4>Opmerkingen</h4>
      <p>{children}</p>

      {solutionLink && (
        <>
          <Button onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? 'Verberg oplossing' : 'Toon oplossing'}
          </Button>
          {showSolution && (
            <a href={solutionLink} target="_blank">
              {solutionLink}
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default WCAGViolation;
