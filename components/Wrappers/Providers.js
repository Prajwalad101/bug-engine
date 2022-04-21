// next-auth
import { SessionProvider, signIn } from "next-auth/react";
import Auth from "./Auth";

// react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function Providers({ children, session, user }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SessionProvider refetchOnWindowFocus={false} session={session}>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Providers;
