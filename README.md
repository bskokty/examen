# Examen - Aile Birleşim Sınavı Uygulaması

Modern, cross-platform ve öğretici sınav uygulaması. Web, iOS ve Android'de çalışır.

## 🎯 Özellikler

### Soru Tipleri

- ✅ **Çoktan Seçmeli** - Seçenekler arasından doğru cevabı seçin
- ✍️ **Yazılı Cevap** - Soruları yazarak cevaplayın
- 🎤 **Sözlü Cevap** - Sesli olarak cevap verin (mikrofon kaydı)

### Öğretici Özellikler

- 📚 **Kategori Bazlı Öğrenme** - HOE, WAT, WAAR, WANNEER, WIE, WELKE, WAAROM
- 💡 **İpuçları ve Açıklamalar** - Her soruda öğretici ipuçları
- ✅ **Anında Geri Bildirim** - Doğru/yanlış cevap kontrolü
- 📊 **İlerleme Takibi** - Progress bar ile ilerleme görüntüleme
- 🎓 **Öğrenme Modu** - Kategorileri ve ipuçlarını öğrenin
- ⚠️ **Sık Yapılan Hatalar** - Yaygın hatalar ve çözümleri
- 📖 **Basit Kelimeler** - Sabah, öğle, akşam ve basit fiiller

### UI/UX

- 🎨 Modern ve renkli gradient tasarım
- 📱 Tam responsive (mobil, tablet, desktop)
- ⚡ Hızlı ve performanslı
- 🌈 Her kategori için özel renkler
- 📲 **PWA Desteği** - Mobil cihazlara yüklenebilir

## 🚀 Teknolojiler

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **PWA Desteği** (mobil cihazlara yüklenebilir)

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📱 Mobil Cihaza Yükleme (PWA)

### Android (Chrome)

1. Chrome tarayıcısında uygulamayı açın
2. Menü (3 nokta) → "Ana ekrana ekle" veya "Add to Home Screen"
3. Uygulama ana ekranınıza eklenecek

### iOS (Safari)

1. Safari tarayıcısında uygulamayı açın
2. Paylaş butonuna (kare + ok) tıklayın
3. "Ana Ekrana Ekle" (Add to Home Screen) seçeneğini seçin
4. Uygulama ana ekranınıza eklenecek

### Desktop (Chrome/Edge)

1. Tarayıcıda uygulamayı açın
2. Adres çubuğundaki yükleme ikonuna tıklayın
3. "Yükle" (Install) butonuna tıklayın

## 📖 Kullanım

### Ana Sayfa

- Kategorileri görüntüleyin ve seçin
- "Tüm Sorularla Başla" ile tüm soruları çözün
- "Öğrenme Modu" ile ipuçlarını öğrenin
- "Gramer Referansı" ile gramer kurallarını görüntüleyin

### Sınav Modu

1. Kategori seçin veya tüm sorularla başlayın
2. Soruları cevaplayın:
   - **Çoktan seçmeli**: Seçeneklerden birini seçin → "Cevabı Kontrol Et"
   - **Yazılı**: Metin kutusuna cevabınızı yazın (otomatik kaydedilir)
   - **Sözlü**: Mikrofon butonuna tıklayıp sesli cevap verin
3. İpuçları ve açıklamaları okuyun
4. "Sonraki" butonu ile ilerleyin
5. Tüm soruları tamamladıktan sonra sonuçları görüntüleyin

### Öğrenme Modu

- Kategorileri seçin
- İpuçlarını öğrenin
- Sık yapılan hataları görüntüleyin
- Kategoriyle sınava başlayın

## 📚 Soru Kategorileri

### HOE (Nasıl)

- Saat soruları (Hoe laat)
- Sıklık soruları (Hoe vaak)
- Miktar soruları (Hoeveel)

### WAT (Ne)

- Nesne ve aktivite soruları
- WAT VOOR (tür/çeşit soruları)

### WAAR (Nerede)

- Yer ve konum soruları

### WANNEER (Ne zaman)

- Zaman, tarih ve gün soruları
- ⚠️ HOE LAAT ile karıştırılmamalı!

### WIE (Kim)

- Kişi soruları

### WELKE/WELK (Hangi)

- Seçim ve tercih soruları

### WAAROM (Neden)

- Sebep soruları
- Cevap "Omdat ..." ile başlar

### Cümle Tamamlama

- Eksik cümleleri tamamlama

### Fiiller

- Scheidbare werkwoorden (ayrılabilir fiiller)
- Perfectum ve Imperfectum

### Sabit Edatlı Fiiller

- OP, VOOR, AAN, VAN, NAAR, MET, OVER, IN ile kullanılan fiiller

### Basit Kelimeler

- Sabah, öğle, akşam
- Saatler ve zaman
- Basit fiiller (gelmek, gitmek, yemek, içmek, uyumak, kalkmak)

## 🎓 Öğrenme İpuçları

### Sık Yapılan Hatalar

1. **HOE LAAT vs WANNEER**
   - ❌ Yanlış: "Hoe laat gaat u?" → "Maandag"
   - ✅ Doğru: "Hoe laat gaat u?" → "Om negen uur"

2. **WAT VOOR**
   - ❌ Yanlış: "Wat voor werk?" → "Om negen uur"
   - ✅ Doğru: "Wat voor werk?" → "Op kantoor"

3. **Scheidbare Werkwoorden**
   - AANKOMEN → "Ik kom morgen AAN" (aan sonda)
   - Perfectum: "Ik ben aangekomen" (ge ortada)

## 📝 Soru Ekleme

Sorular `data/questions.ts` dosyasındaki `questions` dizisinde tanımlanır. Yeni soru eklemek için:

```typescript
{
  id: 56,
  type: "multiple-choice" | "written" | "voice",
  category: "vocabulary" | "hoe" | "wat" | ...,
  question: "Sorunuz",
  questionDutch: "Telaffuz (opsiyonel)",
  options: ["Seçenek 1", "Seçenek 2", ...], // multiple-choice için
  correctAnswer: "Doğru cevap",
  explanation: "Açıklama",
  tip: "İpucu",
  exampleAnswer: "Örnek cevap"
}
```

## 🎨 Renkler ve Tasarım

- **Primary**: Mavi tonları (#0ea5e9)
- **Accent**: Mor tonları (#d946ef)
- Her kategori için özel gradient renkler
- Modern card tasarımı
- Yumuşak gölgeler ve animasyonlar

## 📱 PWA Desteği

Uygulama PWA olarak yüklenebilir:

- iOS: Safari'de "Ana Ekrana Ekle"
- Android: Chrome'da "Ana Ekrana Ekle"
- Desktop: Chrome/Edge'de "Yükle" butonu

## 🔧 Geliştirme

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm start

# Linting
npm run lint
```

## 📄 Lisans

Bu proje eğitim amaçlıdır.
