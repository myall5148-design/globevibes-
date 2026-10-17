import { ArtistProfile } from './artistsData';

export const RAW_ARTISTS: ArtistProfile[] = [
  // 1. Tainy
  {
    id: 'tainy',
    name: 'Tainy',
    slug: 'tainy',
    category_id: 'cat_latin_music',
    category_name: 'Latin Music',
    category_slug: 'latin-music',
    genre: 'Reggaeton / Latin Trap / Electronic',
    origin: 'San Juan, Puerto Rico',
    tags: [
      { id: 'tag_producer', name: 'Producer', slug: 'producer' },
      { id: 'tag_reggaeton', name: 'Reggaeton', slug: 'reggaeton' },
      { id: 'tag_latintrap', name: 'Latin Trap', slug: 'latin-trap' }
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Tainy music producer in recording studio with synthesizer',
    isFeatured: true,
    publishedDate: '2026-09-15T09:00:00.000Z',
    relatedArtists: ['Bad Bunny', 'J Balvin', 'Anuel AA', 'Bizarrap'],
    intro: 'Marco Efraín Masís Fernández, known professionally as Tainy, is a visionary Puerto Rican record producer, songwriter, and artist who has served as a primary sonic architect of modern Latin urban music for nearly two decades.',
    whoIs: 'Tainy is universally recognized as one of the most prolific Latin music producers in history. Emerging as a prodigy in the mid-2000s under the legendary production duo Luny Tunes, he helped pioneer reggaeton’s golden era before orchestrating its global pop resurgence in the late 2010s.',
    earlyJourney: 'Born in San Juan, Puerto Rico in 1989, Tainy began experimenting with software beat-making as a young teenager. His raw technical skill caught the attention of producers Luny Tunes, who signed him at age 15. He immediately contributed production to landmark projects including Wisin & Yandel’s "Pa\'l Mundo".',
    styleGenres: 'Tainy’s production signature blends classic reggaeton dembow percussion with cinematic synthesizers, atmospheric pads, and 1980s synth-pop textures. He seamlessly moves between Latin trap, electropop, ambient soundscapes, and alternative R&B.',
    highlights: 'Tainy has earned multiple Latin Grammy Awards and produced era-defining smashes, including Bad Bunny’s debut album "X 100pre", J Balvin’s "Vibras", and Cardi B’s "I Like It". In 2023, he unveiled his ambitious debut solo album "DATA", earning widespread international critical acclaim.',
    popularSongs: ['DATA (Album)', 'Lo Siento BB:/ (feat. Bad Bunny & Julieta Venegas)', 'Callaíta', 'I Can\'t Get Enough (with Selena Gomez & Benny Blanco)', 'Adicto (feat. Anuel AA & Ozuna)'],
    interestingFacts: [
      'He won his first Latin Grammy Award when he was only nineteen years old.',
      'His solo concept album "DATA" was themed around bringing a cybernetic anime character named Sena to life through sound.',
      'He has produced more than sixty Billboard Hot Latin Songs Top 10 hits throughout his career.'
    ],
    discoverMore: 'Discover Tainy’s innovative catalog by streaming his landmark solo project DATA and following his official releases across premier music streaming services and studio dispatches.'
  },

  // 2. Barry Can't Swim
  {
    id: 'barry_cant_swim',
    name: 'Barry Can\'t Swim',
    slug: 'barry-cant-swim',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'House / Electronic / Jazz-Infused Dance',
    origin: 'Edinburgh, Scotland',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_house', name: 'House', slug: 'house' },
      { id: 'tag_producer', name: 'Producer', slug: 'producer' }
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Electronic dance artist performing vibrant live synthesizer set',
    isFeatured: true,
    publishedDate: '2026-09-18T10:15:00.000Z',
    relatedArtists: ['Bonobo', 'Fred again..', 'Maribou State', 'Four Tet'],
    intro: 'Joshua Mainnie, performing under the moniker Barry Can\'t Swim, is a Scottish electronic musician, multi-instrumentalist, and producer acclaimed for his vibrant fusion of deep house, jazz piano harmonies, and world-folk rhythms.',
    whoIs: 'Hailing from Edinburgh, Barry Can\'t Swim has rapidly become one of the most exciting breakthrough electronic producers in the United Kingdom, bringing live musicality and warm, sun-drenched melodies to club culture.',
    earlyJourney: 'Classically trained on the piano from childhood, Mainnie played in various indie and jazz ensembles before moving to London to study music. He turned to digital production as a way to combine live instrumental chops with dynamic dancefloor percussion.',
    styleGenres: 'His music is characterized by intricate acoustic piano licks, buoyant Afrobeat-inspired grooves, shimmering vocal chops, and euphoric deep house basslines. The result is an infectious sound that feels equally at home in intimate headphones or summer festival tents.',
    highlights: 'Following praised EPs on Ninja Tune’s imprint Technicolour, he released his debut studio album "When Will We Land?" in late 2023. The album received a nomination for the prestigious Mercury Prize in 2024 and cemented his status as a headline live act.',
    popularSongs: ['Sunsleeper', 'Dance of the Crab', 'How It Feels', 'Deadbeat Gospel', 'Kimbara'],
    interestingFacts: [
      'He selected the moniker "Barry Can\'t Swim" on a playful whim, contrasting self-deprecation with his radiant musical style.',
      'He incorporates live piano and brass into his festival performances rather than relying strictly on DJ decks.',
      'His debut album was nominated for the 2024 Mercury Prize alongside Britain\'s top contemporary artists.'
    ],
    discoverMore: 'Explore Barry Can\'t Swim’s sun-soaked sonic universe through his acclaimed LP "When Will We Land?" and catch his energetic live performances on global tour circuits.'
  },

  // 3. Anuel AA
  {
    id: 'anuel_aa',
    name: 'Anuel AA',
    slug: 'anuel-aa',
    category_id: 'cat_latin_music',
    category_name: 'Latin Music',
    category_slug: 'latin-music',
    genre: 'Latin Trap / Reggaeton',
    origin: 'Carolina, Puerto Rico',
    tags: [
      { id: 'tag_latintrap', name: 'Latin Trap', slug: 'latin-trap' },
      { id: 'tag_reggaeton', name: 'Reggaeton', slug: 'reggaeton' },
      { id: 'tag_rap', name: 'Rap', slug: 'rap' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Latin trap rapper performing with stage lighting and microphone',
    isFeatured: true,
    publishedDate: '2026-09-20T11:00:00.000Z',
    relatedArtists: ['Bad Bunny', 'Ozuna', 'Tainy', 'Farruko'],
    intro: 'Emmanuel Gazmey Santiago, known internationally as Anuel AA, is a Puerto Rican rapper and singer widely regarded as the founding pioneer of the Spanish-language Latin trap movement.',
    whoIs: 'Anuel AA is one of the most prominent and influential voices in Latin urban music. Renowned for his gritty baritone voice, unfiltered street narratives, and catchphrase "Real Hasta la Muerte," he has racked up billions of streams across global platforms.',
    earlyJourney: 'Born in Carolina, Puerto Rico, Anuel grew up with close proximity to the recording industry through his father, a musician and Sony Music executive. Anuel began recording music in 2010, gaining underground acclaim through digital mixtape releases.',
    styleGenres: 'His sound centers on Latin trap—characterized by heavy 808 sub-bass, rapid hi-hats, and raw lyrical honesty—intertwined with commercial reggaeton, pop ballads, and dancehall rhythms.',
    highlights: 'His 2018 debut studio album "Real Hasta la Muerte", recorded under challenging personal circumstances and released immediately upon his release from custody, achieved platinum status and won Billboard Latin Music Awards. Subsequent chart-topping albums include "Emmanuel" and "Las Leyendas Nunca Mueren".',
    popularSongs: ['Ella Quiere Beber (with Romeo Santos)', 'Secreto (with Karol G)', 'China (feat. Daddy Yankee, Karol G, Ozuna & J Balvin)', 'Amanece', 'Más Rica Que Ayer'],
    interestingFacts: [
      'He coined the viral phrase and movement "Real Hasta la Muerte" ("Real Until Death"), which became his personal lifestyle philosophy.',
      'His debut album was assembled secretly and shot to the top of the Billboard Top Latin Albums chart on the very day of its surprise launch.',
      'He has collaborated across genres with artists including Meek Mill, Lil Wayne, and Shakira.'
    ],
    discoverMore: 'Listen to Anuel AA’s discography and official music videos on premier streaming services to trace the evolution of Latin trap from street mixtapes to stadium tours.'
  },

  // 4. Conor Oberst
  {
    id: 'conor_oberst',
    name: 'Conor Oberst',
    slug: 'conor-oberst',
    category_id: 'cat_indie_music',
    category_name: 'Indie Music',
    category_slug: 'indie-music',
    genre: 'Indie Rock / Folk / Americana',
    origin: 'Omaha, Nebraska, USA',
    tags: [
      { id: 'tag_indierock', name: 'Indie Rock', slug: 'indie-rock' },
      { id: 'tag_soul', name: 'Acoustic', slug: 'acoustic' }
    ],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Indie rock musician playing acoustic guitar on stage',
    isFeatured: false,
    publishedDate: '2026-09-22T14:30:00.000Z',
    relatedArtists: ['Phoebe Bridgers', 'Elliott Smith', 'M. Ward', 'Sufjan Stevens'],
    intro: 'Conor Oberst is an American singer-songwriter celebrated as the lyrical visionary of Bright Eyes and one of the defining figures in independent rock and folk music over the past quarter-century.',
    whoIs: 'Renowned for his impassioned, tremulous vocal delivery and introspective poetic lyricism, Oberst has fronted acclaimed bands including Bright Eyes, Desaparecidos, Monsters of Folk, and Better Oblivion Community Center alongside Phoebe Bridgers.',
    earlyJourney: 'Born in Omaha, Nebraska, Oberst began recording songs in his basement on cassette tapes as early as age thirteen. He co-founded Saddle Creek Records, turning his Midwestern hometown into a thriving international hub for independent music.',
    styleGenres: 'His songwriting weaves delicate acoustic folk, sweeping orchestral indie rock, country-tinged Americana, and angular punk rock, unified by profound lyrical storytelling and vulnerable emotional honesty.',
    highlights: 'Bright Eyes’ 2002 masterpiece "Lifted or The Story Is in the Soil, Keep Your Ear to the Ground" and 2005’s twin releases "I\'m Wide Awake, It\'s Morning" and "Digital Ash in a Digital Urn" brought Oberst widespread critical acclaim, frequently drawing comparisons to Bob Dylan.',
    popularSongs: ['First Day of My Life', 'Lua', 'At the Bottom of Everything', 'Poison Oak', 'Dylan Thomas (with Better Oblivion Community Center)'],
    interestingFacts: [
      'He made his first recorded cassette album at the age of thirteen in 1993.',
      'In 2019, he formed the collaborative band Better Oblivion Community Center with Phoebe Bridgers, releasing a surprise acclaimed LP.',
      'He has released music under half a dozen distinct band and collaborative monikers across his extensive career.'
    ],
    discoverMore: 'Explore the extensive discography of Conor Oberst and Bright Eyes through record stores, vinyl editions, and streaming platforms.'
  },

  // 5. Hiroyuki Sawano
  {
    id: 'hiroyuki_sawano',
    name: 'Hiroyuki Sawano',
    slug: 'hiroyuki-sawano',
    category_id: 'cat_classical_screen',
    category_name: 'Classical and Screen Music',
    category_slug: 'classical-screen',
    genre: 'Screen Music / Cinematic Orchestral / Electronic Rock',
    origin: 'Tokyo, Japan',
    tags: [
      { id: 'tag_anime', name: 'Anime Music', slug: 'anime-music' },
      { id: 'tag_producer', name: 'Producer', slug: 'producer' }
    ],
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Orchestral grand piano in cinematic concert hall',
    isFeatured: true,
    publishedDate: '2026-09-24T16:00:00.000Z',
    relatedArtists: ['Yuki Kajiura', 'Joe Hisaishi', 'Kenshi Yonezu', 'Kevin Penkin'],
    intro: 'Hiroyuki Sawano is an acclaimed Japanese composer, arranger, and producer widely celebrated for crafting monumental, emotionally charged musical scores for landmark anime, films, and television productions.',
    whoIs: 'Sawano is the master behind some of the most iconic soundtracks in modern Japanese entertainment, best known globally as the composer for "Attack on Titan", "Kill la Kill", "The Seven Deadly Sins", and "Mobile Suit Gundam Unicorn".',
    earlyJourney: 'Born in Tokyo in 1980, Sawano studied piano from childhood and took formal composition and orchestration training from age seventeen, inspired by renowned Japanese film composers and Western rock and pop.',
    styleGenres: 'His signature aesthetic combines thunderous symphonic orchestrations, heavy electric guitar riffs, pounding electronic percussion, and soaring vocal performances, often featuring multi-lingual lyrics in English, German, and Japanese.',
    highlights: 'His explosive score for "Attack on Titan" produced cultural anthems like "ətˈæk 0N tάɪtn" and "YouSeeBIGGIRL/T:T". Outside of screen composition, his artist vocal project SawanoHiroyuki[nZk] features prominent Japanese guest singers.',
    popularSongs: ['ətˈæk 0N tάɪtn (Attack on Titan)', 'YouSeeBIGGIRL/T:T', 'Barricades', 'aLIEz (Aldnoah.Zero)', 'Unicorn (Mobile Suit Gundam UC)'],
    interestingFacts: [
      'He is famous among fans for using cryptic, symbol-heavy song titles featuring leetspeak, punctuation, and German phrasing.',
      'He writes songs tailored for vocalists in multiple languages despite primarily speaking Japanese.',
      'His soundtrack live orchestral suites regularly sell out arena-sized venues across Asia.'
    ],
    discoverMore: 'Delve into the cinematic catalog of Hiroyuki Sawano by streaming his original anime soundtracks and his SawanoHiroyuki[nZk] collaborative vocal records.'
  },

  // 6. Morgenstern
  {
    id: 'morgenstern',
    name: 'Morgenstern',
    slug: 'morgenstern',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Rap / Trap / Hip-Hop',
    origin: 'Ufa, Russia',
    tags: [
      { id: 'tag_rap', name: 'Rap', slug: 'rap' },
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hip-hop rap artist in high energy recording booth',
    isFeatured: false,
    publishedDate: '2026-09-26T08:00:00.000Z',
    relatedArtists: ['Big Baby Tape', 'Oxxxymiron', 'Kizaru', 'Tommy Cash'],
    intro: 'Alisher Tagirovich Morgenshtern, known simply as Morgenstern, is an eccentric Russian rap artist, producer, and viral phenomenon whose provocative sound transformed contemporary Russian hip-hop.',
    whoIs: 'Rising from an audacious online content creator into Eastern Europe’s most streamed commercial rap star, Morgenstern captivated youth culture with rebellious anthems, bass-heavy beats, and flamboyant visual aesthetics.',
    earlyJourney: 'Born in Ufa, Morgenshtern started in rock and punk garage bands before launching his satirical YouTube series "#EasyRep", breaking down and recreating commercial rap hits in minutes to demystify mainstream production.',
    styleGenres: 'His musical style is characterized by aggressive 808 club trap beats, satirical humor, rock attitude, infectious party chants, and high-energy flow deliveries.',
    highlights: 'His record-breaking album "Legendary Dust" (2020), composed and recorded entirely on live video streams over a single week, generated millions of day-one plays and broke regional streaming milestones.',
    popularSongs: ['Cadillac (feat. Eldzhey)', 'El Problema (feat. Timati)', 'Cristal & МОЁТ', 'Yung Hefner', 'Paparazzi'],
    interestingFacts: [
      'He recorded his chart-shattering LP "Legendary Dust" live on stream in just seven days to prove music production speed.',
      'He is recognizable by his distinctive face tattoos, including three numbers "666" over his brow.',
      'His videos frequently cross one hundred million views across global video platforms.'
    ],
    discoverMore: 'Discover Morgenstern’s vibrant discography and music videos across streaming platforms and digital archives.'
  },

  // 7. Zak Abel
  {
    id: 'zak_abel',
    name: 'Zak Abel',
    slug: 'zak-abel',
    category_id: 'cat_pop',
    category_name: 'Pop',
    category_slug: 'pop',
    genre: 'Pop / Soul / R&B',
    origin: 'London, England, UK',
    tags: [
      { id: 'tag_pop', name: 'Pop', slug: 'pop' },
      { id: 'tag_soul', name: 'Soul & R&B', slug: 'soul-rnb' }
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Soulful male pop singer performing under warm stage lights',
    isFeatured: false,
    publishedDate: '2026-09-28T12:00:00.000Z',
    relatedArtists: ['Tom Grennan', 'Gorgon City', 'John Newman', 'JP Cooper'],
    intro: 'Zak Abel is a British singer, songwriter, and musician renowned for his commanding, soulful vocal timbre and irresistible marriage of modern pop hooks with timeless funk and R&B sensibilities.',
    whoIs: 'Zak Abel first commanded international airwaves as the featured vocalist on Gorgon City’s top 20 smash "Unmissable". Since then, he has forged a distinguished solo career as a chart-topping pop and soul crooner.',
    earlyJourney: 'Growing up in London, Abel was a competitive national junior table tennis champion before committing entirely to his musical passion. He taught himself piano and guitar and began uploading acoustic covers online as a teenager.',
    styleGenres: 'Abel channels classic Motown soul, contemporary electro-pop, and upbeat funk, driven by his raspy, deeply expressive vocal range and uplifting, empowering lyricism.',
    highlights: 'Beyond scoring hits with his solo debut album "Only When We\'re Naked", he performed live at Windsor Castle for the Coronation Concert of King Charles III in May 2023, performing for millions worldwide.',
    popularSongs: ['Unmissable (with Gorgon City)', 'Love Me Like You Do', 'Be Kind', 'You Come First (feat. Saweetie)', 'Freedom (with Kygo)'],
    interestingFacts: [
      'He was the number one ranked Cadet table tennis player in England at age fourteen.',
      'He stepped up on short notice to perform at the 2023 King\'s Coronation Concert, earning global praise.',
      'He is a vocal advocate for mental health awareness in the music industry.'
    ],
    discoverMore: 'Experience Zak Abel’s soaring vocal records and acoustic sessions across major digital platforms and live concert venues.'
  },

  // 8. Venbee
  {
    id: 'venbee',
    name: 'Venbee',
    slug: 'venbee',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'Drum and Bass / Electronic / Pop',
    origin: 'Chatham, Kent, England',
    tags: [
      { id: 'tag_dnb', name: 'Drum & Bass', slug: 'drum-and-bass' },
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_pop', name: 'Pop', slug: 'pop' }
    ],
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Energetic UK drum and bass artist performing with microphone',
    isFeatured: true,
    publishedDate: '2026-09-30T15:45:00.000Z',
    relatedArtists: ['Goddard.', 'Luude', 'Becky Hill', 'Bru-C'],
    intro: 'Tara Madden, known professionally as Venbee, is an English singer-songwriter and producer whose raw, diary-entry lyricism and blistering drum and bass productions have revitalized British dance music.',
    whoIs: 'Venbee became a breakout music sensation in 2022 when her infectious single "Low Down" and top-three UK hit "Messy in Heaven" swept radio charts and streaming playlists alike.',
    earlyJourney: 'Hailing from Chatham in Kent, Venbee turned to songwriting at an early age as a healthy outlet for navigating neurodiversity and personal mental health challenges, writing songs on an acoustic guitar before discovering the pulse of UK club rhythms.',
    styleGenres: 'She fuses confessional indie-pop melodies with high-velocity 174 BPM drum and bass breakbeats, atmospheric basslines, and candid British storytelling.',
    highlights: 'Her breakout single "Messy in Heaven" (with Goddard.) reached number three on the UK Singles Chart, achieved multi-platinum status, and earned her nominations at major British music ceremonies.',
    popularSongs: ['Messy in Heaven (with Goddard.)', 'Low Down (with Dan Fable)', 'Gutter', 'Die Young', 'Rampage'],
    interestingFacts: [
      'She wrote "Low Down" in a matter of hours and previewed it online, where it instantly gained millions of streams.',
      'She has spoken openly about her ADHD and how fast-tempo drum and bass music mirrors the rhythm of her creative mind.',
      'She was selected for Amazon Music\'s Breakthrough Artist program.'
    ],
    discoverMore: 'Listen to Venbee\'s debut mixtape and energetic drum and bass singles on digital platforms and follow her live tour schedules.'
  },

  // 9. Tank and the Bangas
  {
    id: 'tank_and_the_bangas',
    name: 'Tank and the Bangas',
    slug: 'tank-and-the-bangas',
    category_id: 'cat_groups_bands',
    category_name: 'Music Groups and Bands',
    category_slug: 'music-groups-bands',
    genre: 'Soul / Funk / Spoken Word / Hip-Hop',
    origin: 'New Orleans, Louisiana, USA',
    tags: [
      { id: 'tag_band', name: 'Band', slug: 'band' },
      { id: 'tag_soul', name: 'Soul & R&B', slug: 'soul-rnb' }
    ],
    image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dynamic New Orleans funk and soul band performing live',
    isFeatured: false,
    publishedDate: '2026-10-01T09:00:00.000Z',
    relatedArtists: ['Trombone Shorty', 'Preservation Hall Jazz Band', 'Lianne La Havas', 'Jamila Woods'],
    intro: 'Tank and the Bangas is a Grammy-nominated musical ensemble from New Orleans, Louisiana, celebrated for their jubilant, theatrical blending of soul, funk, spoken-word poetry, and hip-hop.',
    whoIs: 'Fronted by the charismatic poet and vocalist Tarriona "Tank" Ball, the group captures the rich cultural musicality of New Orleans with spontaneous energy and virtuosic musicianship.',
    earlyJourney: 'Formed in 2011 after meeting at an open mic night at the Black Star Books and Caffe in New Orleans, the musicians bonded over a mutual desire to merge theatrical spoken word with improvisational funk and jazz.',
    styleGenres: 'Their sound defies neat categorization, shifting effortlessly from theatrical spoken word and vintage soul to gospel harmonies, bouncy hip-hop rhythms, and animated cartoon-like vocal shifts.',
    highlights: 'In 2017, Tank and the Bangas unanimously won NPR’s national Tiny Desk Contest out of more than 6,000 entries. They subsequently earned a Grammy Award nomination for Best New Artist in 2020.',
    popularSongs: ['Quick', 'Smoke.Netflix.Chill', 'Nice Things', 'Spaceships', 'No ID'],
    interestingFacts: [
      'Their winning Tiny Desk performance remains one of the most viewed concerts in NPR history.',
      'Lead singer Tank Ball was previously a distinguished slam poetry champion in New Orleans.',
      'They were nominated for Best New Artist at the 62nd Annual Grammy Awards.'
    ],
    discoverMore: 'Discover the genre-bending magic of Tank and the Bangas by listening to their albums "Green Balloon" and "Red Balloon" across music streaming services.'
  },

  // 10. 257ers
  {
    id: '257ers',
    name: '257ers',
    slug: '257ers',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'German Hip-Hop / Rap / Party Rap',
    origin: 'Essen, Germany',
    tags: [
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' },
      { id: 'tag_rap', name: 'Rap', slug: 'rap' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'German hip-hop rap duo on stage with bright festival lights',
    isFeatured: false,
    publishedDate: '2026-10-01T11:00:00.000Z',
    relatedArtists: ['Trailerpark', 'K.I.Z', 'Alligatoah', 'Sido'],
    intro: '257ers is a prominent German hip-hop group from Essen-Kupferdreh, widely renowned across Central Europe for their humorous, satirical lyrics, surrealist humor, and energetic party rap anthems.',
    whoIs: 'Formed in the mid-2000s and named after their local postal code district, the core duo consists of rappers Daniel "Shneezin" Schneider and Mike Rohleder, previously performing alongside former member Keule.',
    earlyJourney: 'Originating as a graffiti crew in Essen, they began producing self-made mixtapes filled with absurd comedy, fast-paced wordplay, and unconventional sound choices that developed a passionate cult following.',
    styleGenres: 'Their musical style blends punchy boombap and contemporary trap with unconventional samples, slapstick humor, acoustic sing-along choruses, and unapologetic party themes.',
    highlights: 'Their breakthrough albums "Boomshakkalakka" (2014) and "Mikrokosmos" (2016) reached number one on the German Albums Chart. Their iconic summer singles "Holz" and "Holland" achieved multi-platinum success.',
    popularSongs: ['Holz', 'Holland', 'Baby du riechst', 'Ablayd', 'Zuhause'],
    interestingFacts: [
      'Their viral single "Holz" is an ode entirely dedicated to wood, which achieved double platinum status in Germany.',
      'The group’s name "257ers" comes from the last digits of the postal code (45257) of their hometown Essen-Kupferdreh.',
      'They have won the coveted 1LIVE Krone award for Best Band in Germany.'
    ],
    discoverMore: 'Stream 257ers’ albums and music videos on Spotify, Apple Music, and YouTube to experience the lively humor of German party rap.'
  },

  // 11. UMI
  {
    id: 'umi',
    name: 'UMI',
    slug: 'umi',
    category_id: 'cat_pop',
    category_name: 'Pop',
    category_slug: 'pop',
    genre: 'R&B / Neo-Soul / Bedroom Pop',
    origin: 'Seattle, Washington, USA',
    tags: [
      { id: 'tag_soul', name: 'Soul & R&B', slug: 'soul-rnb' },
      { id: 'tag_pop', name: 'Pop', slug: 'pop' }
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Neo-soul singer UMI in serene atmospheric lighting',
    isFeatured: true,
    publishedDate: '2026-10-02T13:20:00.000Z',
    relatedArtists: ['Jhené Aiko', 'Snoh Aalegra', 'Ravyn Lenae', 'SZA'],
    intro: 'Tierra Umi Wilson, known mononymously as UMI, is an American singer-songwriter whose calming blend of neo-soul, bedroom R&B, and meditation-infused music has made her a beloved voice of mindful modern pop.',
    whoIs: 'Of African American and Japanese descent, UMI crafts music centered on self-love, emotional vulnerability, and healing, creating acoustic-laced soundscapes that connect deeply with millions of listeners globally.',
    earlyJourney: 'Born in Seattle, Washington, UMI started recording songs in her bedroom as a high school student, writing lyrics over lo-fi YouTube beats and drawing inspiration from both R&B legends and Japanese pop ballads.',
    styleGenres: 'Her music balances tender acoustic guitar chords, warm electric piano grooves, lo-fi drum beats, and airy, soothing vocal melodies that offer solace and quiet contemplation.',
    highlights: 'Her 2018 single "Remember Me" became a breakout viral hit with over one hundred million streams. She subsequently released celebrated projects like "Love Language" and her full-length debut "Forest in the City", culminating in global tours with BTS member V on the collaboration "wherever u r".',
    popularSongs: ['Remember Me', 'Love Affair', 'wherever u r (feat. V of BTS)', 'Butterfly', 'Breathe'],
    interestingFacts: [
      'Her stage name "UMI" is derived from her middle name and means "ocean" in Japanese.',
      'She often conducts group meditation sessions with her audiences prior to performing at her headline concerts.',
      'She is bilingual, frequently incorporating Japanese phrases and concepts into her creative work.'
    ],
    discoverMore: 'Listen to UMI’s tranquil discography on official music platforms and experience her holistic approach to sound and wellness.'
  },

  // 12. Jawsh 685
  {
    id: 'jawsh_685',
    name: 'Jawsh 685',
    slug: 'jawsh-685',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'Siren Jam / Polynesian Dance / Pop',
    origin: 'Auckland, New Zealand',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_producer', name: 'Producer', slug: 'producer' }
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Electronic beatmaker with mixing console and audio hardware',
    isFeatured: false,
    publishedDate: '2026-10-02T16:00:00.000Z',
    relatedArtists: ['Jason Derulo', 'Justin Bieber', 'Major Lazer', 'DJ Snake'],
    intro: 'Joshua Christian Nanai, professionally known as Jawsh 685, is a New Zealand record producer and beatmaker whose signature "siren jam" sound unexpectedly evolved from South Auckland street culture into a worldwide Billboard number one phenomenon.',
    whoIs: 'Of Samoan descent, Jawsh 685 brought the distinctive Pasifika subculture of siren jams—music created to be played through emergency loud-hailer speakers attached to bicycles and cars—to the absolute peak of global pop charts.',
    earlyJourney: 'While still a high school student at Manurewa High School in South Auckland, Nanai produced dynamic instrumentals on digital audio workstations in his bedroom, posting clips to social media under his territory code 685.',
    styleGenres: 'His sound features brisk dancehall and reggaeton-influenced percussion, high-pitched horn motifs, Caribbean bounce, and uplifting Polynesian dance melodies designed for outdoor speakers.',
    highlights: 'His viral instrumental "Laxed (Siren Beat)" became the foundation for the worldwide chart-topping remix "Savage Love (Laxed – Siren Beat)" with Jason Derulo and BTS, hitting number one in the United States, United Kingdom, and over a dozen countries.',
    popularSongs: ['Savage Love (Laxed – Siren Beat) (with Jason Derulo & BTS)', 'Laxed (Siren Beat)', 'Sweet & Sour (feat. Lauv & Tyga)', 'Jiggle Jiggle', '10 To The Toes'],
    interestingFacts: [
      'The number "685" in his stage name represents the international calling country code for Samoa.',
      'He created the original beat for "Laxed" in his bedroom after school when he was only seventeen years old.',
      'His track sparked millions of cultural dance videos celebrating indigenous and Pacific Islander heritage.'
    ],
    discoverMore: 'Explore the high-energy discography of Jawsh 685 across Apple Music, Spotify, and YouTube to experience the vibrant rhythm of South Pacific siren jams.'
  },

  // 13. Yard Act
  {
    id: 'yard_act',
    name: 'Yard Act',
    slug: 'yard-act',
    category_id: 'cat_rock_alternative',
    category_name: 'Rock and Alternative',
    category_slug: 'rock-alternative',
    genre: 'Post-Punk / Indie Rock / Dance-Punk',
    origin: 'Leeds, England',
    tags: [
      { id: 'tag_postpunk', name: 'Post-Punk', slug: 'post-punk' },
      { id: 'tag_indierock', name: 'Indie Rock', slug: 'indie-rock' },
      { id: 'tag_band', name: 'Band', slug: 'band' }
    ],
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'British post-punk indie rock band performing with electric guitars',
    isFeatured: true,
    publishedDate: '2026-10-03T10:00:00.000Z',
    relatedArtists: ['Fontaines D.C.', 'IDLES', 'Shame', 'Squid'],
    intro: 'Yard Act is an English post-punk and indie rock band formed in Leeds, celebrated for their razor-sharp satirical storytelling, driving basslines, and witty commentary on modern British society.',
    whoIs: 'Comprising frontman James Smith, bassist Ryan Needham, guitarist Sam Shipstone, and drummer Jay Russell, Yard Act has emerged as one of the most innovative and acclaimed rock acts of the decade.',
    earlyJourney: 'Formed in Leeds in late 2019, the band released their debut single "The Trapper\'s Pelts" right before the global pandemic, cultivating an eager following through witty music videos and kinetic underground club gigs.',
    styleGenres: 'Their music fuses 1980s post-punk and No Wave with danceable grooves, hip-hop-influenced spoken vocal cadences, and vibrant indie-pop hooks.',
    highlights: 'Their debut album "The Overload" (2022) entered the UK Albums Chart at number two, breaking sales records for vinyl debuts and securing a nomination for the Mercury Prize. In 2024, they released their adventurous sophomore LP "Where\'s My Utopia?".',
    popularSongs: ['The Overload', 'Dream Job', '100% Endurance', 'Dead Horse', 'We Make Hits'],
    interestingFacts: [
      'Frontman James Smith delivers lyrics in a signature dry Northern speak-singing monologue inspired by John Cooper Clarke and Mark E. Smith.',
      'Pop icon Elton John became an outspoken fan of the band and collaborated with them on a special version of "100% Endurance".',
      'Their debut album set the record for the fastest-selling debut vinyl album by any artist in the 21st century in the UK.'
    ],
    discoverMore: 'Dive into Yard Act’s sharp, witty discography and watch their acclaimed visual music videos on streaming platforms and official music channels.'
  },

  // 14. What So Not
  {
    id: 'what_so_not',
    name: 'What So Not',
    slug: 'what-so-not',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'Future Bass / Trap / Electronic',
    origin: 'Sydney, Australia',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_producer', name: 'Producer', slug: 'producer' }
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Australian electronic producer on main festival stage with laser lighting',
    isFeatured: false,
    publishedDate: '2026-10-03T14:00:00.000Z',
    relatedArtists: ['Flume', 'RL Grime', 'San Holo', 'Alison Wonderland'],
    intro: 'Christopher Emerson, known professionally as What So Not, is an Australian electronic music producer, DJ, and songwriter who helped define the international future bass and festival trap movement.',
    whoIs: 'Originally founded in 2011 as a duo featuring Emerson and producer Flume, What So Not evolved into Emerson\'s premier solo project, renowned for earth-shaking bass drops, intricate sonic soundscapes, and cinematic live touring shows.',
    earlyJourney: 'Growing up surfing the beaches of Sydney, Emerson immersed himself in dance music culture, releasing underground club edits before teaming up with Harley Streten (Flume) to create boundary-pushing Australian bass records.',
    styleGenres: 'What So Not’s signature style features brassy synthesizer stabs, crisp hip-hop percussion, atmospheric vocal textures, and unexpected acoustic elements ranging from electric guitars to ambient field recordings.',
    highlights: 'His catalog features festival anthems like "High You Alone", "Jaguar", and the iconic RL Grime collaboration "Tell Me". His acclaimed full-length albums "Not All the Beautiful Things" and "Anomaly" demonstrated remarkable artistic depth.',
    popularSongs: ['Tell Me (with RL Grime)', 'High You Alone', 'Jaguar', 'Waiting (with Skrillex & RL Grime)', 'Beautiful (feat. Winona Oak)'],
    interestingFacts: [
      'He collaborated with rock legends Toto and Silverchair frontman Daniel Johns on his debut studio album.',
      'He is an avid surfer and frequently records ocean sounds to incorporate subtly into his electronic synthesizers.',
      'He has headlined premier festivals worldwide including Coachella, Lollapalooza, and Tomorrowland.'
    ],
    discoverMore: 'Experience What So Not’s cutting-edge bass productions and live festival mixes by streaming his official discography across major audio platforms.'
  },

  // 15. Headie One
  {
    id: 'headie_one',
    name: 'Headie One',
    slug: 'headie-one',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'UK Drill / British Hip-Hop / Rap',
    origin: 'Tottenham, London, UK',
    tags: [
      { id: 'tag_rap', name: 'Rap', slug: 'rap' },
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'UK drill rapper performing live on festival stage',
    isFeatured: true,
    publishedDate: '2026-10-04T09:30:00.000Z',
    relatedArtists: ['Stormzy', 'Central Cee', 'Dave', 'Digga D'],
    intro: 'Irving Ampofo Adjei, known professionally as Headie One, is a pioneering British rapper from Tottenham who has been widely hailed as the King of UK Drill for taking the sound from local street corners to the summit of the official charts.',
    whoIs: 'Recognized for his effortless laid-back cadence, dexterous triplet flows, and candid storytelling, Headie One is the first UK drill artist to secure a number one album on the Official UK Albums Chart.',
    earlyJourney: 'Raised on the Broadwater Farm estate in Tottenham, London, Headie One initially dreamed of a professional football career before redirecting his lyrical talents into underground rap groups like OFB (Original Farm Boys).',
    styleGenres: 'His sound is rooted in UK drill—defined by sliding 808 glides, skittering snare patterns, and haunting melodies—while effortlessly branching into Afrobeats, trap, and stadium-sized British rap.',
    highlights: 'His 2020 major-label debut "Edna", named in tribute to his late mother, debuted at number one in the United Kingdom. His international collaborations feature superstars like Drake, Stormzy, and Skepta.',
    popularSongs: ['Only You Freestyle (with Drake)', 'Ain\'t It Different (feat. Stormzy & AJ Tracey)', 'Both', '18HUNNA (feat. Dave)', 'Martin\'s Sofa'],
    interestingFacts: [
      'He became the very first UK drill artist to achieve a number one album in British chart history.',
      'Global superstar Drake specifically requested to collaborate with him on the landmark track "Only You Freestyle".',
      'His breakthrough song "Martin\'s Sofa" was written as a genuine tribute to a friend who gave him a couch to sleep on during hard times.'
    ],
    discoverMore: 'Listen to Headie One’s acclaimed mixtapes and studio albums on all major streaming services to explore the definitive sound of modern British rap.'
  },

  // 16. Cash Cash
  {
    id: 'cash_cash',
    name: 'Cash Cash',
    slug: 'cash-cash',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'EDM / Progressive House / Dance-Pop',
    origin: 'Roseland, New Jersey, USA',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_band', name: 'Band', slug: 'band' },
      { id: 'tag_pop', name: 'Pop', slug: 'pop' }
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Electronic dance music trio performing in front of a giant crowd',
    isFeatured: false,
    publishedDate: '2026-10-04T12:00:00.000Z',
    relatedArtists: ['The Chainsmokers', 'Galantis', 'Cheat Codes', 'R3HAB'],
    intro: 'Cash Cash is an American electronic dance music trio consisting of brothers Jean Paul Makhlouf and Alex Makhlouf alongside their close friend Samuel Frisch, celebrated for producing infectious, platinum-certified dance-pop anthems.',
    whoIs: 'Originating as an energetic pop-punk band, Cash Cash reinvented their sound in the early 2010s to become one of the premier mainstage EDM production groups in the world, collaborating with elite pop and hip-hop vocalists.',
    earlyJourney: 'Formed in Roseland, New Jersey, the trio spent years writing music and playing in garage bands before embracing synthesizers, talkboxes, and modern software production, culminating in their signing with dance powerhouse Big Beat Records.',
    styleGenres: 'Their music fuses radio-ready pop song structures with progressive house synth riffs, euphoric festival drops, and soaring guest vocal melodies.',
    highlights: 'Their 2013 international breakthrough single "Take Me Home", featuring singer Bebe Rexha, achieved multi-platinum status worldwide. They followed it with chart smashes like "Surrender" and their acclaimed album "Blood, Sweat & 3 Years".',
    popularSongs: ['Take Me Home (feat. Bebe Rexha)', 'Surrender', 'Millionaire (with Digital Farm Animals feat. Nelly)', 'Can We Pretend (with P!nk)', 'How to Love (feat. Sofia Reyes)'],
    interestingFacts: [
      'They originally performed in pop-punk bands and even recorded theme songs for Sonic the Hedgehog video games before pivoting to dance music.',
      'The three members produce, mix, master, and engineer nearly all of their own music entirely in their private New Jersey studio.',
      'They have held long-standing DJ residencies at premier Las Vegas mega-clubs like Hakkasan and Omnia.'
    ],
    discoverMore: 'Stream Cash Cash’s energetic discography of dance anthems on major music platforms to power your workouts and weekend playlists.'
  },

  // 17. Bambie Thug
  {
    id: 'bambie_thug',
    name: 'Bambie Thug',
    slug: 'bambie-thug',
    category_id: 'cat_rock_alternative',
    category_name: 'Rock and Alternative',
    category_slug: 'rock-alternative',
    genre: 'Ouija-Pop / Electro-Goth / Industrial Rock',
    origin: 'Macroom, County Cork, Ireland',
    tags: [
      { id: 'tag_postpunk', name: 'Alternative', slug: 'alternative' },
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' }
    ],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Gothic avant-garde alternative artist performing theatrical stage show',
    isFeatured: true,
    publishedDate: '2026-10-05T08:45:00.000Z',
    relatedArtists: ['Poppy', 'Baby Lasagna', 'Ghostemane', 'Ashnikko'],
    intro: 'Bambie Ray Robinson, known professionally as Bambie Thug, is an Irish singer, songwriter, and performance artist who coined the term "Ouija-pop" to describe their spellbinding blend of electro-goth, industrial metal, and hyperpop.',
    whoIs: 'Bambie Thug captivated an audience of over one hundred million viewers when representing Ireland at the Eurovision Song Contest 2024, securing Ireland\'s highest finish in a quarter of a century with an unforgettable theatrical performance.',
    earlyJourney: 'Born in Macroom, County Cork, to an Irish mother and Swedish father, Robinson originally trained as a ballerina before an injury prompted a shift toward musical theatre and songwriting in London.',
    styleGenres: 'Their sound moves fearlessly between whispering witch-house invocations, blistering metal breakdowns, distorted industrial synths, and sparkling pop melodies.',
    highlights: 'Their breakout track "Doomsday Blue" earned critical praise across Europe, finishing sixth overall at Eurovision 2024 and topping streaming charts across the continent.',
    popularSongs: ['Doomsday Blue', 'Egregore', 'Tsunami (11:11)', 'Kawaii Requiem', 'Careless'],
    interestingFacts: [
      'They created the genre descriptor "Ouija-pop" because traditional genre boundaries could not accommodate their hybrid sonic and aesthetic world.',
      'Their 2024 Eurovision performance achieved Ireland\'s best placement at the contest since 2000.',
      'They perform with elaborate spell-casting rituals and pagan imagery interwoven into their costuming and stage design.'
    ],
    discoverMore: 'Discover Bambie Thug’s theatrical Ouija-pop creations and cinematic music videos through major streaming platforms and live tour events.'
  },

  // 18. Alyona Alyona
  {
    id: 'alyona_alyona',
    name: 'Alyona Alyona',
    slug: 'alyona-alyona',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Ukrainian Hip-Hop / Rap',
    origin: 'Kapitanivka, Ukraine',
    tags: [
      { id: 'tag_rap', name: 'Rap', slug: 'rap' },
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Empowered female hip hop rapper performing on European stage',
    isFeatured: false,
    publishedDate: '2026-10-05T11:15:00.000Z',
    relatedArtists: ['Jerry Heil', 'Kalush Orchestra', 'Tommy Cash', 'Missy Elliott'],
    intro: 'Alyona Olehivna Savranenko, performing as Alyona Alyona, is a celebrated Ukrainian rapper and songwriter whose lightning-fast lyrical flow, body positivity, and socially conscious messages have made her an international hip-hop icon.',
    whoIs: 'Formerly a humble kindergarten teacher in a small village, Alyona Alyona took the European music landscape by storm, shattering stereotypes about who can become a dominant hip-hop force.',
    earlyJourney: 'Raised in central Ukraine, she earned two university degrees and worked as a kindergarten teacher for several years while secretly penning verses in her native Ukrainian language and posting DIY music videos online.',
    styleGenres: 'Her music features hard-hitting boombap and trap drums combined with traditional Ukrainian folk motifs and rapid-fire, syllable-dense deliveries that tackle topics like self-worth, community, and national resilience.',
    highlights: 'Her debut album "Pushka" (2019) became an immediate cultural touchstone. In 2024, she teamed up with singer Jerry Heil to represent Ukraine at Eurovision with the anthem "Teresa & Maria", winning third place internationally.',
    popularSongs: ['Teresa & Maria (with Jerry Heil)', 'Pushka', 'Ribki', 'Zalyshaiu svii dim', 'Kupala'],
    interestingFacts: [
      'She worked as a kindergarten head teacher right up until her music career exploded into viral fame.',
      'The New York Times hailed her as one of Europe’s most essential new artists.',
      'Her collaborative track "Teresa & Maria" reached millions of streams and secured third place on the Eurovision 2024 grand final stage.'
    ],
    discoverMore: 'Explore Alyona Alyona’s empowering catalog on Apple Music, Spotify, and YouTube to experience the power of modern Ukrainian rap.'
  },

  // 19. Jerry Heil
  {
    id: 'jerry_heil',
    name: 'Jerry Heil',
    slug: 'jerry-heil',
    category_id: 'cat_pop',
    category_name: 'Pop',
    category_slug: 'pop',
    genre: 'Pop / Ukrainian Folk-Pop / Indie Pop',
    origin: 'Vasylkiv, Ukraine',
    tags: [
      { id: 'tag_pop', name: 'Pop', slug: 'pop' },
      { id: 'tag_soul', name: 'Folk-Pop', slug: 'folk-pop' }
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Folk pop vocalist singing emotionally with choir harmonies',
    isFeatured: false,
    publishedDate: '2026-10-05T14:30:00.000Z',
    relatedArtists: ['Alyona Alyona', 'Go_A', 'Jamala', 'Ruslana'],
    intro: 'Yana Oleksandrivna Shemaieva, known professionally as Jerry Heil, is an acclaimed Ukrainian singer-songwriter and composer whose ethereal vocals, folk melodies, and smart pop songwriting have captured global listeners.',
    whoIs: 'Jerry Heil began her career as a popular video blogger and vocal arranger before blossoming into one of Ukraine\'s foremost cultural ambassadors and Eurovision podium finishers.',
    earlyJourney: 'Born in Vasylkiv, she studied classical music from childhood at Kyiv\'s prestigious R. Glier Institute of Music and later attended Berklee College of Music in Boston to study cinematic film scoring.',
    styleGenres: 'Her sound merges ancient Slavic choral harmonies with sparkling electronic pop production, orchestral instrumentation, and poetic, emotionally resonant lyrics.',
    highlights: 'Her viral satirical hit "Okhrana, otmyena" gained millions of views in 2019. In 2024, her Eurovision anthem "Teresa & Maria", created with rapper Alyona Alyona, reached the podium at third place with massive public televote support.',
    popularSongs: ['Teresa & Maria (with Alyona Alyona)', 'Okhrana, otmyena', 'Mriia', 'Kupala', 'Poshta'],
    interestingFacts: [
      'She was accepted into the world-renowned Berklee College of Music to specialize in film scoring.',
      'Her stage moniker was chosen randomly from cartoon character Jerry the mouse and an American surname.',
      'She founded her own music publishing label, NOVA MUSIC, to support emerging Ukrainian artists.'
    ],
    discoverMore: 'Discover Jerry Heil’s beautiful blend of traditional folklore and modern pop by streaming her albums and singles on official platforms.'
  },

  // 20. Khruangbin
  {
    id: 'khruangbin',
    name: 'Khruangbin',
    slug: 'khruangbin',
    category_id: 'cat_groups_bands',
    category_name: 'Music Groups and Bands',
    category_slug: 'music-groups-bands',
    genre: 'Psychedelic Rock / Thai Funk / Dub / World',
    origin: 'Houston, Texas, USA',
    tags: [
      { id: 'tag_band', name: 'Band', slug: 'band' },
      { id: 'tag_indierock', name: 'Psychedelic', slug: 'psychedelic' }
    ],
    image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Psychedelic trio playing electric bass, vintage guitar and drums in warm light',
    isFeatured: true,
    publishedDate: '2026-10-06T10:00:00.000Z',
    relatedArtists: ['Leon Bridges', 'Unknown Mortal Orchestra', 'Skinshape', 'Hermanos Gutiérrez'],
    intro: 'Khruangbin is a world-renowned musical trio from Houston, Texas, famous for their hypnotic, predominantly instrumental blend of global psychedelic rock, Thai funk, Jamaican dub, and Middle Eastern melodies.',
    whoIs: 'Composed of bassist Laura Lee Ochoa, guitarist Mark Speer, and drummer Donald "DJ" Johnson, Khruangbin has cultivated a passionate global fanbase through their effortlessly groovy, transportive live performances.',
    earlyJourney: 'Formed in 2009, the band honed their telepathic instrumental chemistry by rehearsing in a remote wooden barn in Burton, Texas, drawing inspiration from cassette recordings of 1960s Thai funk and Southeast Asian pop.',
    styleGenres: 'Their hypnotic sound is built upon Lee\'s warm, minimalist basslines, Speer\'s reverb-drenched Stratocaster guitar riffs, and Johnson\'s unshakeable, breakbeat-inspired drumming.',
    highlights: 'Albums like "The Universe Smiles Upon You", "Con Todo El Mundo", and "Mordechai" established them as global festival headliners, while collaborative EPs with soul singer Leon Bridges ("Texas Sun", "Texas Moon") topped international charts.',
    popularSongs: ['Texas Sun (with Leon Bridges)', 'Time (You and I)', 'White Gloves', 'So We Won\'t Forget', 'A La Sala (Album)'],
    interestingFacts: [
      'The band\'s name "Khruangbin" is the Thai word for "airplane", symbolizing the worldwide travel nature of their musical influences.',
      'Bassist Laura Lee and guitarist Mark Speer famously wear distinctive jet-black wigs during all performances and interviews.',
      'They record virtually all of their studio albums inside a rustic barn in rural Texas with no air conditioning.'
    ],
    discoverMore: 'Immerse yourself in Khruangbin’s hypnotic instrumental discography across vinyl, Spotify, Apple Music, and world festival archives.'
  }
];
