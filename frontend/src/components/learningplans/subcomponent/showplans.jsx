import { useLocation, Link } from "react-router-dom";
const GameDetails = {
  ADHD: {
    "Memory Game": "Helps jog the memory",
    path: "/memgame",
  },
  Dyslexia: {
    "Word Scramble": "Helps with reading",
    path: "/scramble",
  },
  "Visual Agnosia": {
    "Spot the Difference": "Invisible Game",
    path: "/sptdiff",
  },
};

export default function Showplans(prop) {
  const location = useLocation();
  var data = location?.state;
  var Game;
  var Description;
  var Path = "#";
  if (data != undefined) {
    for (var key in GameDetails[data.name]) {
      Game = key;
      break;
    }

    Description = GameDetails[data.name][Game];
    Path = GameDetails[data.name].path;
    console.log(Description);
  } else {
    var Condition = prop.gamename;

    for (var key in GameDetails[Condition]) {
      Game = key;
      break;
    }

    Description = GameDetails[Condition][Game];
    Path = GameDetails[Condition].path;
    console.log(Description);
  }

  return (
    <div className="container-fluid">
      <section class="py-2 py-lg-1 py-xl-1 mt-5">
        <div class="container">
          <div class="text-white border bg-secondary rounded border-0 border-success d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5 shadow">
            <div class="pb-2 pb-lg-1">
              <h2 class="fw-bold mb-2">{Game}</h2>
              <p class="mb-0">{Description}</p>
            </div>
            <div class="my-2">
              <Link
                to={Path}
                style={{
                  textDecoration: "none",
                }}
              >
                {" "}
                <a class="btn btn-light fs-5 py-2 px-4" role="button">
                  Start Game
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
