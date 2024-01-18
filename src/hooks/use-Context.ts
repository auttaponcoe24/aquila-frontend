import { useContext } from "react";
import { DataContext } from "../contexts/Context";

export function useDataContext() {
	return useContext(DataContext);
}
