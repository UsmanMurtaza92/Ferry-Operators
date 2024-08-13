import React from "react";

interface Props {
  heading: string;
  detail?: string;
}

const Heading = ({ heading, detail }: Props) => {
  return (
    <div>
      <h2 className="font-semibold md:text-4xl text-2xl">{heading}</h2>
      {detail && <p className="md:text-lg mt-2">{detail}</p>}
    </div>
  );
};

export default Heading;
