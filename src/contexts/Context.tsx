import axios from "../utils/apiURL";
import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
	const [getData, setGetData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const res = await axios.get("");
			setGetData(res.data);
			loading;
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<DataContext.Provider value={{ fetchData, getData, loading }}>
			{children}
		</DataContext.Provider>
	);
}
