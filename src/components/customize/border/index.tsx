import { TextField } from "@shopify/polaris";
import { FC, useCallback } from "react";

import { useVolumeDiscount } from "@/contexts/volumeDiscountContext";
import Container from "../container";

const Border: FC = () => {
	const { border, setValue } = useVolumeDiscount();

	const handleChange = useCallback(
		(field: keyof typeof border) => (newValue: string) => {
			setValue("border", { [field]: newValue });
		},
		[setValue]
	);
	return (
		<Container
			title="Border"
			className="flex items-center justify-center gap-4">
			<div className="flex-1">
				<TextField
					label="Corner radius"
					value={border.borderRadius}
					onChange={handleChange("borderRadius")}
					autoComplete="off"
					type="number"
				/>
			</div>
			<div className="flex-1">
				<TextField
					label="Border weight"
					value={border.borderWidth}
					onChange={handleChange("borderWidth")}
					autoComplete="off"
					type="number"
				/>
			</div>
		</Container>
	);
};

export default Border;
