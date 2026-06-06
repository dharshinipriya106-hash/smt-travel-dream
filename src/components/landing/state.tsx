import { createContext, useContext, useState, type ReactNode } from "react";

export type SearchState = {
  destination: string;
  date: string;
  travelers: number;
};

type Ctx = {
  search: SearchState;
  setSearch: (s: Partial<SearchState>) => void;
  scrollToId: (id: string) => void;
};

const LandingCtx = createContext<Ctx | null>(null);

export function LandingProvider({ children }: { children: ReactNode }) {
  const [search, setSearchState] = useState<SearchState>({
    destination: "",
    date: "",
    travelers: 2,
  });
  const setSearch = (s: Partial<SearchState>) =>
    setSearchState((prev) => ({ ...prev, ...s }));
  const scrollToId = (id: string) => {
    if (typeof document === "undefined") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <LandingCtx.Provider value={{ search, setSearch, scrollToId }}>
      {children}
    </LandingCtx.Provider>
  );
}

export function useLanding() {
  const ctx = useContext(LandingCtx);
  if (!ctx) throw new Error("useLanding must be used within LandingProvider");
  return ctx;
}
