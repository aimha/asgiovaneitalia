import { onMount } from 'solid-js';

// import style
import styles from './About.module.scss'

// import logic
import AboutClass from './About.module';

function About() {

	onMount(() => {
    const aboutComponent = new AboutClass();
    aboutComponent.init();
	});

	return (
		<>
      <div id="about" className={`${styles.Container}`}>
        <div className={`${styles.Content}`}>
          <h2 className={`${styles.Title}`}>
            Il cuore sportivo e culturale di Parma
          </h2>
          <div className={`${styles.Paragraph}`}>
            <h3>
              Sport, cultura, musica: un secolo di passione e comunità, dal bastione di Porta Santa Croce.
            </h3>
            <p>
              Fondata nel 1927, <b>Giovane Italia</b> è molto più di un'associazione sportiva: è un presidio di comunità, un punto di incontro e <b>un simbolo dell'Oltretorrente</b>.
            </p>
            <p>
              Oggi riuniamo soci storici e nuovi simpatizzanti, legati dal desiderio di condividere momenti di <b>sport</b>, <b>cultura</b> e <b>musica</b>. Organizziamo incontri, rassegne e attività che mantengono viva la tradizione creando, nel contempo, un'alternativa solida al centro del tessuto sociale dell'Oltretorrente. Collaboriamo inoltre con <b>Parma Club</b> per gli eventi sportivi.
            </p>
            <p>
              L'ospitalità gastronomica è affidata a <b>DaMat</b>, partner di lunga data e certezza del settore nel panorama parmigiano.
            </p>
          </div>
        </div>
      </div>
		</>
	)
}

export default About;
