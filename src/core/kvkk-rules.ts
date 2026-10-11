export interface KVKKArticle {
  id: string;
  name: string;
  summary: string;
  triggerKeywords: string[];
  violationRiskWeight: 'CRITICAL' | 'HIGH' | 'MEDIUM';
}

export interface UserRulePreference {
  id: string;
  name: string;
  description: string;
  category: string;
  strictness: 'STRICT_BLOCK' | 'HIGH_ALERT' | 'WARN';
  enabled: boolean;
}

export const DEFAULT_KVKK_RULES: KVKKArticle[] = [
  {
    id: 'KVKK_MADDE_4',
    name: 'KVKK Madde 4: Genel İlkeler ve Ölçülülük',
    summary: 'Kişisel veriler amaçla bağlantılı, sınırlı ve ölçülü işlenmeli; süresiz veya belirsiz saklanamaz.',
    triggerKeywords: ['süresiz saklama', 'belirsiz süre', 'ölçüsüz', 'her türlü amaçla', 'indefinitely', 'perpetual storage'],
    violationRiskWeight: 'HIGH',
  },
  {
    id: 'KVKK_MADDE_5',
    name: 'KVKK Madde 5: Açık Rıza ve İşleme Şartları',
    summary: 'Açık rıza olmaksızın kişisel veri işlenemez; rıza zorlaması ve genel geçer rıza geçersizdir.',
    triggerKeywords: ['açık rıza', 'önceden kabul', 'otomatik onay', 'pazarlama izni', 'third party marketing', 'unrestricted consent'],
    violationRiskWeight: 'HIGH',
  },
  {
    id: 'KVKK_MADDE_6',
    name: 'KVKK Madde 6: Özel Nitelikli Kişisel Veriler',
    summary: 'Biyometrik, genetik, sağlık ve özel veriler açık rıza ve özel koruma olmadan işlenemez.',
    triggerKeywords: ['biyometrik', 'yüz tanıma', 'ses kaydı', 'parmak izi', 'sağlık verisi', 'biometric', 'facial recognition', 'keystroke patterns'],
    violationRiskWeight: 'CRITICAL',
  },
  {
    id: 'KVKK_MADDE_8_9',
    name: 'KVKK Madde 8 ve 9: Yurt İçi ve Yurt Dışı Veri Aktarımı',
    summary: 'Veriler açık rıza olmadan 3. şahıslara veya güvenli olmayan yurt dışı sunucularına aktarılamaz.',
    triggerKeywords: ['üçüncü taraflarla paylaşım', 'yurtdışına aktarım', 'veri satışı', 'iş ortakları', 'share with third parties', 'sell personal data', 'cross-border transfer'],
    violationRiskWeight: 'CRITICAL',
  },
  {
    id: 'KVKK_MADDE_11',
    name: 'KVKK Madde 11: İlgili Kişinin Hakları',
    summary: 'Kullanıcının verisini silme, düzeltme veya öğrenme hakkı sözleşmeyle kaldırılamaz veya zorlaştırılamaz.',
    triggerKeywords: ['silme hakkı yok', 'feragat', 'talep kabul edilmez', 'no right to delete', 'waive all claims'],
    violationRiskWeight: 'HIGH',
  },
];

export const DEFAULT_USER_RULES: UserRulePreference[] = [
  {
    id: 'RULE_NO_AUTO_RENEW',
    name: 'Otomatik Yenileme ve Gizli Ücret Tuzağı',
    description: 'Deneme sürümü sonrası otomatik para çekme veya iptal zorluğu olan maddeleri anında yakala.',
    category: 'AUTO_RENEWAL_TRAP',
    strictness: 'STRICT_BLOCK',
    enabled: true,
  },
  {
    id: 'RULE_NO_THIRD_PARTY_DATA_SALE',
    name: 'Veri Satışı ve 3. Taraf Paylaşım Yasağı',
    description: 'Kişisel verilerimin reklamverenlere veya veri simsarlarına satılmasını ya da devredilmesini uyar.',
    category: 'DATA_SELLING_SHARING',
    strictness: 'STRICT_BLOCK',
    enabled: true,
  },
  {
    id: 'RULE_NO_UNILATERAL_CHANGE',
    name: 'Haber Vermeksizin Tek Taraflı Sözleşme Değişikliği',
    description: 'Şirketin koşulları veya fiyatı kullanıcıya bildirmeden istediği zaman değiştirme hakkını uyar.',
    category: 'UNILATERAL_CHANGE',
    strictness: 'HIGH_ALERT',
    enabled: true,
  },
  {
    id: 'RULE_NO_ARBITRATION_WAIVER',
    name: 'Dava Açma ve Tüketici Mahkemesi Hakkı Gaspı',
    description: 'Toplu dava yasağı veya yabancı tahkime zorlayan maddeleri uyar.',
    category: 'BINDING_ARBITRATION',
    strictness: 'HIGH_ALERT',
    enabled: true,
  },
  {
    id: 'RULE_NO_BIOMETRIC_TRACKING',
    name: 'Biyometrik ve Klavye/Kamera Takip Alarmı',
    description: 'Klavye vuruş ritmi, yüz analizi veya mikrofon erişimi içeren şartlara kırmızı alarm ver.',
    category: 'BIOMETRIC_SURVEILLANCE',
    strictness: 'STRICT_BLOCK',
    enabled: true,
  },
];
