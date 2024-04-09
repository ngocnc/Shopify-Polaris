/* eslint-disable react-refresh/only-export-components */
import {
	VolumeDiscountReducerState,
	useVolumeDiscountReducer,
} from "@/reducers/volumeDiscountReducer";
import { PropsWithChildren, createContext, useContext, useMemo } from "react";

const VolumeDiscountContext = createContext({} as VolumeDiscountReducerState);

const VolumeDiscountProvider = ({ children }: PropsWithChildren) => {
	const reducer = useVolumeDiscountReducer();

	const value = useMemo(() => ({ ...reducer }), [reducer]);

	return (
		<VolumeDiscountContext.Provider value={{ ...value }}>
			{children}
		</VolumeDiscountContext.Provider>
	);
};

export default VolumeDiscountProvider;

export const useVolumeDiscount = () => useContext(VolumeDiscountContext);
