import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Innovative Solutions",
    description:
    "Innovation is at the core of kelvin's approach. Our expertise lies in simplifying intricate AI technology into intuitive content generation tools, empowering our clients to maintain a competitive edge in the fast-paced world of digital content.",
    icon: PhoneIcon,
  },
  {
    name: "Dedicated Customer Support",
    description:
    
"We are committed to empowering our users through ongoing support. Our dedicated team remains readily available to address any questions or concerns, guaranteeing a seamless and uninterrupted content creation experience.",
    icon: LifebuoyIcon,
  },
  {
    name: "Press & Media Collaborations",
    description:
      "kelvin is at the forefront of AI-driven content generation. We're eager to collaborate with media and press to share insights and developments in AI technology, shaping the future of digital content.",
    icon: NewspaperIcon,
  },
];

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden w-screen bg-blue-900 py-24 sm:py-32 h-screen ">
      {/* Background and layout elements */}
      {/* ... */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            kelvin AI - Content generator
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Kelvin AI is driving a revolution in content creation. 
          Our state-of-the-art AI technology automates and elevates the content generation process, 
          empowering creators to effortlessly produce high-quality, 
          captivating material.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
