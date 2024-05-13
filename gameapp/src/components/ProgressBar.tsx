import React, { useEffect, useState } from 'react';

const FUN_WAITING_MESSAGES = [
  "The celestial circuits strain under the battle's weight!",
"Unite! Our valor can hasten the fray!",
"Pondering the cosmic strategy...",
"Scouring the ethereal plains for advantage...",
"Rousing the ancient digital sentinels...",
"Harnessing the infernos of quantum cores...",
"Ever envisioned an Oracle enshrined within the blockchain?",
"Wielding cryptographic shields: RSA or ECC?",
"Ignore the echoes of shattered realms...",
"Summoning the silicon titans...",
"Forging sigils of power—no, not mere coins...",
"Indeed, the genesis was foretold by archaic lore in '91",
"Entangled in the labyrinth of digital creation...",
"In truth, this is but a cosmic chess game, enhanced...",
];

interface ProgressBarProps {
  duration: number; // Total duration of progress in seconds
  message: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ duration, message }) => {
  const [progress, setProgress] = useState(1);
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    setRandomMessage(
      FUN_WAITING_MESSAGES[Math.floor(Math.random() * FUN_WAITING_MESSAGES.length)]
    );

    const intervalTime = (duration * 1000) / 100;
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress > 100) {
          //clearInterval(interval);
          //return 100;
          setRandomMessage(
            FUN_WAITING_MESSAGES[Math.floor(Math.random() * FUN_WAITING_MESSAGES.length)]
          );
          return 0;
        }
        return nextProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <>
      <p className='mb-2'>
        <span className="">{message}&nbsp;</span>
        <span className="text-brand-neongreen">{randomMessage}</span>
      </p>
      <div className="w-full bg-white h-2.5 dark:bg-gray-700">
        <div
          className="bg-brand-neongreen h-2.5"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;