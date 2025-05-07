import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CategoriesBgProvider } from "@/context/CategorieBgColorContext";
import { FilterProvider } from "@/context/FilterContext";
import { AuthProvider } from "@/context/AuthContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter fullPageNavigationOnShallowFalseUpdates>
        <AuthProvider>
          <CategoriesBgProvider>
            <FilterProvider>
              {children}
              <Toaster duration={2000} position="top-right" />
            </FilterProvider>
          </CategoriesBgProvider>
        </AuthProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
};

export default Provider;
