import { CheckCircleIcon } from "@chakra-ui/icons";
import {
	Box,
	Container,
	Link,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

import InspirationPoems from "../data/inspiration_poems";

const sourceURL = "https://www.rumi.org.uk/poetry/";

const Inspirations = () => {
	const poems = Object.values(InspirationPoems.Content);
	return (
		<React.Fragment>
			<Header />
			<Container maxW="3xl" centerContent>
				<Box borderRadius="md" padding="5" bg="green.50">
					These poems written by Rumi were used to train the
					model. They were all sourced from{" "}
					<Link color="steelblue" href={sourceURL} isExternal>
						this website
					</Link>
				</Box>
				<List padding="5" spacing={3}>
					{poems.map((poem) => (
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="green.500" />
							{poem}
						</ListItem>
					))}
				</List>
			</Container>
		</React.Fragment>
	);
};

export default Inspirations;
