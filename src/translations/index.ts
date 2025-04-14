/**
 * Translation system for the application
 * Contains all text strings organized by language
 */

import { Language } from '@/utils/i18n'

// Define the structure of our translations
type TranslationKeys = {
  common: {
    login: string
    logout: string
    back: string
    loading: string
    error: string
    success: string
  }
  home: {
    title: string
    sendEth: string
    transactionSuccess: string
    transactionFailed: string
    notConnected: string
    insufficientBalance: string
    chatButton: string
    contactButton: string
    bioButton: string
  }
  navigation: {
    contactUs: string
    awesome: string
    chat: string
    bio: string
  }
  contact: {
    title: string
    github: string
    farcaster: string
    element: string
    status: string
    telegram: string
    twitter: string
    discord: string
    linkedin: string
    schedule: string
    meetingDuration: string
  }
  chat: {
    title: string
    welcomeMessage: string
    inputPlaceholder: string
    sendButton: string
    errorMessage: string
    rateLimitMessage: string
  }
  resume: {
    title: string
    download: string
    openInNewTab: string
    loading: string
  }
}

// Define translations for each supported language
type Translations = {
  [key in Language]: TranslationKeys
}

export const translations: Translations = {
  // English
  en: {
    common: {
      login: 'Login',
      logout: 'Logout',
      back: 'Back',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
    home: {
      title: 'Hello world!',
      sendEth: 'Send 0.0001 ETH to self',
      transactionSuccess: 'Transaction successful',
      transactionFailed: 'Transaction failed',
      notConnected: 'Please connect your wallet',
      insufficientBalance: 'Please connect with an account that has a bit of ETH',
      chatButton: 'Chat with my assistant',
      contactButton: 'Get in touch',
      bioButton: 'Read full bio',
    },
    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
      chat: 'Chat',
      bio: 'Bio',
    },
    contact: {
      title: 'Get in Touch',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'Schedule a Call',
      meetingDuration: '30 min meeting',
    },
    chat: {
      title: 'Chat with Assistant',
      welcomeMessage:
        "Hello! I'm Francesca, Julien's faithful assistant. What do you need to know about him?",
      inputPlaceholder: 'Can Julien help me build an app or API?',
      sendButton: 'Send',
      errorMessage:
        'Sorry, there was an error processing your request. Please try again a bit later.',
      rateLimitMessage: 'Sorry, you reached the limit. Please come back in one hour.',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Mandarin Chinese
  zh: {
    common: {
      login: '登录',
      logout: '登出',
      back: '返回',
      loading: '加载中...',
      error: '错误',
      success: '成功',
    },
    home: {
      title: '你好，世界！',
      sendEth: '向自己发送 0.0001 ETH',
      transactionSuccess: '交易成功',
      transactionFailed: '交易失败',
      notConnected: '请连接您的钱包',
      insufficientBalance: '请使用拥有一些 ETH 的账户连接',
      chatButton: '与我的助手聊天',
      contactButton: '直接联系我！',
      bioButton: '阅读完整简历',
    },
    navigation: {
      awesome: '资源',
      contactUs: '联系我们',
      chat: '聊天',
      bio: '简历',
    },
    contact: {
      title: '联系我们',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: '安排通话',
      meetingDuration: '30分钟会议',
    },
    chat: {
      title: '与助手对话',
      welcomeMessage: '你好！我是Francesca，Julien的忠实助手。你想了解他的什么？',
      inputPlaceholder: 'Julien能帮我开发应用或API吗？',
      sendButton: '发送',
      errorMessage: '抱歉，处理您的请求时出错。请稍后再试。',
      rateLimitMessage: '抱歉，您已达到限制。请一小时后再来。',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Hindi
  hi: {
    common: {
      login: 'लॉगिन',
      logout: 'लॉगआउट',
      back: 'पीछे',
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
    },
    home: {
      title: 'नमस्ते दुनिया!',
      sendEth: 'स्वयं को 0.0001 ETH भेजें',
      transactionSuccess: 'लेन-देन सफल',
      transactionFailed: 'लेन-देन विफल',
      notConnected: 'कृपया अपना वॉलेट कनेक्ट करें',
      insufficientBalance: 'कृपया ऐसे खाते से कनेक्ट करें जिसमें थोड़ा ETH हो',
      chatButton: 'मेरे सहायक से चैट करें',
      contactButton: 'सीधे बात करें!',
      bioButton: 'पूरा परिचय पढ़ें',
    },
    navigation: {
      awesome: 'संसाधन',
      contactUs: 'संपर्क करें',
      chat: 'चैट',
      bio: 'परिचय',
    },
    contact: {
      title: 'संपर्क करें',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'कॉल शेड्यूल करें',
      meetingDuration: '30 मिनट की मीटिंग',
    },
    chat: {
      title: 'सहायक से चैट करें',
      welcomeMessage:
        'नमस्ते! मैं Francesca हूँ, Julien की विश्वसनीय सहायक। आप उनके बारे में क्या जानना चाहते हैं?',
      inputPlaceholder: 'क्या Julien मुझे ऐप या API बनाने में मदद कर सकते हैं?',
      sendButton: 'भेजें',
      errorMessage:
        'क्षमा करें, आपके अनुरोध को संसाधित करने में एक त्रुटि हुई। कृपया थोड़ी देर बाद फिर से प्रयास करें।',
      rateLimitMessage: 'क्षमा करें, आप सीमा तक पहुंच गए हैं। कृपया एक घंटे बाद वापस आएं।',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Spanish
  es: {
    common: {
      login: 'Iniciar sesión',
      logout: 'Cerrar sesión',
      back: 'Atrás',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
    },
    home: {
      title: '¡Hola mundo!',
      sendEth: 'Enviar 0.0001 ETH a sí mismo',
      transactionSuccess: 'Transacción exitosa',
      transactionFailed: 'Transacción fallida',
      notConnected: 'Por favor conecte su billetera',
      insufficientBalance: 'Por favor conecte con una cuenta que tenga un poco de ETH',
      chatButton: 'Chatear con mi asistente',
      contactButton: '¡Hablemos directamente!',
      bioButton: 'Leer biografía completa',
    },
    navigation: {
      awesome: 'Recursos',
      contactUs: 'Contacto',
      chat: 'Chat',
      bio: 'Biografía',
    },
    contact: {
      title: 'Ponerse en contacto',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'Programar una llamada',
      meetingDuration: 'Reunión de 30 minutos',
    },
    chat: {
      title: 'Chatear con el asistente',
      welcomeMessage:
        '¡Hola! Soy Francesca, la fiel asistente de Julien. ¿Qué necesitas saber sobre él?',
      inputPlaceholder: '¿Puede Julien ayudarme a construir una aplicación o API?',
      sendButton: 'Enviar',
      errorMessage:
        'Lo siento, hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.',
      rateLimitMessage: 'Lo siento, has alcanzado el límite. Por favor, vuelve en una hora.',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // French
  fr: {
    common: {
      login: 'Connexion',
      logout: 'Déconnexion',
      back: 'Retour',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
    },
    home: {
      title: 'Salut tout le monde !',
      sendEth: 'Envoyer 0.0001 ETH à soi-même',
      transactionSuccess: 'Transaction réussie',
      transactionFailed: 'Échec de la transaction',
      notConnected: 'Veuillez connecter votre wallet',
      insufficientBalance: "Veuillez vous connecter avec un compte qui possède un peu d'ETH",
      chatButton: 'Discuter avec mon assistante',
      contactButton: 'Échangeons directement !',
      bioButton: 'Lire la bio complète',
    },
    navigation: {
      awesome: 'Ressources',
      contactUs: 'Contact',
      chat: 'Discussion',
      bio: 'Biographie',
    },
    contact: {
      title: 'Contact',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'Planifier un appel',
      meetingDuration: 'Réunion de 30 minutes',
    },
    chat: {
      title: "Discuter avec l'assistant",
      welcomeMessage:
        'Bonjour ! Je suis Francesca, la fidèle assistante de Julien. Que souhaitiez-vous savoir ?',
      inputPlaceholder: "Julien peut-il m'aider à créer une application ou une API ?",
      sendButton: 'Envoyer',
      errorMessage:
        "Désolé, une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer un peu plus tard.",
      rateLimitMessage: 'Désolé, vous avez atteint la limite. Veuillez revenir dans une heure.',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Arabic
  ar: {
    common: {
      login: 'تسجيل الدخول',
      logout: 'تسجيل الخروج',
      back: 'رجوع',
      loading: 'جاري التحميل...',
      error: 'خطأ',
      success: 'نجاح',
    },
    home: {
      title: 'مرحبا بالعالم!',
      sendEth: 'إرسال 0.0001 ETH لنفسك',
      transactionSuccess: 'تمت المعاملة بنجاح',
      transactionFailed: 'فشلت المعاملة',
      notConnected: 'يرجى توصيل محفظتك',
      insufficientBalance: 'يرجى الاتصال بحساب يحتوي على قليل من ETH',
      chatButton: 'الدردشة مع مساعدي',
      contactButton: 'لنتحدث مباشرة!',
      bioButton: 'قراءة السيرة الذاتية الكاملة',
    },
    navigation: {
      awesome: 'موارد',
      contactUs: 'اتصل بنا',
      chat: 'الدردشة',
      bio: 'السيرة الذاتية',
    },
    contact: {
      title: 'تواصل معنا',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'جدولة مكالمة',
      meetingDuration: 'اجتماع لمدة 30 دقيقة',
    },
    chat: {
      title: 'الدردشة مع المساعد',
      welcomeMessage: 'مرحبًا! أنا فرانشيسكا، مساعدة جوليان المخلصة. ماذا تريد أن تعرف عنه؟',
      inputPlaceholder: 'هل يمكن لجوليان مساعدتي في بناء تطبيق أو واجهة برمجة تطبيقات؟',
      sendButton: 'إرسال',
      errorMessage: 'عذرًا، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقًا.',
      rateLimitMessage: 'عذرًا، لقد وصلت إلى الحد. يرجى العودة بعد ساعة واحدة.',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Bengali
  bn: {
    common: {
      login: 'লগ ইন',
      logout: 'লগ আউট',
      back: 'পিছনে',
      loading: 'লোড হচ্ছে...',
      error: 'ত্রুটি',
      success: 'সফল',
    },
    home: {
      title: 'ওহে বিশ্ব!',
      sendEth: 'নিজেকে 0.0001 ETH পাঠান',
      transactionSuccess: 'লেনদেন সফল',
      transactionFailed: 'লেনদেন ব্যর্থ',
      notConnected: 'অনুগ্রহ করে আপনার ওয়ালেট সংযুক্ত করুন',
      insufficientBalance: 'অনুগ্রহ করে এমন একটি অ্যাকাউন্টের সাথে সংযোগ করুন যার কিছু ETH আছে',
      chatButton: 'আমার সহকারীর সাথে চ্যাট করুন',
      contactButton: 'চলুন সরাসরি কথা বলি!',
      bioButton: 'সম্পূর্ণ জীবনী পড়ুন',
    },
    navigation: {
      awesome: 'সম্পদ',
      contactUs: 'যোগাযোগ করুন',
      chat: 'চ্যাট',
      bio: 'জীবনী',
    },
    contact: {
      title: 'যোগাযোগ করুন',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'কল শিডিউল করুন',
      meetingDuration: '৩০ মিনিটের মিটিং',
    },
    chat: {
      title: 'সহকারীর সাথে চ্যাট করুন',
      welcomeMessage:
        'হ্যালো! আমি ফ্রান্চেস্কা, জুলিয়েনের বিশ্বস্ত সহকারী। আপনি তার সম্পর্কে কী জানতে চান?',
      inputPlaceholder: 'জুলিয়েন কি আমাকে অ্যাপ বা API তৈরি করতে সাহায্য করতে পারেন?',
      sendButton: 'পাঠান',
      errorMessage:
        'দুঃখিত, আপনার অনুরোধ প্রক্রিয়া করতে একটি ত্রুটি হয়েছে। অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।',
      rateLimitMessage: 'দুঃখিত, আপনি সীমা পৌঁছে গেছেন। অনুগ্রহ করে এক ঘন্টা পরে আবার আসুন।',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Russian
  ru: {
    common: {
      login: 'Вход',
      logout: 'Выход',
      back: 'Назад',
      loading: 'Загрузка...',
      error: 'Ошибка',
      success: 'Успех',
    },
    home: {
      title: 'Привет, мир!',
      sendEth: 'Отправить 0.0001 ETH себе',
      transactionSuccess: 'Транзакция успешна',
      transactionFailed: 'Транзакция не удалась',
      notConnected: 'Пожалуйста, подключите ваш кошелек',
      insufficientBalance: 'Пожалуйста, подключитесь с аккаунтом, на котором есть немного ETH',
      chatButton: 'Общаться с моим ассистентом',
      contactButton: 'Давайте пообщаемся напрямую!',
      bioButton: 'Прочитать полную биографию',
    },
    navigation: {
      awesome: 'Ресурсы',
      contactUs: 'Контакты',
      chat: 'Чат',
      bio: 'Биография',
    },
    contact: {
      title: 'Связаться',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'Запланировать звонок',
      meetingDuration: 'Встреча на 30 минут',
    },
    chat: {
      title: 'Чат с ассистентом',
      welcomeMessage: 'Привет! Я Франческа, верный помощник Жюльена. Что вы хотите узнать о нём?',
      inputPlaceholder: 'Может ли Жюльен помочь мне создать приложение или API?',
      sendButton: 'Отправить',
      errorMessage:
        'Извините, произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже.',
      rateLimitMessage: 'Извините, вы достигли лимита. Пожалуйста, вернитесь через час.',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Portuguese
  pt: {
    common: {
      login: 'Entrar',
      logout: 'Sair',
      back: 'Voltar',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
    },
    home: {
      title: 'Olá, mundo!',
      sendEth: 'Enviar 0.0001 ETH para si mesmo',
      transactionSuccess: 'Transação bem-sucedida',
      transactionFailed: 'Falha na transação',
      notConnected: 'Por favor, conecte sua carteira',
      insufficientBalance: 'Por favor, conecte-se com uma conta que tenha um pouco de ETH',
      chatButton: 'Conversar com meu assistente',
      contactButton: 'Vamos conversar diretamente!',
      bioButton: 'Ler biografia completa',
    },
    navigation: {
      awesome: 'Recursos',
      contactUs: 'Contato',
      chat: 'Chat',
      bio: 'Biografia',
    },
    contact: {
      title: 'Entre em contato',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'Agendar uma chamada',
      meetingDuration: 'Reunião de 30 minutos',
    },
    chat: {
      title: 'Conversar com o assistente',
      welcomeMessage:
        'Olá! Sou Francesca, a assistente fiel do Julien. O que você precisa saber sobre ele?',
      inputPlaceholder: 'O Julien pode me ajudar a construir um aplicativo ou API?',
      sendButton: 'Enviar',
      errorMessage:
        'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.',
      rateLimitMessage: 'Desculpe, você atingiu o limite. Por favor, volte em uma hora.',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },

  // Urdu
  ur: {
    common: {
      login: 'لاگ ان',
      logout: 'لاگ آؤٹ',
      back: 'واپس',
      loading: 'لوڈ ہو رہا ہے...',
      error: 'خرابی',
      success: 'کامیابی',
    },
    home: {
      title: 'ہیلو دنیا!',
      sendEth: 'خود کو 0.0001 ETH بھیجیں',
      transactionSuccess: 'لین دین کامیاب',
      transactionFailed: 'لین دین ناکام',
      notConnected: 'براہ کرم اپنا والیٹ منسلک کریں',
      insufficientBalance: 'براہ کرم ایسے اکاؤنٹ سے منسلک ہوں جس میں تھوڑا سا ETH ہو',
      chatButton: 'میرے اسسٹنٹ سے چیٹ کریں',
      contactButton: 'براہ راست بات کریں!',
      bioButton: 'مکمل بایو پڑھیں',
    },
    navigation: {
      awesome: 'وسائل',
      contactUs: 'رابطہ کریں',
      chat: 'چیٹ',
      bio: 'تعارف',
    },
    contact: {
      title: 'رابطہ کریں',
      github: 'GitHub',
      farcaster: 'Farcaster',
      element: 'Element',
      status: 'Status',
      telegram: 'Telegram',
      twitter: 'Twitter',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      schedule: 'کال شیڈول کریں',
      meetingDuration: '30 منٹ کی میٹنگ',
    },
    chat: {
      title: 'اسسٹنٹ سے چیٹ کریں',
      welcomeMessage:
        'ہیلو! میں فرانچیسکا ہوں، جولین کی وفادار اسسٹنٹ۔ آپ اس کے بارے میں کیا جاننا چاہتے ہیں؟',
      inputPlaceholder: 'کیا جولین مجھے ایپ یا API بنانے میں مدد کر سکتا ہے؟',
      sendButton: 'بھیجیں',
      errorMessage:
        'معذرت، آپ کی درخواست پر کارروائی کرتے ہوئے ایک خرابی پیش آئی۔ براہ کرم کچھ دیر بعد دوبارہ کوشش کریں۔',
      rateLimitMessage: 'معذرت، آپ حد تک پہنچ گئے ہیں۔ براہ کرم ایک گھنٹے بعد واپس آئیں۔',
    },
    resume: {
      title: 'Professional Resume',
      download: 'Download PDF',
      openInNewTab: 'Open in New Tab',
      loading: 'Loading resume...',
    },
  },
}

/**
 * Get translations for the current language
 * @param language Current language code
 * @returns Translation object for the specified language
 */
export function getTranslations(language: Language) {
  return translations[language]
}

/**
 * Hook to use translations in components
 * @param language Current language code
 * @returns Translation object for the specified language
 */
export function useTranslations(language: Language) {
  return translations[language]
}
