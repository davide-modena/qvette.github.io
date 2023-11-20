const frasiECitazioni = [
    "La vita è ciò che ti succede mentre sei occupato a fare altri progetti. - John Lennon",
    "Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer",
    "Non aspettarti di vedere un cambiamento se non fai uno. - Albert Einstein",
    "Non esiste un modo per la felicità. La felicità è il cammino. - Mahatma Gandhi",
    "La vita è ciò che facciamo di essa. I viaggi sono i viaggiatori. Ciò che vediamo non è ciò che vediamo, ma ciò che siamo. - Fernando Pessoa",
    "La felicità non è qualcosa di fatto. Deriva dalle tue azioni. - Dalai Lama",
    "L'unico modo per fare un grande lavoro è amare ciò che fai. - Steve Jobs",
    "La vita è 10% ciò che ci accade e 90% come reagiamo ad essa. - Charles R. Swindoll",
    "Ogni minuto in cui ti arrabbi, perdi sessanta secondi di felicità. - Ralph Waldo Emerson",
    "La vita è breve, e dobbiamo prenderla sul serio. - Friedrich Nietzsche",
    "L'amicizia non ha bisogno di parole... è un sentimento dentro il cuore. - William Shakespeare",
    "La cosa più importante è non smettere di fare domande. - Albert Einstein",
    "Sii te stesso; tutti gli altri sono già stati presi. - Oscar Wilde",
    "Non c'è niente di impossibile, perché i sogni di ieri sono le speranze di oggi e possono diventare realtà domani. - Robert H. Schuller",
    "La vita è troppo importante per essere presa sul serio. - Oscar Wilde",
    "Il momento in cui smetti di imparare, smetti di crescere. - Walt Disney",
    "La semplicità è la massima sofisticazione. - Leonardo da Vinci",
    "Non smettere mai di sorridere, nemmeno quando sei triste, perché non sai mai chi potrebbe innamorarsi del tuo sorriso. - Gabriel García Márquez",
    "La vita è una serie di momenti da godersi, non da sopravvivere. - Dalai Lama",
    "I tuoi problemi non scompariranno se cercherai di nasconderli sotto il tappeto. - John F. Kennedy",
    "Il fallimento è l'opportunità di cominciare di nuovo con maggiore saggezza. - Henry Ford",
    "L'arte è il modo in cui ci innalziamo al di sopra di tutto. - Oscar Wilde",
    "La bellezza inizia nel momento in cui decidi di essere te stesso. - Coco Chanel",
    "Vivi la vita come se tutto fosse un miracolo. - Albert Einstein",
    "Il tempo trascorso a ridere è tempo trascorso con la divinità. - Proverbio giapponese",
    "L'unico vero viaggio di scoperta consiste nel vedere che non c'è niente di nuovo da scoprire. - Marcel Proust",
    "Non hai mai veramente vissuto fino a quando non hai fatto qualcosa per qualcun altro. - John Bunyan",
    "Non puoi attraversare il mare semplicemente stando in piedi e fissando l'acqua. - Rabindranath Tagore",
    "Viviamo tutti sotto lo stesso cielo, ma non abbiamo tutti lo stesso orizzonte. - Konrad Adenauer",
    "La gentilezza è il linguaggio che il sordo può sentire e il cieco può vedere. - Mark Twain",
    "Nessuno può farti sentire inferiore senza il tuo consenso. - Eleanor Roosevelt",
    "Le sfide sono ciò che rendono la vita interessante e superarle è ciò che rende la vita significativa. - Joshua J. Marine",
    "La vita è un'opportunità, coglila. La vita è bellezza, ammirala. La vita è beatitudine, assaporala. La vita è un sogno, fanne una realtà. - Madre Teresa",
    "Le persone dimenticheranno ciò che hai detto, dimenticheranno ciò che hai fatto, ma non dimenticheranno mai come le hai fatte sentire. - Maya Angelou",
    "La vita non è attesa. La vita è cambiamento. - Kahlil Gibran",
    "Non è ciò che hai, o chi sei, o dove sei, o ciò che fai, che ti rende felice o infelice. È ciò che pensi di te stesso. - Dale Carnegie",
    "Ogni giorno è un nuovo inizio. Lasciate che sia migliore di quanto sia mai stato. - Rumi",
    "La vita non è ciò che hai vissuto, ma ciò che hai ricordato e come lo hai raccontato. - Gabriel García Márquez",
    "Nessun uomo è un'isola intera di per sé; ogni uomo è un pezzo del continente, una parte della terra. - John Donne",
    "La vita è un'opportunità, coglila. La vita è bellezza, ammirala. La vita è beatitudine, assaporala. La vita è un sogno, fanne una realtà. - Madre Teresa",
    "Le persone dimenticheranno ciò che hai detto, dimenticheranno ciò che hai fatto, ma non dimenticheranno mai come le hai fatte sentire. - Maya Angelou",
    "La vita non è attesa. La vita è cambiamento. - Kahlil Gibran",
    "Non è ciò che hai, o chi sei, o dove sei, o ciò che fai, che ti rende felice o infelice. È ciò che pensi di te stesso. - Dale Carnegie",
    "Ogni giorno è un nuovo inizio. Lasciate che sia migliore di quanto sia mai stato. - Rumi",
    "La vita non è ciò che hai vissuto, ma ciò che hai ricordato e come lo hai raccontato. - Gabriel García Márquez",
    "Nessun uomo è un'isola intera di per sé; ogni uomo è un pezzo del continente, una parte della terra. - John Donne"
];

