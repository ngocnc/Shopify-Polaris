import { Checkbox } from "@shopify/polaris";
import { FC, useCallback } from "react";

import { useVolumeDiscount } from "@/contexts/volumeDiscountContext";

const Pricing: FC = () => {
	const { pricing, setValue } = useVolumeDiscount();

	const handleChange = useCallback(
		(field: keyof typeof pricing) => (newChecked: boolean) => {
			setValue("pricing", { [field]: newChecked });
		},
		[setValue]
	);

	return (
		<div className="flex flex-col gap-1 px-3">
			<Checkbox
				name="perItem"
				label="Show prices per item"
				checked={pricing.perItem}
				onChange={handleChange("perItem")}
			/>

			<Checkbox
				name="includePrice"
				label="Include compare-at price"
				checked={pricing.includePrice}
				onChange={handleChange("includePrice")}
			/>
		</div>
	);
};

export default Pricing;
