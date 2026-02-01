export type QuestionType = "multiple-choice" | "written" | "voice";
export type QuestionCategory =
  | "hoe"
  | "wat"
  | "waar"
  | "wanneer"
  | "wie"
  | "welke"
  | "waarom"
  | "sentence-completion"
  | "verbs"
  | "prepositional-verbs"
  | "vocabulary";

export interface Question {
  id: number;
  type: QuestionType;
  category: QuestionCategory;
  question: string;
  questionDutch?: string; // Telaffuz için
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  tip?: string;
  exampleAnswer?: string;
}

export const questionCategories = {
  hoe: {
    name: "HOE (Nasıl)",
    description: "Saat, sıklık ve miktar soruları",
    color: "from-blue-500 to-blue-600",
    icon: "⏰",
    tips: [
      "HOE LAAT → Saat sorar (om ... uur)",
      "HOE VAAK → Sıklık sorar (elke dag, soms)",
      "HOEVEEL → Miktar sorar (twee, vijf)",
    ],
  },
  wat: {
    name: "WAT (Ne)",
    description: "Nesne, aktivite ve tercih soruları",
    color: "from-purple-500 to-purple-600",
    icon: "❓",
    tips: [
      "WAT → Ne sorar",
      "WAT VOOR → Tür/çeşit sorar (kantoor, appartement)",
      "WAT EET U → Ne yersiniz?",
    ],
  },
  waar: {
    name: "WAAR (Nerede)",
    description: "Yer ve konum soruları",
    color: "from-emerald-500 to-emerald-600",
    icon: "📍",
    tips: ["WAAR → Nerede sorar", "Cevap: in Nederland, in Amsterdam, thuis"],
  },
  wanneer: {
    name: "WANNEER (Ne zaman)",
    description: "Zaman, tarih ve gün soruları",
    color: "from-orange-500 to-orange-600",
    icon: "📅",
    tips: [
      "WANNEER → Gün/ay/yıl sorar",
      "HOE LAAT ile karıştırma!",
      "Cevap: maandag, vandaag, volgend jaar",
    ],
  },
  wie: {
    name: "WIE (Kim)",
    description: "Kişi soruları",
    color: "from-pink-500 to-rose-500",
    icon: "👤",
    tips: ["WIE → Kim sorar", "BIJ WIE → Kiminle sorar"],
  },
  welke: {
    name: "WELKE/WELK (Hangi)",
    description: "Seçim ve tercih soruları",
    color: "from-indigo-500 to-indigo-600",
    icon: "🎯",
    tips: ["WELKE → Hangi sorar", "WELKE TALEN → Hangi diller?"],
  },
  waarom: {
    name: "WAAROM (Neden)",
    description: "Sebep soruları",
    color: "from-red-500 to-red-600",
    icon: "💭",
    tips: ["WAAROM → Neden sorar", "Cevap: Omdat ... ile başlar"],
  },
  "sentence-completion": {
    name: "Cümle Tamamlama",
    description: "Eksik cümleleri tamamlama",
    color: "from-teal-500 to-cyan-500",
    icon: "✍️",
    tips: ["Cümlenin mantığını anlayın", "Doğru fiil formunu kullanın"],
  },
  verbs: {
    name: "Fiiller",
    description: "Fiil çekimleri ve kullanımları",
    color: "from-amber-500 to-yellow-500",
    icon: "📚",
    tips: [
      "Scheidbare werkwoorden → fiil ayrılır",
      "Perfectum → hebben/zijn + ge- + fiil",
    ],
  },
  "prepositional-verbs": {
    name: "Sabit Edatlı Fiiller",
    description:
      "OP, VOOR, AAN, VAN, NAAR, MET, OVER, IN ile kullanılan fiiller",
    color: "from-cyan-500 to-blue-500",
    icon: "🔗",
    tips: [
      "OP ile: wachten op, letten op, reageren op",
      "VOOR ile: zorgen voor, bang zijn voor",
      "AAN ile: denken aan, werken aan",
      "VAN ile: houden van, genieten van",
      "NAAR ile: luisteren naar, kijken naar",
      "MET ile: beginnen met, praten met",
      "OVER ile: praten over, denken over",
      "IN ile: geloven in, wonen in",
    ],
  },
  vocabulary: {
    name: "Basit Kelimeler",
    description: "Sabah, öğle, akşam, saatler ve basit fiiller",
    color: "from-violet-500 to-purple-500",
    icon: "📖",
    tips: [
      "Sabah = ochtend",
      "Öğle = middag",
      "Akşam = avond",
      "Gelmek = komen",
      "Gitmek = gaan",
      "Yemek = eten",
      "İçmek = drinken",
      "Uyumak = slapen",
      "Kalkmak = opstaan",
    ],
  },
};

