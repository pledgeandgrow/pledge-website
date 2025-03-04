"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import exclusifs from "../../../data/partexclusif.json";
import patriotes from "../../../data/partpatriote.json";
import commerciaux from "../../../data/partcommercial.json";
import Split from "../../../components/common/Split";

// Reusable Component for Partner Sections
const PartnerSection = ({ partners }) => {
  return (
    <div className="clients mt-10 pb-24 relative">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 ">
          {partners.map((item) => (
            <div
              key={item.id}
              className="w-[calc(25%-16px)] min-w-[150px] brand  p-4 transition-all duration-300 group "
            >
              <div className="item mb-4  relative w-full h-[200px] flex justify-center items-center border border-gray-100 rounded-lg">
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-4/5 h-4/5 object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Split
                  tag="a"
                  className="absolute text-center text-white text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {item.name}
                </Split>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-pattern patrn1 bg-img opacity-5"></div>
    </div>
  );
};

PartnerSection.propTypes = {
  partners: PropTypes.array.isRequired,
};

export default function PartenairesTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="mt-10 w-full ">
      {/* Tabs Section */}
      <Box className="border-b border-gray-300 flex justify-center text-white">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="partenaires tabs"
          centered
          sx={{
            ".MuiTabs-indicator": { backgroundColor: "green" },
            ".MuiTab-root": { color: "white" },
            ".Mui-selected": { color: "green" },
          }}
        >
          <Tab className="text-white text-xl" label="Partenaires Exclusif" />
          <Tab className="text-white text-lg" label="Partenaires Patriotes" />
          <Tab className="text-white text-lg" label="Partenaires Commerciaux" />
        </Tabs>
      </Box>

      {/* Partner Sections */}
      {value === 0 && <PartnerSection partners={exclusifs} />}
      {value === 1 && <PartnerSection partners={patriotes} />}
      {value === 2 && <PartnerSection partners={commerciaux} />}
    </Box>
  );
}
