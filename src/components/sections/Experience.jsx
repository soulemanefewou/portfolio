import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { experienceData } from "../../../portfolio-data";
import TimelineItem from "../ui/TimelineItem";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mon Expérience"
          subtitle="Mon parcours professionnel et les projets sur lesquels j'ai travaillé"
        />

        {/* Timeline des expériences*/}
        <div className="max-w-4xl mx-auto">
            <div className="relative">
                {experienceData.map((experience, index) => (
                    <TimelineItem key={experience.id} experience={experience}/>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
