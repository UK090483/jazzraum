export interface Concert {
  id: string;
  title: string;
  artist: string;
  date: Date;
  time: string;
  venue: string;
  description: string;
  image: string;
  price: string;
  lineup?: string[];
  longDescription?: string;
  genre?: string;
  duration?: string;
}

// Current and upcoming concerts (April 2026)
export const currentConcerts: Concert[] = [
  {
    id: "1",
    title: "Blue Note Sessions",
    artist: "The Hamburg Jazz Quartet",
    date: new Date(2026, 3, 18), // April 18, 2026
    time: "20:00",
    venue: "Jazzraum Hamburg",
    description: "Ein Abend voller klassischer Jazz-Standards und improvisierter Meisterwerke. Das Hamburg Jazz Quartet präsentiert ihre einzigartige Interpretation zeitloser Melodien.",
    image: "https://images.unsplash.com/photo-1770399883774-4a5ca3e32a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwY29uY2VydCUyMHNheG9waG9uZSUyMG11c2ljaWFufGVufDF8fHx8MTc3NjI1MDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "25€",
    lineup: ["Marcus Schneider - Saxophone", "Julia Weber - Piano", "Tom Richter - Bass", "Alex Keller - Drums"],
    longDescription: "Das Hamburg Jazz Quartet ist bekannt für ihre energetischen Live-Performances und ihre Fähigkeit, klassische Jazz-Standards in moderne Interpretationen zu verwandeln. An diesem Abend erwarten euch zeitlose Melodien von Monk, Coltrane und Davis, sowie eigene Kompositionen, die die Grenzen zwischen Tradition und Innovation verwischen. Die Band hat in den letzten Jahren auf zahlreichen internationalen Festivals gespielt und bringt nun ihre explosive Energie in den intimeren Rahmen des Jazzraums. Erwartet improvisierte Soli, komplexe Harmonien und eine Menge Herzblut.",
    genre: "Bebop / Hard Bop",
    duration: "ca. 2.5 Stunden (inkl. Pause)"
  },
  {
    id: "2",
    title: "Midnight Piano",
    artist: "Sarah Bergmann Trio",
    date: new Date(2026, 3, 22), // April 22, 2026
    time: "21:30",
    venue: "Jazzraum Hamburg",
    description: "Eine intime Piano-Session mit Sarah Bergmann. Erleben Sie virtuose Pianistik gepaart mit emotionaler Tiefe in einer einzigartigen Atmosphäre.",
    image: "https://images.unsplash.com/photo-1760783319956-73b61df24ec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwcGlhbm8lMjBwZXJmb3JtYW5jZSUyMHN0YWdlfGVufDF8fHx8MTc3NjI1MDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "28€",
    lineup: ["Sarah Bergmann - Piano", "Michael Braun - Kontrabass", "Lisa Schwarz - Drums"],
    longDescription: "Sarah Bergmann gilt als eine der vielversprechendsten Pianistinnen der deutschen Jazzszene. Ihre Kompositionen zeichnen sich durch lyrische Melodien und überraschende harmonische Wendungen aus. Das Trio schafft einen intimen Klangraum, der die Zuhörer auf eine emotionale Reise mitnimmt. Von sanften Balladen bis zu explosiven Uptempo-Nummern zeigt Sarah ihr ganzes Können am Klavier. Diese Late-Night-Session verspricht eine besonders atmosphärische Erfahrung - perfekt für alle, die Jazz in seiner reinsten und emotionalsten Form erleben wollen.",
    genre: "Contemporary Jazz / Ballads",
    duration: "ca. 2 Stunden"
  },
  {
    id: "3",
    title: "Brass & Soul",
    artist: "Northern Horns Collective",
    date: new Date(2026, 3, 25), // April 25, 2026
    time: "19:30",
    venue: "Jazzraum Hamburg",
    description: "Kraftvolle Blechbläser-Arrangements treffen auf soulige Rhythmen. Das Northern Horns Collective bringt frischen Wind in den traditionellen Jazz.",
    image: "https://images.unsplash.com/photo-1761019362913-9cf17b5a0101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwdHJ1bXBldCUyMHBsYXllciUyMGxpdmUlMjBtdXNpY3xlbnwxfHx8fDE3NzYyNTAwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "22€",
    lineup: ["Felix Horn - Trumpet", "Nina Gold - Trombone", "Chris Silver - Saxophone", "Paul Drums - Drums", "Anna Keys - Keyboard"],
    longDescription: "Das Northern Horns Collective ist eine fünfköpfige Band, die sich der Kunst des Blechbläser-Jazz verschrieben hat. Mit Einflüssen aus Soul, Funk und traditionellem New Orleans Jazz kreieren sie einen Sound, der sowohl nostalgisch als auch völlig modern klingt. Die Band ist bekannt für ihre mitreißenden Live-Shows voller Energie und Improvisationsfreude. Erwartet kraftvolle Bläsersätze, groovende Rhythmen und solos, die euch von den Stühlen reißen werden. Ein Abend, der zeigt, dass Blechbläser-Jazz alles andere als verstaubt ist.",
    genre: "Soul Jazz / Funk",
    duration: "ca. 2 Stunden"
  },
  {
    id: "4",
    title: "Acoustic Nights",
    artist: "The Bassline Orchestra",
    date: new Date(2026, 3, 29), // April 29, 2026
    time: "20:30",
    venue: "Jazzraum Hamburg",
    description: "Akustischer Jazz in seiner reinsten Form. Erleben Sie die warmen Klänge des Kontrabass in Kombination mit feinfühligen Begleitinstrumenten.",
    image: "https://images.unsplash.com/photo-1760160741459-6c69336c5230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwZG91YmxlJTIwYmFzcyUyMHBsYXllciUyMGNvbmNlcnR8ZW58MXx8fHwxNzc2MjUwMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "24€",
    lineup: ["Robert Bass - Kontrabass", "Maria Guitar - Gitarre", "Stefan Vibes - Vibraphon"],
    longDescription: "The Bassline Orchestra verzichtet bewusst auf Verstärkung und setzt voll auf die natürliche Akustik der Instrumente. Der Kontrabass von Robert steht im Zentrum des Geschehens und wird von der feinfühligen Gitarre Marias und den schimmernden Klängen von Stefans Vibraphon ergänzt. Diese ungewöhnliche Besetzung schafft einen intimen, fast meditativen Sound, der perfekt zur Atmosphäre des Jazzraums passt. Die Band interpretiert Jazzstandards ebenso wie eigene Kompositionen und zeigt, dass man keine große Band braucht, um großartige Musik zu machen. Pure, ungefilterte Jazz-Magie.",
    genre: "Acoustic Jazz / Chamber Jazz",
    duration: "ca. 2 Stunden"
  }
];

