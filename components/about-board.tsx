/**
 * @see docs/portfolio/liquid-light.md
 * About page. Static copy, same tree every visit.
 */
import Image from "next/image";
import { EXPERIENCE, SKILL_GROUPS } from "@/lib/portfolio-content";

/** Experience, school, and skills. */
export function AboutBoard() {
  return (
    <article className="grid animate-board-in grid-cols-1 gap-x-[1.4rem] gap-y-4 text-black motion-reduce:animate-none md:grid-cols-[14rem_1fr]">
      <h2 className="mb-[0.35rem] text-center font-[family-name:var(--font-display)] text-[3.4rem] leading-[0.95] font-medium tracking-[0.04em] uppercase md:col-span-2">
        Taewook Park
      </h2>
      <Image
        src="/portfolio/me.png"
        alt="Taewook Park"
        width={560}
        height={700}
        priority
        className="aspect-[4/5] w-full self-start rounded-[1.4rem] border border-white/70 object-cover object-[center_18%] shadow-[0_12px_28px_rgba(8,20,40,0.18)]"
      />
      <div>
        <h3 className="mt-0 mb-[0.4rem] border-b border-black/35 pb-1 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold">
          Experience
        </h3>
        {EXPERIENCE.map((job) => (
          <section key={job.when} className="mt-[0.7rem]">
            <p className="m-0 flex justify-between gap-4 font-[family-name:var(--font-display)] text-[1.45rem] font-semibold text-black">
              {job.role}
              <span className="font-[family-name:var(--font-sans)] text-[0.9rem] font-medium tracking-[0.03em]">
                {job.when}
              </span>
            </p>
            <p className="m-0 flex justify-between gap-4 text-[1.07rem] leading-[1.65] text-black">
              <span className="flex min-w-0 items-center gap-2">
                <Image
                  src={job.mark}
                  alt=""
                  width={48}
                  height={48}
                  className="h-[1.625rem] w-[1.625rem] shrink-0 object-contain"
                />
                {job.org}
              </span>
              <span className="text-[0.9rem] font-medium tracking-[0.03em]">{job.place}</span>
            </p>
            <ul className="mt-[0.35rem] list-disc pl-[1.1rem] text-[1.07rem] leading-[1.65] text-black">
              {job.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        ))}
        </div>
        <div className="md:col-start-2">
        <h3 className="mt-8 mb-[0.4rem] border-b border-black/35 pb-1 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold">
          Education
        </h3>
        <p className="m-0 flex justify-between gap-4 font-[family-name:var(--font-display)] text-[1.45rem] font-semibold text-black">
          <span className="flex min-w-0 items-center gap-2">
            <Image
              src="/images/ucla-touch.png"
              alt=""
              width={48}
              height={48}
              className="h-[1.625rem] w-[1.625rem] shrink-0 object-contain"
            />
            University of California, Los Angeles
          </span>
          <span className="font-[family-name:var(--font-sans)] text-[0.9rem] font-medium tracking-[0.03em]">
            Graduated September 2025
          </span>
        </p>
        <p className="m-0 text-[1.07rem] leading-[1.65] text-black">Bachelor of Arts in Computer Science and Linguistics</p>
        <h3 className="mt-5 mb-[0.4rem] border-b border-black/35 pb-1 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold">
          Skills
        </h3>
        <div className="flex flex-col gap-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="m-0 mb-[0.35rem] text-[1.07rem] text-black">{group.label}</p>
              <ul className="m-0 flex list-none flex-wrap gap-[0.4rem] p-0">
                {group.items.map((skill) => (
                  <li key={skill} className="skill-chip text-[1.07rem] text-black">
                    <span className="relative z-[2]">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
    </article>
  );
}
