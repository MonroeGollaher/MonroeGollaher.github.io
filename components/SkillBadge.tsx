interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-md border border-zinc-700 hover:border-blue-500/50 hover:text-white transition-colors">
      {name}
    </span>
  );
}
