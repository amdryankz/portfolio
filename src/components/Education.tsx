import { GraduationCap } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { TimelineItem } from "./TimelineItem";
import { EDUCATION } from "../data";

export const Education = () => {
  return (
    <SectionWrapper
      id="education"
      className="bg-slate-100/50 dark:bg-slate-800 transition-colors duration-300"
    >
      {/* Header — consistent with Experience, Skills & Projects */}
      <SectionHeader
        label="Learning"
        title="Education & Credentials"
        description="My academic foundation, software engineering training, and mobile development specialization."
      />

      <div className="space-y-8 max-w-6xl">
        {EDUCATION.map((edu) => (
          <TimelineItem key={edu.institution} data={edu} icon={GraduationCap} />
        ))}
      </div>
    </SectionWrapper>
  );
};
