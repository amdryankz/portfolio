import { Briefcase } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { TimelineItem } from "./TimelineItem";
import { EXPERIENCE } from "../data";

export const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      className="bg-slate-100/50 dark:bg-slate-800 transition-colors duration-300"
    >
      {/* Header — consistent with Skills & About */}
      <SectionHeader
        label="Career"
        title="Work Experience"
        description="My professional journey building enterprise-grade applications across multiple industries."
      />

      <div className="space-y-8 max-w-6xl">
        {EXPERIENCE.map((exp) => (
          <TimelineItem key={exp.company} data={exp} icon={Briefcase} />
        ))}
      </div>
    </SectionWrapper>
  );
};
