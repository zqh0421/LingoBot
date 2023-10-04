"use client";

import { useState } from "react";
import Wrapper from "@/components/ui/wrapper";

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
        <div className="flex flex-col items-center justify-center py-12">
          <small className="text-xs/5 text-neutral-500">Made with Next.js by QIANHUI ZHAO</small>
          <small className="text-xs/5 text-neutral-500">
            Last Updated: {months[currentMonth]} {currentDay}, {currentYear}
          </small>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
