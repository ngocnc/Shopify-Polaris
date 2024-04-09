import { Grid, Page } from "@shopify/polaris";

import CardCustom from "./components/cardCustom";
import Customize from "./components/customize";
import Header from "./components/header";
import Preview from "./components/preview";
import Pricing from "./components/pricing";

function App() {
	return (
		<Page fullWidth>
			<Grid>
				<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 8, xl: 8 }}>
					<Header />
					<CardCustom title="Pricing">
						<Pricing />
					</CardCustom>

					<CardCustom title="Customize">
						<Customize />
					</CardCustom>
				</Grid.Cell>
				<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
					<div className="pt-8 sticky top-0 w-full">
						<CardCustom title="Preview">
							<Preview />
						</CardCustom>
					</div>
				</Grid.Cell>
			</Grid>
		</Page>
	);
}

export default App;
