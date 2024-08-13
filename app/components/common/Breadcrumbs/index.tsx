import Link from "next/link";
import React from "react";

interface Props {
  links: Linktype[];
}

type Linktype = {
  label: string;
  href: string;
};

const BreadCrumb = ({ links }: Props) => {
  return (
    <div className="flex items-center gap-3 mb-3">
      {links.map((link, index) => (
        <div key={link.href + index} className="flex items-center gap-3">
          <Link href={link.href}>
            <p className={`${index === links.length - 1 && "text-blue-500"}`}>
              {link.label}
            </p>
          </Link>
          {index !== links.length - 1 && <span> {">"} </span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
