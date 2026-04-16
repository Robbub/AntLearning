let companyId = "";

export const setCompanyId = (newId: string) => {
    companyId = newId;
}

export const getCompanyId = () => {
    return companyId;
}

export interface RegionMasterInterface {
    regionId: number,
    regionName: String,
    isActive: boolean
}

let regionMasterList:RegionMasterInterface[] = [];

export const setRegionMasterList = (newRegionMasterList: RegionMasterInterface[]) => {
    regionMasterList = newRegionMasterList.map((region) => {return {...region, "isActive": false}});
}

export const getRegionMasterList = (): RegionMasterInterface[] => {
    return regionMasterList;
}

export interface BranchMasterInterface {
    branchId: number,
    branchName: String,
    branchAddress: String,
    regionId: number,
    regionName: String,
    isActive: boolean
}

let branchMasterList: BranchMasterInterface[] = [];
let branchByRegion: Record<number, BranchMasterInterface[]> = {};

export const setBranchMasterList = (newBranchMasterList: BranchMasterInterface[]) => {
    branchMasterList = newBranchMasterList.map((branch) => {return {...branch, "isActive": false}});

    groupBranchByRegion();
}

const groupBranchByRegion = () => {
    branchByRegion = {};

    for(const branch of branchMasterList) {
        if(!branchByRegion[branch.branchId]) {
            branchByRegion[branch.branchId] = [];
        }
        branchByRegion[branch.branchId].push(branch);
    }
}

export const getBranchByRegion = (): typeof branchByRegion => {
    return branchByRegion;
}

export const getBranchMasterList = (): BranchMasterInterface[] => {
    return branchMasterList;
}

export interface StaffDataPoint {
  period: string;
  id: number;
  name: string;
  numberOfTransactions: number;
  totalSales: number;
  companyName: string;
  branchName: string;
}

export interface StaffPerformanceResponse {
  staffPerformance: Record<string, StaffDataPoint[]>; 
}