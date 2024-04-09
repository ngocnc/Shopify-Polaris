import { useCallback, useReducer } from "react";

/* eslint-disable no-mixed-spaces-and-tabs */
const initialState = {
	pricing: {
		perItem: false,
		includePrice: true,
	},
	border: {
		borderRadius: "5",
		borderWidth: "1",
	},
	color: {
		mainTitle: "#000000",
		description: "#000000",
		barsPrimaryColor: "#ee4d2d",
		barsSubTitle: "#000000",
		barsBackground: "#ffffff",
		barsLabelBackground: "#ff1111",
	},
	typography: {
		mainTitle: "16",
		description: "14",
		barsTitle: "14",
		barsSubTitle: "14",
	},
	popular: {
		checked: "2",
	},
};

export enum ActionTypes {
	changePricing,
	changeBorder,
	changeColor,
	changeTypography,
	changePopular,
}

interface PricingAction {
	type: ActionTypes.changePricing;
	payload: Partial<typeof initialState.pricing>;
}

interface BorderAction {
	type: ActionTypes.changeBorder;
	payload: Partial<typeof initialState.border>;
}

interface ColorAction {
	type: ActionTypes.changeColor;
	payload: Partial<typeof initialState.color>;
}

interface TypographyAction {
	type: ActionTypes.changeTypography;
	payload: Partial<typeof initialState.typography>;
}

interface PopularAction {
	type: ActionTypes.changePopular;
	payload: Partial<typeof initialState.popular>;
}

type Action =
	| PricingAction
	| BorderAction
	| ColorAction
	| TypographyAction
	| PopularAction;

const reducer = (
	state: typeof initialState,
	action: Action
): typeof initialState => {
	switch (action.type) {
		case ActionTypes.changePricing:
			return {
				...state,
				pricing: {
					...state.pricing,
					...action.payload,
				},
			};
		case ActionTypes.changeBorder:
			return {
				...state,
				border: {
					...state.border,
					...action.payload,
				},
			};
		case ActionTypes.changeColor:
			return {
				...state,
				color: {
					...state.color,
					...action.payload,
				},
			};
		case ActionTypes.changeTypography:
			return {
				...state,
				typography: {
					...state.typography,
					...action.payload,
				},
			};
		case ActionTypes.changePopular:
			return {
				...state,
				popular: {
					...state.popular,
					...action.payload,
				},
			};
		default:
			return state;
	}
};

type PartialInitialState = typeof initialState;

type SetValue = {
	setValue: <T extends keyof typeof initialState>(
		key: T,
		value: Partial<(typeof initialState)[T]>
	) => void;
};

export type VolumeDiscountReducerState = PartialInitialState & SetValue;

export const useVolumeDiscountReducer = (): VolumeDiscountReducerState => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const setValue = useCallback(
		<T extends keyof typeof initialState>(
			key: T,
			value: Partial<(typeof initialState)[T]>
		) => {
			dispatch({
				type: ActionTypes[
					`change${
						key.charAt(0).toUpperCase() + key.slice(1)
					}` as keyof typeof ActionTypes
				],
				payload: value,
			});
		},
		[dispatch]
	);

	return { ...state, setValue };
};
