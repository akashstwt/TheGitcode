import React from "react";
import slack from "@/public/slack.png";
import Image from "next/image";
import Link from "next/link";
const cards = [
  { title: "Slack", description: "Implement a night mode for better usability in low-light conditions", imageUrl: "/slack.png", projectlink: "https://github.com/slack-go/slack" },
  { title: "GitHub", description: "Optimize the mobile app for faster navigation and reduced load times", imageUrl: "/github.jpeg", projectlink: "https://github.com/github-tools/github" },
  { title: "Discord", description: "Resolve issues affecting the stability of voice channels", imageUrl: "/discord.png", projectlink: "https://github.com/Comfy-Themes/Discord" },
  { title: "Figma", description: "Introduce real-time collaboration for seamless team design work", imageUrl: "/figma.jpeg", projectlink: "https://github.com/figma/plugin-samples" },
  { title: "Trello", description: "Enhance the user interface for task assignment to improve usability", imageUrl: "/trello.jpeg", projectlink: "https://github.com/rcdexta/react-trello" },
  { title: "Notion", description: "Enable comprehensive markdown support in document editing", imageUrl: "/notion.png", projectlink: "https://github.com/tangly1024/NotionNext" },
  { title: "Zoom", description: "Expand functionality to support hosting larger meetings efficiently", imageUrl: "/zoom.jpeg", projectlink: "https://github.com/jackmoore/zoom" },
  { title: "Slack", description: "Enhance dark mode settings for an improved aesthetic and usability", imageUrl: "/slack.png", projectlink: "https://github.com/slack-go/slack" },
];


const Contribute: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        Contribute to Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-[1400px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 bg-purple-500 hover:bg-purple-400 transition-all duration-300 rounded-lg min-h-[200px] md:min-h-[250px]"
            style={{
              backgroundColor:
                index % 4 === 1
                  ? "#a4f4a9"
                  : index % 4 === 2
                  ? "#f4a9a4"
                  : index % 4 === 3
                  ? "#a9c9f4"
                  : "#d4a4f4",
            }}
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                  <Image src={card.imageUrl} alt="" height={60} width={60} className="rounded-lg"/>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold ml-4 text-black">
                  {card.title}
                </h3>
              </div>
              <p className="text-md sm:text-base md:text-md text-black mt-2">
                {card.description}
              </p>
            </div>

            <div className="mt-4">
              <Link href={card.projectlink} target="_abhi">
              <button
                className="relative w-full rounded-lg bg-lime-500 text-black font-mono px-4 py-2 sm:px-6 sm:py-3 border-2 border-black shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out"
              >
                View More
              </button>
              </Link>
              {/* <Image src={slack} alt="" height={10} width={10}/> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contribute;
