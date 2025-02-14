"use client";

import { useState } from "react";
import MissionDayCounter from "@/app/components/MissionDayCounter";
import DaysList from "@/app/components/DaysList";

export default function Panel() {
  const [numberDays, setNumberDays] = useState(10);
  const start = new Date();

  return (
    <section className="grid gap-8 md:grid-cols-2">
      <MissionDayCounter dayCount={numberDays} setDayCount={setNumberDays} />
      <DaysList numberDays={numberDays} start={start} />
    </section>
  );
}
