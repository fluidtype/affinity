import type { Axis } from './questions';

export type Profile = {
  name: string;
  desc: string;
  bullets: { icon: string; text: string }[];
  vector: Record<Axis, number>;
};

export const PROFILES: Profile[] = [
  {
    name: 'Leader Calmo',
    desc:
      'Guidi con sicurezza e serenità. Sai prenderti spazio senza schiacciare gli altri.',
    bullets: [
      { icon: '✔', text: 'Forza: equilibrio tra fermezza ed empatia' },
      { icon: '⚠', text: 'Errore: potresti apparire distante' },
      { icon: '💡', text: 'Consiglio: condividi di più le tue emozioni' },
    ],
    vector: { A: 80, B: 30, E: 60, D: 60, V: 50 },
  },
  {
    name: 'Romantico Idealista',
    desc:
      'Vivi l’amore in modo profondo e sognante, guidato da empatia e visione.',
    bullets: [
      { icon: '✔', text: 'Forza: grande sensibilità' },
      { icon: '⚠', text: 'Errore: aspettative troppo alte' },
      { icon: '💡', text: 'Consiglio: resta ancorato alla realtà' },
    ],
    vector: { A: 50, B: 50, E: 80, D: 30, V: 70 },
  },
  {
    name: 'Dominante Intenso',
    desc:
      'Energia e passione ti spingono a guidare ogni situazione con intensità.',
    bullets: [
      { icon: '✔', text: 'Forza: determinazione forte' },
      { icon: '⚠', text: 'Errore: rischio di eccesso di controllo' },
      { icon: '💡', text: 'Consiglio: ascolta di più l’altro' },
    ],
    vector: { A: 60, B: 60, E: 40, D: 90, V: 40 },
  },
  {
    name: 'Empatico Visionario',
    desc:
      'Capti i sentimenti altrui e guardi lontano, costruendo legami profondi.',
    bullets: [
      { icon: '✔', text: 'Forza: grande capacità di ascolto' },
      { icon: '⚠', text: 'Errore: ti dimentichi di te stesso' },
      { icon: '💡', text: 'Consiglio: proteggi i tuoi confini' },
    ],
    vector: { A: 55, B: 40, E: 85, D: 30, V: 70 },
  },
  {
    name: 'Indipendente Misterioso',
    desc:
      'Ami la tua autonomia e affascini con il tuo lato enigmatico.',
    bullets: [
      { icon: '✔', text: 'Forza: forte senso di sé' },
      { icon: '⚠', text: 'Errore: difficoltà ad aprirti' },
      { icon: '💡', text: 'Consiglio: mostra più vulnerabilità' },
    ],
    vector: { A: 80, B: 30, E: 40, D: 40, V: 60 },
  },
  {
    name: 'Creativo Seduttore',
    desc:
      'Ti piace sperimentare e sedurre con originalità e carisma.',
    bullets: [
      { icon: '✔', text: 'Forza: fascino e spontaneità' },
      { icon: '⚠', text: 'Errore: puoi sembrare incostante' },
      { icon: '💡', text: 'Consiglio: definisci meglio le tue intenzioni' },
    ],
    vector: { A: 60, B: 40, E: 60, D: 80, V: 50 },
  },
  {
    name: 'Pragmatico Realista',
    desc:
      'Valuti la relazione con lucidità, puntando su stabilità e fatti concreti.',
    bullets: [
      { icon: '✔', text: 'Forza: piedi per terra' },
      { icon: '⚠', text: 'Errore: poca spontaneità' },
      { icon: '💡', text: 'Consiglio: lascia spazio all’imprevisto' },
    ],
    vector: { A: 50, B: 40, E: 50, D: 50, V: 90 },
  },
];
