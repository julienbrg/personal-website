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
  }
  navigation: {
    contactUs: string
    awesome: string
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
    },
    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },
    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },

    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },
    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },

    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },

    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },

    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },

    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },

    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
    },

    navigation: {
      awesome: 'Resources',
      contactUs: 'Contact',
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
