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
      dateTitle: "GIOVANE ITALIA IN TAPPE",
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
    },
    activities: {
      title: 'Le Nostre Attività',
      cards: [
        {
          title: 'Sport',
          body: 'Lorem ipsum dolor sit amet consectetur. Quis amet vulputate rutrum egestas arcu. Mauris tincidunt et velit sodales. Pellentesque arcu id eu id dictum nisi quisque volutpat. Ornare enim vestibulum pretium massa mauris eget morbi felis volutpat. Id nibh lectus id tempor eros diam lacinia eleifend nulla. Et orci enim donec urna auctor felis gravida.',
          img: ''
        },
        {
          title: 'Cultura',
          body: 'Lorem ipsum dolor sit amet consectetur. Quis amet vulputate rutrum egestas arcu. Mauris tincidunt et velit sodales. Pellentesque arcu id eu id dictum nisi quisque volutpat. Ornare enim vestibulum pretium massa mauris eget morbi felis volutpat. Id nibh lectus id tempor eros diam lacinia eleifend nulla. Et orci enim donec urna auctor felis gravida.',
          img: ''
        },
        {
          title: 'Musica',
          body: 'Lorem ipsum dolor sit amet consectetur. Quis amet vulputate rutrum egestas arcu. Mauris tincidunt et velit sodales. Pellentesque arcu id eu id dictum nisi quisque volutpat. Ornare enim vestibulum pretium massa mauris eget morbi felis volutpat. Id nibh lectus id tempor eros diam lacinia eleifend nulla. Et orci enim donec urna auctor felis gravida.',
          img: ''
        },
        {
          title: 'Ristorazione',
          body: 'Lorem ipsum dolor sit amet consectetur. Quis amet vulputate rutrum egestas arcu. Mauris tincidunt et velit sodales. Pellentesque arcu id eu id dictum nisi quisque volutpat. Ornare enim vestibulum pretium massa mauris eget morbi felis volutpat. Id nibh lectus id tempor eros diam lacinia eleifend nulla. Et orci enim donec urna auctor felis gravida.',
          img: ''
        }
      ]
    },
    membership: {
      title: 'Diventa parte di una storia che continua a crescere',
      subtitle: 'Diventa socio ed entra in una comunità che da quasi cento anni coltiva sport, cultura e passione.',
      body: [
        "Ac hendrerit in elit est quisque ultrices amet. Et sit phasellus cras orci bibendum. Aenean ullamcorper ut vulputate tellus donec mattis. In eleifend purus pharetra ipsum amet dui. Et amet condimentum nunc metus sit magna felis condimentum",
        "Ac hendrerit in elit est quisque ultrices amet. Et sit phasellus cras orci bibendum. Aenean ullamcorper ut vulputate tellus donec mattis. In eleifend purus pharetra ipsum amet dui. Et amet condimentum nunc metus sit magna felis condimentum"
      ],
      cta: 'Tesserati ora'
    },
    where: {
      title: 'A.S. Giovane Italia',
      body: 'Via John Fitzgerald Kennedy 7<br>43125<br>Parma (PR)'
    },
    footer: {
      title: 'this is a footer'
    }
  });

  return { state };
}

export default createRoot(createStateManagement);
