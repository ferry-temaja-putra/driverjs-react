import HelloLabel from "./HelloLabel";
import InstructionLabel from "./InstructionLabel";
import ContentLabel from "./ContentLabel";
import TutorialButton from "./TutorialButton";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HelloLabel />
      <InstructionLabel />
      <ContentLabel />
      <TutorialButton />
    </div>
  );
}
