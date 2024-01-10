import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

const EditSettings = () => {
  const toast = useToast();
  const [settings, setSettings] = useState({
    companyName: 'Kiosk Prihatin',
    website: 'https://kioskprihatin.com',
    email: 'info@kioskprihatin.com',
    phone: '+1234567890',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = () => {
    // Replace this with your logic to update settings (e.g., API call)
    toast({
      title: 'Settings updated!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p="6">
      <Heading as="h1" size="lg" mb="6">
        Edit Settings
      </Heading>
      <FormControl mb="4">
        <FormLabel>Company Name</FormLabel>
        <Input
          type="text"
          name="companyName"
          value={settings.companyName}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Website</FormLabel>
        <Input
          type="text"
          name="website"
          value={settings.website}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Phone</FormLabel>
        <Input
          type="text"
          name="phone"
          value={settings.phone}
          onChange={handleChange}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>
        Save Changes
      </Button>
    </Box>
  );
};

export default EditSettings;
