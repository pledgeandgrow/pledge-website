"use client";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Hourglass } from "lucide-react";

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="p-6"
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function InvestTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="mt-20 w-full">
      {/* Tabs */}
      <Box className="border-b border-gray-300 flex justify-center">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="investment phases"
          centered
          className="text-white"
        >
          <Tab className="text-lg text-gray-700 font-semibold" label="Seed" {...a11yProps(0)} />
          <Tab className="text-lg text-gray-700 font-semibold" label="Grow" {...a11yProps(1)} />
          <Tab className="text-lg text-gray-700 font-semibold" label="Pledge" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Phase 1 - Seed */}
      <CustomTabPanel value={value} index={0}>
        <h4 className="text-center text-4xl font-bold my-10">
          Phase 1 : <span className="text-green-600">SEED</span>
        </h4>
        <hr className="my-6" />

        {/* Sections */}
        {[
          {
            title: "Objectif",
            items: [
              "Lever 500 000 € pour un financement de démarrage",
              "Trouver un investisseur providentiel sur chaque continent",
              "Assurer la diversité des parcours et des expériences des investisseurs",
            ],
          },
          {
            title: "Conditions",
            items: [
              "Un investisseur providentiel par continent",
              "Participation limitée à 1 % par investisseur",
              "100 000 € est le prix pour acquérir 1 % d'équité de PLEDGE AND GROW SAS",
              "Réseau et expertise",
              "Conseils pour l'entreprise",
              "Mentor",
            ],
          },
          {
            title: "Avantages",
            items: [
              "Membre du conseil d'administration",
              "Réductions sur nos prestations et ceux de nos partenaires",
              "Visibilité internationale et notoriété",
              "Derniers investisseurs providentiels",
              "Accès exclusifs aux autres projets de l’écosystème",
            ],
          },
          {
            title: "Récompenses",
            items: [
              "1 % non diluable et transférable à la future holding mère",
              "Conversion des notes",
              "Début du versement des dividendes annuels",
            ],
          },
        ].map((section, idx) => (
          <div key={idx} className="mt-8">
            <h6 className="text-green-600 text-2xl font-semibold mb-4">{section.title} :</h6>
            <ul className="text-lg text-gray-700 space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CustomTabPanel>

      {/* Phase 2 - Grow */}
      <CustomTabPanel value={value} index={1}>
        <h4 className="text-center text-4xl font-bold my-10">
          Phase 2 : <span className="text-green-600">GROW</span>
        </h4>
        <hr className="my-6" />
        <div className="flex flex-col items-center text-center space-y-6 mt-16">
          <Hourglass className="text-green-600 w-20 h-20" />
          <h3 className="text-3xl">
            Estimé pour <span className="text-green-600 font-bold">2027</span>
          </h3>
        </div>
      </CustomTabPanel>

      {/* Phase 3 - Pledge */}
      <CustomTabPanel value={value} index={2}>
        <h4 className="text-center text-4xl font-bold my-10">
          Phase 3 : <span className="text-green-600">PLEDGE</span>
        </h4>
        <hr className="my-6" />
        <div className="flex flex-col items-center text-center space-y-6 mt-16">
          <Hourglass className="text-green-600 w-20 h-20" />
          <h3 className="text-3xl">
            Estimé pour <span className="text-green-600 font-bold">2030</span>
          </h3>
        </div>
      </CustomTabPanel>
    </section>
  );
}
