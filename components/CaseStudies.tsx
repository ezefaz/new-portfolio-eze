"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function CaseStudies() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <h1 className="heading">
        <span className="bg-gradient-to-r from-white via-[#AFDBFC] to-[#73BEFA] bg-clip-text text-transparent">
          Case Studies
        </span>
      </h1>
      <div className="py-8">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-muted-foreground dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600  text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-2xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-white hover:text-black text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-900 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "AI-powered platform for landing a job quickly",
    title: "LandFast",
    src: "/landfast.jpeg",
    ctaText: "More",
    ctaLink: "https://landfast.app/",
    content: () => {
      return (
        <p>
          * Create proffesionals resumes based on ATS systems. * Find the latest
          jobs on the area * Create smart job applications based on your
          experiences and the job requirements. * Generate a live mock interview
          based on the job requirements
        </p>
      );
    },
  },
  {
    description: "Smart Savings platform & Vendors management system",
    title: "Savemelin",
    src: "/savemelin.jpg",
    ctaText: "More",
    ctaLink: "https://savemelin.com/",
    content: () => {
      return (
        <p>
          Development of an smart online shopping platform that allow users to
          purchase their favorite products at their low cost. This app scrapes
          data from mercadolibre at ensure that the user is gonna purchase the
          lowest product price. This app was designed and developed for ensure
          an equal treat between seller-customer relationship.
        </p>
      );
    },
  },
  {
    description: "Software Development and IT Solutions Agency",
    title: "WebGeenix",
    src: "/webgeenix.jpg",
    ctaText: "More",
    ctaLink: "https://webgeenix.com/",
    content: () => {
      return (
        <p>
          Agency that provides multiple IT solutions, integrations for growing
          the client business.
        </p>
      );
    },
  },
  {
    description: "Website for an fully furnished appartment rental agency",
    title: "PalermoJai",
    src: "/palermito.jpg",
    ctaText: "More",
    ctaLink: "https:/palermojai.com/",
    content: () => {
      return (
        <p>
          PalermoJai is an agency of fully furnished temporary apartments that
          focuses on offering a unique lodging experience to its clients. As a
          web developer with experience in digital marketing, I dedicated myself
          to creating an attractive and functional website that allows users to
          easily reserve apartments and explore the services offered by the
          company. In this project, it was crucial to implement innovative ideas
          to improve the business, such as the creation of a section dedicated
          to the different types of clients served and their specific needs.
          Work was also done on the implementation of an online reservation
          system, with an integrated payment engine and an automated
          confirmation process.
        </p>
      );
    },
  },
  {
    description: "All-in-one platform for psychologists",
    title: "PsicoApp",
    src: "/psicoapp.jpg",
    ctaText: "More",
    ctaLink: "https://psico-app.vercel.app/",
    content: () => {
      return (
        <p>
          PsicoApp is a web application that connects patients with
          psychologists from all over Argentina remotely, being able to create
          and log in with a patient or psychologist account, schedule, pay
          appointments with psychologists and even chat live with them. This App
          was developed using React, Redux, Tailwind, Material UI for the Front,
          Back developed in Node.js with Express, and PostgreSQL and Sequelize
          database. Payment method through Mercado Pago API. Internal chat via
          Socket IO
        </p>
      );
    },
  },
];
