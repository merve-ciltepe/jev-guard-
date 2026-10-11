import { JevReflex, RiskyItem } from './schema';

export interface ReflexContext {
  riskScore: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  items: RiskyItem[];
  hasAmbiguity: boolean;
  ambiguityDetails: string;
  promptInjection: boolean;
}

export class JevReflexEngine {
  /**
   * Generates a blunt, protective JEV-style rapid reflex response.
   */
  public static generateReflex(context: ReflexContext): JevReflex {
    const { riskScore, riskLevel, items, hasAmbiguity, ambiguityDetails, promptInjection } = context;

    // Case 1: Prompt Injection / Adversarial Attack
    if (promptInjection) {
      return {
        status: 'CRITICAL_ALERT',
        headline: '🚨 JEV ALARMI: BU SİTE BİZİ KANDIRMAYA ÇALIŞIYOR!',
        one_liner_reflex:
          'Sözleşme metninde yapay zeka savunmasını devreden çıkarmaya çalışan gizli Prompt Injection talimatı yakaladım.',
        immediate_advice:
          'Hemen sekmeyi kapat. Bir site sözleşmesine gizli AI manipülasyonu koyuyorsa, arka planda saklayacak çok tehlikeli maddeleri vardır.',
        tone: 'blunt_protective',
      };
    }

    // Case 2: Ambiguity / Uncertainty Honesty ("Sistemin belirsizliği dürüstçe gösterdiği an")
    if (hasAmbiguity && items.length === 0) {
      return {
        status: 'UNCERTAIN',
        headline: '🧐 JEV REFLEKS: DÜRÜST OLUYORUM, BURADA CİDDİ BİR BELİRSİZLİK VAR!',
        one_liner_reflex:
          'Metinde açık bir suçüstü yakalayamadım ama şirket maddeleri bilerek muğlak ve bulanık bırakmış.',
        immediate_advice: ambiguityDetails || 'Şirket veri ortaklarını ve saklama sürelerini açıkça belirtmemiş. Şeffaf olmayan her sözleşme potansiyel risktir.',
        tone: 'blunt_protective',
      };
    }

    // Case 3: Critical Level Risks
    if (riskLevel === 'CRITICAL' || riskScore >= 75) {
      const topIssue = items[0]?.sade_turkce_aciklama || 'Ağır hak mahrumiyeti tespit edildi';
      return {
        status: 'CRITICAL_ALERT',
        headline: `🛑 JEV REFLEKS: DUR! BURADA ${items.length} KRİTİK TUZAK VAR! (Risk: ${riskScore}/100)`,
        one_liner_reflex: `Seni doğrudan uyarayım: ${topIssue}. Verilerin ve cüzdanın tehlikede.`,
        immediate_advice:
          'Onay kutusunu sakın işaretleme! Şartları kabul etmeden önce tespit ettiğim birebir alıntıları aşağıdan incele.',
        tone: 'blunt_protective',
      };
    }

    // Case 4: High Level Risks
    if (riskLevel === 'HIGH' || riskScore >= 50) {
      return {
        status: 'WARN',
        headline: `⚠️ JEV REFLEKS: DİKKATLİ OL! Gizlenmiş Maddeler Var (Risk: ${riskScore}/100)`,
        one_liner_reflex:
          'Standart bir sözleşme gibi gösteriyorlar ama KVKK haklarını sınırlandıran ve tek taraflı yetki alan maddeler var.',
        immediate_advice:
          'Özellikle otomatik yenileme şartlarına ve veri paylaşım maddelerine dikkat et. Aşağıdaki alıntıları kontrol et.',
        tone: 'blunt_protective',
      };
    }

    // Case 5: Medium Level Risks
    if (riskLevel === 'MEDIUM') {
      return {
        status: 'WARN',
        headline: `🟡 JEV REFLEKS: Orta Dereceli Risk (Skor: ${riskScore}/100)`,
        one_liner_reflex:
          'Bazı maddeler canını sıkabilir (çerez takibi, hizmet değişiklik hakkı), ancak doğrudan vahim bir veri satışı tespit edilmedi.',
        immediate_advice: 'Gözün açık olsun, ihtiyacın yoksa opsiyonel pazarlama izinlerini kaldır.',
        tone: 'blunt_protective',
      };
    }

    // Case 6: Clean / Low Risk
    return {
      status: 'SAFE',
      headline: `🛡️ JEV REFLEKS: Temiz Görünüyor (Risk: ${riskScore}/100)`,
      one_liner_reflex:
        'Sözleşmeyi ve gizlilik politikasını taradım. Ciddi bir tuzak, gizli abonelik veya agresif veri devri görmedim.',
      immediate_advice: 'Rahatça devam edebilirsin. Yine de önemli işlemlerinde her zaman tetikte ol!',
      tone: 'blunt_protective',
    };
  }
}
