import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ListItem from "./ListItem";
import { useAppStore } from "./store";

function App() {
  const [count, setCount] = useState(0);
  const isLoggedIn = useAppStore((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const projects = useAppStore((state) => state.projects);
  const getProjects = useAppStore((state) => state.getProjects);
  console.log(projects);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login`);
    } else {
      getProjects();
    }
  }, []);

  return (
    <div className="App flex flex-col flex-1 justify-center items-center">
      <div className="projects mt-10 w-10/12 relative z-10 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10">
        <div className="list divide-y divide-slate-100 gap-4 grid grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ListItem item={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
