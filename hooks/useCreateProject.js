import { useMutation, useQueryClient } from "react-query";

function useCreateProject() {
  const queryClient = useQueryClient();

  const addProject = useMutation(
    async (newProject) => {
      console.log(newProject);
      const res = await fetch(`/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
      if (!res.ok) {
        throw Error("Error while adding project");
      }
      return res;
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries("projects");
      },
    }
  );

  return addProject;
}

export default useCreateProject;
