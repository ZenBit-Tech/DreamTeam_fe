import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      loading: "Loading...",
      errorFetchingOrders: "Error fetching orders",
      collectionDate: "Collection Date",
      collectionTime: "Collection Time",
      collectionAddress: "Collection Address",
      luggageSize: "Luggage, Size",
      client: "Client",
      status: "Status",
      route: "Route",
      noLuggageData: "No luggage data",
      noCustomerData: "No customer data",
      noRoute: "No route",
      orderStatus: {
        COMPLETED: "Completed",
        FAILED: "Failed",
        NOT_ARRIVED: "Not Arrived",
        AT_RISK: "At Risk",
        UPCOMING: "Upcoming"
      },
      welcomeMessage: "Welcome to Smartporters! 👋",
      signInPrompt: "Please sign in to your account and start the delivery",
      emailLabel: "Email",
      pagination: {
        previous: "Previous",
        next: "Next",
        page: "Page",
        of: "of",
        showing: "Showing",
        to: "to",
        from: "from",
      },
    },
  },
  fr: {
    translation: {
      loading: "Chargement...",
      errorFetchingOrders: "Erreur lors de la récupération des commandes",
      collectionDate: "Date de collecte",
      collectionTime: "Heure de collecte",
      collectionAddress: "Adresse de collecte",
      luggageSize: "Bagages, Taille",
      client: "Client",
      status: "Statut",
      route: "Itinéraire",
      noLuggageData: "Aucune donnée de bagages",
      noCustomerData: "Aucune donnée client",
      noRoute: "Pas d'itinéraire",
      orderStatus: {
        COMPLETED: "Terminé",
        FAILED: "Échoué",
        NOT_ARRIVED: "Pas arrivé",
        AT_RISK: "En danger",
        UPCOMING: "À venir"
      },
      welcomeMessage: "Bienvenue chez Smartporters! 👋",
      signInPrompt: "Veuillez vous connecter à votre compte et commencer la livraison",
      emailLabel: "E-mail",
      pagination: {
        previous: "Précédent",
        next: "Suivant",
        page: "Page",
        of: "de",
        showing: "Affichage",
        to: "à",
        from: "de",
      },
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
