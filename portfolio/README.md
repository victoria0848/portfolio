# React + TypeScript + Vite + Tailwind

I denne uge har jeg skrevet en portfolio, som jeg har stylet med Tailwind.
I dette fag skal du lære noget nyt inden for webudvikling og prøve det af i praksis.

Du skal undersøge en ny teknologi, metode eller et værktøj, som bruges i webudvikling i dag.

Det kan f.eks. være:

et framework (fx Next.js, Vue, Supabase)

TypeScript

et CSS-framework (f.eks. Tailwind)

et udviklingsværktøj

AI i programmering
Du må gerne tage udgangspunkt i en tidligere opgave eller et projekt, hvis det hjælper dig med at teste teknologien.

Husk at sende dit valg til din underviser.

Opgavebeskrivelse
Du skal:

Lære noget nyt om en teknologi eller metode inden for webudvikling

Prøve det af i praksis i et lille projekt eller eksempel

Forklare hvad mulighederne er ved teknologien

Dokumentation
Du skal dokumentere dit arbejde i en rapport (max 2 sider) eller en præsentation.

Den skal indeholde:

Problemstilling

Hvad vil du undersøge?
Eksempel:
Kan Tailwind CSS gøre det hurtigere at udvikle en brugerflade end almindelig CSS?
Metode

Hvordan har du undersøgt det?
Fx søgt information på nettet, brugt AI, set videoer, testet det i et projekt
Eksempel / afprøvning

Vis hvad du har lavet i praksis
Det kan være:
kode
en funktion
en ændring i et tidligere projekt
Konklusion

Hvad har du lært?
hvad kan teknologien bruges til?
hvad er fordelene?
hvad er begrænsningerne?
Afslutning
På den sidste dag skal du præsentere dit arbejde for holdet.

Du skal vise:

hvad du har undersøgt

hvad du har lavet

hvad du har lært



Tailwind CSS?
Problemstilling
Jeg vil undersøge, om Tailwind CSS kan gøre det hurtigere og mere effektivt at udvikle responsive brugerflader sammenlignet med traditionel CSS.

Jeg har undersøgt teknologien på følgende måder:
Læst officiel dokumentation på tailwindcss.com (især v4-guides og cheat sheets)
Set korte YouTube-videoer om Tailwind v4 + Vite/React (ca. 20–30 min total)
Brugt AI (Grok) til at få forklaringer, kodeeksempler og fejlfinding
Lavet et lille praktisk projekt: En responsiv single-page portfolio i React + TypeScript + Vite med Tailwind CSS styling
Sammenlignet arbejdsflowet med, hvordan jeg tidligere ville have gjort det med almindelig CSS (f.eks. separate CSS-filer og custom klasser)

Afprøvning

Jeg har bygget en personlig portfolio-side med følgende sektioner:
Header med navigation og dark/light mode toggle
Hero-sektion med gradient baggrund
Om mig-sektion med billede og tekst
Projekter-sektion med kort 
Kontakt-formular 
Footer

Projektet er lavet med semantisk HTML (<header>, <main>, <footer>, <section>) og Tailwind utility-klasser direkte i JSX.

Eksempler på brugt Tailwind:
Responsivt grid: grid md:grid-cols-2 gap-12
Hover-effekter: hover:scale-105 hover:shadow-2xl transition-all duration-300
Dark mode: dark:bg-gray-950 dark:text-white
Gradient: bg-gradient-to-br from-blue-600 to-indigo-700

Jeg brugte også en cheat sheet (nerdcave.com/tailwind-cheat-sheet) til at slå klasser op hurtigt.
Kode er tilgængelig i mit GitHub-repository:(https://github.com/victoria0848/portfolio).

Konklusion
Jeg har lært, at Tailwind CSS er en utility-first tilgang, hvor man skriver små, genbrugelige klasser direkte i HTML/JSX i stedet for at opfinde egne klassenavne og skrive lange CSS-regler.

Hvad kan teknologien bruges til?
Hurtige prototyper og landing pages
Moderne webapplikationer (React, Next.js, Vue osv.)
Projekter hvor man skal ændre design ofte

Fordele
Meget hurtigere styling 
Responsivt design er indbygget (f.eks. md:, lg: prefix)
Dark mode på 1 linje kode
Konsistent brug af farver, spacing og typografi

Begrænsninger
Kræver build-værktøj (Vite, PostCSS) – ikke bare link til CDN i produktion
Kan føles overvældende hvis man er vant til traditionel CSS

Alt i alt: Ja, Tailwind CSS gør det klart hurtigere at udvikle brugerflader.

Kilder
Officiel Tailwind CSS dokumentation: https://tailwindcss.com/docs
Tailwind Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet
Tailwind v4 blog og upgrade-guide: https://tailwindcss.com/blog/tailwindcss-v4-alpha
YouTube: “Tailwind CSS v4 Crash Course”