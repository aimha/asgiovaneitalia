// Imports
import { createRoot } from "solid-js"
import { createStore } from "solid-js/store"

function createStateManagement() {
  const [state, setState] = createStore({
    hero: {
      over: 'Associazione Sportiva',
      title: 'Giovane Italia',
      claim: 'Sport, Musica e Cultura a Parma. Dal 1927.',
      cta: 'Esplora'
    },
    about: {
      title: 'Il cuore sportivo e culturale di Parma',
      subtitle: 'Sport, cultura, musica: un secolo di passione e comunità, dal bastione di Porta Santa Croce.',
      body: [
        "Fondata nel 1927, <b>Giovane Italia</b> è molto più di un'associazione sportiva: è un presidio di comunità, un punto di incontro e <b>un simbolo dell'Oltretorrente</b>.",
        "Oggi riuniamo soci storici e nuovi simpatizzanti, legati dal desiderio di condividere momenti di <b>sport</b>, <b>cultura</b> e <b>musica</b>. Organizziamo incontri, rassegne e attività che mantengono viva la tradizione creando, nel contempo, un'alternativa solida al centro del tessuto sociale dell'Oltretorrente. Collaboriamo inoltre con <b>Parma Club</b> per gli eventi sportivi.</p>",
        "L'ospitalità gastronomica è affidata a <b>DaMat</b>, partner di lunga data e certezza del settore nel panorama parmigiano."
      ]
    },
    history: {
      title: 'Cento anni di storie, volti e passioni',
      body: 'Era il 1927 quando, sotto lo scudo bianco-amaranto, prese vita Giovane Italia. Nei decenni, abbiamo visto passare grandi nomi come Alberto Michelotti e Bruno Mora, ma soprattutto generazioni di parmigiani che qui hanno trovato casa.',
      dateList: [
        {
          date: 1927,
          body: 'Lorem ipsum dolor sit amet consectetur. Sed euismod suscipit quam vitae ullamcorper et. Duis pellentesque condimentum feugiat eget suspendisse tortor ac enim. Lacus dui sed lectus suspendisse pretium dui congue ipsum tempus. Bibendum mi eu nunc phasellus. Convallis sit sapien velit et a.'
        },
        {
          date: 1950,
          body: 'Lorem ipsum dolor sit amet consectetur. Sed euismod suscipit quam vitae ullamcorper et. Duis pellentesque condimentum feugiat eget suspendisse tortor ac enim. Lacus dui sed lectus suspendisse pretium dui congue ipsum tempus. Bibendum mi eu nunc phasellus. Convallis sit sapien velit et a.'
        },
        {
          date: 1973,
          body: 'Lorem ipsum dolor sit amet consectetur. Sed euismod suscipit quam vitae ullamcorper et. Duis pellentesque condimentum feugiat eget suspendisse tortor ac enim. Lacus dui sed lectus suspendisse pretium dui congue ipsum tempus. Bibendum mi eu nunc phasellus. Convallis sit sapien velit et a.'
        },
        {
          date: 1996,
          body: 'Lorem ipsum dolor sit amet consectetur. Sed euismod suscipit quam vitae ullamcorper et. Duis pellentesque condimentum feugiat eget suspendisse tortor ac enim. Lacus dui sed lectus suspendisse pretium dui congue ipsum tempus. Bibendum mi eu nunc phasellus. Convallis sit sapien velit et a.'
        },
        {
          date: 2008,
          body: 'Lorem ipsum dolor sit amet consectetur. Sed euismod suscipit quam vitae ullamcorper et. Duis pellentesque condimentum feugiat eget suspendisse tortor ac enim. Lacus dui sed lectus suspendisse pretium dui congue ipsum tempus. Bibendum mi eu nunc phasellus. Convallis sit sapien velit et a.'
        },
        {
          date: 2019,
          body: 'Lorem ipsum dolor sit amet consectetur. Sed euismod suscipit quam vitae ullamcorper et. Duis pellentesque condimentum feugiat eget suspendisse tortor ac enim. Lacus dui sed lectus suspendisse pretium dui congue ipsum tempus. Bibendum mi eu nunc phasellus. Convallis sit sapien velit et a.'
        },
        {
          date: 2025,
          body: 'Lorem ipsum dolor sit amet consectetur. Sed euismod suscipit quam vitae ullamcorper et. Duis pellentesque condimentum feugiat eget suspendisse tortor ac enim. Lacus dui sed lectus suspendisse pretium dui congue ipsum tempus. Bibendum mi eu nunc phasellus. Convallis sit sapien velit et a.'
        }
      ]
    } 
  });

  return { state };
}

export default createRoot(createStateManagement);
