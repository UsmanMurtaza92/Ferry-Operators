import React from "react";
import { Icon } from "@iconify/react";

const Card = () => {
  return (
    <div className="border border-gray-300 rounded-lg bg-secondary">
      <div className="p-5 flex md:flex-row flex-col justify-between md:items-center gap-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxm_Y4leoW-5crXtgTC2m3fFuzeX_0eOCjbQ&s"
          alt="icon"
          className="h-14 w-max"
        />
        <div>
          <h2 className="lg:text-2xl text-xl font-medium">Blue star Ferries</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Icon className="lg:text-xl text-lg" icon="emojione:star" />
              <Icon className="lg:text-xl text-lg" icon="emojione:star" />
              <Icon className="lg:text-xl text-lg" icon="emojione:star" />
            </div>
            <p className="lg:text-base text-sm font-medium">
              by 1.342 customers
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-gray-300 py-4 flex lg:flex-row flex-col lg:items-center gap-4">
        <div className="w-[300px] flex-shrink-0 flex flex-col gap-3">
          <div>
            <p className="font-medium">Operates In</p>
            <p className="flex items-center gap-1">
              <Icon icon="openmoji:flag-greece" />
              Greece
            </p>
          </div>
          <div>
            <p>
              <span className="font-medium">Vessel number: </span> 8
            </p>
            <p>
              <span className="font-medium">Fierry type: </span> 8 normal
            </p>
          </div>
          <div>
            <p className="font-medium">Popular vessels</p>
            <p className="text-primary">Blue Star Delos, Blue Star Naxos</p>
          </div>
        </div>
        <div className="w-full">
          Blue Star Ferries is currently the biggest ferry company in Greece. It
          is a member of Attica Group, one of the most significant companies in
          the Greek shipping industry. Its fleet consists of vessels of the
          latest technology and serves itineraries starting from the port of
          Piraeus and heading to the islands of Cyclades (Mykonos, Santorini,
          Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star
        </div>
      </div>
    </div>
  );
};

export default Card;
