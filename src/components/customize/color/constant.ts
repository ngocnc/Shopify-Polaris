export enum FieldKeyColorEnum {
	mainTitle = "mainTitle",
	description = "description",
	barsPrimaryColor = "barsPrimaryColor",
	barsSubTitle = "barsSubTitle",
	barsBackground = "barsBackground",
	barsLabelBackground = "barsLabelBackground",
}
export type ListsInputColor = {
	id: number;
	label: string;
	field: FieldKeyColorEnum;
};

export const listsInputColor: ListsInputColor[] = [
	{
		id: 1,
		label: "Main title",
		field: FieldKeyColorEnum.mainTitle,
	},
	{
		id: 2,
		label: "Description",
		field: FieldKeyColorEnum.description,
	},
	{
		id: 3,
		label: "Bars primary color",
		field: FieldKeyColorEnum.barsPrimaryColor,
	},
	{
		id: 4,
		label: "Bars subtitle",
		field: FieldKeyColorEnum.barsSubTitle,
	},
	{
		id: 5,
		label: "Bars background",
		field: FieldKeyColorEnum.barsBackground,
	},
	{
		id: 6,
		label: "Bars label background",
		field: FieldKeyColorEnum.barsLabelBackground,
	},
];
