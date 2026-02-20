/* Daily Tarot Data - 22 Major Arcana Cards */

const TAROT_CARDS = [
    {
        id: 0,
        name: {
            ko: "광대 (The Fool)",
            en: "The Fool",
            zh: "愚人",
            ja: "愚者",
            hi: "मूर्ख",
            ru: "Шут",
            es: "El Loco",
            pt: "O Louco",
            id: "Si Bodoh",
            tr: "Aptal",
            de: "Der Narr",
            fr: "Le Fou"
        },
        emoji: "🤡",
        meanings: {
            upright: {
                ko: "새로운 시작, 모험정신, 자유, 순수함, 가능성",
                en: "New beginning, adventure, freedom, innocence, potential",
                zh: "新的开始、冒险精神、自由、纯真、可能性",
                ja: "新しい始まり、冒険心、自由、純真、可能性",
                hi: "नई शुरुआत, रोमांच, स्वतंत्रता, मासूमियत, संभावना",
                ru: "Новое начало, авантюризм, свобода, невинность, возможность",
                es: "Nuevo comienzo, aventura, libertad, inocencia, posibilidad",
                pt: "Novo começo, aventura, liberdade, inocência, possibilidade",
                id: "Awal baru, petualangan, kebebasan, kemurnian, kemungkinan",
                tr: "Yeni başlangıç, macera, özgürlük, masumiyeti, olasılık",
                de: "Neubeginn, Abenteuer, Freiheit, Unschuld, Möglichkeit",
                fr: "Nouveau départ, aventure, liberté, innocence, possibilité"
            },
            reversed: {
                ko: "무분별함, 기회 상실, 어리석은 결정, 위험",
                en: "Recklessness, missed opportunity, foolish decision, risk",
                zh: "莽撞、错失机会、愚蠢的决定、危险",
                ja: "無謀さ、機会喪失、愚かな決定、危険",
                hi: "लापरवाही, खोई हुई अवसर, मूर्खतापूर्ण निर्णय, खतरा",
                ru: "Безрассудство, упущенная возможность, глупое решение, опасность",
                es: "Imprudencia, oportunidad perdida, decisión tonta, riesgo",
                pt: "Imprudência, oportunidade perdida, decisão tola, risco",
                id: "Sembrono, peluang terlewat, keputusan bodoh, risiko",
                tr: "Pervasızlık, kaçırılmış fırsat, aptal karar, risk",
                de: "Unvorsichtigkeit, verpasste Gelegenheit, töricht Entscheidung, Risiko",
                fr: "Imprudence, occasion manquée, décision stupide, risque"
            }
        }
    },
    {
        id: 1,
        name: {
            ko: "마술사 (The Magician)",
            en: "The Magician",
            zh: "魔术师",
            ja: "魔術師",
            hi: "जादूगर",
            ru: "Маг",
            es: "El Mago",
            pt: "O Mago",
            id: "Pesulap",
            tr: "Sihirbaz",
            de: "Der Magier",
            fr: "Le Magicien"
        },
        emoji: "🎩",
        meanings: {
            upright: {
                ko: "창의력, 행동력, 의지력, 자신감, 능력 발휘",
                en: "Creativity, action, willpower, confidence, resourcefulness",
                zh: "创意、行动力、意志力、自信、资源整合",
                ja: "創意性、行動力、意志力、自信、能力発揮",
                hi: "रचनात्मकता, कार्रवाई, इच्छा शक्ति, आत्मविश्वास, संसाधन",
                ru: "Творчество, действие, воля, уверенность, способность",
                es: "Creatividad, acción, fuerza de voluntad, confianza, capacidad",
                pt: "Criatividade, ação, força de vontade, confiança, capacidade",
                id: "Kreativitas, tindakan, kekuatan kehendak, kepercayaan diri, kemampuan",
                tr: "Yaratıcılık, eylem, irade gücü, özgüven, yetenek",
                de: "Kreativität, Handlung, Willenskraft, Vertrauen, Fähigkeit",
                fr: "Créativité, action, volonté, confiance, capacité"
            },
            reversed: {
                ko: "무능, 속임수, 미숙함, 장애, 자신감 부족",
                en: "Incompetence, deception, inexperience, obstacle, lack of confidence",
                zh: "无能、欺骗、经验不足、障碍、缺乏自信",
                ja: "無能、詐欺、経験不足、障害、自信の欠如",
                hi: "अक्षमता, धोखाधड़ी, अनुभवहीनता, बाधा, आत्मविश्वास की कमी",
                ru: "Некомпетентность, обман, неопытность, препятствие, отсутствие уверенности",
                es: "Incompetencia, engaño, inexperiencia, obstáculo, falta de confianza",
                pt: "Incompetência, engano, inexperiência, obstáculo, falta de confiança",
                id: "Ketidakmampuan, tipu, ketidakberpengalaman, hambatan, kurangnya kepercayaan diri",
                tr: "Yetersizlik, aldatma, tecrübesizlik, engel, özgüven eksikliği",
                de: "Unfähigkeit, Täuschung, Unerfahrenheit, Hindernis, mangelndes Vertrauen",
                fr: "Incompétence, tromperie, inexpérience, obstacle, manque de confiance"
            }
        }
    },
    {
        id: 2,
        name: {
            ko: "여사제 (The High Priestess)",
            en: "The High Priestess",
            zh: "女祭司",
            ja: "女司祭",
            hi: "महान पुजारिन",
            ru: "Верховная жрица",
            es: "La Sacerdotisa",
            pt: "A Sacerdotisa",
            id: "Pendeta Agung",
            tr: "Başrahibe",
            de: "Die Hohepriesterin",
            fr: "La Papesse"
        },
        emoji: "👑",
        meanings: {
            upright: {
                ko: "직관, 신비로움, 숨겨진 지식, 명상, 영적 깨달음",
                en: "Intuition, mystery, hidden knowledge, meditation, spiritual awakening",
                zh: "直觉、神秘、隐藏知识、冥想、精神觉醒",
                ja: "直感、神秘性、隠された知識、瞑想、精神的覚醒",
                hi: "अंतर्ज्ञान, रहस्य, छिपा ज्ञान, ध्यान, आध्यात्मिक जागरण",
                ru: "Интуиция, тайна, скрытое знание, медитация, духовное пробуждение",
                es: "Intuición, misterio, conocimiento oculto, meditación, despertar espiritual",
                pt: "Intuição, mistério, conhecimento oculto, meditação, despertar espiritual",
                id: "Intuisi, misteri, pengetahuan tersembunyi, meditasi, kebangkitan spiritual",
                tr: "Sezgi, gizem, gizli bilgi, meditasyon, ruhani uyanış",
                de: "Intuition, Geheimnis, verborgenes Wissen, Meditation, spirituelles Erwachen",
                fr: "Intuition, mystère, savoir caché, méditation, réveil spirituel"
            },
            reversed: {
                ko: "억압, 비밀 폭로, 혼란, 표면적 판단, 영적 차단",
                en: "Repression, secret revealed, confusion, surface judgment, spiritual blockage",
                zh: "压抑、秘密泄露、困惑、表面判断、灵性阻碍",
                ja: "抑圧、秘密の暴露、混乱、表面的判断、精神的ブロック",
                hi: "दमन, रहस्य का खुलासा, भ्रम, सतही निर्णय, आध्यात्मिक बाधा",
                ru: "Подавление, раскрытие тайны, замешательство, поверхностное суждение, духовный блок",
                es: "Represión, secreto revelado, confusión, juicio superficial, bloqueo espiritual",
                pt: "Repressão, segredo revelado, confusão, julgamento superficial, bloqueio espiritual",
                id: "Penekanan, rahasia terbongkar, kebingungan, penilaian permukaan, blokir spiritual",
                tr: "Baskı, gizlinin açığa çıkması, kafa karışıklığı, yüzeysel yargı, ruhani engel",
                de: "Unterdrückung, Geheimnis offenbart, Verwirrung, oberflächliches Urteil, spiritueller Block",
                fr: "Répression, secret révélé, confusion, jugement superficiel, blocage spirituel"
            }
        }
    },
    {
        id: 3,
        name: {
            ko: "여왕 (The Empress)",
            en: "The Empress",
            zh: "皇后",
            ja: "女帝",
            hi: "महारानी",
            ru: "Императрица",
            es: "La Emperatriz",
            pt: "A Imperatriz",
            id: "Permaisuri",
            tr: "İmparatoriçe",
            de: "Die Kaiserin",
            fr: "L'Impératrice"
        },
        emoji: "👸",
        meanings: {
            upright: {
                ko: "창조성, 풍요, 자연, 어머니 같은 사랑, 육체적 쾌락",
                en: "Creativity, abundance, nature, motherly love, physical pleasure",
                zh: "创意、丰富、自然、母爱、肉体享受",
                ja: "創造性、豊かさ、自然、母親のような愛、身体的快楽",
                hi: "रचनात्मकता, प्रचुरता, प्रकृति, माता-पिता का प्यार, शारीरिक आनंद",
                ru: "Творчество, изобилие, природа, материнская любовь, физическое удовольствие",
                es: "Creatividad, abundancia, naturaleza, amor maternal, placer físico",
                pt: "Criatividade, abundância, natureza, amor materno, prazer físico",
                id: "Kreativitas, kelimpahan, alam, cinta ibu, kesenangan fisik",
                tr: "Yaratıcılık, bolluk, doğa, annelik sevgisi, bedensel zevk",
                de: "Kreativität, Fülle, Natur, mütterliche Liebe, körperliches Vergnügen",
                fr: "Créativité, abondance, nature, amour maternel, plaisir physique"
            },
            reversed: {
                ko: "불임, 억압된 감정, 의존성, 과소비, 불임 혹은 상실",
                en: "Infertility, blocked emotions, dependence, overspending, loss",
                zh: "不育、阻碍情感、依赖性、过度消费、损失",
                ja: "不妊、感情的ブロック、依存性、過度支出、損失",
                hi: "बांझपन, अवरुद्ध भावनाएं, निर्भरता, अत्यधिक खर्च, नुकसान",
                ru: "Бесплодие, заблокированные эмоции, зависимость, перерасходование, потеря",
                es: "Infertilidad, emociones bloqueadas, dependencia, gastos excesivos, pérdida",
                pt: "Infertilidade, emoções bloqueadas, dependência, gastos excessivos, perda",
                id: "Kemandulan, emosi terhalang, ketergantungan, pengeluaran berlebihan, kerugian",
                tr: "Kısırlık, engellenen duygular, bağımlılık, aşırı harcama, kayıp",
                de: "Unfruchtbarkeit, blockierte Emotionen, Abhängigkeit, Überausgaben, Verlust",
                fr: "Infertilité, émotions bloquées, dépendance, dépenses excessives, perte"
            }
        }
    },
    {
        id: 4,
        name: {
            ko: "황제 (The Emperor)",
            en: "The Emperor",
            zh: "皇帝",
            ja: "皇帝",
            hi: "सम्राट",
            ru: "Император",
            es: "El Emperador",
            pt: "O Imperador",
            id: "Kaisar",
            tr: "İmparator",
            de: "Der Kaiser",
            fr: "L'Empereur"
        },
        emoji: "👑",
        meanings: {
            upright: {
                ko: "권력, 리더십, 구조, 권위, 통제, 아버지 같은 영향",
                en: "Power, leadership, structure, authority, control, paternal influence",
                zh: "权力、领导力、结构、权威、控制、父权影响",
                ja: "権力、リーダーシップ、構造、権威、統制、父権的影響",
                hi: "शक्ति, नेतृत्व, संरचना, अधिकार, नियंत्रण, पितृ प्रभाव",
                ru: "Власть, лидерство, структура, авторитет, контроль, отцовское влияние",
                es: "Poder, liderazgo, estructura, autoridad, control, influencia paterna",
                pt: "Poder, liderança, estrutura, autoridade, controle, influência paternal",
                id: "Kekuasaan, kepemimpinan, struktur, otoritas, kontrol, pengaruh paternal",
                tr: "Güç, liderlik, yapı, otorite, kontrol, babacan etki",
                de: "Macht, Führung, Struktur, Autorität, Kontrolle, väterlicher Einfluss",
                fr: "Pouvoir, leadership, structure, autorité, contrôle, influence paternelle"
            },
            reversed: {
                ko: "약함, 통제 불능, 비효율성, 권위 상실, 독재",
                en: "Weakness, lack of control, inefficiency, loss of authority, tyranny",
                zh: "虚弱、缺乏控制、低效率、权威丧失、专制",
                ja: "弱さ、制御不能、非効率性、権威の喪失、独裁",
                hi: "कमजोरी, नियंत्रण की कमी, अक्षमता, अधिकार की हानि, अत्याचार",
                ru: "Слабость, отсутствие контроля, неэффективность, потеря власти, тирания",
                es: "Debilidad, falta de control, ineficiencia, pérdida de autoridad, tiranía",
                pt: "Fraqueza, falta de controle, ineficiência, perda de autoridade, tirania",
                id: "Kelemahan, kurangnya kontrol, ketidakefisienan, kehilangan otoritas, tirani",
                tr: "Zayıflık, kontrol eksikliği, verimsizlik, otorite kaybı, tiranlık",
                de: "Schwäche, mangelnde Kontrolle, Ineffizienz, Machtverlust, Tyrannei",
                fr: "Faiblesse, manque de contrôle, inefficacité, perte d'autorité, tyrannie"
            }
        }
    },
    {
        id: 5,
        name: {
            ko: "교황 (The Hierophant)",
            en: "The Hierophant",
            zh: "教皇",
            ja: "法皇",
            hi: "पोप",
            ru: "Иерофант",
            es: "El Papa",
            pt: "O Papa",
            id: "Hierofan",
            tr: "Hiyerofant",
            de: "Der Hierophant",
            fr: "Le Pape"
        },
        emoji: "⛪",
        meanings: {
            upright: {
                ko: "전통, 신앙, 지혜, 교육, 윤리, 보수성",
                en: "Tradition, faith, wisdom, education, ethics, conservatism",
                zh: "传统、信仰、智慧、教育、伦理、保守主义",
                ja: "伝統、信仰、知恵、教育、倫理、保守主義",
                hi: "परंपरा, विश्वास, ज्ञान, शिक्षा, नैतिकता, रूढ़िवादिता",
                ru: "Традиция, вера, мудрость, образование, этика, консерватизм",
                es: "Tradición, fe, sabiduría, educación, ética, conservadurismo",
                pt: "Tradição, fé, sabedoria, educação, ética, conservadorismo",
                id: "Tradisi, keimanan, kebijaksanaan, pendidikan, etika, konservatisme",
                tr: "Gelenek, inanç, hikmet, eğitim, etik, muhafazakarlık",
                de: "Tradition, Glaube, Weisheit, Bildung, Ethik, Konservatismus",
                fr: "Tradition, foi, sagesse, éducation, éthique, conservatisme"
            },
            reversed: {
                ko: "교조성, 속박, 독단, 규칙 거부, 영적 혼란",
                en: "Dogmatism, bondage, rigidity, rejection of rules, spiritual confusion",
                zh: "教条主义、束缚、僵化、拒绝规则、精神困惑",
                ja: "教条性、拘束、硬直性、規則の拒否、精神的混乱",
                hi: "कट्टरता, बंधन, कठोरता, नियमों की अस्वीकृति, आध्यात्मिक भ्रम",
                ru: "Догматизм, рабство, жесткость, отрицание правил, духовная путаница",
                es: "Dogmatismo, esclavitud, rigidez, rechazo de reglas, confusión espiritual",
                pt: "Dogmatismo, escravidão, rigidez, rejeição de regras, confusão espiritual",
                id: "Dogmatisme, perbudakan, kekakuan, penolakan aturan, kebingungan spiritual",
                tr: "Dogmatizm, kölelik, katılık, kuralların reddedilmesi, ruhani kafa karışıklığı",
                de: "Dogmatismus, Knechtschaft, Starrheit, Ablehnung von Regeln, spirituelle Verwirrung",
                fr: "Dogmatisme, esclavage, rigidité, rejet des règles, confusion spirituelle"
            }
        }
    },
    {
        id: 6,
        name: {
            ko: "연인 (The Lovers)",
            en: "The Lovers",
            zh: "恋人",
            ja: "恋人",
            hi: "प्रेमी",
            ru: "Влюбленные",
            es: "Los Amantes",
            pt: "Os Amantes",
            id: "Para Pecinta",
            tr: "Sevgililer",
            de: "Die Liebenden",
            fr: "Les Amants"
        },
        emoji: "💕",
        meanings: {
            upright: {
                ko: "사랑, 우정, 선택, 조화, 신뢰, 관계",
                en: "Love, friendship, choice, harmony, trust, relationships",
                zh: "爱、友谊、选择、和谐、信任、关系",
                ja: "愛、友情、選択、調和、信頼、関係",
                hi: "प्रेम, दोस्ती, पसंद, सामंजस्य, विश्वास, रिश्ते",
                ru: "Любовь, дружба, выбор, гармония, доверие, отношения",
                es: "Amor, amistad, elección, armonía, confianza, relaciones",
                pt: "Amor, amizade, escolha, harmonia, confiança, relacionamentos",
                id: "Cinta, persahabatan, pilihan, harmoni, kepercayaan, hubungan",
                tr: "Aşk, dostluk, seçim, uyum, güven, ilişkiler",
                de: "Liebe, Freundschaft, Wahl, Harmonie, Vertrauen, Beziehungen",
                fr: "Amour, amitié, choix, harmonie, confiance, relations"
            },
            reversed: {
                ko: "분리, 갈등, 나쁜 선택, 신뢰 상실, 이별",
                en: "Separation, conflict, bad choice, loss of trust, breakup",
                zh: "分离、冲突、糟糕的选择、信任丧失、分手",
                ja: "分離、対立、悪い選択、信頼の喪失、別れ",
                hi: "अलगाव, संघर्ष, बुरी पसंद, विश्वास की हानि, ब्रेकअप",
                ru: "Разделение, конфликт, плохой выбор, потеря доверия, расставание",
                es: "Separación, conflicto, mala elección, pérdida de confianza, ruptura",
                pt: "Separação, conflito, má escolha, perda de confiança, rompimento",
                id: "Pemisahan, konflik, pilihan buruk, kehilangan kepercayaan, putus",
                tr: "Ayrılık, çatışma, kötü seçim, güven kaybı, ayrılık",
                de: "Trennung, Konflikt, schlechte Wahl, Vertrauensverlust, Trennung",
                fr: "Séparation, conflit, mauvais choix, perte de confiance, rupture"
            }
        }
    },
    {
        id: 7,
        name: {
            ko: "전차 (The Chariot)",
            en: "The Chariot",
            zh: "战车",
            ja: "戦車",
            hi: "रथ",
            ru: "Колесница",
            es: "El Carro",
            pt: "O Carro",
            id: "Kereta",
            tr: "Savaş Arabası",
            de: "Der Wagen",
            fr: "Le Chariot"
        },
        emoji: "🚗",
        meanings: {
            upright: {
                ko: "승리, 결단력, 의지, 진행, 통제력, 결정",
                en: "Victory, determination, willpower, progress, control, decision",
                zh: "胜利、决心、意志力、进步、控制、决定",
                ja: "勝利、決意、意志力、進展、統制力、決定",
                hi: "विजय, दृढ़ संकल्प, इच्छा शक्ति, प्रगति, नियंत्रण, निर्णय",
                ru: "Победа, решимость, воля, прогресс, контроль, решение",
                es: "Victoria, determinación, fuerza de voluntad, progreso, control, decisión",
                pt: "Vitória, determinação, força de vontade, progresso, controle, decisão",
                id: "Kemenangan, determinasi, kekuatan kehendak, kemajuan, kontrol, keputusan",
                tr: "Zafer, kararlılık, irade gücü, ilerleme, kontrol, karar",
                de: "Sieg, Entschlossenheit, Willenskraft, Fortschritt, Kontrolle, Entscheidung",
                fr: "Victoire, détermination, force de volonté, progrès, contrôle, décision"
            },
            reversed: {
                ko: "실패, 좌절, 혼란, 통제 불능, 장애, 지연",
                en: "Failure, frustration, confusion, loss of control, obstacle, delay",
                zh: "失败、挫折、困惑、失控、障碍、延迟",
                ja: "失敗、欲求不満、混乱、制御喪失、障害、遅延",
                hi: "विफलता, निराशा, भ्रम, नियंत्रण की हानि, बाधा, देरी",
                ru: "Неудача, разочарование, смешение, потеря контроля, препятствие, задержка",
                es: "Fracaso, frustración, confusión, pérdida de control, obstáculo, retraso",
                pt: "Fracasso, frustração, confusão, perda de controle, obstáculo, atraso",
                id: "Kegagalan, frustrasi, kebingungan, kehilangan kontrol, hambatan, penundaan",
                tr: "Başarısızlık, hayal kırıklığı, kafa karışıklığı, kontrol kaybı, engel, gecikme",
                de: "Niederlage, Frustration, Verwirrung, Kontrollverlust, Hindernis, Verzögerung",
                fr: "Échec, frustration, confusion, perte de contrôle, obstacle, retard"
            }
        }
    },
    {
        id: 8,
        name: {
            ko: "강인함 (Strength)",
            en: "Strength",
            zh: "力量",
            ja: "力",
            hi: "शक्ति",
            ru: "Сила",
            es: "La Fuerza",
            pt: "A Força",
            id: "Kekuatan",
            tr: "Güç",
            de: "Die Kraft",
            fr: "La Force"
        },
        emoji: "💪",
        meanings: {
            upright: {
                ko: "내적 강함, 인내심, 자제력, 긍정성, 용기",
                en: "Inner strength, endurance, self-control, positivity, courage",
                zh: "内在力量、耐力、自制力、积极性、勇气",
                ja: "内的強さ、耐久力、自制心、積極性、勇気",
                hi: "आंतरिक शक्ति, सहनशीलता, आत्मनियंत्रण, सकारात्मकता, साहस",
                ru: "Внутренняя сила, выносливость, самоконтроль, позитивность, мужество",
                es: "Fuerza interior, resistencia, autocontrol, positividad, coraje",
                pt: "Força interior, resistência, autocontrole, positividade, coragem",
                id: "Kekuatan batin, daya tahan, pengendalian diri, positività, keberanian",
                tr: "İç güç, dayanıklılık, öz kontrol, pozitiflik, cesaret",
                de: "Innere Kraft, Ausdauer, Selbstkontrolle, Positivität, Mut",
                fr: "Force intérieure, endurance, maîtrise de soi, positivité, courage"
            },
            reversed: {
                ko: "약함, 의심, 두려움, 영향에 약함, 무능",
                en: "Weakness, doubt, fear, susceptibility, incompetence",
                zh: "虚弱、怀疑、恐惧、易受影响、无能",
                ja: "弱さ、疑い、恐怖、影響への弱さ、無能",
                hi: "कमजोरी, संदेह, भय, प्रभाव के लिए अतिसंवेदनशील, अक्षमता",
                ru: "Слабость, сомнение, страх, восприимчивость, некомпетентность",
                es: "Debilidad, duda, miedo, susceptibilidad, incompetencia",
                pt: "Fraqueza, dúvida, medo, suscetibilidade, incompetência",
                id: "Kelemahan, keraguan, takut, kerentanan, ketidakmampuan",
                tr: "Zayıflık, şüphe, korku, duyarlılık, yetersizlik",
                de: "Schwäche, Zweifel, Angst, Anfälligkeit, Inkompetenz",
                fr: "Faiblesse, doute, peur, susceptibilité, incompétence"
            }
        }
    },
    {
        id: 9,
        name: {
            ko: "은둔자 (The Hermit)",
            en: "The Hermit",
            zh: "隐士",
            ja: "隠者",
            hi: "ऋषि",
            ru: "Отшельник",
            es: "El Ermitaño",
            pt: "O Eremita",
            id: "Pertapa",
            tr: "Eremit",
            de: "Der Eremit",
            fr: "L'Ermite"
        },
        emoji: "🧘",
        meanings: {
            upright: {
                ko: "내성, 명상, 진리 추구, 고독, 영적 여행, 자기성찰",
                en: "Introspection, meditation, seeking truth, solitude, spiritual journey, self-reflection",
                zh: "内省、冥想、寻求真理、孤独、精神之旅、自我反思",
                ja: "内省、瞑想、真理の探求、孤独、精神的旅、自己反省",
                hi: "आत्मचिंतन, ध्यान, सत्य की तलाश, अकेलापन, आध्यात्मिक यात्रा, आत्म प्रतिबिंब",
                ru: "Интроспекция, медитация, поиск истины, одиночество, духовное путешествие, самоанализ",
                es: "Introspección, meditación, búsqueda de la verdad, soledad, viaje espiritual, autorreflexión",
                pt: "Introspecção, meditação, busca da verdade, solidão, jornada espiritual, autorreflexão",
                id: "Introspeksi, meditasi, pencarian kebenaran, kesendirian, perjalanan spiritual, refleksi diri",
                tr: "İç gözlem, meditasyon, gerçek arayışı, yalnızlık, ruhani yolculuk, öz yansıtma",
                de: "Introspektion, Meditation, Wahrheitssuche, Einsamkeit, spirituelle Reise, Selbstreflexion",
                fr: "Introspection, méditation, quête de vérité, solitude, voyage spirituel, auto-réflexion"
            },
            reversed: {
                ko: "고립, 피신, 갇힘, 외로움, 연결 부족",
                en: "Isolation, escapism, confinement, loneliness, lack of connection",
                zh: "隔离、逃避、禁闭、孤独、缺乏联系",
                ja: "隔離、逃避、閉じ込め、孤独感、つながりの欠如",
                hi: "अलगाव, भागना, कारावास, अकेलापन, संपर्क की कमी",
                ru: "Изоляция, бегство, заключение, одиночество, отсутствие связи",
                es: "Aislamiento, escapismo, confinamiento, soledad, falta de conexión",
                pt: "Isolamento, escapismo, confinamento, solidão, falta de conexão",
                id: "Isolasi, pelarian, penahanan, kesepian, kurangnya koneksi",
                tr: "İzolasyon, kaçışçılık, hapis, yalnızlık, bağlantı eksikliği",
                de: "Isolation, Flucht, Haft, Einsamkeit, Mangel an Verbindung",
                fr: "Isolement, escapisme, confinement, solitude, manque de connexion"
            }
        }
    },
    {
        id: 10,
        name: {
            ko: "운명의 바퀴 (Wheel of Fortune)",
            en: "Wheel of Fortune",
            zh: "命运之轮",
            ja: "運命の輪",
            hi: "भाग्य का चक्र",
            ru: "Колесо Судьбы",
            es: "La Rueda del Destino",
            pt: "A Roda do Destino",
            id: "Roda Keberuntungan",
            tr: "Kader Tekerleği",
            de: "Das Schicksalsrad",
            fr: "La Roue du Destin"
        },
        emoji: "🔄",
        meanings: {
            upright: {
                ko: "운명, 운, 변화, 순환, 인과응보, 새로운 시작",
                en: "Destiny, luck, change, cycle, karma, new beginning",
                zh: "命运、运气、变化、循环、因果报应、新开始",
                ja: "運命、運、変化、循環、因果応報、新しい始まり",
                hi: "भाग्य, किस्मत, परिवर्तन, चक्र, कर्म, नई शुरुआत",
                ru: "Судьба, удача, перемена, цикл, карма, новое начало",
                es: "Destino, suerte, cambio, ciclo, karma, nuevo comienzo",
                pt: "Destino, sorte, mudança, ciclo, carma, novo começo",
                id: "Takdir, keberuntungan, perubahan, siklus, karma, awal baru",
                tr: "Kader, şans, değişim, döngü, karma, yeni başlangıç",
                de: "Schicksal, Glück, Veränderung, Zyklus, Karma, Neubeginn",
                fr: "Destin, chance, changement, cycle, karma, nouveau commencement"
            },
            reversed: {
                ko: "불운, 통제 불능, 악순환, 지연, 비틀린 운명",
                en: "Misfortune, uncontrollable change, bad cycle, delay, twisted fate",
                zh: "不幸、无法控制的变化、恶性循环、延迟、扭曲的命运",
                ja: "不運、制御不能な変化、悪循環、遅延、ねじ曲がった運命",
                hi: "दुर्भाग्य, अनियंत्रणीय परिवर्तन, बुरा चक्र, देरी, विकृत भाग्य",
                ru: "Беда, неконтролируемое изменение, порочный круг, задержка, искаженная судьба",
                es: "Mala fortuna, cambio incontrolable, ciclo negativo, retraso, destino retorcido",
                pt: "Má sorte, mudança incontrolável, ciclo negativo, atraso, destino distorcido",
                id: "Kemalangan, perubahan tak terkendali, siklus buruk, penundaan, takdir yang terdistorsi",
                tr: "Sefalet, kontrol edilemeyen değişim, kötü döngü, gecikme, çarpık kader",
                de: "Unglück, unkontrollierbare Veränderung, böser Kreislauf, Verzögerung, verzerrtes Schicksal",
                fr: "Malchance, changement incontrôlable, mauvais cycle, retard, destin déformé"
            }
        }
    },
    {
        id: 11,
        name: {
            ko: "정의 (Justice)",
            en: "Justice",
            zh: "正义",
            ja: "正義",
            hi: "न्याय",
            ru: "Справедливость",
            es: "La Justicia",
            pt: "A Justiça",
            id: "Keadilan",
            tr: "Adalet",
            de: "Die Gerechtigkeit",
            fr: "La Justice"
        },
        emoji: "⚖️",
        meanings: {
            upright: {
                ko: "정의, 공정성, 책임, 진실, 균형, 법적 문제",
                en: "Justice, fairness, accountability, truth, balance, legal matters",
                zh: "正义、公平、责任、真理、平衡、法律事项",
                ja: "正義、公平性、説明責任、真実、バランス、法的問題",
                hi: "न्याय, निष्पक्षता, जवाबदेही, सत्य, संतुलन, कानूनी मामले",
                ru: "Справедливость, честность, ответственность, истина, баланс, юридические вопросы",
                es: "Justicia, equidad, responsabilidad, verdad, equilibrio, asuntos legales",
                pt: "Justiça, equidade, responsabilidade, verdade, equilíbrio, assuntos legais",
                id: "Keadilan, keadilan, akuntabilitas, kebenaran, keseimbangan, masalah hukum",
                tr: "Adalet, tarafsızlık, hesap verebilirlik, gerçek, denge, yasal konular",
                de: "Gerechtigkeit, Fairness, Rechenschaftspflicht, Wahrheit, Gleichgewicht, Rechtsfragen",
                fr: "Justice, équité, responsabilité, vérité, équilibre, affaires juridiques"
            },
            reversed: {
                ko: "부정의, 편견, 거짓, 불균형, 법적 문제, 부패",
                en: "Injustice, bias, dishonesty, imbalance, legal trouble, corruption",
                zh: "不公正、偏见、不诚实、不平衡、法律麻烦、腐败",
                ja: "不公正、偏見、不誠実、不均衡、法的問題、腐敗",
                hi: "अन्याय, पूर्वाग्रह, बेईमानी, असंतुलन, कानूनी समस्या, भ्रष्टाचार",
                ru: "Несправедливость, предвзятость, бесчестность, дисбаланс, правовые проблемы, коррупция",
                es: "Injusticia, prejuicio, deshonestidad, desequilibrio, problemas legales, corrupción",
                pt: "Injustiça, preconceito, desonestidade, desequilíbrio, problemas legais, corrupção",
                id: "Ketidakadilan, bias, ketidakjujuran, ketidakseimbangan, masalah hukum, korupsi",
                tr: "Adaletsizlik, önyargı, dürüstlüksüzlük, dengesizlik, yasal sorun, yolsuzluk",
                de: "Ungerechtigkeit, Voreingenommenheit, Unehrlichkeit, Unausgeglichenheit, Rechtsprobleme, Korruption",
                fr: "Injustice, préjugé, malhonnêteté, déséquilibre, problèmes juridiques, corruption"
            }
        }
    },
    {
        id: 12,
        name: {
            ko: "매달린 자 (The Hanged Man)",
            en: "The Hanged Man",
            zh: "吊人",
            ja: "吊られた男",
            hi: "लटका हुआ आदमी",
            ru: "Повешенный",
            es: "El Colgado",
            pt: "O Enforcado",
            id: "Orang Tergantung",
            tr: "Asılı Adam",
            de: "Der Gehängte",
            fr: "Le Pendu"
        },
        emoji: "🔗",
        meanings: {
            upright: {
                ko: "희생, 관점 변화, 영적 성숙, 일시 정지, 인내심",
                en: "Sacrifice, change of perspective, spiritual maturity, suspension, patience",
                zh: "牺牲、视角改变、精神成熟、暂停、耐心",
                ja: "犠牲、視点の変化、精神的成熟、一時停止、忍耐",
                hi: "बलिदान, दृष्टिकोण में परिवर्तन, आध्यात्मिक परिपक्वता, निलंबन, धैर्य",
                ru: "Жертва, изменение перспективы, духовная зрелость, приостановка, терпение",
                es: "Sacrificio, cambio de perspectiva, madurez espiritual, suspensión, paciencia",
                pt: "Sacrifício, mudança de perspectiva, maturidade espiritual, suspensão, paciência",
                id: "Pengorbanan, perubahan perspektif, kedewasaan spiritual, suspensi, kesabaran",
                tr: "Kurban, perspektif değişimi, ruhani olgunluk, askıya alma, sabır",
                de: "Opfer, Perspektivwechsel, spirituelle Reife, Aussetzung, Geduld",
                fr: "Sacrifice, changement de perspective, maturité spirituelle, suspension, patience"
            },
            reversed: {
                ko: "극기 거부, 집착, 정체, 무의미한 희생, 자해",
                en: "Refusal to sacrifice, attachment, stagnation, meaningless sacrifice, self-harm",
                zh: "拒绝牺牲、执着、停滞、无意义的牺牲、自伤",
                ja: "犠牲の拒否、執着、停滞、無意味な犠牲、自傷",
                hi: "बलिदान से इनकार, आसक्ति, ठहराव, अर्थहीन बलिदान, आत्मनुकसान",
                ru: "Отказ жертвовать, привязанность, стагнация, бессмысленная жертва, членовредительство",
                es: "Negación del sacrificio, apego, estancamiento, sacrificio sin sentido, automutilación",
                pt: "Recusa em sacrificar, apego, estagnação, sacrifício sem sentido, automutilação",
                id: "Penolakan untuk mengorbankan, keterikatan, stagnasi, pengorbanan yang tidak bermakna, self-harm",
                tr: "Kurban vermeyi reddetme, bağlılık, durgunluk, anlamsız kurban, kişiye zarar verme",
                de: "Verweigerung des Opfers, Bindung, Stagnation, sinnloses Opfer, Selbstverletzung",
                fr: "Refus de sacrifier, attachement, stagnation, sacrifice vide de sens, automutilation"
            }
        }
    },
    {
        id: 13,
        name: {
            ko: "죽음 (Death)",
            en: "Death",
            zh: "死亡",
            ja: "死",
            hi: "मृत्यु",
            ru: "Смерть",
            es: "La Muerte",
            pt: "A Morte",
            id: "Kematian",
            tr: "Ölüm",
            de: "Der Tod",
            fr: "La Mort"
        },
        emoji: "💀",
        meanings: {
            upright: {
                ko: "변화, 변환, 끝과 시작, 갱신, 새 장, 성장",
                en: "Transformation, change, ending and beginning, renewal, new chapter, growth",
                zh: "变化、转变、结束与开始、更新、新篇章、增长",
                ja: "変化、変容、終わりと始まり、更新、新しい章、成長",
                hi: "परिवर्तन, रूपांतरण, अंत और शुरुआत, नवीकरण, नया अध्याय, वृद्धि",
                ru: "Трансформация, изменение, конец и начало, обновление, новая глава, рост",
                es: "Transformación, cambio, fin y comienzo, renovación, nuevo capítulo, crecimiento",
                pt: "Transformação, mudança, fim e começo, renovação, novo capítulo, crescimento",
                id: "Transformasi, perubahan, akhir dan awal, pembaruan, bab baru, pertumbuhan",
                tr: "Dönüşüm, değişim, son ve başlangıç, yenileme, yeni bölüm, büyüme",
                de: "Transformation, Veränderung, Ende und Anfang, Erneuerung, neues Kapitel, Wachstum",
                fr: "Transformation, changement, fin et commencement, renouvellement, nouveau chapitre, croissance"
            },
            reversed: {
                ko: "거부, 저항, 연기, 정체, 두려움, 무언가 끝나지 않음",
                en: "Resistance, refusal, delay, stagnation, fear, something not ending",
                zh: "抵抗、拒绝、延迟、停滞、恐惧、某事未结束",
                ja: "抵抗、拒否、遅延、停滞、恐怖、何かが終わらない",
                hi: "प्रतिरोध, इनकार, देरी, ठहराव, भय, कुछ समाप्त नहीं हो रहा है",
                ru: "Сопротивление, отказ, задержка, стагнация, страх, что-то не заканчивается",
                es: "Resistencia, negación, retraso, estancamiento, miedo, algo que no termina",
                pt: "Resistência, negação, atraso, estagnação, medo, algo que não termina",
                id: "Perlawanan, penolakan, penundaan, stagnasi, ketakutan, sesuatu yang tidak berakhir",
                tr: "Direnç, inkar, gecikme, durgunluk, korku, bir şey bitmez",
                de: "Widerstand, Verneinung, Verzögerung, Stagnation, Angst, etwas, das nicht endet",
                fr: "Résistance, refus, retard, stagnation, peur, quelque chose qui ne finit pas"
            }
        }
    },
    {
        id: 14,
        name: {
            ko: "절제 (Temperance)",
            en: "Temperance",
            zh: "节制",
            ja: "節制",
            hi: "संयम",
            ru: "Умеренность",
            es: "La Templanza",
            pt: "A Temperança",
            id: "Kesederhanaan",
            tr: "İtidal",
            de: "Die Mäßigung",
            fr: "La Tempérance"
        },
        emoji: "⚗️",
        meanings: {
            upright: {
                ko: "균형, 조화, 신중함, 절제, 평온, 내적 평화",
                en: "Balance, harmony, caution, moderation, tranquility, inner peace",
                zh: "平衡、和谐、谨慎、节制、平静、内心平和",
                ja: "バランス、調和、注意、節制、平穏、内的平和",
                hi: "संतुलन, सामंजस्य, सावधानी, संयम, शांति, आंतरिक शांति",
                ru: "Баланс, гармония, осторожность, умеренность, спокойствие, внутренний мир",
                es: "Equilibrio, armonía, cautela, templanza, tranquilidad, paz interior",
                pt: "Equilíbrio, harmonia, cautela, moderação, tranquilidade, paz interior",
                id: "Keseimbangan, harmoni, hati-hati, moderasi, ketenangan, kedamaian batin",
                tr: "Denge, uyum, dikkat, itidal, huzur, iç barış",
                de: "Balance, Harmonie, Vorsicht, Mäßigung, Ruhe, innerer Frieden",
                fr: "Équilibre, harmonie, prudence, tempérance, tranquillité, paix intérieure"
            },
            reversed: {
                ko: "불균형, 과잉, 충돌, 극단, 무절제, 혼란",
                en: "Imbalance, excess, conflict, extremes, immoderation, chaos",
                zh: "不平衡、过度、冲突、极端、无节制、混乱",
                ja: "不均衡、過剰、対立、極端、無節制、混乱",
                hi: "असंतुलन, अत्यधिकता, संघर्ष, चरम, अधिकता, अराजकता",
                ru: "Дисбаланс, избыток, конфликт, экстремизм, невоздержанность, хаос",
                es: "Desequilibrio, exceso, conflicto, extremos, intemperancia, caos",
                pt: "Desequilíbrio, excesso, conflito, extremos, intemperança, caos",
                id: "Ketidakseimbangan, kelebihan, konflik, ekstrem, ketidakadilan, kekacauan",
                tr: "Dengesizlik, aşırılık, çatışma, uçlar, ılımlılık, kaos",
                de: "Unausgeglichenheit, Übermaß, Konflikt, Extreme, Unmäßigkeit, Chaos",
                fr: "Déséquilibre, excès, conflit, extrêmes, intempérance, chaos"
            }
        }
    },
    {
        id: 15,
        name: {
            ko: "악마 (The Devil)",
            en: "The Devil",
            zh: "魔鬼",
            ja: "悪魔",
            hi: "राक्षस",
            ru: "Дьявол",
            es: "El Diablo",
            pt: "O Diabo",
            id: "Setan",
            tr: "Şeytan",
            de: "Der Teufel",
            fr: "Le Diable"
        },
        emoji: "😈",
        meanings: {
            upright: {
                ko: "속박, 중독, 어두운 면, 재물욕, 육욕, 제약",
                en: "Bondage, addiction, shadow self, materialism, lust, limitation",
                zh: "奴役、成瘾、阴影自我、物质主义、欲望、局限性",
                ja: "奴隷化、依存、影の自己、物質主義、欲望、制限",
                hi: "बंधन, लत, छाया स्व, भौतिकवाद, इच्छा, सीमा",
                ru: "Рабство, зависимость, теневое я, материализм, похоть, ограничение",
                es: "Esclavitud, adicción, yo sombra, materialismo, lujuria, limitación",
                pt: "Escravidão, vício, eu sombra, materialismo, luxúria, limitação",
                id: "Perbudakan, kecanduan, bayangan diri, materialisme, nafsu, pembatasan",
                tr: "Kölelik, bağımlılık, gölge benlik, materyalizm, şehvet, sınırlama",
                de: "Sklaverei, Sucht, Schattenselbst, Materialismus, Lust, Begrenzung",
                fr: "Esclavage, addiction, ombre de soi, matérialisme, luxure, limitation"
            },
            reversed: {
                ko: "해방, 중독 극복, 자유, 진실의 깨달음, 통제 회복",
                en: "Liberation, breaking free, freedom, realization of truth, regaining control",
                zh: "解放、摆脱、自由、真理的认识、恢复控制",
                ja: "解放、脱出、自由、真実の認識、支配力の回復",
                hi: "मुक्ति, आजादी, स्वतंत्रता, सत्य का बोध, नियंत्रण का पुनरुद्धार",
                ru: "Освобождение, разрыв цепей, свобода, осознание истины, восстановление контроля",
                es: "Liberación, libertad, realización de la verdad, recuperación del control",
                pt: "Libertação, liberdade, realização da verdade, recuperação do controle",
                id: "Pembebasan, kebebasan, kesadaran kebenaran, pemulihan kontrol",
                tr: "Kurtuluş, özgürlük, gerçek bilinci, kontrolü geri kazanma",
                de: "Befreiung, Freiheit, Wahrheitserkenntnis, Kontrolle zurückgewinnen",
                fr: "Libération, liberté, réalisation de la vérité, reprise de contrôle"
            }
        }
    },
    {
        id: 16,
        name: {
            ko: "탑 (The Tower)",
            en: "The Tower",
            zh: "高塔",
            ja: "塔",
            hi: "मीनार",
            ru: "Башня",
            es: "La Torre",
            pt: "A Torre",
            id: "Menara",
            tr: "Kule",
            de: "Der Turm",
            fr: "La Tour"
        },
        emoji: "🗼",
        meanings: {
            upright: {
                ko: "파괴, 급변, 혼란, 위기, 폭로, 변혁적 사건",
                en: "Destruction, sudden change, chaos, crisis, revelation, transformative event",
                zh: "破坏、突然变化、混乱、危机、启示、变革性事件",
                ja: "破壊、急速な変化、混乱、危機、啓示、変革的出来事",
                hi: "विनाश, अचानक परिवर्तन, अराजकता, संकट, रहस्योद्घाटन, परिवर्तनकारी घटना",
                ru: "Разрушение, внезапное изменение, хаос, кризис, откровение, преобразующее событие",
                es: "Destrucción, cambio repentino, caos, crisis, revelación, evento transformador",
                pt: "Destruição, mudança repentina, caos, crise, revelação, evento transformador",
                id: "Kehancuran, perubahan mendadak, kekacauan, krisis, wahyu, peristiwa transformatif",
                tr: "Yıkım, ani değişim, kaos, kriz, vahiy, dönüştürücü olay",
                de: "Zerstörung, plötzliche Veränderung, Chaos, Krise, Offenbarung, transformatives Ereignis",
                fr: "Destruction, changement soudain, chaos, crise, révélation, événement transformateur"
            },
            reversed: {
                ko: "부분적 붕괴, 문제 축소, 변화 저항, 숨겨진 문제",
                en: "Partial collapse, minimizing problem, resisting change, hidden issue",
                zh: "部分崩溃、问题最小化、抵抗变化、隐藏问题",
                ja: "部分的な崩壊、問題の過小評価、変化への抵抗、隠された問題",
                hi: "आंशिक पतन, समस्या को कम करना, परिवर्तन का प्रतिरोध, छिपी समस्या",
                ru: "Частичное разрушение, минимизация проблемы, сопротивление изменениям, скрытая проблема",
                es: "Colapso parcial, minimización del problema, resistencia al cambio, problema oculto",
                pt: "Colapso parcial, minimização do problema, resistência à mudança, problema oculto",
                id: "Keruntuhan parsial, meminimalkan masalah, melawan perubahan, masalah tersembunyi",
                tr: "Kısmi çöküş, sorunu minimize etme, değişime direnme, gizli sorun",
                de: "Teilweise Zerstörung, Probleminimierung, Widerstand gegen Veränderung, verstecktes Problem",
                fr: "Effondrement partiel, minimisation du problème, résistance aux changements, problème caché"
            }
        }
    },
    {
        id: 17,
        name: {
            ko: "별 (The Star)",
            en: "The Star",
            zh: "星星",
            ja: "星",
            hi: "तारा",
            ru: "Звезда",
            es: "La Estrella",
            pt: "A Estrela",
            id: "Bintang",
            tr: "Yıldız",
            de: "Der Stern",
            fr: "L'Étoile"
        },
        emoji: "⭐",
        meanings: {
            upright: {
                ko: "희망, 영감, 긍정, 신앙, 꿈, 밝은 미래, 영적 인도",
                en: "Hope, inspiration, positivity, faith, dreams, bright future, spiritual guidance",
                zh: "希望、灵感、积极性、信仰、梦想、光明未来、精神指导",
                ja: "希望、インスピレーション、ポジティブさ、信仰、夢、輝かしい未来、精神的指導",
                hi: "आशा, प्रेरणा, सकारात्मकता, विश्वास, सपने, उज्ज्वल भविष्य, आध्यात्मिक मार्गदर्शन",
                ru: "Надежда, вдохновение, позитивность, вера, мечты, светлое будущее, духовное руководство",
                es: "Esperanza, inspiración, positividad, fe, sueños, futuro brillante, guía espiritual",
                pt: "Esperança, inspiração, positividade, fé, sonhos, futuro brilhante, orientação espiritual",
                id: "Harapan, inspirasi, positifitas, iman, mimpi, masa depan cerah, panduan spiritual",
                tr: "Umut, ilham, pozitivite, inanç, rüyalar, parlak gelecek, ruhani rehberlik",
                de: "Hoffnung, Inspiration, Positivität, Glaube, Träume, glänzende Zukunft, spirituelle Führung",
                fr: "Espoir, inspiration, positivité, foi, rêves, avenir brillant, orientation spirituelle"
            },
            reversed: {
                ko: "절망, 의심, 상실감, 영감 부족, 어두운 미래",
                en: "Despair, doubt, loss of faith, lack of inspiration, dark future",
                zh: "绝望、怀疑、信仰丧失、缺乏灵感、黑暗未来",
                ja: "絶望、疑い、信仰の喪失、インスピレーションの欠如、暗い未来",
                hi: "निराशा, संदेह, विश्वास की हानि, प्रेरणा की कमी, अंधकारमय भविष्य",
                ru: "Отчаяние, сомнение, потеря веры, отсутствие вдохновения, темное будущее",
                es: "Desesperación, duda, pérdida de fe, falta de inspiración, futuro oscuro",
                pt: "Desespero, dúvida, perda de fé, falta de inspiração, futuro escuro",
                id: "Keputusasaan, keraguan, kehilangan iman, kurangnya inspirasi, masa depan gelap",
                tr: "Umutsuzluk, şüphe, inanç kaybı, ilham eksikliği, karanlık gelecek",
                de: "Verzweiflung, Zweifel, Glaubensverlust, Inspirationsmangel, düstere Zukunft",
                fr: "Désespoir, doute, perte de foi, manque d'inspiration, avenir sombre"
            }
        }
    },
    {
        id: 18,
        name: {
            ko: "달 (The Moon)",
            en: "The Moon",
            zh: "月亮",
            ja: "月",
            hi: "चंद्रमा",
            ru: "Луна",
            es: "La Luna",
            pt: "A Lua",
            id: "Bulan",
            tr: "Ay",
            de: "Der Mond",
            fr: "La Lune"
        },
        emoji: "🌙",
        meanings: {
            upright: {
                ko: "직관, 꿈, 환상, 불안, 속임수, 무의식, 여성성",
                en: "Intuition, dreams, illusion, anxiety, deception, subconscious, femininity",
                zh: "直觉、梦想、幻觉、焦虑、欺骗、潜意识、女性气质",
                ja: "直感、夢、幻覚、不安、欺瞞、潜在意識、女性性",
                hi: "अंतर्ज्ञान, सपने, भ्रम, चिंता, धोखाधड़ी, अवचेतन, महिलापन",
                ru: "Интуиция, мечты, иллюзия, тревога, обман, подсознание, женственность",
                es: "Intuición, sueños, ilusión, ansiedad, engaño, subconsciente, feminidad",
                pt: "Intuição, sonhos, ilusão, ansiedade, engano, subconsciente, feminilidade",
                id: "Intuisi, mimpi, ilusi, kecemasan, penipuan, bawah sadar, femininitas",
                tr: "Sezgi, rüyalar, hayal, kaygı, aldatma, bilinçaltı, kadınlık",
                de: "Intuition, Träume, Illusion, Angst, Täuschung, Unterbewusstsein, Weiblichkeit",
                fr: "Intuition, rêves, illusion, anxiété, tromperie, subconscient, féminité"
            },
            reversed: {
                ko: "명확함, 진실 드러남, 직관 상실, 환상에서 깨어남, 혼란 해소",
                en: "Clarity, truth revealed, loss of intuition, awakening from illusion, confusion cleared",
                zh: "清晰、真相大白、直觉丧失、从幻觉中醒来、困惑消除",
                ja: "明確さ、真実の明露、直感の喪失、幻想からの目覚め、混乱解消",
                hi: "स्पष्टता, सत्य का खुलासा, सहज ज्ञान की हानि, भ्रम से जागरण, भ्रम निवारण",
                ru: "Ясность, раскрытие истины, потеря интуиции, пробуждение от иллюзии, развеивание путаницы",
                es: "Claridad, verdad revelada, pérdida de intuición, despertar de la ilusión, confusión aclarada",
                pt: "Clareza, verdade revelada, perda de intuição, despertar da ilusão, confusão esclarecida",
                id: "Kejelasan, kebenaran terbongkar, kehilangan intuisi, kebangkitan dari ilusi, kebingungan teratasi",
                tr: "Netlik, gerçek ortaya çıkması, sezginin kaybı, sanrıdan uyanış, karışıklık giderilmesi",
                de: "Klarheit, Wahrheitsenthüllung, Intuitionsverlust, Erwachen aus Illusion, Verwirrung geklärt",
                fr: "Clarté, vérité révélée, perte d'intuition, réveil de l'illusion, confusion clarifiée"
            }
        }
    },
    {
        id: 19,
        name: {
            ko: "태양 (The Sun)",
            en: "The Sun",
            zh: "太阳",
            ja: "太陽",
            hi: "सूरज",
            ru: "Солнце",
            es: "El Sol",
            pt: "O Sol",
            id: "Matahari",
            tr: "Güneş",
            de: "Die Sonne",
            fr: "Le Soleil"
        },
        emoji: "☀️",
        meanings: {
            upright: {
                ko: "성공, 기쁨, 활력, 긍정, 명확함, 영광, 행복",
                en: "Success, joy, vitality, positivity, clarity, glory, happiness",
                zh: "成功、快乐、活力、积极性、清晰性、荣耀、幸福",
                ja: "成功、喜び、活力、ポジティブさ、明確さ、栄光、幸福",
                hi: "सफलता, खुशी, जीवन शक्ति, सकारात्मकता, स्पष्टता, महिमा, सुख",
                ru: "Успех, радость, жизненная сила, позитивность, ясность, слава, счастье",
                es: "Éxito, alegría, vitalidad, positividad, claridad, gloria, felicidad",
                pt: "Sucesso, alegria, vitalidade, positividade, clareza, glória, felicidade",
                id: "Kesuksesan, kegembiraan, vitalitas, positifitas, kejelasan, kemuliaan, kebahagiaan",
                tr: "Başarı, sevinç, yaşam gücü, pozitifite, netlik, ün, mutluluk",
                de: "Erfolg, Freude, Vitalität, Positivität, Klarheit, Ruhm, Glück",
                fr: "Succès, joie, vitalité, positivité, clarté, gloire, bonheur"
            },
            reversed: {
                ko: "좌절, 우울함, 약점, 부정성, 지연, 곤경",
                en: "Frustration, sadness, weakness, negativity, delay, hardship",
                zh: "沮丧、悲伤、虚弱、消极性、延迟、困难",
                ja: "イライラ、悲しみ、弱さ、ネガティビティ、遅延、困難",
                hi: "निराशा, उदासी, कमजोरी, नकारात्मकता, देरी, कठिनाई",
                ru: "Разочарование, грусть, слабость, негативность, задержка, невзгоды",
                es: "Frustración, tristeza, debilidad, negatividad, retraso, dificultad",
                pt: "Frustração, tristeza, fraqueza, negatividade, atraso, dificuldade",
                id: "Frustrasi, kesedihan, kelemahan, negativitas, keterlambatan, kesulitan",
                tr: "Hayal kırıklığı, üzüntü, zayıflık, olumsuzluk, gecikme, zorluk",
                de: "Frustration, Traurigkeit, Schwäche, Negativität, Verzögerung, Mühsal",
                fr: "Frustration, tristesse, faiblesse, négativité, retard, adversité"
            }
        }
    },
    {
        id: 20,
        name: {
            ko: "심판 (Judgement)",
            en: "Judgement",
            zh: "审判",
            ja: "審判",
            hi: "फैसला",
            ru: "Суд",
            es: "El Juicio",
            pt: "O Julgamento",
            id: "Penghakiman",
            tr: "Yargılama",
            de: "Das Gericht",
            fr: "Le Jugement"
        },
        emoji: "⚖️",
        meanings: {
            upright: {
                ko: "소명, 심판, 각성, 재평가, 선택, 새로운 시작, 깨달음",
                en: "Calling, judgment, awakening, evaluation, choice, new beginning, enlightenment",
                zh: "天职、审判、觉醒、评估、选择、新开始、启蒙",
                ja: "天職、審判、覚醒、評価、選択、新しい始まり、悟り",
                hi: "बुलाहट, फैसला, जागरण, मूल्यांकन, पसंद, नई शुरुआत, ज्ञान",
                ru: "Призвание, суд, пробуждение, оценка, выбор, новое начало, просветление",
                es: "Vocación, juicio, despertar, evaluación, elección, nuevo comienzo, iluminación",
                pt: "Vocação, julgamento, despertar, avaliação, escolha, novo começo, iluminação",
                id: "Panggilan, penghakiman, kebangkitan, evaluasi, pilihan, awal baru, pencerahan",
                tr: "Çağrı, yargılama, uyanış, değerlendirme, seçim, yeni başlangıç, aydınlanma",
                de: "Berufung, Urteil, Erwachen, Bewertung, Wahl, Neubeginn, Erleuchtung",
                fr: "Appel, jugement, réveil, évaluation, choix, nouveau commencement, illumination"
            },
            reversed: {
                ko: "자기 의심, 판단 거부, 미루기, 회피, 깨달음 지연",
                en: "Self-doubt, refusal to judge, procrastination, avoidance, delayed awakening",
                zh: "自我怀疑、拒绝判断、拖延、回避、延迟觉醒",
                ja: "自己不信、判断の拒否、先延ばし、回避、覚醒の遅延",
                hi: "आत्म संदेह, निर्णय का इनकार, विलंब, परहेज, जागरण में देरी",
                ru: "Самомнение, отказ судить, прокрастинация, избегание, отложенное пробуждение",
                es: "Dudas sobre uno mismo, negación de la sentencia, procrastinación, evasión, despertar retrasado",
                pt: "Dúvida de si mesmo, negação do julgamento, procrastinação, evasão, despertar atrasado",
                id: "Keraguan diri, penolakan untuk menghakimi, penundaan, penghindaran, kebangkitan tertunda",
                tr: "Kendine şüphe, yargılamayı reddetme, erteleme, kaçınma, gecikmeli uyanış",
                de: "Selbstzweifel, Urteilsverweigerung, Aufschub, Vermeidung, verspätetes Erwachen",
                fr: "Doute de soi, refus de juger, procrastination, évasion, réveil retardé"
            }
        }
    },
    {
        id: 21,
        name: {
            ko: "세계 (The World)",
            en: "The World",
            zh: "世界",
            ja: "世界",
            hi: "दुनिया",
            ru: "Мир",
            es: "El Mundo",
            pt: "O Mundo",
            id: "Dunia",
            tr: "Dünya",
            de: "Die Welt",
            fr: "Le Monde"
        },
        emoji: "🌍",
        meanings: {
            upright: {
                ko: "완성, 순환 완료, 성취, 성공, 여행, 통일, 완전함",
                en: "Completion, cycle completion, achievement, success, travel, unity, wholeness",
                zh: "完成、循环完成、成就、成功、旅行、统一、完整性",
                ja: "完成、サイクル完了、達成、成功、旅行、統一、全体性",
                hi: "पूर्णता, चक्र पूर्णता, उपलब्धि, सफलता, यात्रा, एकता, समग्रता",
                ru: "Завершение, завершение цикла, достижение, успех, путешествие, единство, целостность",
                es: "Finalización, finalización del ciclo, logro, éxito, viaje, unidad, totalidad",
                pt: "Conclusão, conclusão do ciclo, realização, sucesso, viagem, unidade, totalidade",
                id: "Penyelesaian, penyelesaian siklus, prestasi, kesuksesan, perjalanan, kesatuan, keutuhan",
                tr: "Tamamlama, döngü tamamlama, başarı, başarı, seyahat, birlik, bütünlük",
                de: "Abschluss, Zyklus-Abschluss, Erreichung, Erfolg, Reise, Einheit, Ganzheit",
                fr: "Accomplissement, achèvement du cycle, réussite, succès, voyage, unité, totalité"
            },
            reversed: {
                ko: "미완성, 지연, 불완전함, 갈등, 새로운 시작 거부",
                en: "Incompletion, delay, imperfection, conflict, unwillingness to move forward",
                zh: "未完成、延迟、不完美、冲突、不愿向前推进",
                ja: "未完成、遅延、不完全性、対立、前進の不本意",
                hi: "अधूरापन, विलंब, अपूर्णता, संघर्ष, आगे बढ़ने की अनिच्छा",
                ru: "Незавершённость, задержка, несовершенство, конфликт, нежелание идти дальше",
                es: "Incompletud, retraso, imperfección, conflicto, falta de voluntad para avanzar",
                pt: "Incompletude, atraso, imperfeição, conflito, falta de vontade de avançar",
                id: "Ketidaklengkapan, penundaan, ketidaksempurnaan, konflik, ketidakbersediaan untuk maju",
                tr: "Eksiklik, gecikme, kusursuzluk, çatışma, ilerlemeye isteksizlik",
                de: "Unvollständigkeit, Verzögerung, Unvollkommenheit, Konflikt, Unwillingness zum Weitermachen",
                fr: "Inachèvement, retard, imperfection, conflit, réticence à avancer"
            }
        }
    }
];

// Helper function to get random card
function getRandomTarotCard() {
    return TAROT_CARDS[Math.floor(Math.random() * TAROT_CARDS.length)];
}

// Helper function to get random cards for spread
function getRandomTarotCards(count = 3) {
    const selected = [];
    const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
    for (let i = 0; i < count && i < shuffled.length; i++) {
        selected.push(shuffled[i]);
    }
    return selected;
}

// Helper function to get card by index
function getTarotCardById(id) {
    return TAROT_CARDS.find(card => card.id === id);
}
