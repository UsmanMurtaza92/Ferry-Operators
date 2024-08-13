"use client";
import Container from "./components/common/Container";
import Heading from "./components/common/Heading";
import BreadCrumb from "./components/common/Breadcrumbs";
import Button from "./components/common/Button";
import { Icon } from "@iconify/react";
import Filters from "./components/pages/home/Filters";
import React, { useState } from "react";
import Card from "./components/pages/home/Card";

const breadcrumbs = [
  {
    label: "Ferrytickets",
    href: "",
  },
  {
    label: "Operators",
    href: "",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const toggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-10">
      <Container>
        <header className="flex flex-wrap justify-between items-center gap-3">
          <div>
            <BreadCrumb links={breadcrumbs} />
            <Heading
              heading="Ferry operators"
              detail="Discover the 57 ferry operators we work with"
            />
          </div>
          <Button
            text="Book your tickets"
            handleClick={() => {}}
            icon={<Icon className="text-[26px]" icon="weui:arrow-outlined" />}
          />
        </header>
        <main className="mt-6">
          {/* Filters and Search */}
          <section className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button
                text="Filters"
                handleClick={toggler}
                buttonSize="medium"
                icon={
                  <Icon
                    className="text-primary text-xl"
                    icon="mage:filter-fill"
                  />
                }
                background="white"
                border="border border-gray-300"
                color="black"
              />
              <Button
                text="Sort by: Reviews number (high first) "
                handleClick={() => {}}
                buttonSize="medium"
                icon={
                  <Icon
                    className="text-2xl"
                    icon="lets-icons:sort-down-light"
                  />
                }
                background="white"
                border="border border-gray-300"
                color="black"
              />
              <Button
                text="Search"
                handleClick={() => {}}
                buttonSize="medium"
                icon={<Icon className="text-xl" icon="carbon:search" />}
                background="white"
                border="border border-gray-300"
                color="black"
              />
            </div>
            <div className="flex-shrink-0">
              <Button
                text="Live Map view"
                handleClick={() => {}}
                buttonSize="medium"
                icon={
                  <Icon
                    className="text-primary text-xl"
                    icon="ph:globe-light"
                  />
                }
                background="white"
                border="border border-gray-300"
                color="text-primary"
              />
            </div>
          </section>

          <section className="flex md:flex-row flex-col items-start gap-5 mt-4 mb-7">
            {isOpen && (
              <div className="md:w-80 w-full border border-gray-300 rounded-md flex-shrink-0">
                <Filters onClose={toggler} />
              </div>
            )}
            <div className="w-full flex flex-col gap-4">
              {[...Array(3)].map((_, index) => (
                <React.Fragment key={index * 2}>
                  <Card />
                </React.Fragment>
              ))}
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
}
