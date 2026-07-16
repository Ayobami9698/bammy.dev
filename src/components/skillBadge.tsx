"use client"; // ❗ This makes it a client component

type SkillBadgeProps = {
  name: string; // Skill name
  color?: string; // Tailwind background color classes
  className?: string; // Extra Tailwind classes
};

export default function SkillBadge({
  name,
  color = "bg-gray-200 text-gray-800",
  className = "",
}: SkillBadgeProps) {
  return (
    <span
      className={`
        inline-block
        px-6 py-6
        rounded-lg
        text-lg font-medium
        ${color}
        hover:scale-105 transition-transform duration-200
        cursor-default
        ${className}
      `}
      title={name} // accessibility tooltip
    >
      {name}
    </span>
  );
}
