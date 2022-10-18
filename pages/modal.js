import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="auto" backdropBlur="5px" />
        <ModalContent>
          <ModalHeader>example header</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>example body</ModalBody>
          <ModalFooter>example footer</ModalFooter>
        </ModalContent>
      </Modal>

      <button onClick={onOpen}>open modal</button>
    </>
  );
};

export default ModalExample;
