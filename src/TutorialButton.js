import { useEffect, useRef, useState } from "react";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

export default function TutorialButton() {
  const isFirstLoad = useRef(true);
  const [tutorialInvoked, setTutorialInvoked] = useState(false);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    const driver = new Driver();
    driver.defineSteps([
      {
        element: "#hello",
        popover: {
          title: "Hello Label Component",
          description: "This is hello label",
          position: "bottom-center"
        }
      },
      {
        element: "#instruction",
        popover: {
          title: "Instruction Label Component",
          description: "This is instruction label.",
          position: "bottom-center"
        }
      },
      {
        element: "#content",
        popover: {
          title: "Content Label Component",
          description: "This is content label.",
          position: "bottom-center"
        }
      },
      {
        element: "#tutorial",
        popover: {
          title: "Tutorial Button Component",
          description: "This is tutorial button.",
          position: "bottom-center"
        }
      }
    ]);

    driver.start();
  }, [tutorialInvoked]);

  return (
    <p>
      <button
        id="tutorial"
        onClick={() => {
          setTutorialInvoked(!tutorialInvoked);
        }}
      >
        Start Tutorial
      </button>
    </p>
  );
}
