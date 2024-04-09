import { TextField } from "@shopify/polaris";
import { ChangeEvent, FC, useCallback } from "react";

import { useVolumeDiscount } from "@/contexts/volumeDiscountContext";
import Container from "../container";
import { FieldKeyColorEnum, listsInputColor } from "./constant";

const Color: FC = () => {
	const { color, setValue } = useVolumeDiscount();

	const handleChangeInput = useCallback(
		(field: FieldKeyColorEnum) => (value: string) => {
			setValue("color", { [field]: value });
		},
		[setValue]
	);

	return (
		<Container title="Border" className="grid grid-cols-2 gap-4">
			{listsInputColor.map((item) => (
				<div className="flex items-center gap-2" key={item.id}>
					<div className="flex-1">
						<TextField
							label={item.label}
							value={color[item.field]}
							onChange={handleChangeInput(item.field)}
							autoComplete="off"
							placeholder={`Vui lòng nhập ${item.label.toLowerCase()}`}
						/>
					</div>

					<input
						type="color"
						className="mt-6 size-10 block bg-white cursor-pointer disabled:opacity-50 disabled:pointer-events-none caret-transparent"
						id="hs-color-input"
						value={color[item.field]}
						title="Choose your color"
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleChangeInput(item.field)(e.target.value)
						}
					/>
				</div>
			))}
		</Container>
	);
};

export default Color;
