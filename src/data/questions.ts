export type Axis = 'A' | 'B' | 'E' | 'D' | 'V';

export type Option = {
  label: string;
  scores?: Partial<Record<Axis, number>>;
};

export type Question = {
  id: number;
  category: string;
  icon: string;
  text: string;
  options: Option[];
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Profilo',
    icon: '🛡',
    text: 'Genere?',
    options: [{ label: 'Uomo' }, { label: 'Donna' }],
  },
  {
    id: 2,
    category: 'Profilo',
    icon: '❤️',
    text: 'Situazione attuale?',
    options: [
      { label: 'Single' },
      { label: 'In coppia' },
      { label: 'Storia complicata' },
      { label: 'Separato' },
    ],
  },
  {
    id: 3,
    category: 'Profilo',
    icon: '⚡',
    text: 'Cosa vuoi di più adesso?',
    options: [
      { label: 'Riconquista' },
      { label: 'Rafforzare' },
      { label: 'Sedurre' },
      { label: 'Crescere' },
    ],
  },
  {
    id: 4,
    category: 'Autostima',
    icon: '🛡',
    text: 'Quanto ti senti sicuro/a del tuo aspetto?',
    options: [
      { label: 'Per niente', scores: { A: 0 } },
      { label: 'Poco', scores: { A: 10 } },
      { label: 'Abbastanza', scores: { A: 20 } },
      { label: 'Molto', scores: { A: 30 } },
    ],
  },
  {
    id: 5,
    category: 'Reazioni',
    icon: '💬',
    text: 'Se qualcuno ti piace, cosa fai per primo?',
    options: [
      { label: 'Aspetto', scores: { A: 20 } },
      { label: 'Segnali indiretti', scores: { E: 10 } },
      { label: 'Scrivo subito', scores: { B: 15 } },
      { label: 'Divento insistente', scores: { B: 25, D: 10 } },
    ],
  },
  {
    id: 6,
    category: 'Messaggi',
    icon: '💬',
    text: 'Se non ricevi risposta a un messaggio, come reagisci?',
    options: [
      { label: 'Aspetto calmo', scores: { A: 15 } },
      { label: 'Mi innervosisco ma non scrivo', scores: { A: 5, B: 5 } },
      { label: 'Scrivo di nuovo', scores: { B: 15 } },
      { label: 'Scenata', scores: { B: 25, D: 10 } },
    ],
  },
  {
    id: 7,
    category: 'Sicurezza',
    icon: '🛡',
    text: 'Quanto ti senti a tuo agio sotto pressione?',
    options: [
      { label: 'Per niente', scores: { A: 30 } },
      { label: 'Poco', scores: { A: 20 } },
      { label: 'Abbastanza', scores: { A: 10 } },
      { label: 'Molto', scores: { A: 0 } },
    ],
  },
  {
    id: 8,
    category: 'Decisioni',
    icon: '⚡',
    text: 'Cosa segui di più quando scegli un partner?',
    options: [
      { label: 'Testa', scores: { A: 10 } },
      { label: 'Cuore', scores: { E: 10 } },
      { label: 'Mix', scores: { A: 5, E: 5 } },
    ],
  },
  {
    id: 9,
    category: 'Bisogno',
    icon: '❤️',
    text: 'Quanto spesso cerchi conferme dal partner?',
    options: [
      { label: 'Mai', scores: { B: 0 } },
      { label: 'Raramente', scores: { B: 5 } },
      { label: 'Spesso', scores: { B: 15 } },
      { label: 'Sempre', scores: { B: 25 } },
    ],
  },
  {
    id: 10,
    category: 'Ruolo',
    icon: '⚡',
    text: 'In gruppo ti senti più…',
    options: [
      { label: 'Leader', scores: { D: 15, A: 10 } },
      { label: 'Empatico', scores: { E: 15 } },
      { label: 'Creativo', scores: { D: 10, E: 5 } },
      { label: 'Indipendente', scores: { A: 15 } },
    ],
  },
  {
    id: 11,
    category: 'Discussioni',
    icon: '💬',
    text: 'Durante un conflitto tu…',
    options: [
      { label: 'Calmo', scores: { A: 10 } },
      { label: 'Esplosivo', scores: { D: 15, B: 10 } },
      { label: 'Evito', scores: { B: 10 } },
      { label: 'Mediatore', scores: { E: 10 } },
    ],
  },
  {
    id: 12,
    category: 'Controllo',
    icon: '⚡',
    text: 'Quanto vuoi avere tutto sotto controllo?',
    options: [
      { label: 'Per niente', scores: { D: 0, B: 0 } },
      { label: 'Poco', scores: { D: 5, B: 5 } },
      { label: 'Abbastanza', scores: { D: 15, B: 15 } },
      { label: 'Molto', scores: { D: 25, B: 25 } },
    ],
  },
  {
    id: 13,
    category: 'Impressionare',
    icon: '💬',
    text: 'Cerchi di impressionare chi ti interessa?',
    options: [
      { label: 'Quasi sempre', scores: { D: 15 } },
      { label: 'A volte', scores: { D: 8 } },
      { label: 'Preferisco lasciarlo', scores: { E: 5 } },
      { label: 'Non ci penso', scores: { A: 5 } },
    ],
  },
  {
    id: 14,
    category: 'Relazione',
    icon: '❤️',
    text: 'Cosa cerchi in una relazione?',
    options: [
      { label: 'Stabilità', scores: { V: 15 } },
      { label: 'Novità', scores: { D: 15 } },
    ],
  },
  {
    id: 15,
    category: 'Ruolo',
    icon: '⚡',
    text: 'Nel rapporto ti senti…',
    options: [
      { label: 'Chi guida', scores: { D: 12 } },
      { label: 'Chi segue', scores: { B: 8 } },
      { label: 'Chi si adatta', scores: { E: 8 } },
    ],
  },
  {
    id: 16,
    category: 'Attesa',
    icon: '❤️',
    text: 'Quanto spesso controlli il telefono in attesa di messaggi?',
    options: [
      { label: 'Mai', scores: { B: 0 } },
      { label: 'Raramente', scores: { B: 8 } },
      { label: 'Spesso', scores: { B: 16 } },
      { label: 'Sempre', scores: { B: 24 } },
    ],
  },
  {
    id: 17,
    category: 'Risposte',
    icon: '💬',
    text: 'Se il partner non risponde subito pensi che…',
    options: [
      { label: 'È occupato', scores: { A: 8 } },
      { label: 'Non interessato', scores: { B: 8 } },
      { label: 'Scrive ad altri', scores: { B: 12, D: 5 } },
      { label: 'Mi agito', scores: { B: 20 } },
    ],
  },
  {
    id: 18,
    category: 'Solitudine',
    icon: '❤️',
    text: 'Quanto ti senti solo/a senza una relazione?',
    options: [
      { label: 'Per niente', scores: { B: 0 } },
      { label: 'Poco', scores: { B: 8 } },
      { label: 'Abbastanza', scores: { B: 16 } },
      { label: 'Molto', scores: { B: 24 } },
    ],
  },
  {
    id: 19,
    category: 'Insistenza',
    icon: '⚡',
    text: 'Quanto insisti per ottenere ciò che vuoi?',
    options: [
      { label: 'Per niente', scores: { B: 0, D: 0 } },
      { label: 'Poco', scores: { B: 6, D: 3 } },
      { label: 'Abbastanza', scores: { B: 12, D: 6 } },
      { label: 'Molto', scores: { B: 18, D: 9 } },
    ],
  },
  {
    id: 20,
    category: 'Punti deboli',
    icon: '💬',
    text: 'Quale di questi ti riconosci di più?',
    options: [
      { label: 'Gelosia', scores: { D: 10, B: 10 } },
      { label: 'Bisogno attenzioni', scores: { B: 15 } },
      { label: 'Paura abbandono', scores: { B: 15 } },
      { label: 'Comunicazione', scores: { E: 8 } },
    ],
  },
  {
    id: 21,
    category: 'Dopo la rottura',
    icon: '❤️',
    text: 'Dopo una rottura cosa fai?',
    options: [
      { label: 'Mi concentro su di me', scores: { A: 12 } },
      { label: 'Riconquistare subito', scores: { B: 12, D: 6 } },
      { label: 'Resto nei ricordi', scores: { B: 10 } },
      { label: 'Entro in un’altra relazione', scores: { D: 8 } },
    ],
  },
  {
    id: 22,
    category: 'Stile',
    icon: '⚡',
    text: 'Il tuo stile ideale in amore è…',
    options: [
      { label: 'Sicuro', scores: { V: 12, E: 5 } },
      { label: 'Intenso', scores: { D: 12 } },
      { label: 'Equilibrato', scores: { V: 8, E: 8 } },
      { label: 'Misterioso', scores: { A: 8, V: 6 } },
    ],
  },
  {
    id: 23,
    category: 'Empatia',
    icon: '💬',
    text: 'Quanto ascolti le emozioni degli altri?',
    options: [
      { label: 'Molto', scores: { E: 18 } },
      { label: 'Abbastanza', scores: { E: 12 } },
      { label: 'Poco', scores: { E: 6 } },
      { label: 'Per niente', scores: { E: 0 } },
    ],
  },
  {
    id: 24,
    category: 'Durata',
    icon: '❤️',
    text: 'Preferisci relazioni…',
    options: [
      { label: 'Lungo termine', scores: { V: 15 } },
      { label: 'Breve termine', scores: { D: 10 } },
    ],
  },
  {
    id: 25,
    category: 'Controllo',
    icon: '⚡',
    text: 'Quanto ti piace guidare la relazione?',
    options: [
      { label: 'Molto', scores: { D: 18 } },
      { label: 'Abbastanza', scores: { D: 12 } },
      { label: 'Poco', scores: { D: 6 } },
      { label: 'Per niente', scores: { D: 0 } },
    ],
  },
  {
    id: 26,
    category: 'Differenze',
    icon: '💬',
    text: 'Quanto sei diverso/a dal partner ideale?',
    options: [
      { label: 'Molto diversi', scores: { D: 6, V: 6 } },
      { label: 'Abbastanza diversi', scores: { V: 6 } },
      { label: 'Non così diversi', scores: { E: 6 } },
      { label: 'Quasi uguali', scores: { E: 10 } },
    ],
  },
  {
    id: 27,
    category: 'Valore',
    icon: '🛡',
    text: 'Quanto pensi di valere in amore?',
    options: [
      { label: 'Molto', scores: { A: 18 } },
      { label: 'Abbastanza', scores: { A: 12 } },
      { label: 'Poco', scores: { A: 6 } },
      { label: 'Per niente', scores: { A: 0 } },
    ],
  },
  {
    id: 28,
    category: 'Motivazione',
    icon: '❤️',
    text: 'Cosa ti guida di più in una relazione?',
    options: [
      { label: 'Passione', scores: { D: 10 } },
      { label: 'Sicurezza', scores: { V: 10 } },
      { label: 'Crescita', scores: { A: 10 } },
      { label: 'Complicità', scores: { E: 10 } },
    ],
  },
  {
    id: 29,
    category: 'Fiducia',
    icon: '⚡',
    text: 'Quanto ti fidi del tuo fascino?',
    options: [
      { label: 'Molto', scores: { A: 18 } },
      { label: 'Abbastanza', scores: { A: 12 } },
      { label: 'Poco', scores: { A: 6 } },
      { label: 'Per niente', scores: { A: 0 } },
    ],
  },
  {
    id: 30,
    category: 'Obiettivo',
    icon: '💬',
    text: 'Cosa desideri migliorare?',
    options: [
      { label: 'Attrarre meglio', scores: { D: 8 } },
      { label: 'Gestire relazione', scores: { V: 8 } },
      { label: 'Riconquistare', scores: { B: 8 } },
      { label: 'Crescita personale', scores: { A: 8 } },
    ],
  },
];

export const AXIS_KEYS: Axis[] = ['A', 'B', 'E', 'D', 'V'];

export const MAX_SCORES = AXIS_KEYS.reduce((acc, axis) => {
  acc[axis] = QUESTIONS.reduce((sum, q) => {
    const max = Math.max(0, ...q.options.map((o) => o.scores?.[axis] ?? 0));
    return sum + max;
  }, 0);
  return acc;
}, {} as Record<Axis, number>);
