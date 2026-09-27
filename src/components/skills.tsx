import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: number;
  color: string;
};

const skills: Skill[] = [
  { name: "Next.js", level: 86, color: "from-whte to-gray-500" },
  { name: "React.js", level: 87, color: "from-cyan-400 to-blue-500" },
  { name: "Tailwindcss", level: 95, color: "from-cyan-300 to-cyan-50" },
  { name: "Git", level: 90, color: "from-green-400 to-emerald-500" },
];

function SkillLoader({ skill }: { skill: Skill }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = skillRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= skill.level) {
        current = skill.level;
        clearInterval(interval);
      }

      setProgress(current);
    }, 15);

    return () => clearInterval(interval);
  }, [isVisible, skill.level]);

  return (
    <div ref={skillRef} className="group">
      <div className="mb-3 flex  justify-between">
        <h3 className="text-sm font-medium">{skill.name}</h3>
        <span className="font-mono text-sm text-blue-950">{progress}%</span>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full">
        <div
          className={`absolute left-0 top-0 h-full rounded-full bg-gray-300`}
          style={{
            width: `${progress}%`,
          }}
        />
        <div
          className={`relative h-full rounded-full bg-gradient-to-r ${skill.color}`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 ">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            My Skills
          </h2>

          <p className="mt-4 max-w-xl text-neutral-700">
            Technology and tools i use to build modern, scalable digital
            experiences.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillLoader key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
