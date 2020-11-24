import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useClipboard,
} from "@chakra-ui/react";

const PoemModal = ({ poem, isOpen, onClose }) => {
	const { hasCopied, onCopy } = useClipboard(poem);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Poem</ModalHeader>
				<ModalBody>{poem}</ModalBody>
				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onCopy}>
						{hasCopied ? "Copied to Clipboard!" : "Copy"}
					</Button>
					<Button colorScheme="red" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default PoemModal;
