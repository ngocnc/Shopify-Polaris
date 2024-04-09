export type TCard = {
	id: number;
	title: string;
	subTitle: string;
	popular: boolean;
	percent: number;
};

export const cards: TCard[] = [
	{
		id: 1,
		title: "Buy 1",
		subTitle: "Standard price",
		popular: false,
		percent: 0,
	},
	{
		id: 2,
		title: "Buy 2",
		subTitle: "Save 10%",
		popular: true,
		percent: 10,
	},
	{
		id: 3,
		title: "Buy 3",
		subTitle: "Save 20%",
		popular: false,
		percent: 20,
	},
];
