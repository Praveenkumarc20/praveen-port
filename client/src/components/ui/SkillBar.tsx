import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200">{skill.name}</span>
        <span className="text-xs font-semibold text-accent">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-ink-700">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-600 to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
