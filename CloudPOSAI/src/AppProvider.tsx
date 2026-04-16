import { createContext, useContext, useState, type ReactNode } from "react";
import { type BranchMasterInterface, getBranchMasterList } from "./config";

export type BranchRecord = Record<number, BranchMasterInterface>

type AppContextType = {
  branchActive: BranchRecord
  setBranchActive: (value: BranchRecord) => void
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const allBranches: BranchMasterInterface = {
    branchId: -1,
    branchName: "All branches",
    branchAddress: "",
    regionId: 0,
    regionName: "",
    isActive: true
  };

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [branchActive, setBranchActive] = useState<Record<number, BranchMasterInterface>>(
    () => {
      const list = getBranchMasterList();
      return list.reduce((acc, value) => {
        acc[value.branchId] = {...value, isActive: false};
        return acc;
      }, {[allBranches.branchId]: {...allBranches}} as Record<number, BranchMasterInterface>);
    }
  );

  return (
    <AppContext.Provider
      value={{
        branchActive, 
        setBranchActive
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used inside AppProvider");
  return context;
};