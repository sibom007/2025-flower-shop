import { Toaster } from "@/components/ui/sonner";
import { CategoriesBgProvider } from "@/context/CategorieBgColorContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CategoriesBgProvider>
        {children}
        <Toaster duration={2000} position="top-right" />
      </CategoriesBgProvider>
    </QueryClientProvider>
  );
};

export default Provider;
