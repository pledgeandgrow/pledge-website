import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "P&G",
    newTab: false,
    submenu: [
      {id: 110,  title: "À propos de nous" , newTab:true},
      {id: 111,  title: "Opportunités" , newTab:false},
      {id: 112,  title: "Communauté" , newTab:false},
      { id: 113, title: "👤 Notre Identité", path: "/notre-identite", newTab: false },
      { id: 114, title: "💰 Aides & subventions", path: "/aides-subventions", newTab: false },
      { id: 115, title: "🤝 Partenaires", path: "/partenaires", newTab: false },
      { id: 116, title: "🏗️ Réalisations", path: "/realisations", newTab: false },
      { id: 117, title: "🏢 Secteurs d'activité", path: "/secteurs-activite", newTab: false },
      { id: 118, title: "🚩 Ambassadeurs", path: "/ambassadeurs", newTab: false },
      { id: 119, title: "🌍 International", path: "/international", newTab: false },
      { id: 210, title: "📝 Adhésion", path: "/adhesion", newTab: false },
      { id: 211, title: "📈 Investisseurs", path: "/investisseurs", newTab: false },
    ],
  },
  {
    id: 4,
    title: "Prestation et Integration",
    newTab: false,
    submenu: [
      {id: 212,  title: "Nos prestations" , newTab:true},
      {id: 213,  title: "Intégrations" , newTab:false},
      {id: 214,  title: "Complémentaires" , newTab:false},

      { id: 215, title: "🌐 Site Web", path: "/site-web", newTab: false },
      { id: 216, title: "🛒 E-commerce", path: "/e-commerce", newTab: false },
      { id: 217, title: "📚 Documentation", path: "/documentation", newTab: false },

      { id: 218, title: "💻 Logiciel/SaaS", path: "/logiciel-saas", newTab: false },
      { id: 219, title: "🤖 IA et Automatisation", path: "/ia-automatisation", newTab: false },
      { id: 220, title: "🎨 UX / IX Design", path: "/ux-ui", newTab: false },

      { id: 221, title: "🎮 Jeux Video", path: "/jeux-video", newTab: false },
      { id: 222, title: "⛓️ Blockchain", path: "/blockchain", newTab: false },
      { id: 223, title: "🔍 Référencement", path: "/referencement", newTab: false },

      { id: 224, title: "📱 Application Mobile", path: "/application-mobile", newTab: false },
      { id: 225, title: "🛡️ Cybersécurité", path: "/cybersecurite", newTab: false },
      { id: 226, title: "⚙️ Maintenance", path: "/maintenance", newTab: false },
    ],
  },
  {
    id: 2,
    title: "Contact",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
