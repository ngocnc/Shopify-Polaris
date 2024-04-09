import { Divider } from "@shopify/polaris";
import { FC } from "react";

import Border from "./border";
import Color from "./color";
import Typography from "./typography";

const Customize: FC = () => {
	return (
		<div className="">
			<Divider borderColor="border-inverse" />
			<Border />
			<Divider borderColor="border-inverse" />
			<Color />
			<Divider borderColor="border-inverse" />
			<Typography />
		</div>
	);
};

export default Customize;
