import Image from "next/image";
import { FC } from "react";
import desktopImg from "../public/desktop-screenshot.png";
import mobileImg from "../public/screenshot-mobile.png";
import InitialInputArea from "./InitialInputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleChat: (messages?: { role: string; content: string }[]) => void;
  ageGroup: string;
  setAgeGroup: React.Dispatch<React.SetStateAction<string>>;
  handleInitialChat: () => void;
};

const suggestions = [
  { id: 1, name: "Force", icon: "/finance.svg" },
  { id: 2, name: "Calculus", icon: "/finance.svg" },
  { id: 3, name: "Grammar", icon: "/finance.svg" },
  { id: 4, name: "History", icon: "/finance.svg" },
];

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleChat,
  ageGroup,
  setAgeGroup,
  handleInitialChat,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <>
      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center sm:mt-36">
        <div className="mb-4 inline-flex h-7 items-center justify-center rounded-full bg-white px-5 py-4 shadow-sm border border-gray-300">
          <span className="text-center text-sm font-medium italic">
            Powered by <b>intelligent AI</b>
          </span>
        </div>

        <h2 className="mt-2 bg-custom-gradient bg-clip-text text-center text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text font-bold text-transparent">
            Alkebulanz
          </span>
        </h2>

        <p className="mt-4 text-center text-sm sm:text-base leading-relaxed">
          I'm your AI tutor from Alkebulanz — here to make learning simpler and smarter. <br />
          Whether you're curious about physics, grammar, or anything in between, I'm here to guide you. <br />
          What can I help you learn today?
        </p>

        <div className="mt-4 w-full pb-6">
          <InitialInputArea
            promptValue={promptValue}
            handleInitialChat={handleInitialChat}
            setPromptValue={setPromptValue}
            handleChat={handleChat}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pb-[30px]">
          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClickSuggestion(item.name)}
              className="flex h-[35px] cursor-pointer items-center gap-[5px] rounded border border-gray-300 px-3 py-1.5 transition hover:bg-gray-200"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={18}
                height={16}
              />
              <span className="text-sm text-[#1B1B16]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <Image
          src={desktopImg}
          alt="Alkebulanz Tutor preview desktop"
          className="my-32 max-w-full max-lg:hidden"
        />
        <Image
          src={mobileImg}
          alt="Alkebulanz Tutor preview mobile"
          className="my-5 max-w-full lg:hidden"
        />
      </div>
    </>
  );
};

export default Hero;
