import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

import useProjects from "../hooks/useProjects";

export default function Home() {
  const router = useRouter();

  // // Fetch projects from the api
  const { isLoading, isError, data, error } = useProjects();
  const projects = data?.data;

  const project = projects && projects[0];

  if (!project) return null;

  router.push(`/project/${project._id}`);
  return <div></div>;
}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/api/auth/signin",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }
