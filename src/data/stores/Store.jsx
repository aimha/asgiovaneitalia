// Imports
import { createRoot } from "solid-js"
import { createStore } from "solid-js/store"

function createStateManagement() {
  const [state, setState] = createStore({
    hero: {
      title: 'Giovane Italia 1927',
      claim: 'Sport, Musica e Cultura a Parma. Dal 1927.',
      cta: 'Esplora'
    },
    about: {
      title: 'Il cuore sportivo e culturale di Parma',
      subtitle: 'Sport, cultura, musica: un secolo di passione e comunità, dal bastione di Porta Santa Croce.',
      body: [
        "Fondata nel 1927, <b>Giovane Italia</b> è molto più di un'associazione sportiva: è un presidio di comunità, un punto di incontro e <b>un simbolo dell'Oltretorrente</b>.",
        "Oggi riuniamo soci storici e nuovi simpatizzanti, legati dal desiderio di condividere momenti di <b>sport</b>, <b>cultura</b> e <b>musica</b>. Organizziamo incontri, rassegne e attività che mantengono viva la tradizione creando, nel contempo, un'alternativa solida al centro del tessuto sociale dell'Oltretorrente. Collaboriamo inoltre con <b>Parma Club</b> per gli eventi sportivi.</p>",
        "L'ospitalità gastronomica è affidata a <b><a href=\"https://www.damatparma.it\" target=\"_blank\" rel=\"nofollow\">DaMat</a></b>, partner di lunga data e certezza del settore nel panorama parmigiano."
      ]
    },
    history: {
      title: 'Cento anni di storie, volti e passioni',
      body: 'Era il 1927 quando, sotto lo scudo bianco-amaranto, prese vita <b>Giovane Italia</b>. Nei decenni, abbiamo visto passare grandi nomi come <b>Alberto Michelotti</b> e <b>Bruno Mora</b>, ma soprattutto generazioni di parmigiani che qui hanno trovato casa.',
      dateTitle: "GIOVANE ITALIA IN TAPPE",
      dateList: [
        {
          date: 1927,
          body: 'Una sera di Settembre, nella trattoria di Borgo S.Domenico , nasce la \'Giovane Italia\', la prima società calcistica dell\"Oltretorrente.'
        },
        {
          date: 'Anni \'50-\'60',
          body: 'La Giovane Italia diviene celebre grazie ai suoi successi calcistici, nelle sue fila passarono anche grandi campioni come Alberto Michelotti  e Bruno Mora. Sotto la presidenza di Enrico Ziveri  la Giovane Italia seppe distinguersi anche in altri sport come nuoto, podismo e ciclismo.'
        },
        {
          date: 'Anni \'80-\'90',
          body: 'Lo spostamento del Circolo alla fine degli anni \'80 segna l\'inizio di un temporaneo declino dell\'attività sportiva. Mancanza di fondi e personale porta  a fine anni \'90 alla progressiva perdita della categoria Figc, delle giovanili e delle altre attività sportive.'
        },
        {
          date: 'Anni \'00-\'00',
          body: 'Dal 2003 ci fu un rilancio dell\'attività calcistica amatoriale a 11 con la presa in gestione del campo di via Taro . Questo ciclo durò più di una decade e si concluse, dopo qualche anno interlocutorio, fondendosi con il Rapid nella stagione 2014/2015. '
        },
        {
          date: 'Anni \'20',
          body: 'Il Circolo Giovane Italia ricalibra le proprie risorse in termini di personale e fondi, concentrandosi sul calcio a 7 con una squadra iscritta al campionato UISP e sul calcio a 5 con una squadra iscritta al campionato CSI.'
        }
      ]
    },
    activities: {
      title: 'Le Nostre Attività',
      cards: [
        {
          title: 'Sport',
          body: 'Lo sport fa parte del nostro DNA da <b>quasi 100 anni</b>. Oggi la <b>Giovane Italia</b> può contare su una <b>squadra di calcio a 7 UISP</b> e una di <b>calcio a 5 CSI</b>.Il Circolo è inoltre fresco di una inedita partnership con <b>Energy Volley</b>.<br><br>Dal lato eventi, possiamo contare una una forte collaborazione con <b>Parma Calcio</b>.',
          img: './icons/icon_sport.svg'
        },
        {
          title: 'Cultura',
          body: 'Le mura di <b>Porta Santa Croce</b> han visto susseguirsi <b>mostre pittoriche</b> e <b>fotografiche</b>, <b>dibattiti</b> e <b>presentazioni</b>.<br><br>Il <b>Circolo</b> è stato inoltre pioniere nell\'incoraggiare e indirizzare i <b>giovani under 30</b> all\'ascolto della <b>musica lirica</b> avvalendosi dello stretto rapporto che si è instaurato con la <b>Fondazione Teatro Regio</b>.',
          img: './icons/icon_cultura.svg'
        },
        {
          title: 'Musica',
          body: 'Fin dalla sua fondazione il <b>Circolo</b> è stato molto sensibile alla musica nelle sue più diverse espressioni.<br><br>Nel corso della sua storia, la sua sede di <b>Porta Santa Croce</b> è diventata una istituzione nella vita musicale della città, ospitando concerti di musica <b>jazz</b>, <b>classica</b>, <b>folk</b> e <b>rock/pop</b>.',
          img: './icons/icon_music.svg'
        },
        {
          title: 'Ristorazione',
          body: 'La ristorazione nel <b>Circolo</b> è affidata a <b><a href="https://www.damatparma.it/" target="_blank" rel="nofollow">DaMat</a></b>, realtà giovane ma ben affermata nel panorama parmigiano.<br><br>L\'offerta gastronomica ruota attorno alla <b>cucina tradizionale rivisitata in chiave contemporanea</b>, con un preciso focus sulle <b>materie prime</b>.',
          img: './icons/icon_ristorazione.svg'
        }
      ]
    },
    membership: {
      title: 'Diventa parte di una storia che continua a crescere',
      subtitle: 'Diventa socio ed entra in una comunità che da quasi cento anni coltiva sport, cultura e passione.',
      body: [
        "Tutti le attività del <b>Circolo Giovane Italia</b>, dallo <b>sport</b> alla <b>cultura</b>, fino agli <b>eventi musicali</b> e la <b>ristorazione</b>, sono riservate ai soci.",
        "La <b>tessera associativa</b> da accesso inoltre alle <b>convenzioni</b> riservate ai soci:<br>- <b>10%</b> di sconto al <b>daMATBistrot</b> e al <b>daMATChiosco Ducale</b><br>- <b>10%</b> di sconto al <b>centro Euromed</b>.",
        "Inoltre durante le partite del <b>Parma</b> i soci <b>Parma Club</b> usufruiranno di uno <b>sconto sulla birra media chiara</b>",
        "Il tesseramento può essere eseguito <b>online</b> accedendo al form dal link qui sotto: una volta <b>inseriti i dati</b> e <b>completato il pagamento</b> della quota pari a <b>2€</b> si riceverà la <b>tessera associativa via mail</b>."
      ],
      cta: 'Tesserati ora',
      link: 'https://www.damatparma.it/tesseramento'
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
