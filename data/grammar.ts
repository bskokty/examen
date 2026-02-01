// Gramer Referans Verileri

export interface GrammarSection {
  title: string;
  icon: string;
  content: GrammarItem[];
}

export interface GrammarItem {
  title: string;
  description: string;
  examples: string[];
  notes?: string[];
}

export const grammarReference: GrammarSection[] = [
  {
    title: "Zamirler (Pronouns)",
    icon: "👤",
    content: [
      {
        title: "Özne Zamirleri",
        description: "Cümlede özne olarak kullanılan zamirler",
        examples: [
          "ik (ben)",
          "jij/je/u (sen/siz)",
          "hij (o - erkek)",
          "zij/ze (o - kadın)",
          "het (o - cansız)",
          "wij/we (biz)",
          "jullie (siz)",
          "zij/ze (onlar)",
        ],
      },
      {
        title: "Nesne Zamirleri",
        description: "Cümlede nesne olarak kullanılan zamirler",
        examples: [
          "mij/me (beni)",
          "jou/u (seni/sizi)",
          "hem (onu - erkek)",
          "haar (onu - kadın)",
          "het (onu - cansız)",
          "ons (bizi)",
          "jullie (sizi)",
          "hen (onları)",
        ],
      },
      {
        title: "İyelik Zamirleri",
        description: "Sahiplik belirten zamirler",
        examples: [
          "mijn (benim)",
          "jouw/je/uw (senin/sizin)",
          "zijn (onun - erkek)",
          "haar (onun - kadın)",
          "ons/onze (bizim)",
          "jullie (sizin)",
          "hun (onların)",
        ],
      },
    ],
  },
  {
    title: "Fiil Çekimleri",
    icon: "📝",
    content: [
      {
        title: "ZIJN (olmak)",
        description: "Şimdiki zaman çekimi",
        examples: [
          "ik ben",
          "jij/u bent",
          "hij/zij/het is",
          "wij/zij/jullie zijn",
        ],
        notes: ["WAS/WAREN → geçmiş zaman"],
      },
      {
        title: "HEBBEN (sahip olmak)",
        description: "Şimdiki zaman çekimi",
        examples: [
          "ik heb",
          "jij/u hebt",
          "hij/zij/het heeft",
          "wij/zij/jullie hebben",
        ],
        notes: ["HAD/HADDEN → geçmiş zaman"],
      },
      {
        title: "GAAN (gitmek)",
        description: "Şimdiki zaman çekimi",
        examples: [
          "ik ga",
          "jij/u gaat",
          "hij/zij/het gaat",
          "wij/zij/jullie gaan",
        ],
      },
      {
        title: "DOEN (yapmak)",
        description: "Şimdiki zaman çekimi",
        examples: [
          "ik doe",
          "jij/u doet",
          "hij/zij/het doet",
          "wij/zij/jullie doen",
        ],
      },
    ],
  },
  {
    title: "Modal Fiiller",
    icon: "⚡",
    content: [
      {
        title: "KUNNEN (yapabilmek)",
        description: "Can, be able to",
        examples: [
          "ik kan",
          "jij/u kunt",
          "hij/zij/het kan",
          "wij/zij/jullie kunnen",
        ],
        notes: [
          "KON/KONDEN → geçmiş zaman",
          "Kan ik u helpen? = Size yardım edebilir miyim?",
        ],
      },
      {
        title: "MOGEN (izin almak)",
        description: "May, be allowed to",
        examples: [
          "ik mag",
          "jij/u mag",
          "hij/zij/het mag",
          "wij/zij/jullie mogen",
        ],
        notes: [
          "MOCHT/MOCHTEN → geçmiş zaman",
          "Mag ik hier zitten? = Burada oturabilir miyim?",
        ],
      },
      {
        title: "MOETEN (zorunlu olmak)",
        description: "Must, have to",
        examples: [
          "ik moet",
          "jij/u moet",
          "hij/zij/het moet",
          "wij/zij/jullie moeten",
        ],
        notes: ["MOEST/MOESTEN → geçmiş zaman"],
      },
      {
        title: "ZULLEN (gelecek zaman)",
        description: "Will, shall",
        examples: [
          "ik zal",
          "jij/u zult",
          "hij/zij/het zal",
          "wij/zij/jullie zullen",
        ],
        notes: ["ZOU/ZOUDEN → would (koşullu)"],
      },
      {
        title: "WILLEN (istemek)",
        description: "Want, wish",
        examples: [
          "ik wil",
          "jij/u wilt",
          "hij/zij/het wil",
          "wij/zij/jullie willen",
        ],
        notes: ["WILDE/WILDEN → geçmiş zaman"],
      },
    ],
  },
  {
    title: "Soru Kelimeleri",
    icon: "❓",
    content: [
      {
        title: "Temel Soru Kelimeleri",
        description: "En sık kullanılan soru kelimeleri",
        examples: [
          "wat (ne)",
          "wie (kim)",
          "waar (nerede)",
          "wanneer (ne zaman)",
          "welke/welk (hangi)",
          "hoe (nasıl)",
          "waarom (neden)",
        ],
      },
      {
        title: "HOE LAAT vs WANNEER",
        description: "Sık karıştırılan soru kelimeleri",
        examples: [
          "HOE LAAT → Saat sorar (om ... uur)",
          "WANNEER → Gün/ay/yıl sorar (maandag, volgend jaar)",
        ],
        notes: [
          "⚠️ TUZAK: HOE LAAT saat sorar, WANNEER tarih/gün sorar",
          "Hoe laat begint u? → Om negen uur",
          "Wanneer gaat u? → Volgend jaar",
        ],
      },
      {
        title: "WAT VOOR",
        description: "Tür/çeşit sorar",
        examples: [
          "Wat voor werk doet u? → Op kantoor",
          "Wat voor huis? → Een appartement",
          "Wat voor kleren? → Simpele kleren",
        ],
        notes: [
          "⚠️ TUZAK: WAT VOOR tür sorar, saat/gün değil",
          "Wat voor werk? → Op kantoor (meslek türü)",
        ],
      },
    ],
  },
  {
    title: "Edatlar (Prepositions)",
    icon: "📍",
    content: [
      {
        title: "Temel Edatlar",
        description: "En sık kullanılan edatlar",
        examples: [
          "van (of, from)",
          "uit (from)",
          "naar (to)",
          "voor (for)",
          "op (on, at)",
          "aan (at, to)",
          "bij (at, near)",
          "in (in)",
          "met (with)",
          "over (about)",
        ],
      },
      {
        title: "Yer Edatları",
        description: "Konum belirten edatlar",
        examples: [
          "op school (okulda)",
          "op maandag (pazartesi günü)",
          "aan tafel (masada)",
          "aan strand (sahilde)",
          "bij Zara (Zara'da)",
          "bij bushalte (otobüs durağında)",
          "in winkel (mağazada)",
          "in tuin (bahçede)",
        ],
      },
    ],
  },
  {
    title: "Zaman İfadeleri",
    icon: "⏰",
    content: [
      {
        title: "ER İfadeleri",
        description: "There is/are yapısı",
        examples: [
          "er is een kind (bir çocuk var)",
          "er zijn twee kinderen (iki çocuk var)",
          "er was (vardı)",
          "er waren (vardılar)",
          "er is geen kind (çocuk yok)",
        ],
      },
      {
        title: "Devrik Cümle",
        description: "TWeMPo kuralı",
        examples: [
          "vandaag ga ik... (bugün gidiyorum)",
          "met de bus ga ik... (otobüsle gidiyorum)",
          "op het strand is er... (sahilde var)",
          "een appel eet ik... (bir elma yiyorum)",
        ],
        notes: [
          "Devrik yapı: Zaman/Method/Plaats + Özne + Fiil",
          "Zorunlu devrik yapanlar: helaas, omdat, daarna, natuurlijk, zeker, zodat, misschien",
        ],
      },
      {
        title: "Gelecek Zaman",
        description: "Future tense yapıları",
        examples: [
          "ik kom morgen (yarın geliyorum) - zaman kelimesi",
          "ik ga morgen beginnen (yarın başlayacağım) - gaan",
          "ik zal slapen (uyuyacağım) - zullen",
        ],
        notes: [
          "Laten we samen eten! (Birlikte yiyelim!)",
          "Gaan we samen eten? (Birlikte yiyelim mi?)",
          "Zullen we samen eten? (Birlikte yiyelim mi?)",
        ],
      },
    ],
  },
  {
    title: "Şimdiki Zaman Yapıları",
    icon: "🔄",
    content: [
      {
        title: "AAN HET + Mastar",
        description: "Şu anda yapılan eylem",
        examples: [
          "Ik ben aan het werken (Şu anda çalışıyorum)",
          "Zij is aan het koken (Şu anda yemek yapıyor)",
        ],
        notes: ["Özne + zijn + aan het + mastar"],
      },
      {
        title: "TWeMPo Kuralı",
        description: "Cümle sıralaması",
        examples: [
          "Ik eet vanavond alleen thuis",
          "Ben je ziek? (Soru)",
          "Open je de deur? (Soru)",
        ],
        notes: ["Normal: Özne + Fiil + TWeMPo", "Soru: Fiil + Özne + TWeMPo"],
      },
    ],
  },
  {
    title: "Sabit Edatlı Fiiller",
    icon: "🔗",
    content: [
      {
        title: "OP ile Kullanılan Fiiller",
        description: "OP edatı ile kullanılan fiiller",
        examples: [
          "wachten op (beklemek)",
          "letten op (dikkat etmek)",
          "reageren op (cevap vermek)",
          "lijken op (benzemek)",
          "passen op (bakmak, göz kulak olmak)",
        ],
        notes: [
          "Ik wacht op de bus (Otobüsü bekliyorum)",
          "Let op je tas (Çantana dikkat et)",
        ],
      },
      {
        title: "VOOR ile Kullanılan Fiiller",
        description: "VOOR edatı ile kullanılan fiiller",
        examples: [
          "zorgen voor (bakmak, ilgilenmek)",
          "bang zijn voor (korkmak)",
          "verantwoordelijk zijn voor (sorumlu olmak)",
          "betalen voor (ödeme yapmak)",
          "vallen voor (kapılmak, âşık olmak)",
        ],
        notes: [
          "Ik zorg voor mijn moeder (Anneme bakıyorum)",
          "Ik ben bang voor honden (Köpeklerden korkarım)",
        ],
      },
      {
        title: "AAN ile Kullanılan Fiiller",
        description: "AAN edatı ile kullanılan fiiller",
        examples: [
          "denken aan (düşünmek)",
          "werken aan (üzerinde çalışmak)",
          "herinneren aan (hatırlamak)",
          "twijfelen aan (şüphe etmek)",
          "wennen aan (alışmak)",
          "deelnemen aan (katılmak)",
          "schrijven aan (yazmak)",
        ],
        notes: [
          "Ik denk aan vakantie (Tatili düşünüyorum)",
          "Ik werk aan mijn Nederlands (Hollandacam üzerinde çalışıyorum)",
        ],
      },
      {
        title: "VAN ile Kullanılan Fiiller",
        description: "VAN edatı ile kullanılan fiiller",
        examples: [
          "houden van (sevmek)",
          "genieten van (zevk almak)",
          "afhangen van (bağlı olmak)",
          "last hebben van (rahatsızlık duymak)",
          "dromen van (hayal kurmak)",
        ],
        notes: [
          "Ik houd van koffie (Kahveyi seviyorum)",
          "Ik droom van een mooi huis (Güzel bir evin hayalini kuruyorum)",
        ],
      },
      {
        title: "NAAR ile Kullanılan Fiiller",
        description: "NAAR edatı ile kullanılan fiiller",
        examples: [
          "luisteren naar (dinlemek)",
          "kijken naar (bakmak/izlemek)",
          "zoeken naar (aramak)",
          "ruiken naar (kokmak)",
          "gaan naar (gitmek)",
        ],
        notes: [
          "Ik luister naar muziek (Müzik dinliyorum)",
          "Ik kijk naar een film (Film izliyorum)",
        ],
      },
      {
        title: "MET ile Kullanılan Fiiller",
        description: "MET edatı ile kullanılan fiiller",
        examples: [
          "beginnen met (başlamak)",
          "stoppen met (bırakmak)",
          "praten met (konuşmak)",
          "spreken met (konuşmak)",
          "reizen met (seyahat etmek)",
          "vergelijken met (karşılaştırmak)",
          "tevreden zijn met (memnun olmak)",
        ],
        notes: [
          "Ik begin met koken (Yemek yapmaya başlıyorum)",
          "Ik stop met roken (Sigara içmeyi bırakıyorum)",
        ],
      },
      {
        title: "OVER ile Kullanılan Fiiller",
        description: "OVER edatı ile kullanılan fiiller",
        examples: [
          "praten over (hakkında konuşmak)",
          "denken over (üzerine düşünmek)",
          "gaan over (konusu olmak)",
          "vertellen over (hakkında anlatmak)",
          "discussiëren over (tartışmak)",
          "lezen over (hakkında okumak)",
          "klagen over (şikayet etmek)",
          "twijfelen over (kararsız olmak)",
          "schrijven over (hakkında yazmak)",
        ],
        notes: [
          "Ik praat over mijn werk (İşim hakkında konuşuyorum)",
          "Ik klaag over het weer (Hava hakkında şikayet ediyorum)",
        ],
      },
      {
        title: "IN ile Kullanılan Fiiller",
        description: "IN edatı ile kullanılan fiiller",
        examples: [
          "geloven in (inanmak)",
          "wonen in (yaşamak)",
          "zitten in (içinde olmak)",
        ],
        notes: [
          "Ik geloof in mezelf (Kendime inanıyorum)",
          "Ik woon in Amsterdam (Amsterdam'da yaşıyorum)",
        ],
      },
    ],
  },
];
