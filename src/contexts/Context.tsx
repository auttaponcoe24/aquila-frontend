import axios from "../utils/apiURL";
import { createContext, ReactNode, useState } from "react";

interface DataContextProps {
	children: ReactNode;
}

interface DataContextValue {
	fetchData: () => void;
	getData: any[];
	loading: boolean;
}

export const DataContext = createContext<DataContextValue | undefined>(
	undefined
);

export default function DataContextProvider({ children }: DataContextProps) {
	const [getData, setGetData] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchData = async () => {
		try {
			const res = await axios.get("/search?limit=10");
			setGetData(res.data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	const contextValue: DataContextValue = {
		fetchData,
		getData,
		loading,
	};

	return (
		<DataContext.Provider value={contextValue}>
			{children}
		</DataContext.Provider>
	);
}
