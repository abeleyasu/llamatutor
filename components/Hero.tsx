import Image from "next/image";
import { FC } from "react";
import desktopImg from "../public/desktop-screenshot.png";
import mobileImg from "../public/screenshot-mobile.png";
import InitialInputArea from "./InitialInputArea";
import CurriculumMenu from "./CurriculumMenu";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleChat: (messages?: { role: string; content: string }[]) => void;
  ageGroup: string;
  setAgeGroup: React.Dispatch<React.SetStateAction<string>>;
  handleInitialChat: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleChat,
  ageGroup,
  setAgeGroup,
  handleInitialChat,
}) => {
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
            Alkebu AI Tutor
          </span>
        </h2>

        <p className="mt-4 text-center text-sm sm:text-base">
          Get personalized lessons on any topic — built to match your learning level and pace.
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
          <CurriculumMenu setPromptValue={setPromptValue} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <Image
          src={desktopImg}
          alt="Alkebu AI Tutor preview desktop"
          className="my-32 max-w-full max-lg:hidden"
        />
        <Image
          src={mobileImg}
          alt="Alkebu AI Tutor preview mobile"
          className="my-5 max-w-full lg:hidden"
        />
      </div>
    </>
  );
};

export default Hero;