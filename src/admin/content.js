import React, { useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

const ContentManagement = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Our Mission", content: "Join us" },
    { id: 2, title: "Blogs", content: "UiTM Kiosk Prihatin" },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newArticle, setNewArticle] = useState({ title: "", content: "" });

  const handleAddArticle = () => {
    setArticles([...articles, { ...newArticle, id: articles.length + 1 }]);
    setNewArticle({ title: "", content: "" });
    onClose();
  };

  const handleEditArticle = () => {
    const updatedArticles = articles.map((article) =>
      article.id === selectedArticle.id ? selectedArticle : article
    );
    setArticles(updatedArticles);
    onClose();
  };

  const handleDeleteArticle = (id) => {
    // Delete article logic (e.g., API call)
    const filteredArticles = articles.filter((article) => article.id !== id);
    setArticles(filteredArticles);
  };

  return (
    <Box p="6">
      <Heading as="h1" size="lg" mb="6">
        Content Management
      </Heading>
      <Stack spacing="4">
        {articles.map((article) => (
          <Box
            key={article.id}
            bg="white"
            p="4"
            boxShadow="md"
            borderRadius="md"
          >
            <Text fontWeight="bold">{article.title}</Text>
            <Text>{article.content}</Text>
            <Stack direction="row" mt="2" justify="flex-end">
              <IconButton
                icon={<MdEdit />}
                aria-label="Edit"
                variant="ghost"
                onClick={() => {
                  setSelectedArticle(article);
                  onOpen();
                }}
              />
              <IconButton
                icon={<MdDelete />}
                aria-label="Delete"
                variant="ghost"
                colorScheme="red"
                onClick={() => handleDeleteArticle(article.id)}
              />
            </Stack>
          </Box>
        ))}
      </Stack>

      <Button
        colorScheme="blue"
        leftIcon={<MdAdd />}
        onClick={() => {
          setSelectedArticle(null);
          onOpen();
        }}
        mt="4"
      >
        Add Article
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedArticle ? "Edit Article" : "Add Article"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="4">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={
                  selectedArticle ? selectedArticle.title : newArticle.title
                }
                onChange={(e) =>
                  selectedArticle
                    ? setSelectedArticle({
                        ...selectedArticle,
                        title: e.target.value,
                      })
                    : setNewArticle({ ...newArticle, title: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Content</FormLabel>
              <Input
                type="text"
                value={
                  selectedArticle ? selectedArticle.content : newArticle.content
                }
                onChange={(e) =>
                  selectedArticle
                    ? setSelectedArticle({
                        ...selectedArticle,
                        content: e.target.value,
                      })
                    : setNewArticle({ ...newArticle, content: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={selectedArticle ? handleEditArticle : handleAddArticle}
            >
              {selectedArticle ? "Save Changes" : "Add"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ContentManagement;
