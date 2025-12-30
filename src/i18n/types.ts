export type Locale = "nl" | "fr";

export interface Translations {
  nav: {
    home: string;
    whoAreWe: string;
    whereAreWe: string;
    theRegion: string;
    whatToExpect: string;
    rates: string;
    contact: string;
  };
  common: {
    readMore: string;
    contact: string;
    viewRates: string;
    openInGoogleMaps: string;
    allRightsReserved: string;
    address: string;
    navigation: string;
    phone: string;
    email: string;
    interested: string;
    contactUs: string;
    location: string;
    viewOnGoogleMaps: string;
    persons: string;
    person: string;
    perNight: string;
    included: string;
    free: string;
  };
  home: {
    heroSubtitle: string;
    welcomeTitle: string;
    welcomeText1: string;
    welcomeText2: string;
    whatWeOffer: string;
    whyTheName: string;
    whyTheNameText1: string;
    whyTheNameText2: string;
    impressions: string;
    readyForStay: string;
    ctaText: string;
    highlights: {
      camping: { title: string; description: string };
      chambres: { title: string; description: string };
      table: { title: string; description: string };
    };
  };
  whoAreWe: {
    heroSubtitle: string;
    title: string;
    text1: string;
    text2: string;
    text3: string;
    jipTitle: string;
    jipText: string;
  };
  whereAreWe: {
    heroSubtitle: string;
    title: string;
    text: string;
    addressTitle: string;
    addressNote: string;
    distances: string;
    distance1: string;
    distance2: string;
    directions: string;
  };
  theRegion: {
    heroTitle: string;
    heroSubtitle: string;
    intro1: string;
    intro2: string;
    outdoorActivities: string;
    attractionsTitle: string;
    winterTitle: string;
    winterText1: string;
    winterText2: string;
    impressions: string;
    activities: {
      hiking: { title: string; description: string };
      mountainBiking: { title: string; description: string };
      cycling: { title: string; description: string };
      fishing: { title: string; description: string };
      canoeing: { title: string; description: string };
      motorcycling: { title: string; description: string };
      golf: { title: string; description: string };
      climbing: { title: string; description: string };
      swimming: { title: string; description: string };
    };
    attractions: {
      puyDeDome: { title: string; description: string };
      puyDeSancy: { title: string; description: string };
      castles: { title: string; description: string };
      vulcania: { title: string; description: string };
      autoMuseum: { title: string; description: string };
      fleaMarkets: { title: string; description: string };
      shoppingTowns: { title: string; description: string };
      paleopolis: { title: string; description: string };
      accrobranche: { title: string; description: string };
      charroux: { title: string; description: string };
      vichy: { title: string; description: string };
      troncais: { title: string; description: string };
    };
  };
  whatToExpect: {
    heroTitle: string;
    heroSubtitle: string;
    intro: string;
    chambresTitle: string;
    rooms: {
      red: { name: string; capacity: string; description: string };
      chezMarco: { name: string; capacity: string; description: string };
      longere: { name: string; capacity: string; description: string };
    };
    campingTitle: string;
    campingText: string;
    campingFeatures: {
      electricity: string;
      dogs: string;
      quiet: string;
      sanitary: string;
    };
    additionalTitle: string;
    caravan: {
      title: string;
      text: string;
      note: string;
    };
    bergerie: {
      title: string;
      text: string;
      note: string;
    };
    tableTitle: string;
    tableText: string;
    tableFeatures: {
      dinner: string;
      fresh: string;
      atmosphere: string;
    };
    impressions: string;
  };
  rates: {
    heroTitle: string;
    heroSubtitle: string;
    campingTitle: string;
    description: string;
    price: string;
    campingItems: {
      pitch: { description: string; price: string };
      electricity: { description: string; price: string };
      dog: { description: string; price: string };
    };
    chambresTitle: string;
    accommodation: string;
    pricePerNight: string;
    details: string;
    chambresItems: {
      mainRoom: { name: string; price: string; details: string };
      longere: { name: string; price: string; details: string };
      chezMarco: { name: string; price: string; details: string };
      smallCaravan: { name: string; price: string; details: string };
      luxuryTent: { name: string; price: string; details: string };
      bergerie: { name: string; price: string; details: string };
    };
    tableTitle: string;
    meal: string;
    tableItems: {
      dinner: { description: string; price: string };
      drinks: { description: string; price: string };
      lunch: { description: string; price: string };
      breakfast: { description: string; price: string };
    };
  };
  contact: {
    heroSubtitle: string;
    contactDetails: string;
    phoneYvonne: string;
    phoneRob: string;
    viewLocationText: string;
  };
  footer: {
    contact: string;
    address: string;
    navigation: string;
    allRightsReserved: string;
    rates: string;
    theRegion: string;
  };
}
