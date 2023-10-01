import React, { Component } from 'react';
import { Button } from "@chakra-ui/react";

interface ButtonBlackProps {
    children?: React.ReactNode;
    backgroundColor?: string; // Ubah nama prop menjadi backgroundColor
}

class ButtonBlack extends Component<ButtonBlackProps> {
    render() {
        const { children, backgroundColor = "blue.700" } = this.props; // Atur warna latar belakang ke "blue.700" jika tidak ada properti backgroundColor yang diberikan.
        return (
            <Button
                color="white"
                bg={backgroundColor} // Menggunakan properti backgroundColor langsung
                _hover={{ bg: `${backgroundColor.slice(0, -3)}.600` }} // Menggunakan warna yang lebih gelap saat tombol dihover
                _active={{ bg: `${backgroundColor.slice(0, -3)}.800` }} // Menggunakan warna yang lebih gelap saat tombol ditekan
                _focus={{ outline: "none" }}
                rounded="md"
                size="md"
                fontWeight="semibold"
                px="4"
                h="8"
                type="submit"
                mt={5}
            >
                {children}
            </Button>
        );
    }
}

export default ButtonBlack;
