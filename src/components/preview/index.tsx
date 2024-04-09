import { FC } from "react";

import { useVolumeDiscount } from "@/contexts/volumeDiscountContext";
import { variableToPixel } from "@/lib/utils";
import CardPreview from "./cards";

const Preview: FC = () => {
	const { color, typography } = useVolumeDiscount();
	return (
		<div className="px-4">
			<div className="text-center">
				<p
					style={{
						color: color.mainTitle,
						fontWeight: "bold",
						fontSize: variableToPixel(typography.mainTitle),
					}}>
					Bundle and save
				</p>
			</div>

			<div className="pt-4">
				<p
					style={{
						color: color.description,
						fontWeight: "bold",
						fontSize: variableToPixel(typography.description),
					}}>
					Apply for all products in store
				</p>
			</div>

			<div className="pt-2">
				<CardPreview />
			</div>
		</div>
	);
};

export default Preview;
