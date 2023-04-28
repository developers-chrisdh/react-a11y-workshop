import './WCAGReport.css'

const WCAGReport = () => (
    <div className="wcagReport">
        <h1>WCAG Rapport</h1>
        <section>
            <h2>Principe 1</h2>
            <p>Informatie en componenten van de gebruikersinterface moeten toonbaar zijn aan gebruikers op voor hen waarneembare wijze.</p>
            <h3>Richtlijn 1.1: Tekstalternatieven</h3>
            <p>Lever tekstalternatieven voor alle niet-tekstuele content, zodat die veranderd kan worden in andere vormen die mensen nodig hebben, zoals grote letters, braille, spraak, symbolen of eenvoudiger taal.</p>

            <blockquote>
                <span className="label">niveau A</span>
                <h4>Succescriterium 1.1.1: Niet-tekstuele content</h4>
                <p>Alle niet-tekstuele content die aan de gebruiker wordt gepresenteerd, heeft een tekstalternatief dat een gelijkwaardig doel dient.</p>
            </blockquote>

            <h4>Resultaat</h4>
            <p>VOLDOET NIET: De onderzochte set pagina’s voldoet niet aan dit succescriterium.</p>
            <h4>Opmerkingen</h4>
            <p>Todo</p>

            <h2>Richtlijn 1.4: Onderscheidbaar</h2>
            <p>Maak het voor gebruikers gemakkelijker om content te horen en te zien, waaronder scheiding van voorgrond en achtergrond.</p>
            <blockquote>
                <span className="label">niveau A</span>
                <h4>Succescriterium 1.4.1: Gebruik van kleur</h4>
                <p>Kleur wordt niet als het enige visuele middel gebruikt om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden.</p>
            </blockquote>
            <p>VOLDOET NIET: De onderzochte set pagina’s voldoet niet aan dit succescriterium.</p>
            <h4>Opmerkingen</h4>
            <p>Todo</p>

            <blockquote>
                <span className="label">niveau A</span>
                <h4>Succescriterium 1.4.3: Contrast</h4>
                <p>De visuele weergave van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 4,5:1, behalve in de volgende gevallen:
                    <ul>
                        <li>Grote tekst: Grote tekst en afbeeldingen van grote tekst hebben een contrastverhouding van ten minste 3:1;</li>
                        <li>Incidenteel: Tekst of afbeeldingen van tekst die deel zijn van een inactieve component van de gebruikersinterface, die puur decoratief zijn, die voor niemand zichtbaar zijn, of die onderdeel zijn van een afbeelding die significant andere visuele content bevat, hebben geen contrasteis.</li>
                        <li>Logotypes: Tekst die onderdeel is van een logo of merknaam heeft geen contrasteis.</li>
                    </ul>
                    </p>
            </blockquote>
            <p>
                <span className="icon">&times;</span>
                VOLDOET NIET: De onderzochte set pagina’s voldoet niet aan dit succescriterium.</p>
            <h4>Opmerkingen</h4>
            <p>Todo</p>
        </section>
    </div>

);

export default WCAGReport;