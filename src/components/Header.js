import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import { useNavigate } from "@reach/router";

const rumiWikipedia = "https://en.wikipedia.org/wiki/Rumi";

const Header = () => {
	const navigate = useNavigate();

	const routes = [
		{ name: "View Samples", path: "/samples" },
		{ name: "Generate Your Own", path: "/generate" },
		{ name: "View Insights", path: "/insights" },
	];

	return (
		<Container maxW="3xl" centerContent>
			<Box borderRadius="md" padding="4" bg="gray.100" maxW="3xl">
				Welcome to GPT-Rumi, an AI that has been trained in the ways of
				the great Sufi poet{" "}
				<Link color="teal.500" href={rumiWikipedia} isExternal>
					Rumi
				</Link>
			</Box>
			<Container maxW="5xl">
				<Flex maxW="5xl" padding="5" justify="center" wrap="wrap">
					{routes.map((route) => (
						<Button margin="5" onClick={() => navigate(route.path)}>
							{route.name}
						</Button>
					))}
				</Flex>
			</Container>
		</Container>
	);
};

export default Header;
