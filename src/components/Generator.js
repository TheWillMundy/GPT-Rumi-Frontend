import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Link,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Spinner,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import PoemModal from "./PoemModal";

const defaultState = {
	length: 150,
	prompt: "",
};

const backend = "68.183.137.219";

const Generator = () => {
	const [getGeneratorValues, setGeneratorValues] = useState(defaultState);
	const [getPoem, setPoem] = useState(null);
	const [isLoading, setLoading] = useState(false);

	// Poem Modal
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleSliderChange = (value) =>
		setGeneratorValues({ ...getGeneratorValues, length: value });
	const handlePromptChange = (e) =>
		setGeneratorValues({ ...getGeneratorValues, prompt: e.target.value });
	const handleSubmit = async () => {
		// Start Spinner
		setLoading(true);

		// Make Request
		const response = await axios.get(`http://${backend}/generate`, {
			params: getGeneratorValues,
		});

		// Do something with response
		let { data } = response;
		if (data) setPoem(data.poem);

		// Stop Spinner
		setLoading(false);

		// Create poem modal
		onOpen();

		// Finally reset values
		setGeneratorValues(defaultState);
	};
	return (
		<Container padding="5" maxW="3xl" centerContent>
			<Box borderRadius="md" padding="5" bg="green.50" textAlign="center">
				Use the following to create your own poem in the style of Rumi! <br />
				NOTE: This typically takes ~15 seconds
			</Box>
			<Container paddingTop="5">
				<Box padding="5" borderWidth="1px" borderColor="green.300" maxW="3xl">
					<FormControl id="length" padding="5" isDisabled={isLoading}>
						<FormLabel>Maximum Length of Poem</FormLabel>
						<Slider
							onChange={handleSliderChange}
							defaultValue={getGeneratorValues.length}
							value={getGeneratorValues.length}
							max={500}
							min={50}
							isDisabled={isLoading}
						>
							<SliderTrack bg="green.100">
								<SliderFilledTrack bg="tomato" />
							</SliderTrack>
							<SliderThumb />
						</Slider>
						<FormHelperText>
							The recommended length is 150 (characters), but this
							can be adjusted anywhere between 50 and 500
							characters.
						</FormHelperText>
					</FormControl>
					<FormControl id="prompt" padding="5" isDisabled={isLoading}>
						<FormLabel>Prompt</FormLabel>
						<Input
							maxLength="50"
							placeholder="Enter a prompt, such as 'Love', 'God', or 'Oh'"
							value={getGeneratorValues.prompt}
							onChange={handlePromptChange}
						/>
						<FormHelperText>
							A shorter prompt is typically best, but a longer one
							(less than 50 characters) also works!
						</FormHelperText>
					</FormControl>
					<Flex justify="center">
						{isLoading ? (
							<Spinner />
						) : (
							<Button
								colorScheme="blue"
								padding="5"
								variant="outline"
								onClick={handleSubmit}
							>
								{getPoem ? "Generate Again!" : "Generate!"}
							</Button>
						)}
					</Flex>
				</Box>
				{getPoem ? (
					<PoemModal
						poem={getPoem}
						isOpen={isOpen}
						onClose={onClose}
					/>
				) : null}
				{/* {getPoem ? (
					<Box padding="5" bg="blue.50" maxW="3xl">
						<Text>{getPoem}</Text>
					</Box>
				) : null} */}
			</Container>
		</Container>
	);
};

export default Generator;
