import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcomeMessage: 'Welcome to Dreamteam!',
      signInPrompt: 'Please sign in to your account and start the delivery',
      emailLabel: 'Email',
      companyList: 'Company List',
      addNewCompany: 'Add New Company',
      companyName: 'Company Name',
      actions: 'Actions',
      companiesShown:
        'Showing {{startIndex}} to {{endIndex}} of {{totalCompanies}} companies',
      company: 'Company',
      organizationName: 'Organization Name',
      clientName: 'Client Name',
      submit: 'Submit',
      cancel: 'Cancel',
      delete: 'Delete',
      deleteWarning: 'Those changes cannot be undone. Are you sure?',
      termsAndPrivacy:
        'By continuing, you agree to our <terms>Terms and Conditions</terms> & <privacy>Privacy Policy</privacy>',
      emailHelperText: 'Please enter valid email',
      buttonLoading: 'Loading...',
      signInButton: 'Sign in',
      successLoginMessage: 'Login link sent to your email',
      userNotFoundError: 'Please enter valid credentials',
      errorMessage: 'Oops, something went wrong, please try again later',
      search: 'Search',
      loading: 'Loading...',
      faliedToLoad: 'Failed to load companies data',
    },
  },
  fr: {
    translation: {
      welcomeMessage: 'Bienvenue sur Dreamteam!',
      signInPrompt:
        'Veuillez vous connecter à votre compte et commencer la livraison',
      emailLabel: 'E-mail',
      companyList: 'Liste Des Entreprises',
      addNewCompany: 'Ajouter une nouvelle entreprise',
      companyName: "Nom de l'entreprise",
      actions: 'Actes',
      companiesShown:
        'Affichage de {{startIndex}} à {{endIndex}} sur {{totalCompanies}} entreprises',
      company: 'Entreprise',
      organizationName: "Nom de l'organisation",
      clientName: 'Nom du client',
      submit: 'Soumettre',
      cancel: 'Annuler',
      delete: 'Supprimer',
      deleteWarning:
        'Ces modifications ne peuvent pas être annulées. Êtes-vous sûr ?',
      termsAndPrivacy:
        'En continuant, vous acceptez nos <terms>Conditions Générales</terms> & <privacy>Politique de Confidentialité</privacy>',
      emailHelperText: 'Veuillez entrer une adresse e-mail valide',
      buttonLoading: 'Chargement...',
      signInButton: 'Se connecter',
      successLoginMessage: 'Lien de connexion envoyé à votre email',
      userNotFoundError:
        "Veuillez saisir des informations d'identification valides",
      errorMessage:
        "Oups, quelque chose s'est mal passé, veuillez réessayer plus tard",
      search: 'recherche',
      loading: 'Chargement...',
      faliedToLoad: 'Impossible de charger les données des entreprises',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