export const questions: Question[] = [
  // HOE Soruları
  {
    id: 1,
    type: "voice",
    category: "hoe",
    question: "Hoe gaat het met u?",
    questionDutch: "Hu qaat het met ü",
    correctAnswer: "Het gaat goed met mij.",
    exampleAnswer: "Het gaat goed met mij.",
    explanation: "HOE gaat het → Nasılsınız? sorusu",
    tip: "HOE soruları 'nasıl' anlamına gelir. Saat, sıklık veya miktar sorabilir.",
  },
  {
    id: 2,
    type: "multiple-choice",
    category: "hoe",
    question: "Hoe laat begint u met werken?",
    questionDutch: "Hu laat bihint ü met verken",
    options: ["Om negen uur", "Maandag", "In de ochtend", "Op kantoor"],
    correctAnswer: "Om negen uur",
    explanation: "HOE LAAT → Saat sorar. Cevap 'om ... uur' formatında olmalı.",
    tip: "⚠️ TUZAK: 'Maandag' veya 'In de ochtend' yanlış! HOE LAAT saat sorar, gün değil.",
  },
  {
    id: 3,
    type: "written",
    category: "hoe",
    question: "Hoe vaak kijkt u tv?",
    questionDutch: "Hu vaak kiykt ü tv",
    correctAnswer: "Ik kijk elke dag tv.",
    exampleAnswer: "Ik kijk elke dag tv. / Ik kijk soms tv.",
    explanation:
      "HOE VAAK → Ne sıklıkla? Sıklık zarfları kullanılır: elke dag, vaak, soms, nooit",
    tip: "Sıklık zarfları: elke dag (her gün), vaak (sık), soms (bazen), nooit (asla)",
  },
  {
    id: 4,
    type: "multiple-choice",
    category: "hoe",
    question: "Hoeveel talen spreekt u?",
    questionDutch: "Huveel talen spreekt ü",
    options: [
      "Ik spreek Nederlands en Engels",
      "Ik spreek goed Nederlands",
      "Ik leer Nederlands",
      "Ik vind Nederlands leuk",
    ],
    correctAnswer: "Ik spreek Nederlands en Engels",
    explanation:
      "HOEVEEL → Kaç tane? Miktar sorar. Cevap sayı veya liste içermeli.",
    tip: "HOEVEEL → miktar sorar, HOE → nasıl sorar. Karıştırma!",
  },

  // WAT Soruları
  {
    id: 5,
    type: "voice",
    category: "wat",
    question: "Wat doet u graag in uw vrije tijd?",
    questionDutch: "Vat duut ü qraaq in üv vriye tayt",
    correctAnswer: "Ik lees graag.",
    exampleAnswer: "Ik lees graag. / Ik kijk tv. / Ik wandel.",
    explanation: "WAT doet u graag → Ne yapmayı seversiniz?",
    tip: "WAT soruları 'ne' anlamına gelir. Aktivite, nesne veya tercih sorabilir.",
  },
  {
    id: 6,
    type: "multiple-choice",
    category: "wat",
    question: "Wat voor werk doet u?",
    questionDutch: "Vat foor verq duut ü",
    options: [
      "Ik werk op kantoor",
      "Om negen uur",
      "Maandag",
      "Vijf dagen per week",
    ],
    correctAnswer: "Ik werk op kantoor",
    explanation:
      "WAT VOOR → Nasıl bir? Tür/çeşit sorar. Meslek, ev, kıyafet türü sorabilir.",
    tip: "⚠️ TUZAK: 'Om negen uur' veya 'Maandag' yanlış! WAT VOOR tür sorar, saat/gün değil.",
  },
  {
    id: 7,
    type: "written",
    category: "wat",
    question: "Wat eet u graag?",
    questionDutch: "Vat eeyt ü qraaq",
    correctAnswer: "Ik eet graag pasta.",
    exampleAnswer: "Ik eet graag pasta. / Ik eet graag salades.",
    explanation: "WAT eet u graag → Ne yemeyi seversiniz?",
    tip: "GRAAG kelimesi 'sevmek' anlamına gelir. 'Ik eet graag ...' formatını kullanın.",
  },
  {
    id: 8,
    type: "voice",
    category: "wat",
    question: "Wat vindt u van Nederland?",
    questionDutch: "Vat vint ü fan Nederland",
    correctAnswer: "Ik vind Nederland mooi.",
    exampleAnswer: "Ik vind Nederland mooi. / Ik vind Nederland leuk.",
    explanation: "WAT vindt u van → Ne düşünüyorsunuz?",
    tip: "VINDEN → düşünmek/bulmak. 'Ik vind ... mooi/leuk/moeilijk' formatı kullanılır.",
  },

  // WAAR Soruları
  {
    id: 9,
    type: "multiple-choice",
    category: "waar",
    question: "Waar woont u?",
    questionDutch: "Vaar voont ü",
    options: [
      "Ik woon in Amsterdam",
      "Ik ben in 1990 geboren",
      "Volgend jaar",
      "Met mijn partner",
    ],
    correctAnswer: "Ik woon in Amsterdam",
    explanation:
      "WAAR → Nerede? Yer sorar. Cevap yer içermeli: in Amsterdam, in Nederland, thuis",
    tip: "WAAR → yer sorar. 'in ...' ile başlayan cevaplar verin.",
  },
  {
    id: 10,
    type: "written",
    category: "waar",
    question: "Waar heeft u Nederlands geleerd?",
    questionDutch: "Vaar heeft ü Nederlands qileerd",
    correctAnswer: "Ik heb Nederlands online geleerd.",
    exampleAnswer:
      "Ik heb Nederlands online geleerd. / Ik heb Nederlands op school geleerd.",
    explanation: "WAAR heeft u geleerd → Nerede öğrendiniz?",
    tip: "GELEERD → öğrenmiş. Perfectum kullanımı: 'Ik heb ... geleerd'",
  },

  // WANNEER Soruları
  {
    id: 11,
    type: "multiple-choice",
    category: "wanneer",
    question: "Wanneer gaat u naar Nederland?",
    questionDutch: "Vanneer qaat ü naar Nederland",
    options: ["Volgend jaar", "Om negen uur", "Met de bus", "In Amsterdam"],
    correctAnswer: "Volgend jaar",
    explanation:
      "WANNEER → Ne zaman? Gün, ay, yıl sorar. HOE LAAT ile karıştırma!",
    tip: "⚠️ ÖNEMLİ: WANNEER → gün/ay/yıl (maandag, volgend jaar), HOE LAAT → saat (om 9 uur)",
  },
  {
    id: 12,
    type: "voice",
    category: "wanneer",
    question: "Wanneer bent u geboren?",
    questionDutch: "Vanneer bent ü qeboren",
    correctAnswer: "Ik ben in 1990 geboren.",
    exampleAnswer: "Ik ben in 1990 geboren. / Ik ben in augustus geboren.",
    explanation: "WANNEER bent u geboren → Ne zaman doğdunuz?",
    tip: "GEBOREN → doğmuş. 'Ik ben in ... geboren' formatı kullanılır.",
  },

  // WIE Soruları
  {
    id: 13,
    type: "multiple-choice",
    category: "wie",
    question: "Wie helpt u met Nederlands leren?",
    questionDutch: "Vi helpt ü met Nederlands leren",
    options: [
      "Mijn docent helpt mij",
      "Ik leer Nederlands",
      "Nederlands is moeilijk",
      "Ik spreek Nederlands",
    ],
    correctAnswer: "Mijn docent helpt mij",
    explanation: "WIE → Kim? Kişi sorar.",
    tip: "WIE → kişi sorar. 'Mijn ...' ile başlayan cevaplar verin.",
  },
  {
    id: 14,
    type: "written",
    category: "wie",
    question: "Bij wie gaat u wonen in Nederland?",
    questionDutch: "Bay vi qaat ü voonen in Nederland",
    correctAnswer: "Ik ga bij mijn partner wonen.",
    exampleAnswer:
      "Ik ga bij mijn partner wonen. / Ik ga bij mijn familie wonen.",
    explanation: "BIJ WIE → Kiminle? Kimin yanında?",
    tip: "BIJ → yanında/ile. 'Ik ga bij ... wonen' formatı kullanılır.",
  },

  // WELKE Soruları
  {
    id: 15,
    type: "voice",
    category: "welke",
    question: "Welke talen spreekt u?",
    questionDutch: "Velke talen spreekt ü",
    correctAnswer: "Ik spreek Turks en Engels.",
    exampleAnswer:
      "Ik spreek Turks en Engels. / Ik spreek Nederlands en Engels.",
    explanation: "WELKE → Hangi? Seçim sorar.",
    tip: "WELKE → hangi sorar. Liste veya seçim içeren cevaplar verin.",
  },
  {
    id: 16,
    type: "multiple-choice",
    category: "welke",
    question: "Welke muziek luistert u graag?",
    questionDutch: "Velke müğzik lüystert ü qraaq",
    options: [
      "Ik luister graag naar popmuziek",
      "Ik luister naar de radio",
      "Ik vind muziek mooi",
      "Muziek is leuk",
    ],
    correctAnswer: "Ik luister graag naar popmuziek",
    explanation: "WELKE muziek → Hangi müzik?",
    tip: "LUISTEREN NAAR → dinlemek. 'Ik luister graag naar ...' formatı kullanılır.",
  },

  // WAAROM Soruları
  {
    id: 17,
    type: "written",
    category: "waarom",
    question: "Waarom wilt u naar Nederland?",
    questionDutch: "Vaarom vilt ü naar Nederland",
    correctAnswer: "Omdat ik daar wil wonen.",
    exampleAnswer: "Omdat ik daar wil wonen. / Omdat mijn partner daar woont.",
    explanation: "WAAROM → Neden? Sebep sorar. Cevap 'Omdat ...' ile başlar.",
    tip: "WAAROM sorularına cevap verirken 'Omdat ...' ile başlayın.",
  },

  // Cümle Tamamlama
  {
    id: 18,
    type: "written",
    category: "sentence-completion",
    question: "Naima gaat naar de markt. Ze koopt ...",
    correctAnswer: "groente en fruit",
    exampleAnswer: "groente en fruit",
    explanation:
      "Cümle mantığını takip edin. Markt → pazar, koopt → satın alır",
    tip: "Markt = pazar. Pazardan ne alınır? Groente (sebze) en fruit (meyve)",
  },
  {
    id: 19,
    type: "written",
    category: "sentence-completion",
    question: "Carly is moe van het werk. Ze wil ...",
    correctAnswer: "rusten",
    exampleAnswer: "rusten",
    explanation: "Moe = yorgun. Yorgun insan ne yapar? Rusten = dinlenmek",
    tip: "MOE → yorgun, RUSTEN → dinlenmek",
  },
  {
    id: 20,
    type: "written",
    category: "sentence-completion",
    question: "Elisa maakt een examen. Ze vindt dat ...",
    correctAnswer: "het moeilijk is",
    exampleAnswer: "het moeilijk is",
    explanation: "Examen = sınav. Sınav genelde zordur. Moeilijk = zor",
    tip: "EXAMEN → sınav, MOEILIJK → zor",
  },
  {
    id: 21,
    type: "written",
    category: "sentence-completion",
    question: "Mike gaat vaak sporten. Hij vindt sporten ...",
    correctAnswer: "leuk",
    exampleAnswer: "leuk",
    explanation:
      "Vaak sporten → sık spor yapmak. Sık yapılan şey sevilir. Leuk = eğlenceli/güzel",
    tip: "VAK → sık, LEUK → eğlenceli/güzel",
  },
  {
    id: 22,
    type: "written",
    category: "sentence-completion",
    question: "Luca moet huilen. Ze heeft ...",
    correctAnswer: "pijn",
    exampleAnswer: "pijn",
    explanation:
      "Huilen = ağlamak. Ağlamanın sebebi genelde acıdır. Pijn = acı",
    tip: "HUIlen → ağlamak, PIJN → acı",
  },

  // Fiiller
  {
    id: 23,
    type: "multiple-choice",
    category: "verbs",
    question: "Hoe zeg je 'varmak' in het Nederlands? (Aankomen)",
    options: [
      "Ik kom morgen aan",
      "Ik kom morgen",
      "Ik ga morgen",
      "Ik ben morgen",
    ],
    correctAnswer: "Ik kom morgen aan",
    explanation:
      "AANKOMEN → varmak. Scheidbare werkwoord (ayrılabilir fiil). 'Aan' cümlenin sonuna gider.",
    tip: "Scheidbare werkwoorden: fiil ayrılır. 'Ik kom morgen AAN' (aan sonda)",
  },
  {
    id: 24,
    type: "multiple-choice",
    category: "verbs",
    question: "Perfectum: 'Ik heb gisteren ...' (opstaan)",
    options: ["opgestaan", "opstaan", "staan", "gestaan"],
    correctAnswer: "opgestaan",
    explanation:
      "OPSTAAN → kalkmak. Perfectum: hebben/zijn + ge- + fiil. Scheidbare werkwoord olduğu için 'ge' ortada: op-ge-staan",
    tip: "Scheidbare werkwoorden'de perfectum: ge ortada olur (op-ge-staan)",
  },
  {
    id: 25,
    type: "written",
    category: "verbs",
    question: "Vul aan: Ik ... mijn moeder op. (opbellen - Perfectum)",
    correctAnswer: "heb opgebeld",
    exampleAnswer: "heb opgebeld",
    explanation: "OPBELLEN → telefon etmek. Perfectum: Ik heb opgebeld",
    tip: "OPBELLEN → telefon etmek. Perfectum: heb opgebeld",
  },

  // Sabit Edatlı Fiiller
  {
    id: 26,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik wacht ... de bus.",
    options: ["op", "voor", "aan", "van"],
    correctAnswer: "op",
    explanation:
      "WACHTEN OP → beklemek. 'Ik wacht op de bus' = Otobüsü bekliyorum",
    tip: "OP ile kullanılan fiiller: wachten op (beklemek), letten op (dikkat etmek), reageren op (cevap vermek)",
  },
  {
    id: 27,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik zorg ... mijn moeder.",
    options: ["op", "voor", "aan", "van"],
    correctAnswer: "voor",
    explanation:
      "ZORGEN VOOR → bakmak, ilgilenmek. 'Ik zorg voor mijn moeder' = Anneme bakıyorum",
    tip: "VOOR ile kullanılan fiiller: zorgen voor (bakmak), bang zijn voor (korkmak), betalen voor (ödeme yapmak)",
  },
  {
    id: 28,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik denk ... vakantie.",
    options: ["op", "voor", "aan", "van"],
    correctAnswer: "aan",
    explanation:
      "DENKEN AAN → düşünmek. 'Ik denk aan vakantie' = Tatili düşünüyorum",
    tip: "AAN ile kullanılan fiiller: denken aan (düşünmek), werken aan (üzerinde çalışmak), wennen aan (alışmak)",
  },
  {
    id: 29,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik houd ... koffie.",
    options: ["op", "voor", "aan", "van"],
    correctAnswer: "van",
    explanation:
      "HOUDEN VAN → sevmek. 'Ik houd van koffie' = Kahveyi seviyorum",
    tip: "VAN ile kullanılan fiiller: houden van (sevmek), genieten van (zevk almak), dromen van (hayal kurmak)",
  },
  {
    id: 30,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik luister ... muziek.",
    options: ["op", "voor", "aan", "naar"],
    correctAnswer: "naar",
    explanation:
      "LUISTEREN NAAR → dinlemek. 'Ik luister naar muziek' = Müzik dinliyorum",
    tip: "NAAR ile kullanılan fiiller: luisteren naar (dinlemek), kijken naar (bakmak/izlemek), zoeken naar (aramak)",
  },
  {
    id: 31,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik begin ... koken.",
    options: ["op", "met", "aan", "van"],
    correctAnswer: "met",
    explanation:
      "BEGINNEN MET → başlamak. 'Ik begin met koken' = Yemek yapmaya başlıyorum",
    tip: "MET ile kullanılan fiiller: beginnen met (başlamak), stoppen met (bırakmak), praten met (konuşmak)",
  },
  {
    id: 32,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik praat ... mijn werk.",
    options: ["op", "voor", "over", "van"],
    correctAnswer: "over",
    explanation:
      "PRATEN OVER → hakkında konuşmak. 'Ik praat over mijn werk' = İşim hakkında konuşuyorum",
    tip: "OVER ile kullanılan fiiller: praten over (hakkında konuşmak), denken over (üzerine düşünmek), klagen over (şikayet etmek)",
  },
  {
    id: 33,
    type: "multiple-choice",
    category: "prepositional-verbs",
    question: "Vul aan: Ik geloof ... mezelf.",
    options: ["op", "voor", "aan", "in"],
    correctAnswer: "in",
    explanation:
      "GELOVEN IN → inanmak. 'Ik geloof in mezelf' = Kendime inanıyorum",
    tip: "IN ile kullanılan fiiller: geloven in (inanmak), wonen in (yaşamak), zitten in (içinde olmak)",
  },
  {
    id: 34,
    type: "written",
    category: "prepositional-verbs",
    question: "Vul aan: Zij ... op de kinderen. (letten op - bakmak)",
    correctAnswer: "let op",
    exampleAnswer: "let op",
    explanation:
      "LETTEN OP → dikkat etmek, bakmak. 'Zij let op de kinderen' = Çocuklara bakıyor",
    tip: "LETTEN OP → dikkat etmek, göz kulak olmak",
  },
  {
    id: 35,
    type: "written",
    category: "prepositional-verbs",
    question: "Vul aan: Ik ben bang ... honden. (korkmak)",
    correctAnswer: "voor",
    exampleAnswer: "voor",
    explanation:
      "BANG ZIJN VOOR → korkmak. 'Ik ben bang voor honden' = Köpeklerden korkarım",
    tip: "BANG ZIJN VOOR → korkmak",
  },

  // Basit Kelimeler - Vocabulary
  {
    id: 36,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Sabah' kelimesinin Hollandaca karşılığı nedir?",
    options: ["ochtend", "middag", "avond", "nacht"],
    correctAnswer: "ochtend",
    explanation:
      "SABAH = OCHTEND. 'Ik sta 's ochtends vroeg op' = Sabah erken kalkarım",
    tip: "Ochtend = sabah, Middag = öğle, Avond = akşam, Nacht = gece",
  },
  {
    id: 37,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Öğle' kelimesinin Hollandaca karşılığı nedir?",
    options: ["ochtend", "middag", "avond", "nacht"],
    correctAnswer: "middag",
    explanation: "ÖĞLE = MIDDAG. 'Ik eet 's middags' = Öğlen yemek yerim",
    tip: "Middag = öğle, öğlen",
  },
  {
    id: 38,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Akşam' kelimesinin Hollandaca karşılığı nedir?",
    options: ["ochtend", "middag", "avond", "nacht"],
    correctAnswer: "avond",
    explanation:
      "AKŞAM = AVOND. 'Ik ga 's avonds naar bed' = Akşam yatağa giderim",
    tip: "Avond = akşam",
  },
  {
    id: 39,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Gelmek' fiilinin Hollandaca karşılığı nedir?",
    options: ["gaan", "komen", "eten", "drinken"],
    correctAnswer: "komen",
    explanation: "GELMEK = KOMEN. 'Ik kom morgen' = Yarın geliyorum",
    tip: "KOMEN = gelmek, GAAN = gitmek",
  },
  {
    id: 40,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Gitmek' fiilinin Hollandaca karşılığı nedir?",
    options: ["gaan", "komen", "eten", "drinken"],
    correctAnswer: "gaan",
    explanation: "GİTMEK = GAAN. 'Ik ga naar school' = Okula gidiyorum",
    tip: "GAAN = gitmek",
  },
  {
    id: 41,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Yemek' fiilinin Hollandaca karşılığı nedir?",
    options: ["gaan", "komen", "eten", "drinken"],
    correctAnswer: "eten",
    explanation: "YEMEK = ETEN. 'Ik eet brood' = Ekmek yiyorum",
    tip: "ETEN = yemek",
  },
  {
    id: 42,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'İçmek' fiilinin Hollandaca karşılığı nedir?",
    options: ["gaan", "komen", "eten", "drinken"],
    correctAnswer: "drinken",
    explanation: "İÇMEK = DRINKEN. 'Ik drink koffie' = Kahve içiyorum",
    tip: "DRINKEN = içmek",
  },
  {
    id: 43,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Uyumak' fiilinin Hollandaca karşılığı nedir?",
    options: ["slapen", "waken", "eten", "drinken"],
    correctAnswer: "slapen",
    explanation: "UYUMAK = SLAPEN. 'Ik slaap goed' = İyi uyuyorum",
    tip: "SLAPEN = uyumak",
  },
  {
    id: 44,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Kalkmak' fiilinin Hollandaca karşılığı nedir?",
    options: ["slapen", "opstaan", "eten", "drinken"],
    correctAnswer: "opstaan",
    explanation: "KALKMAK = OPSTAAN. 'Ik sta vroeg op' = Erken kalkarım",
    tip: "OPSTAAN = kalkmak (scheidbare werkwoord)",
  },
  {
    id: 45,
    type: "written",
    category: "vocabulary",
    question: "Hollandaca 'ochtend' kelimesinin Türkçe karşılığı nedir?",
    correctAnswer: "sabah",
    exampleAnswer: "sabah",
    explanation: "OCHTEND = SABAH",
    tip: "Ochtend = sabah",
  },
  {
    id: 46,
    type: "written",
    category: "vocabulary",
    question: "Hollandaca 'middag' kelimesinin Türkçe karşılığı nedir?",
    correctAnswer: "öğle",
    exampleAnswer: "öğle veya öğlen",
    explanation: "MIDDAG = ÖĞLE / ÖĞLEN",
    tip: "Middag = öğle",
  },
  {
    id: 47,
    type: "written",
    category: "vocabulary",
    question: "Hollandaca 'avond' kelimesinin Türkçe karşılığı nedir?",
    correctAnswer: "akşam",
    exampleAnswer: "akşam",
    explanation: "AVOND = AKŞAM",
    tip: "Avond = akşam",
  },
  {
    id: 48,
    type: "written",
    category: "vocabulary",
    question: "Hollandaca 'komen' fiilinin Türkçe karşılığı nedir?",
    correctAnswer: "gelmek",
    exampleAnswer: "gelmek",
    explanation: "KOMEN = GELMEK",
    tip: "Komen = gelmek",
  },
  {
    id: 49,
    type: "written",
    category: "vocabulary",
    question: "Hollandaca 'gaan' fiilinin Türkçe karşılığı nedir?",
    correctAnswer: "gitmek",
    exampleAnswer: "gitmek",
    explanation: "GAAN = GİTMEK",
    tip: "Gaan = gitmek",
  },
  {
    id: 50,
    type: "voice",
    category: "vocabulary",
    question: "Hollandaca 'ochtend' kelimesini telaffuz edin.",
    questionDutch: "ochtend",
    correctAnswer: "ochtend",
    exampleAnswer: "ochtend",
    explanation: "OCHTEND = sabah. Telaffuz: ok-tent",
    tip: "Ochtend kelimesini net telaffuz edin",
  },
  {
    id: 51,
    type: "voice",
    category: "vocabulary",
    question: "Hollandaca 'komen' fiilini telaffuz edin.",
    questionDutch: "komen",
    correctAnswer: "komen",
    exampleAnswer: "komen",
    explanation: "KOMEN = gelmek. Telaffuz: ko-men",
    tip: "Komen fiilini net telaffuz edin",
  },
  {
    id: 52,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Saat' kelimesinin Hollandaca karşılığı nedir?",
    options: ["uur", "tijd", "klok", "minuut"],
    correctAnswer: "uur",
    explanation: "SAAT = UUR. 'Hoe laat is het?' = Saat kaç?",
    tip: "UUR = saat, TIJD = zaman, KLOK = saat (cihaz)",
  },
  {
    id: 53,
    type: "multiple-choice",
    category: "vocabulary",
    question: "'Zaman' kelimesinin Hollandaca karşılığı nedir?",
    options: ["uur", "tijd", "klok", "minuut"],
    correctAnswer: "tijd",
    explanation: "ZAMAN = TIJD. 'Ik heb geen tijd' = Zamanım yok",
    tip: "TIJD = zaman",
  },
  {
    id: 54,
    type: "written",
    category: "vocabulary",
    question: "Cümleyi tamamlayın: Ik ... 's ochtends vroeg op. (kalkmak)",
    correctAnswer: "sta",
    exampleAnswer: "sta",
    explanation: "OPSTAAN = kalkmak. 'Ik sta op' = Kalkıyorum",
    tip: "OPSTAAN → Ik sta op (fiil ayrılır)",
  },
  {
    id: 55,
    type: "written",
    category: "vocabulary",
    question: "Cümleyi tamamlayın: Ik ... naar school. (gitmek)",
    correctAnswer: "ga",
    exampleAnswer: "ga",
    explanation: "GAAN = gitmek. 'Ik ga naar school' = Okula gidiyorum",
    tip: "GAAN → Ik ga (gitmek)",
  },
];

export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return questions.filter((q) => q.category === category);
}

export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
