import React from "react";
import ButtonBlack from "../Elements/Button/Index";

import { ChakraProvider } from "@chakra-ui/react";
import { Center, Text, Input, Box } from "@chakra-ui/react";
import NavBarReg from "../../NavBar/NavBar.Reg";

export default class FormRegister extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <NavBarReg />
        <Center
          height="100vh" // Membuat konten mengisi seluruh tinggi viewport
          flexDirection="column" // Agar konten diatur secara vertikal
        >
          <Box>
            <Text color="blue" fontWeight="bold" fontSize={35} display="flex">
              Register
            </Text>
            <p>Welcome, enter your Registerl</p>
            <Box mt={5}>
              <label htmlFor="text">Nama</label>
              <Input
              type="email"
                size="md" // Mengatur ukuran input menjadi medium
                bg="gray.100" // Mengatur latar belakang input
                color="blue.700" // Mengatur warna teks input
                border="2px solid blue" // Mengatur border input
                borderRadius="md" // Mengatur sudut input
                _focus={{ borderColor: "teal.400", boxShadow: "outline" }} // Gaya saat input dalam fokus
                _hover={{ borderColor: "teal.200" }} // Gaya saat input dihover
                placeholder="Masukkan nama di sini"
              />
            </Box>
            <Box mt={5}>
              <label htmlFor="email">Email</label>
              <Input
              type="email"
                size="md" // Mengatur ukuran input menjadi medium
                bg="gray.100" // Mengatur latar belakang input
                color="blue.700" // Mengatur warna teks input
                border="2px solid blue" // Mengatur border input
                borderRadius="md" // Mengatur sudut input
                _focus={{ borderColor: "teal.400", boxShadow: "outline" }} // Gaya saat input dalam fokus
                _hover={{ borderColor: "teal.200" }} // Gaya saat input dihover
                placeholder="Masukkan email di sini"
              />
            </Box>
            <Box mt={5}>
              <label htmlFor="email">Password</label>
              <Input
              type="password"
                size="md" // Mengatur ukuran input menjadi medium
                bg="gray.100" // Mengatur latar belakang input
                color="blue.700" // Mengatur warna teks input
                border="2px solid blue" // Mengatur border input
                borderRadius="md" // Mengatur sudut input
                _focus={{ borderColor: "teal.400", boxShadow: "outline" }} // Gaya saat input dalam fokus
                _hover={{ borderColor: "teal.200" }} // Gaya saat input dihover
                placeholder="Masukkan password di sini"
              />
            </Box>
            <ButtonBlack>Login</ButtonBlack>
          </Box>
        </Center>
      </ChakraProvider>
    );
  }
}
