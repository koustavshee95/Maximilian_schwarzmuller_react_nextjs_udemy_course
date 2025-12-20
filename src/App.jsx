import { useState } from "react";
import { NewProject } from "./Components/NewProject";
import { NoProjectSelected } from "./Components/NoProjectSelected";
import { ProjectSideBar } from "./Components/ProjectSideBar";
import { SelectedProject } from "./Components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedprojectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedprojectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedprojectId
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: id,
      };
    });
  }

  function handleStartAtProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: null,
      };
    });
  }

  function handleCancelAtProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedprojectId: undefined,
      };
    });
  }

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedprojectId: undefined,
      };
    });
  };

  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedprojectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
      selectedProjectId={projectState.selectedprojectId}
    />
  );

  if (projectState.selectedprojectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAtProject} />
    );
  } else if (projectState.selectedprojectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAtProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAtProject}
        project={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedprojectId}
      />
      {content}
    </main>
  );
}

export default App;

//selectedprojectId property will be null if you want to add a new project.or undefined if you are adding a new project & also we did not select any project.

//selectedprojectId:undefined, initially  because nither adding a new project or have a project selected.
//simply we can say undefined means nothing and null means adding a new project.
