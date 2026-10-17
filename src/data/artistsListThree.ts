import { ArtistProfile } from './artistsData';

export const RAW_ARTISTS_THREE: ArtistProfile[] = [
  // 41. THEY.
  {
    id: 'they',
    name: 'THEY.',
    slug: 'they',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'R&B / Hip-Hop / Alternative R&B',
    origin: 'Los Angeles, California, USA',
    tags: [
      { id: 'tag_soul', name: 'R&B', slug: 'rnb' },
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'R&B hip-hop duo THEY. on stage with microphone and guitar',
    isFeatured: false,
    publishedDate: '2026-10-15T11:00:00.000Z',
    relatedArtists: ['ZHU', 'dvsn', 'Majid Jordan', 'PartyNextDoor'],
    intro: 'THEY. is an American musical duo from Los Angeles composed of vocalist Drew Love and producer Dante Jones, renowned for blending 1990s R&B vocal melodies with grunge guitar riffs and heavy trap drums.',
    whoIs: 'First bursting onto the scene via their featured appearance on ZHU’s breakout track "Working For It", THEY. established an unconventional niche by refusing to choose between R&B soul and alternative rock attitude.',
    earlyJourney: 'Love, originally from Washington D.C., and Jones, from Denver, Colorado, met in Los Angeles in 2015 while working as songwriters. Discovering a shared passion for both Kurt Cobain and Babyface, they launched their collaborative project.',
    styleGenres: 'Their sound integrates acoustic and electric grunge guitar riffs with thumping 808 bass, slick contemporary R&B vocal runs, and introspective nocturnal songwriting.',
    highlights: 'Their debut album "Nü Religion: Hyena" (2017) garnered critical acclaim and tours with Bryson Tiller. Their subsequent records "The Amanda Tape" and "Nü Moon" featured collaborations with Tinashe, Wiz Khalifa, and Kiana Ledé.',
    popularSongs: ['Working For It (with ZHU & Skrillex)', 'Bad Habits', 'U-RITE', 'What You Want', 'Count Me In'],
    interestingFacts: [
      'The group’s name "THEY." stands for "The Healing Elixir Y\'all", reflecting their view of music as therapeutic.',
      'Their breakthrough track "Working For It" has surpassed three hundred million streams worldwide.',
      'They have cited rock bands Nirvana and Taking Back Sunday as equal influences alongside R&B icons Jodeci.'
    ],
    discoverMore: 'Stream THEY.’s genre-blending R&B albums and acoustic sessions across major streaming channels.'
  },

  // 42. Hardwell
  {
    id: 'hardwell',
    name: 'Hardwell',
    slug: 'hardwell',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'Big Room House / Electro House / Big Room Techno',
    origin: 'Breda, Netherlands',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_house', name: 'Big Room House', slug: 'big-room-house' },
      { id: 'tag_producer', name: 'DJ & Producer', slug: 'dj-producer' }
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hardwell DJing on massive festival mainstage with pyrotechnics',
    isFeatured: true,
    publishedDate: '2026-10-15T14:30:00.000Z',
    relatedArtists: ['Tiësto', 'Martin Garrix', 'Armin van Buuren', 'Afrojack'],
    intro: 'Robbert van de Corput, known globally as Hardwell, is a world-renowned Dutch DJ, record producer, and music label owner twice voted the World\'s Number One DJ by DJ Mag.',
    whoIs: 'Hardwell is one of the most defining titans in the history of electronic dance music, widely recognized as the primary champion of the 2010s "Big Room House" stadium sound and founder of Revealed Recordings.',
    earlyJourney: 'Born in Breda, Netherlands, Hardwell studied piano from age four and began DJing at age twelve, mentored by fellow Breda native Tiësto. He rose through the Dutch club circuit before taking over international festival stages.',
    styleGenres: 'His sound features thunderous kick drums, dramatic build-ups, brassy synth leads, and energetic drops, evolving in recent years into his darker, high-octane "Rebels Never Die" big room techno aesthetic.',
    highlights: 'Voted the World\'s No. 1 DJ in both 2013 and 2014, Hardwell headlined Tomorrowland, Ultra Music Festival, and EDC dozens of times. His studio albums include "United We Are" and his celebrated 2022 comeback record "Rebels Never Die".',
    popularSongs: ['Spaceman', 'Apollo (feat. Amba Shepherd)', 'Don\'t Stop the Madness (with W&W feat. Fatman Scoop)', 'PACMAN', 'I Am The Weapon'],
    interestingFacts: [
      'He won the title of World\'s No. 1 DJ at the age of twenty-five, making him one of the youngest DJs to ever receive that crown.',
      'After years of relentless global touring, he took a voluntary three-year hiatus in 2018 to recharge, returning with a surprise Ultra 2022 headline set.',
      'His radio show "Hardwell On Air" broadcasted weekly for over ten years to millions of dance fans worldwide.'
    ],
    discoverMore: 'Experience Hardwell’s legendary festival live sets and albums on YouTube, Spotify, and Revealed Recordings.'
  },

  // 43. Baby Lasagna
  {
    id: 'baby_lasagna',
    name: 'Baby Lasagna',
    slug: 'baby-lasagna',
    category_id: 'cat_rock_alternative',
    category_name: 'Rock and Alternative',
    category_slug: 'rock-alternative',
    genre: 'Industrial Metal / Electro-Rock / Dance-Metal',
    origin: 'Umag, Croatia',
    tags: [
      { id: 'tag_indierock', name: 'Industrial Metal', slug: 'industrial-metal' },
      { id: 'tag_postpunk', name: 'Electro-Rock', slug: 'electro-rock' }
    ],
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Baby Lasagna performing live with industrial metal guitars and traditional Croatian lace',
    isFeatured: true,
    publishedDate: '2026-10-15T17:00:00.000Z',
    relatedArtists: ['Rammstein', 'Käärijä', 'Electric Callboy', 'Lord of the Lost'],
    intro: 'Marko Purišić, performing under the moniker Baby Lasagna, is a Croatian musician, singer, and songwriter whose explosive fusion of industrial metal, energetic techno, and traditional folklore won the Eurovision 2024 global public televote.',
    whoIs: 'Baby Lasagna became a national hero in Croatia and an international phenomenon when his anthemic, humorous song "Rim Tim Tagi Dim" captivated audiences across Europe and North America.',
    earlyJourney: 'Born in Umag, Purišić spent years playing guitar in the Croatian metal band Manntra before launching Baby Lasagna as a solo project to write honest, self-produced music without creative compromises.',
    styleGenres: 'His music combines crushing industrial metal guitar riffs, pounding electronic four-on-the-floor dance beats, traditional Istrian folk arrangements, and humorous, poignant lyrics about rural youth emigration.',
    highlights: 'He represented Croatia at the Eurovision Song Contest 2024, winning the public televote by a massive margin and finishing second overall—Croatia’s best result in history. His headline European tour sold out within minutes.',
    popularSongs: ['Rim Tim Tagi Dim', 'And I', 'Biggie Boom Boom', 'IG BOY', 'Don\'t hate yourself, but don\'t love yourself too much'],
    interestingFacts: [
      'He entered the Croatian national Eurovision selection Dora as a mere reserve artist and only competed after another act withdrew.',
      'He is a passionate cat lover, featuring his three cats Stipe, Branka, and Gertruda in his official merchandise and song lyrics.',
      'His track "Rim Tim Tagi Dim" won the Eurovision public vote with an astonishing 337 points from television viewers.'
    ],
    discoverMore: 'Listen to Baby Lasagna’s debut album and high-energy music videos across Spotify, Apple Music, and YouTube.'
  },

  // 44. Emiway Bantai
  {
    id: 'emiway_bantai',
    name: 'Emiway Bantai',
    slug: 'emiway-bantai',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Desi Hip-Hop / Indian Rap / Underground Hip-Hop',
    origin: 'Mumbai, Maharashtra, India',
    tags: [
      { id: 'tag_rap', name: 'Desi Hip-Hop', slug: 'desi-hip-hop' },
      { id: 'tag_hiphop', name: 'Rap', slug: 'rap' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Desi hip-hop rapper Emiway Bantai performing in Mumbai arena',
    isFeatured: true,
    publishedDate: '2026-10-15T19:30:00.000Z',
    relatedArtists: ['DIVINE', 'Raftaar', 'KRSNA', 'MC Stan'],
    intro: 'Bilal Shaikh, known worldwide by his stage name Emiway Bantai, is an independent Indian rapper, songwriter, and entrepreneur who is universally recognized as a foundational pioneer of the Desi Hip-Hop movement.',
    whoIs: 'Rising from the streets of Antop Hill in Mumbai, Emiway Bantai built one of the largest independent hip-hop followings on earth, boasting over twenty million YouTube subscribers without the backing of traditional Bollywood record labels.',
    earlyJourney: 'Inspired by Eminem and Lil Wayne as a teenager, Shaikh adopted the moniker "Emiway" (a portmanteau of Eminem and Wayne) and "Bantai" (Mumbai slang for friend). He began recording rap tracks in English before switching to Mumbai street Hindi.',
    styleGenres: 'His sound features gritty Mumbai slang, hyper-fast double-time flows, melodic auto-tune hooks, hard-knocking trap beats, and unapologetic self-made pride.',
    highlights: 'His breakout hit "Machayenge" became a defining pop-culture anthem with hundreds of millions of views. He made a prominent cameo in Zoya Akhtar’s acclaimed film "Gully Boy" and founded his own independent label, Bantai Records.',
    popularSongs: ['Machayenge', 'Firse Machayenge', 'Khatam Hue Vande', 'Company', 'Samajh Mein Aaya Kya'],
    interestingFacts: [
      'His stage name "Emiway" is a creative combination of his two favorite rap idols: Eminem and Lil Wayne.',
      'He reached twenty million YouTube subscribers as an independent artist without signing to any major corporate label.',
      'His track "Asli Hip Hop" helped introduce Mumbai street rap to mainstream Indian cinema.'
    ],
    discoverMore: 'Watch Emiway Bantai’s music videos on his YouTube channel and stream his full discography on Spotify and Apple Music.'
  },

  // 45. Kutless
  {
    id: 'kutless',
    name: 'Kutless',
    slug: 'kutless',
    category_id: 'cat_rock_alternative',
    category_name: 'Rock and Alternative',
    category_slug: 'rock-alternative',
    genre: 'Christian Rock / Post-Grunge / Alternative Rock',
    origin: 'Portland, Oregon, USA',
    tags: [
      { id: 'tag_indierock', name: 'Rock', slug: 'rock' },
      { id: 'tag_band', name: 'Band', slug: 'band' }
    ],
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Alternative rock band Kutless performing under stage lights with drum kit',
    isFeatured: false,
    publishedDate: '2026-10-15T21:00:00.000Z',
    relatedArtists: ['Skillet', 'Red', 'Switchfoot', 'Thousand Foot Krutch'],
    intro: 'Kutless is an American Christian alternative rock and post-grunge band from Portland, Oregon, formed in 1999 and fronted by lead vocalist James Mead and founding member Jon Micah Sumrall.',
    whoIs: 'Over a multi-decade recording career, Kutless has sold millions of albums and headlined international arenas, praised for their soaring post-grunge guitar sound and passionate spiritual anthems.',
    earlyJourney: 'Formed at Warner Pacific College in Portland, Oregon, the group was initially called "Call Box" before adopting the name Kutless, derived from a biblical verse describing divine grace taking away scars.',
    styleGenres: 'Their music pairs heavy alternative rock guitars and post-grunge chord progressions with emotional melodic vocals and contemporary acoustic worship ballads.',
    highlights: 'Their albums "Sea of Faces" (2004) and "Strong Tower" (2005) achieved gold certification, producing beloved anthems like "Run", "Strong Tower", and "What Faith Can Do", which spent months at number one on Christian music charts.',
    popularSongs: ['What Faith Can Do', 'Strong Tower', 'Sea of Faces', 'Run', 'Better Is One Day'],
    interestingFacts: [
      'Their signature ballad "What Faith Can Do" spent an astounding 45 weeks at number one on the Billboard Christian Songs chart.',
      'The band took their name from Romans 6:23, expressing the idea that through faith, they were left "without cuts" or scars.',
      'They have toured across Europe, South America, and Africa performing for humanitarian and faith missions.'
    ],
    discoverMore: 'Stream Kutless’s extensive rock and worship discography on Apple Music, Spotify, and Christian rock broadcasts.'
  },

  // 46. Mura Masa
  {
    id: 'mura_masa',
    name: 'Mura Masa',
    slug: 'mura-masa',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'Electronic / UK Garage / Future Bass / Hyperpop',
    origin: 'Guernsey, Channel Islands',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_producer', name: 'Producer', slug: 'producer' }
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Mura Masa producing electronic music with vintage drum machine',
    isFeatured: true,
    publishedDate: '2026-10-15T22:30:00.000Z',
    relatedArtists: ['Kaytranada', 'Flume', 'Disclosure', 'PinkPantheress'],
    intro: 'Alexander Crossan, known professionally as Mura Masa, is a Grammy-winning electronic music producer, songwriter, and multi-instrumentalist from Guernsey, celebrated for his lush, boundary-breaking production style.',
    whoIs: 'Mura Masa helped pioneer the tropical future bass and modern UK garage revival, collaborating with global stars like A$AP Rocky, Charli XCX, Damon Albarn, and PinkPantheress while remaining a visionary studio innovator.',
    earlyJourney: 'Growing up on the quiet island of Guernsey, Crossan taught himself guitar, bass, drums, and piano while playing in local punk bands before downloading digital audio workstations and uploading tracks to SoundCloud at age seventeen.',
    styleGenres: 'His sound features vibrant steel pans, kalimbas, vocal chops, and Japanese koto melodies juxtaposed against crisp trap drums, bouncy 2-step garage rhythms, and infectious pop hooks.',
    highlights: 'His self-titled 2017 debut album spawned the platinum hit "Love$ick" with A$AP Rocky. In 2019, he won a Grammy Award for Best Remixed Recording for his remix of Haim’s "Walking Away".',
    popularSongs: ['Love$ick (feat. A$AP Rocky)', 'Firefly (feat. Nao)', '1 Night (feat. Charli XCX)', 'What If I Go?', 'Just for me (with PinkPantheress)'],
    interestingFacts: [
      'His stage name was inspired by the legendary Japanese swordsmith Muramasa Sengo.',
      'He grew up on the isolated island of Guernsey, using the internet as his window into the global music scene.',
      'He won a Grammy Award for Best Remixed Recording in 2019.'
    ],
    discoverMore: 'Listen to Mura Masa’s celebrated studio albums and innovative club remixes across all streaming services.'
  },

  // 47. Yella Beezy
  {
    id: 'yella_beezy',
    name: 'Yella Beezy',
    slug: 'yella-beezy',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Southern Hip-Hop / Trap / Dallas Rap',
    origin: 'Dallas, Texas, USA',
    tags: [
      { id: 'tag_rap', name: 'Rap', slug: 'rap' },
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Texas rapper Yella Beezy performing in concert with jewelry and microphone',
    isFeatured: false,
    publishedDate: '2026-10-16T00:00:00.000Z',
    relatedArtists: ['Moneybagg Yo', 'Mo3', 'Boosie Badazz', 'Lil Baby'],
    intro: 'Markies Deandre Conway, known professionally as Yella Beezy, is an American rapper from the Oak Cliff neighborhood of Dallas, Texas, famous for putting modern Dallas street rap on the national Billboard charts.',
    whoIs: 'With his distinctive melodic drawl, recognizable high-top fade, and infectious bounce, Yella Beezy emerged as one of the leading ambassadors of Southern hip-hop with his chart-topping hit "That\'s On Me".',
    earlyJourney: 'Raised in Oak Cliff, Dallas, Conway experienced a challenging youth, turning to music in his late teens. He spent years releasing local mixtapes and performing in Texas clubs before his grassroots popularity captured radio airwaves.',
    styleGenres: 'His music combines bouncing Dallas sub-bass, melodic street hooks, Southern trap hi-hats, and authentic lyrical storytelling about survival and triumph.',
    highlights: 'His 2017 single "That\'s On Me" reached number one on the Billboard Mainstream R&B/Hip-Hop chart, surpassing hundreds of millions of streams. He was chosen as an opening act on Beyoncé and Jay-Z’s "On the Run II" tour in Texas.',
    popularSongs: ['That\'s On Me', 'Bacc At It Again (feat. Quavo & Gucci Mane)', 'Up One (feat. Lil Baby)', 'Restroom Skit', 'Ay Ya Ya Ya (feat. Ty Dolla $ign)'],
    interestingFacts: [
      'He was hand-picked to open for Beyoncé and Jay-Z on the Dallas stop of their historic "On the Run II" stadium tour.',
      'His breakout single "That\'s On Me" reached number one on US urban radio as an independently distributed track.',
      'He is a passionate community philanthropist in his native Oak Cliff neighborhood in Dallas.'
    ],
    discoverMore: 'Explore Yella Beezy’s Southern rap mixtapes and official music videos on YouTube and streaming platforms.'
  },

  // 48. 3Lau
  {
    id: '3lau',
    name: '3Lau',
    slug: '3lau',
    category_id: 'cat_electronic_dance',
    category_name: 'Electronic and Dance',
    category_slug: 'electronic-dance',
    genre: 'Progressive House / Electro House / Dance',
    origin: 'Syosset, New York, USA',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_producer', name: 'Producer', slug: 'producer' }
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'DJ 3Lau performing progressive house music set with hands raised',
    isFeatured: false,
    publishedDate: '2026-10-16T01:30:00.000Z',
    relatedArtists: ['Audien', 'Gareth Emery', 'Alesso', 'Nicky Romero'],
    intro: 'Justin David Blau, known by his stage name 3Lau (pronounced "Blau"), is an American DJ, electronic dance music producer, and technological innovator recognized for his euphoric progressive house records.',
    whoIs: 'Rising from an underground mashup wizard into a premier international festival DJ, 3Lau has headlined premier events worldwide while pioneering groundbreaking digital ownership solutions for musicians.',
    earlyJourney: 'Born in Long Island and raised in Nevada, Blau studied finance at Washington University in St. Louis. He began creating mashups in his dorm room during a trip to Sweden where he discovered European house music.',
    styleGenres: 'His sound centers on uplifting progressive house chords, emotive pop vocal features, soaring synth climaxes, and driving melodic electro beats.',
    highlights: 'His hits "How You Love Me" and "Is It Love" topped dance charts internationally. His debut studio album "Ultraviolet" reached number one on the iTunes Electronic charts, and he founded the groundbreaking music rights platform Royal.',
    popularSongs: ['How You Love Me', 'Is It Love', 'Touch', 'Tokyo', 'Star Crossed'],
    interestingFacts: [
      'His stage name "3Lau" is a stylized spelling of his German surname Blau, using the number 3 in place of the letter E.',
      'He donated all proceeds from his early mashup records to build schools for non-profit Pencils of Promise.',
      'He founded Royal, an innovative music platform that allows fans to own actual song royalties alongside artists.'
    ],
    discoverMore: 'Stream 3Lau’s uplifting progressive house catalog on Spotify and Apple Music.'
  },

  // 49. Alvvays
  {
    id: 'alvvays',
    name: 'Alvvays',
    slug: 'alvvays',
    category_id: 'cat_indie_music',
    category_name: 'Indie Music',
    category_slug: 'indie-music',
    genre: 'Indie Pop / Dream Pop / Jangle Pop',
    origin: 'Charlottetown, Prince Edward Island / Toronto, Canada',
    tags: [
      { id: 'tag_indierock', name: 'Indie Pop', slug: 'indie-pop' },
      { id: 'tag_band', name: 'Band', slug: 'band' }
    ],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Indie dream pop band Alvvays performing live with jangle guitars',
    isFeatured: true,
    publishedDate: '2026-10-16T03:00:00.000Z',
    relatedArtists: ['The Beths', 'Japanese Breakfast', 'Snail Mail', 'Beach House'],
    intro: 'Alvvays (pronounced "Always") is an acclaimed Canadian indie pop and dream pop band fronted by singer and guitarist Molly Rankin, celebrated for their sparkling jangle guitars and wistful, bittersweet songwriting.',
    whoIs: 'Formed in Charlottetown, Prince Edward Island, Alvvays has become one of the most revered indie bands of the 21st century, earning a Grammy Award nomination and widespread international critical adoration.',
    earlyJourney: 'Rankin, daughter of John Morris Rankin from Celtic folk collective The Rankin Family, grew up on Prince Edward Island writing songs with childhood neighbor Kerri MacLellan before forming Alvvays with guitarist Alec O\'Hanley.',
    styleGenres: 'Their music pairs shimmering jangle pop guitars, warm vintage synthesizers, and driving rhythm sections with Rankin’s crystalline, poignant vocals and witty lyrical observations.',
    highlights: 'Their self-titled 2014 debut produced the indie anthem "Archie, Marry Me". Their 2022 album "Blue Rev" won the Polaris Music Prize and earned a Grammy nomination for Best Alternative Music Performance for "Belinda Says".',
    popularSongs: ['Archie, Marry Me', 'In Undertow', 'Belinda Says', 'Dreams Tonite', 'Pharmacist'],
    interestingFacts: [
      'Lead singer Molly Rankin comes from Canadian folk royalty as the daughter of John Morris Rankin of The Rankin Family.',
      'They spell their name with two V\'s ("Alvvays") because another band had already trademarked "Always".',
      'Their third album "Blue Rev" was named the Best Album of 2022 by premier music publications including Stereogum.'
    ],
    discoverMore: 'Discover Alvvays’ shimmering dream pop records on vinyl and digital streaming services.'
  },

  // 50. SMO
  {
    id: 'smo',
    name: 'SMO',
    slug: 'smo',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Country Rap / Southern Hip-Hop / Hick-Hop',
    origin: 'Shelbyville, Tennessee, USA',
    tags: [
      { id: 'tag_rap', name: 'Country Rap', slug: 'country-rap' },
      { id: 'tag_hiphop', name: 'Southern Hip-Hop', slug: 'southern-hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Southern country rap artist Big Smo performing with live band and guitar',
    isFeatured: false,
    publishedDate: '2026-10-16T04:30:00.000Z',
    relatedArtists: ['Colt Ford', 'Upchurch', 'The Lacs', 'Jelly Roll'],
    intro: 'John Ryan Smith, known professionally as Big Smo or SMO, is an American country rapper, songwriter, and television personality who helped popularize the rural "hick-hop" Southern rap movement.',
    whoIs: 'Hailing from rural Tennessee, Big Smo connects country storytelling with thumping 808 hip-hop beats, starring in his own A&E reality television series while amassing millions of streams across the American heartland.',
    earlyJourney: 'Raised on his family’s multi-acre farm Kuntry Kin in Shelbyville, Tennessee, Smith began combining Southern rock riffs, country acoustic guitars, and hip-hop beats in the early 2000s.',
    styleGenres: 'His music merges gritty Southern baritone rap vocals with live country banjos, slide guitars, heavy drum kicks, and anthemic choruses about rural country life.',
    highlights: 'His 2014 Warner Bros. Records debut "Kuntry Livin\'" reached the Top 10 on the Billboard Top Country Albums and Rap Albums charts. He starred in the A&E docu-series "Big Smo", bringing rural hip-hop to television audiences.',
    popularSongs: ['My Kinda Folk', 'Workin\'', 'Kickin\' It In Mud', 'Country Boy Do', 'BBR (Black Back Roads)'],
    interestingFacts: [
      'He starred in his own self-titled A&E reality television series, "Big Smo", for two seasons.',
      'He operates his own working farm in Shelbyville, Tennessee, which served as the primary filming backdrop for his television show.',
      'He refers to his devoted nationwide fanbase as the "Kuntry Kin".'
    ],
    discoverMore: 'Stream SMO’s rural country rap records and watch his music videos across Apple Music, Spotify, and YouTube.'
  },

  // 51. MO
  {
    id: 'mo',
    name: 'MO',
    slug: 'mo',
    category_id: 'cat_pop',
    category_name: 'Pop',
    category_slug: 'pop',
    genre: 'Electropop / Indie Pop / Alternative Pop',
    origin: 'Ubberud, Denmark',
    tags: [
      { id: 'tag_pop', name: 'Pop', slug: 'pop' },
      { id: 'tag_electronic', name: 'Electropop', slug: 'electropop' }
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Danish electropop artist MØ performing on festival stage',
    isFeatured: true,
    publishedDate: '2026-10-16T06:00:00.000Z',
    relatedArtists: ['Major Lazer', 'Charli XCX', 'Tove Lo', 'Robyn'],
    intro: 'Karen Marie Aagaard Ørsted Andersen, known professionally as MØ (or MO), is an acclaimed Danish singer, songwriter, and producer whose rebellious electropop attitude and powerhouse vocals have produced some of the biggest global hits in streaming history.',
    whoIs: 'MØ achieved global superstardom as the co-writer and unmistakable vocal force behind Major Lazer and DJ Snake’s multi-billion streaming world smash "Lean On", one of the most successful independent songs in music history.',
    earlyJourney: 'Growing up in rural Denmark, she fell in love with punk music and the Spice Girls as a girl, performing in the feminist electro-punk duo MOR before forging her solo musical identity combining pop melodies with raw Scandinavian indie grit.',
    styleGenres: 'Her music features gritty synthesizer hooks, infectious dancehall and tropical beats, brassy electro-pop drops, and her signature raspy, emotionally charged vocal delivery.',
    highlights: 'Her collaborative mega-hit "Lean On" was crowned Spotify\'s most-streamed song of all time in 2015. Her solo albums "No Mythologies to Follow", "Forever Neverland", and "Motordrome" earned widespread critical acclaim.',
    popularSongs: ['Lean On (with Major Lazer & DJ Snake)', 'Cold Water (with Major Lazer & Justin Bieber)', 'Final Song', 'Kamikaze', 'Don\'t Leave (with Snakehips)'],
    interestingFacts: [
      'Her stage moniker "MØ" is the Danish word for "maiden" or "virgin", reflecting innocence and renewal.',
      'Her song "Lean On" became the first independent track in history to achieve over one billion Spotify streams.',
      'Before becoming a pop star, she performed in an aggressive underground Danish feminist punk duo.'
    ],
    discoverMore: 'Listen to MØ’s electrifying pop catalog and festival live performances on major streaming platforms.'
  },

  // 52. Big Gigantic
  {
    id: 'big_gigantic',
    name: 'Big Gigantic',
    slug: 'big-gigantic',
    category_id: 'cat_groups_bands',
    category_name: 'Music Groups and Bands',
    category_slug: 'music-groups-bands',
    genre: 'Electronic / Live Saxophone / Electro-Funk',
    origin: 'Boulder, Colorado, USA',
    tags: [
      { id: 'tag_electronic', name: 'Electronic', slug: 'electronic' },
      { id: 'tag_band', name: 'Band', slug: 'band' },
      { id: 'tag_soul', name: 'Funk', slug: 'funk' }
    ],
    image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Big Gigantic performing live electronic music with saxophone and live drum kit',
    isFeatured: false,
    publishedDate: '2026-10-16T07:30:00.000Z',
    relatedArtists: ['GRiZ', 'Gramatik', 'Pretty Lights', 'The Floozies'],
    intro: 'Big Gigantic is an American electronic instrumental duo from Boulder, Colorado, consisting of saxophonist and producer Dominic Lalli and drummer Jeremy Salken, celebrated for pioneering the live "livetronica" electro-funk movement.',
    whoIs: 'Merging live brass instrumentation and acoustic drum kits with booming electronic bass production, Big Gigantic has established a legendary legacy as festival headliners and hosts of their annual Rowdytown concert at Red Rocks Amphitheatre.',
    earlyJourney: 'Lalli, who holds a master\'s degree in jazz from the Manhattan School of Music, met drummer Salken after moving to Colorado. Together, they began jamming live over electronic loops, creating a bridge between jazz improvisation and dance music.',
    styleGenres: 'Their high-octane sound combines melodic saxophone riffs, live acoustic drum solos, funky jazz harmonies, and thunderous dubstep and trap sub-bass.',
    highlights: 'They have headlined major global festivals including Coachella, Bonnaroo, Lollapalooza, and Austin City Limits. Their annual multi-night festival "Rowdytown" at Colorado\'s Red Rocks Amphitheatre has sold out for over a decade straight.',
    popularSongs: ['The Little Things (feat. Angela McCluskey)', 'Good Times Roll (with GRiZ)', 'All of Me (feat. Logic & ROZES)', 'Get On Up', 'Friends (feat. Ashe)'],
    interestingFacts: [
      'Frontman Dominic Lalli holds a Master of Music degree in jazz performance from the prestigious Manhattan School of Music.',
      'Their annual Rowdytown concert at Red Rocks Amphitheatre was the first event in history to project 3D visual mapping onto the geological rock formations.',
      'Their non-profit foundation "A Big Gigantic Difference" has raised over one million dollars for community youth music programs.'
    ],
    discoverMore: 'Experience Big Gigantic’s live concert recordings and funk-infused electronic albums on all major streaming services.'
  },

  // 53. Sada Baby
  {
    id: 'sada_baby',
    name: 'Sada Baby',
    slug: 'sada-baby',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Detroit Rap / Hip-Hop / Trap',
    origin: 'Detroit, Michigan, USA',
    tags: [
      { id: 'tag_rap', name: 'Detroit Rap', slug: 'detroit-rap' },
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Detroit rapper Sada Baby performing live with charismatic energy',
    isFeatured: false,
    publishedDate: '2026-10-16T09:00:00.000Z',
    relatedArtists: ['Babyface Ray', 'Tee Grizzley', '42 Dugg', 'Veeze'],
    intro: 'Casada Sorrell, known professionally as Sada Baby, is an American rapper from Detroit, Michigan, renowned for his eccentric vocal delivery, dance moves, and foundational role in the modern Detroit hip-hop renaissance.',
    whoIs: 'One of the most animated and recognizable personalities in modern rap, Sada Baby took Detroit street rap to international virality with his platinum-certified smash "Whole Lotta Choppas".',
    earlyJourney: 'Raised on the east side of Detroit, Sorrell grew up singing in church choirs and playing basketball before finding his lyrical voice in his twenties, releasing acclaimed local mixtapes that highlighted the city’s distinct bounce.',
    styleGenres: 'His sound features Detroit\'s trademark uptempo 808 percussion, off-beat rhythmic flows, raspy growls, sudden comedic tangents, and infectious charisma.',
    highlights: 'His viral hit "Whole Lotta Choppas" exploded across digital culture in 2020, prompting an official remix by Nicki Minaj that vaulted the track onto the Billboard Hot 100. His mixtape "Skuba Sada 2" earned widespread critical acclaim.',
    popularSongs: ['Whole Lotta Choppas (Remix feat. Nicki Minaj)', 'Bloxk Party', 'Pressin (feat. King Von)', 'Act A Fool (feat. Lil Yachty)', 'Karamelo'],
    interestingFacts: [
      'His viral dance moves in his low-budget official music videos helped power his earliest hits to multi-million view status.',
      'He was a standout student-athlete playing collegiate basketball before turning his full focus to rap.',
      'He collaborated with rap queen Nicki Minaj on the official platinum remix of "Whole Lotta Choppas".'
    ],
    discoverMore: 'Listen to Sada Baby’s extensive collection of Detroit rap mixtapes on YouTube, Spotify, and Apple Music.'
  },

  // 54. Marianna Satti
  {
    id: 'marianna_satti',
    name: 'Marianna Satti',
    slug: 'marianna-satti',
    category_id: 'cat_world_music',
    category_name: 'World Music',
    category_slug: 'world-music',
    genre: 'Balkan Folk / Mediterranean Pop / Urban Trap',
    origin: 'Athens, Greece',
    tags: [
      { id: 'tag_soul', name: 'Balkan Folk', slug: 'balkan-folk' },
      { id: 'tag_pop', name: 'Urban Pop', slug: 'urban-pop' }
    ],
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Greek world pop artist Marina Satti performing with Mediterranean instruments',
    isFeatured: true,
    publishedDate: '2026-10-16T10:30:00.000Z',
    relatedArtists: ['Rosalía', 'Stromae', 'Bambie Thug', 'Baby Lasagna'],
    intro: 'Marina Satti (also known as Marianna Satti) is a visionary Greek singer, songwriter, and music producer whose boundary-pushing blend of traditional Greek and Balkan polyphony with urban trap beats has made her a global cultural icon.',
    whoIs: 'Born to a Greek mother from Crete and a Sudanese Arab father, Satti embodies the rich intersection of Mediterranean and Middle Eastern cultures, celebrated for her vocal mastery and innovative music videos.',
    earlyJourney: 'Satti studied classical piano and architecture in Athens before earning a scholarship to Berklee College of Music in Boston, where she studied contemporary improvisation and world music traditions.',
    styleGenres: 'Her music weaves intricate female Balkan polyphonic harmonies, traditional clarinet and daouli percussion, Middle Eastern maqam scales, and booming modern urban 808 trap rhythms.',
    highlights: 'Her breakout single "Mantissa" garnered tens of millions of views. In 2024, she represented Greece at the Eurovision Song Contest with the viral hit "ZARI", followed by her chart-topping conceptual album "P.O.P.".',
    popularSongs: ['ZARI', 'Mantissa', 'LALALALA', 'MIXTAPE', 'TUCUTUM'],
    interestingFacts: [
      'She founded the acclaimed all-female polyphonic choral ensemble chórεs, uniting over one hundred women in traditional singing.',
      'She studied at the world-renowned Berklee College of Music on a prestigious full scholarship.',
      'Her Eurovision entry "ZARI" featured the first Greek-language song in a decade to go viral across international charts.'
    ],
    discoverMore: 'Explore the fascinating Mediterranean-urban soundscapes of Marina Satti across YouTube, Apple Music, and Spotify.'
  },

  // 55. Sam Dew
  {
    id: 'sam_dew',
    name: 'Sam Dew',
    slug: 'sam-dew',
    category_id: 'cat_pop',
    category_name: 'Pop',
    category_slug: 'pop',
    genre: 'Alternative R&B / Soul / Pop Songwriter',
    origin: 'Chicago, Illinois, USA',
    tags: [
      { id: 'tag_soul', name: 'R&B & Soul', slug: 'rnb-soul' },
      { id: 'tag_pop', name: 'Songwriter', slug: 'songwriter' }
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Soulful alternative R&B artist Sam Dew singing into microphone',
    isFeatured: false,
    publishedDate: '2026-10-16T12:00:00.000Z',
    relatedArtists: ['Jack Antonoff', 'Kendrick Lamar', 'Taylor Swift', 'Leon Bridges'],
    intro: 'Sam Dew is a Grammy-winning American singer, songwriter, and producer from Chicago, celebrated as one of the most prolific behind-the-scenes pop pens and a master of atmospheric alternative R&B.',
    whoIs: 'Dew is a master craftsman whose songwriting credits include modern pop masterpieces like Taylor Swift and Zayn’s "I Don\'t Wanna Live Forever", Kendrick Lamar’s "Savior", and collaborations with Rihanna, Mary J. Blige, and Wale.',
    earlyJourney: 'Born on the south side of Chicago, Dew sang in church choirs and played in local bands before moving to Los Angeles, catching the ear of producer Dave Sitek of TV on the Radio.',
    styleGenres: 'His music combines lush atmospheric synthesizers with vintage acoustic soul chords, complex vocal layering, and poetic narrative introspection.',
    highlights: 'He co-wrote the global number one smash "I Don\'t Wanna Live Forever" for Fifty Shades Darker, as well as several pivotal tracks on Kendrick Lamar’s Pulitzer Prize-winning album "Mr. Morale & The Big Steppers". He also fronts the band Red Hearse alongside Jack Antonoff.',
    popularSongs: ['I Don\'t Wanna Live Forever (Writer - Zayn & Taylor Swift)', 'Savior (Writer - Kendrick Lamar)', 'MOONLIT ROOM', 'NTWFL', 'Half On A Baby (with Red Hearse)'],
    interestingFacts: [
      'He formed the indie supergroup Red Hearse together with pop super-producer Jack Antonoff and hip-hop engineer Sounwave.',
      'He co-wrote the Grammy-nominated soundtrack single "I Don\'t Wanna Live Forever" performed by Taylor Swift and Zayn.',
      'His solo debut album "MOONLIT FOOLS" was released on RCA Records to rave reviews.'
    ],
    discoverMore: 'Stream Sam Dew’s solo music and discover his award-winning songwriting catalog across major audio platforms.'
  },

  // 56. BabyTron
  {
    id: 'babytron',
    name: 'BabyTron',
    slug: 'babytron',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Michigan Rap / Detroit Trap / Comedy Rap',
    origin: 'Ypsilanti, Michigan, USA',
    tags: [
      { id: 'tag_rap', name: 'Michigan Rap', slug: 'michigan-rap' },
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Michigan rapper BabyTron performing on stage in front of energetic crowd',
    isFeatured: true,
    publishedDate: '2026-10-16T13:30:00.000Z',
    relatedArtists: ['Sada Baby', 'Tee Grizzley', 'BLP KOSHER', 'Certi'],
    intro: 'James Johnson, known by his stage moniker BabyTron, is an American rapper from Ypsilanti, Michigan, revered for his superhuman breath control, rapid-fire punchlines, and deep encyclopedia of pop culture references.',
    whoIs: 'A member of the hip-hop group ShittyBoyz and an XXL Freshman, BabyTron became an internet rap legend by effortlessly rapping over dozens of beat changes in a single song without missing a syllable.',
    earlyJourney: 'Growing up in Ypsilanti, Michigan, Johnson formed the rap trio ShittyBoyz in high school with friends TrDee and StanWill, developing a comedic, punchline-heavy scam-rap style over vintage synth beats.',
    styleGenres: 'His signature sound features punchy, uptempo Detroit and Flint piano loops, off-beat flows, clever sports and retro gaming puns, and dizzying marathon rhyming schemes.',
    highlights: 'Selected to the 2022 XXL Freshman Class, BabyTron’s albums "Bin Reaper 2" and "Bin Reaper 3: Old Testament" charted on the Billboard 200, solidifying his status as one of Michigan\'s premier lyricists.',
    popularSongs: ['King of the Galaxy', 'Prince of the Mitten', 'Sleeve Nash', 'Jesus Shuttlesworth', 'Down, Up!'],
    interestingFacts: [
      'In his viral hit "Prince of the Mitten", he raps continuously over nineteen different classic Michigan rap beats in under four minutes.',
      'His father, Christopher Johnson, was a musician in the Motown rap group Murder Ypsilanti.',
      'He was selected as part of the esteemed 2022 XXL Freshman Class.'
    ],
    discoverMore: 'Listen to BabyTron’s extensive Bin Reaper album series and watch his energetic music videos across YouTube, Spotify, and Apple Music.'
  },

  // 57. CASISDEAD
  {
    id: 'casisdead',
    name: 'CASISDEAD',
    slug: 'casisdead',
    category_id: 'cat_hiphop_rap',
    category_name: 'Hip-Hop and Rap',
    category_slug: 'hip-hop-rap',
    genre: 'Synthwave / UK Rap / Grime / 80s Electro-Rap',
    origin: 'Tottenham, London, UK',
    tags: [
      { id: 'tag_rap', name: 'UK Rap', slug: 'uk-rap' },
      { id: 'tag_electronic', name: 'Synthwave', slug: 'synthwave' }
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'CASISDEAD masked UK rap artist performing in neon retro-futuristic stage set',
    isFeatured: true,
    publishedDate: '2026-10-16T15:00:00.000Z',
    relatedArtists: ['Kano', 'Skepta', 'Giggs', 'Slowthai'],
    intro: 'CASISDEAD is an enigmatic British rapper, producer, and visual artist from Tottenham, London, famous for performing in elaborate silicone prosthetic masks and creating a dystopian retro-futuristic 1980s synth-rap universe.',
    whoIs: 'One of the most fiercely independent and conceptually brilliant artists in British hip-hop, CASISDEAD won the BRIT Award for Best Hip Hop/Grime/Rap Act in 2024, capping years of underground acclaim.',
    earlyJourney: 'Initially releasing music in the mid-2000s grime era under the name Castro Saint, he withdrew from the music industry before reemerging as the masked, anonymous antihero CASISDEAD in 2012.',
    styleGenres: 'His sound is an extraordinary collision of 1980s John Carpenter synthesizers, Blade Runner synthwave pads, Italo disco basslines, and gritty London street narratives delivered in a deadpan, bone-chilling flow.',
    highlights: 'His long-awaited 2023 concept album "Famous Last Words", released on XL Recordings, debuted in the UK Top 10 and earned him the prestigious BRIT Award in 2024. He directs his own cinematic sci-fi music videos.',
    popularSongs: ['Venom', 'Boys Will Be Boys', 'Pat Earrings', 'Traction Control', 'Park Assist'],
    interestingFacts: [
      'He performs in hyper-realistic silicone prosthetic masks, completely concealing his true identity from the public and media.',
      'He won the Best Hip Hop/Grime/Rap Act award at the 2024 BRIT Awards, appearing on stage in full mask and character.',
      'His critically acclaimed concept album "Famous Last Words" was released through the legendary independent label XL Recordings.'
    ],
    discoverMore: 'Immerse yourself in CASISDEAD’s retro-futuristic albums and award-winning sci-fi visual shorts on XL Recordings and streaming platforms.'
  }
];
