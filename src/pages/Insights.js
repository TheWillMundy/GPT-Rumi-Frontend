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

const lovePoemsURL = "https://www.rumi.org.uk/love_poems/";
const mysticalPoemsURL = "https://www.rumi.org.uk/mystical_poems/";
const passionPoemsURL = "https://www.rumi.org.uk/passion/";

const Insights = () => {
	return (
		<React.Fragment>
			<Header />
			<Container maxW="3xl" centerContent>
				<Box borderRadius="md" padding="5" bg="green.50">
					Here are some of the insights that I collected as a result
					of this project.
				</Box>
				<List padding="5" spacing={3}>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						The model seems to have captured several of the topics
						which Rumi's work focuses on, including Love and God.
						Given that the model was primarily trained on{" "}
						<Link color="cyan.500" href={lovePoemsURL} isExternal>
							Poems of Love
						</Link>
						, &nbsp;
						<Link
							color="cyan.500"
							href={mysticalPoemsURL}
							isExternal
						>
							Mystical Poems
						</Link>
						, and{" "}
						<Link
							color="cyan.500"
							href={passionPoemsURL}
							isExternal
						>
							Poetry of Passion
						</Link>
						, this result is very good as it indicates that the
						model did indeed learn the primary topics which it was
						trained to learn.
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						One really interesting insight is that the model has
						learned the proper, <strong>capitalized</strong>{" "}
						pronouns that Rumi used to refer to Allah/God - it
						consistently refers to "Him", "He", and "His" when Allah
						or God is discussed.
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						The model also seems to really like two particular
						phrases: "beguile" and "Like this". The first of these
						appears in two separate poems of the training dataset,
						and it seems that its uniqueness piqued the model's
						interest enough to include it in many of the generated
						sequences. The phrase "Like this" also appears in some
						generated sequences, and when it does, it appears{" "}
						<strong>frequently.</strong> The reason for this is
						likely due to the fact that in the training dataset, one
						poem uses "Like this." as a constant refrain; and so the
						model has picked up on this style and uses it in some
						generated sequences.
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color="green.500" />
						One final observation is that the model has also picked
						up some unique words which it certainly would not have
						known prior to training on Rumi's poetry - for example,
						one of the sample poems that was generated using the
						prompt "My love" includes the word "kauthar", which
						appears in the training dataset of poems but is{" "}
						<i>not</i> a common enough word for the model to have
						known previously. What's more interesting, however, is
						that in the sample poem, the model uses the word
						"kauthar" in the correct sense; it seems to actually{" "}
						<i>understand</i> the meaning of "kauthar", which is not
						a word in English. Its meaning, roughly "mass abundance"
						from Allah, can be seen through the sample poem where it
						appears. This is quite amazing given that the model
						would have only seen the word <strong>once</strong> in
						the training dataset, and yet it has managed to learn
						its complex meaning.
					</ListItem>
				</List>
			</Container>
		</React.Fragment>
	);
};

export default Insights;
