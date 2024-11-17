import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcomeMessage: 'Welcome to Smartporters! 👋',
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
    },
  },
  fr: {
    translation: {
      welcomeMessage: 'Bienvenue chez Smartporters! 👋',
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
