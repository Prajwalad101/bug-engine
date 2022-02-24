import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import IssueModal from "../../components/Modal/IssueModal";
import Heading from "../../components/Project/Heading";
import Issues from "../../components/Project/Issues";

function ProjectPage() {
  const [project, setProject] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const projectId = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!projectId) return;
        const res = await fetch(`/api/project/${projectId}`);
        const project = (await res.json()).data.project;
        setProject(project);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [projectId]);

  const isEmpty = Object.keys(project).length === 0;
  if (isEmpty) return null;

  return (
    <div className="ml-5 mt-5 mr-5 font-lato">
      <Heading project={project} />
      <Issues project={project} setIsModalOpen={setIsModalOpen} />
      <IssueModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
}

export default ProjectPage;
