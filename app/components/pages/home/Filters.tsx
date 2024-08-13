import { useState } from "react";
import { Icon } from "@iconify/react";

interface Props {
  onClose: () => void;
}

const Filters = ({ onClose }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary py-2">
      <div
        className="flex items-center justify-between gap-3 px-4"
        onClick={onClose}
      >
        <h3 className="text-xl font-medium">Filters</h3>
        {/* {isOpen ? ( */}
        <Icon className="text-xl" icon="ri:close-fill" />
        {/* ) : (
        <Icon className="text-xl" icon="iconamoon:arrow-down-2-light" /> */}
        {/* )} */}
      </div>

      <div>
        <div className="px-4">
          <h2 className="text-lg font-medium mt-2">Operating In</h2>
          <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-xl py-2 px-2 mt-2">
            <div className="flex items-center gap-2">
              <Icon className="text-xl" icon="carbon:location" />
              <p>Select a country</p>
            </div>
            <Icon className="text-xl" icon="iconamoon:arrow-down-2-light" />
          </div>
        </div>

        <div className="mt-3 border-t border-gray-300 py-3 px-4">
          <h2 className="text-lg font-medium">Ferry types</h2>
          <div className="mt-2 flex items-center gap-1.5">
            <input id="1" type="checkbox" />
            <label htmlFor="1">Normal Ferries</label>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            <input id="2" type="checkbox" />
            <label htmlFor="2">high-speed ferries</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
