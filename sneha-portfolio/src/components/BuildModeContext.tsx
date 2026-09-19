"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BuildModeState {
  buildMode: boolean;
  toggleBuildMode: () => void;
}

const BuildModeContext = createContext<BuildModeState | null>(null);

export function BuildModeProvider({ children }: { children: ReactNode }) {
  const [buildMode, setBuildMode] = useState(false);

  return (
    <BuildModeContext.Provider
      value={{
        buildMode,
        toggleBuildMode: () => setBuildMode((v) => !v),
      }}
    >
      {children}
    </BuildModeContext.Provider>
  );
}

export function useBuildMode() {
  const ctx = useContext(BuildModeContext);
  if (!ctx) {
    throw new Error("useBuildMode must be used within a BuildModeProvider");
  }
  return ctx;
}
