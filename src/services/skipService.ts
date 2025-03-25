import { apiClient } from "./apiClient";
import { SkipData } from "../types/skipTypes";
export const fetchSkips = async (): Promise<SkipData[]> => {
  try {
    const response = await apiClient.get<SkipData[]>("/skips");
    return response.data;
  } catch (error) {
    console.log('error in fetching skips' , error);
    throw new Error("Failed to fetch skips data");
  }
};