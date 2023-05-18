import Showplans from "./learningplans/subcomponent/showplans";
import Sidebar from "./sidebar/Sidebar";
export default function Games(prop) {
  return (
    <>
      <Sidebar />
      <Showplans gamename="ADHD" />
      <Showplans gamename="Dyslexia" />
      <Showplans gamename="Visual Agnosia" />
    </>
  );
}
