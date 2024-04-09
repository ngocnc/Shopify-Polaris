import { FC } from "react";

import Card from "./card";
import { cards } from "./constants";

const CardPreview: FC = () => {
	return (
		<div className="flex flex-col gap-2">
			{cards.map((card, index) => (
				<Card key={index} card={card} index={index} />
			))}
		</div>
	);
};

export default CardPreview;