// Past concerts (Archive)
export const pastConcerts: Concert[] = [
  {
    id: "5",
    title: "Swing Revival",
    artist: "The Vintage Five",
    date: new Date(2026, 2, 15), // March 15, 2026
    time: "20:00",
    venue: "Jazzraum Hamburg",
    description: "Eine Hommage an die goldene Ära des Swing mit den größten Hits der 40er Jahre.",
    image: "https://images.unsplash.com/photo-1770399883774-4a5ca3e32a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwY29uY2VydCUyMHNheG9waG9uZSUyMG11c2ljaWFufGVufDF8fHx8MTc3NjI1MDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "25€",
    lineup: ["Band Member 1 - Sax", "Band Member 2 - Piano", "Band Member 3 - Bass", "Band Member 4 - Drums", "Band Member 5 - Vocals"],
    longDescription: "The Vintage Five brachten die goldene Ära des Swing zurück ins Jazzraum. Mit authentischen Arrangements aus den 40er Jahren und einer Sängerin, die an Ella Fitzgerald erinnert, zauberten sie eine nostalgische Atmosphäre. Der Abend war ausverkauft und das Publikum tanzte bis spät in die Nacht.",
    genre: "Swing / Big Band",
    duration: "ca. 3 Stunden"
  },
  {
    id: "6",
    title: "Modern Jazz Explorations",
    artist: "Emma Fischer Quartet",
    date: new Date(2026, 2, 8), // March 8, 2026
    time: "21:00",
    venue: "Jazzraum Hamburg",
    description: "Experimenteller Jazz mit elektronischen Elementen und innovativen Improvisationen.",
    image: "https://images.unsplash.com/photo-1760783319956-73b61df24ec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwcGlhbm8lMjBwZXJmb3JtYW5jZSUyMHN0YWdlfGVufDF8fHx8MTc3NjI1MDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "30€",
    lineup: ["Emma Fischer - Electronics & Keys", "Jan Müller - Sax", "Lars Berg - Bass", "Tim Klein - Drums"],
    longDescription: "Emma Fischer präsentierte ihre neuesten experimentellen Kompositionen, die akustischen Jazz mit elektronischen Soundscapes verbinden. Das Quartet wagte sich in neue klangliche Territorien und das Publikum folgte gebannt. Ein denkwürdiger Abend voller Überraschungen.",
    genre: "Experimental / Electronic Jazz",
    duration: "ca. 2.5 Stunden"
  },
  {
    id: "7",
    title: "Latin Jazz Fusion",
    artist: "Carlos Mendez & Friends",
    date: new Date(2026, 2, 1), // March 1, 2026
    time: "19:30",
    venue: "Jazzraum Hamburg",
    description: "Heiße lateinamerikanische Rhythmen verschmelzen mit klassischem Jazz zu einem unvergesslichen Erlebnis.",
    image: "https://images.unsplash.com/photo-1761019362913-9cf17b5a0101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwdHJ1bXBldCUyMHBsYXllciUyMGxpdmUlMjBtdXNpY3xlbnwxfHx8fDE3NzYyNTAwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "27€",
    lineup: ["Carlos Mendez - Trumpet", "Maria Santos - Percussion", "Pedro Dias - Piano", "Antonio Cruz - Bass"],
    longDescription: "Carlos Mendez und seine Band brachten karibisches Feuer in den Jazzraum. Mit Salsa, Samba und Bossa Nova Rhythmen gemischt mit Jazz-Improvisationen wurde es ein unvergesslicher Abend voller Lebensfreude und Tanzlust.",
    genre: "Latin Jazz / Salsa",
    duration: "ca. 2.5 Stunden"
  },
  {
    id: "8",
    title: "Jazz Legends Tribute",
    artist: "The Heritage Ensemble",
    date: new Date(2026, 1, 20), // February 20, 2026
    time: "20:30",
    venue: "Jazzraum Hamburg",
    description: "Eine musikalische Reise durch die Geschichte des Jazz mit Werken von Miles Davis, John Coltrane und mehr.",
    image: "https://images.unsplash.com/photo-1760160741459-6c69336c5230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwZG91YmxlJTIwYmFzcyUyMHBsYXllciUyMGNvbmNlcnR8ZW58MXx8fHwxNzc2MjUwMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "32€",
    lineup: ["Various Artists - Tribute Formation"],
    longDescription: "Ein emotionaler Abend voller Ehrfurcht vor den Jazz-Legenden. Das Heritage Ensemble spielte Klassiker von Miles Davis, John Coltrane, Charlie Parker und vielen mehr. Mit Respekt und zugleich eigener Interpretation wurden diese zeitlosen Stücke zum Leben erweckt.",
    genre: "Classic Jazz / Tribute",
    duration: "ca. 3 Stunden"
  },
  {
    id: "9",
    title: "Smooth Jazz Sunday",
    artist: "Michael Klein Trio",
    date: new Date(2026, 1, 14), // February 14, 2026
    time: "18:00",
    venue: "Jazzraum Hamburg",
    description: "Entspannter Smooth Jazz zum Sonntagnachmittag - perfekt zum Zurücklehnen und Genießen.",
    image: "https://images.unsplash.com/photo-1770399883774-4a5ca3e32a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwY29uY2VydCUyMHNheG9waG9uZSUyMG11c2ljaWFufGVufDF8fHx8MTc3NjI1MDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "20€",
    lineup: ["Michael Klein - Sax", "Sarah White - Piano", "Tom Black - Bass"],
    longDescription: "Der perfekte Sonntagnachmittag im Jazzraum. Michael Klein und sein Trio servierten entspannten Smooth Jazz, der die Seele streichelte. Entspannte Grooves und melodische Soli machten diesen Nachmittag zu einem perfekten Ausklang des Wochenendes.",
    genre: "Smooth Jazz",
    duration: "ca. 2 Stunden"
  },
  {
    id: "10",
    title: "Bebop Revolution",
    artist: "Fast Fingers Collective",
    date: new Date(2026, 1, 7), // February 7, 2026
    time: "21:30",
    venue: "Jazzraum Hamburg",
    description: "Schnelle Tempi, komplexe Harmonien und virtuose Soli - Bebop in seiner explosivsten Form.",
    image: "https://images.unsplash.com/photo-1760783319956-73b61df24ec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwcGlhbm8lMjBwZXJmb3JtYW5jZSUyMHN0YWdlfGVufDF8fHx8MTc3NjI1MDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "26€",
    lineup: ["David Speed - Piano", "Laura Quick - Sax", "Ben Fast - Drums", "Nina Rapid - Bass"],
    longDescription: "Das Fast Fingers Collective machte ihrem Namen alle Ehre. Mit atemberaubenden Tempi und technisch anspruchsvollen Soli zeigten sie, was Bebop ausmacht. Das Publikum war begeistert von der Virtuosität und Energie der Band.",
    genre: "Bebop / Hard Bop",
    duration: "ca. 2 Stunden"
  }
];