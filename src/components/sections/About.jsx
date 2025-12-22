import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="A propos de moi"
          subtitle="Développeur passionné par la création d'expériences web moderne et de performantes"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenu*/}
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Développeur full-stack passionné avec plus de 3 ans d'expérience
            dans la création d'applications web modernes et performantes. Je me
            spécialise dans les technologies React, Next.js et Node.js.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Mon objectif est de créer des expériences utilisateur
            exceptionnelles en combinant design moderne et code de qualité. Je
            suis constamment à la recherche de nouveaux défis et opportunités
            d'apprentissage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Code className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700 dark:text-gray-300 ">
                Développement Full Stack{" "}
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Palette className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700 dark:text-gray-300">
                UI/UX Design
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Rocket className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700 dark:text-gray-300">
                Performance
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Users className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700 dark:text-gray-300">
                Collaboration
              </span>
            </div>
          </div>
        </div>
        {/*Image/Illustration*/}
        <div className="relative">
            <div className="bg-gradient-to-br from-emerald-400 to-blue-500 rouded-2xl p-1 transform rotate-2">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transform -rotate-2">
                    <img src="img2.jpg" alt="Profile" className="w-full h-auto rounded-xl shadow-lg" />
                </div>
            </div>
            {/*Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
