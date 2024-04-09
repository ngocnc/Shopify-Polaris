import { TextField } from "@shopify/polaris";
import { FC, useCallback } from "react";

import { useVolumeDiscount } from "@/contexts/volumeDiscountContext";
import Container from "../container";
import { FieldKeyTypographyEnum, listsInputTypography } from "./constant";

const Typography: FC = () => {
	const { typography, setValue } = useVolumeDiscount();

	const handleChangeInput = useCallback(
		(field: FieldKeyTypographyEnum) => (value: string) => {
			setValue("typography", { [field]: value });
		},
		[setValue]
	);

	return (
		<Container title="Border" className="grid grid-cols-2 gap-4">
			{listsInputTypography.map((item) => (
				<div className="flex-1" key={item.id}>
					<TextField
						type="number"
						label={item.label}
						value={typography[item.field]}
						onChange={handleChangeInput(item.field)}
						autoComplete="off"
						suffix="px"
						placeholder={`Vui lòng nhập ${item.label.toLowerCase()}`}
					/>
				</div>
			))}
		</Container>
	);
};

export default Typography;
