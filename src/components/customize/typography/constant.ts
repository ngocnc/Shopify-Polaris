export enum FieldKeyTypographyEnum {
	mainTitle = "mainTitle",
	description = "description",
	barsTitle = "barsTitle",
	barsSubTitle = "barsSubTitle",
}
export type ListsInputTypography = {
	id: number;
	label: string;
	field: FieldKeyTypographyEnum;
};

export const listsInputTypography: ListsInputTypography[] = [
	{
		id: 1,
		label: "Main title",
		field: FieldKeyTypographyEnum.mainTitle,
	},
	{
		id: 2,
		label: "Description",
		field: FieldKeyTypographyEnum.description,
	},
	{
		id: 3,
		label: "Bars title",
		field: FieldKeyTypographyEnum.barsTitle,
	},
	{
		id: 4,
		label: "Bars subtitle",
		field: FieldKeyTypographyEnum.barsSubTitle,
	},
];
