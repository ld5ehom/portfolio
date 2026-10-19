/**
 * @see docs/portfolio/liquid-light.md
 * Screenshot slideshow under the architecture diagram.
 * One interval, cleared on cleanup. Reduced motion does not autoplay.
 */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProjectShot } from "@/lib/portfolio-content";

const STEP_MS = 4200;

/** Center photo, with the previous and next shots peeking on each side. */
export function ProjectStage({ shots }: { shots: readonly ProjectShot[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = shots.length;
  const reel = shots.map((shot) => shot.src).join("|");

  useEffect(() => {
    setIndex(0);
  }, [reel]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const shot = shots[index] ?? shots[0];
  if (!shot) return null;

  function step(dir: number) {
    setIndex((current) => (current + dir + count) % count);
  }

  const film = count > 1 ? [shots[count - 1], ...shots, shots[0]] : shots
  const center = count > 1 ? index + 1 : 0

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative aspect-[100/68] w-full overflow-hidden">
        {film.map((item, i) => (
          <div
            key={`${i}-${item.src}`}
            className="absolute top-0 h-full overflow-hidden rounded-[1rem] border-2 border-white shadow-[0_12px_28px_rgba(8,20,40,0.18)] transition-[left,opacity] duration-700 ease-[cubic-bezier(0.22,0.8,0.2,1)] motion-reduce:transition-none"
            style={{ width: "68%", left: `${16 + (i - center) * 70}%`, opacity: i === center ? 1 : 0.4 }}
          >
            <Image src={item.src} alt="" fill sizes="32rem" priority={i === center} className="object-cover" />
          </div>
        ))}
        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => step(-1)}
              className="absolute top-1/2 left-3 z-[2] grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-2 border-black/70 bg-white text-black shadow-[0_4px_12px_rgba(8,20,40,0.18)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => step(1)}
              className="absolute top-1/2 right-3 z-[2] grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-2 border-black/70 bg-white text-black shadow-[0_4px_12px_rgba(8,20,40,0.18)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        ) : null}
      </div>
      {count > 1 ? (
        <div className="mt-2 flex justify-center gap-1.5">
          {shots.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Screenshot ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={i === index ? "h-1.5 w-4 rounded-full bg-white" : "h-1.5 w-1.5 rounded-full bg-white/55"}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
