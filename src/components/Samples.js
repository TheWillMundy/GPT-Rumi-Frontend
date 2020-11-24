import { CheckCircleIcon } from "@chakra-ui/icons";
import {
	Tabs,
	TabList,
	Tab,
	TabPanel,
	TabPanels,
	Container,
	Box,
} from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import React from "react";

import SamplePoems from "../data/sample_poems";

const Samples = () => {
    const tabNames = Object.keys(SamplePoems);
	return (
		<Container maxW="3xl" centerContent paddingTop="20px">
			<Box borderRadius="md" padding="4" bg="green.50" w="3xl">
				These are some sample poems that the AI generated, with each tab
				indicating the "prompt" provided to the AI which it generated
				based on.
			</Box>
			<Box padding="4" bg="white.100" w="3xl">
				<Tabs>
					<TabList>
						{tabNames.map((tabName) => (
							<Tab>{tabName}</Tab>
						))}
					</TabList>
					<TabPanels>
						{tabNames.map((tabName) => (
							<TabPanel>
								<List spacing={3}>
									{SamplePoems[tabName].map((poem) => {
										return (
											<ListItem>
												<ListIcon
													as={CheckCircleIcon}
													color="green.500"
												/>
												{poem}
											</ListItem>
										);
									})}
								</List>
							</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
};

export default Samples;
