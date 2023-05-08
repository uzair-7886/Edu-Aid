import HomeContent from "./homecontent";
import HomeFeatures from "./homefeatures";
import HomeNavBar from "./homenavbar";
export default function Home() {
  return (
    <div>
      <HomeNavBar />
      <HomeContent />
      <HomeFeatures />
    </div>
  );
}
