"use client";
import {useState} from "react";
import Wrapper from "@/components/ui/wrapper";

const links = [
  {
    label: "GITHUB REPO",
    href: "https://github.com/zqh0421/LingoBuddy",
  },
  {
    label: "DEMO",
    href: "https://lingo-buddy.vercel.app",
  },
];

function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());
  const [currentMonth] = useState(() => new Date().getUTCMonth());
  const [currentDay] = useState(() => new Date().getUTCDate());
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <footer className="w-full">
      <Wrapper>
        {/*
        <ul
          className="flex flex-col items-center md:flex-row md:justify-center gap-x-6 py-12"
        >
          {links.map(({ label, href }, index) => (
            <li key={index}>
              <a
                href={label==="EMAIL" ? `mailto:${href}`: href}
                title={label}
                rel="noreferrer"
                target="_blank"
                className="text-neutral-300 transition-colors hover:text-neutral-50 focus-visible:text-neutral-50"
              >
                {label}
              </a>
              { label!=="EMAIL" ? <span className='block text-center md:inline-block md:pl-6'>·</span> : null}
            </li>
          ))}
        </ul> */}
        <div className="flex flex-col items-center justify-center py-12">
          <small className="text-xs/5 text-neutral-600">Made with Next.js by QIANHUI ZHAO</small>
          <small className="text-xs/5 text-neutral-600">
            Last Updated: {months[currentMonth]} {currentDay}, {currentYear}
          </small>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