const citazioniChimiche = [
    "La chimica è la logica della fisica e la fisica è la chimica della biologia. - Dmitri Ivanovich Mendeleev",
    "Nella chimica, come in tutte le scienze, la verità è la nostra guida. - Gilbert N. Lewis",
    "In chimica, c'è un'arte nell'osservare le cose: è come la scultura, non si può insegnare. - George A. Olah",
    "Il chimico è come il postino che consegna le lettere, ma nessuno scrive mai una lettera al postino. - Linus Pauling",
    "La chimica è la scienza della trasformazione. - Robert H. Grubbs",
    "La chimica è la scienza delle connessioni. - Gilbert N. Lewis",
    "In chimica, puoi usare le parole di un uomo o il suo pensiero. - Linus Pauling",
    "Nella chimica, non si tratta di vedere cose, ma di vedere attraverso di esse. - Linus Pauling",
    "La chimica è il mestiere più affascinante e creativo che l'umanità abbia mai scoperto. - Clement Attlee",
    "La chimica ha vinto la lotta contro le infiammazioni, i batteri e i parassiti. - Paul Farmer",
    "La chimica è l'arte di separare il luce dal buio. - Linus Pauling",
    "La chimica è un'arte e una scienza insieme. - Dmitri Ivanovich Mendeleev",
    "La chimica è la logica della fisica e la fisica è la chimica della biologia. - Dmitri Ivanovich Mendeleev",
    "La chimica è una lingua universale. - George A. Olah",
    "In chimica, come nella vita, devi imparare a essere paziente. - Robert H. Grubbs",
    "La chimica è la scienza delle connessioni. - Gilbert N. Lewis",
    "In chimica, i dettagli sono importanti. - Linus Pauling",
    "La chimica è l'arte di fare esperimenti. - Linus Pauling",
    "Nella chimica, le reazioni chimiche sono come una danza. - Dmitri Ivanovich Mendeleev",
    "La chimica è l'arte di misurare e pesare. - Antoine Lavoisier",
    "La chimica è la lingua delle molecole. - Linus Pauling"
  ];  

// const frase = frasiECitazioni[Math.floor(Math.random() * (frasiECitazioni.length - 1)) + 1];
const frase = citazioniChimiche[Math.floor(Math.random() * (citazioniChimiche.length - 1)) + 1];
document.querySelector('.cit > .citation').innerHTML = frase.split("-")[0];
document.querySelector('.cit > .who').innerHTML = "- "+frase.split("-")[1];