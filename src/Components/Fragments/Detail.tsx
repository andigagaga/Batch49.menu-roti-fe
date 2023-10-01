import React, { useEffect, useState } from "react";
import { ChakraProvider, Center, Text, Box } from "@chakra-ui/react";
import NavBar from "../../NavBar/NavBar";
import { useParams } from "react-router-dom";

interface DataDetail {
  name: string;
  description: string;
  imageUrl: string;
}

function Detail() {
  const [dataCard, setDataCard] = useState<DataDetail>({
    name: "",
    description: "",
    imageUrl: "",
  });

  const {id} = useParams()


  useEffect(() => {
    // Assuming you want to fetch data for a specific ID, update the ID accordingly.
    fetch(`https://api.npoint.io/624c99ed50dcd45fb160/${id}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setDataCard(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []);

  return (
    <React.Fragment>
      <ChakraProvider>
        <NavBar />
        <Center p={5}>
          <Box>
            <Text fontSize="5xl" fontWeight="bold" mb="5" display="flex" justifyContent="center">
              Details-Menu
            </Text>
            <Text fontSize="2xl" fontWeight="bold" mb="5">
              {dataCard.name}
            </Text>
            <Text mt={25}>{dataCard.description}</Text>

            <Center >
              <img width="900px" height="450" src={dataCard.imageUrl} alt="" />
            </Center>
          </Box>
        </Center>
      </ChakraProvider>
    </React.Fragment>
  );
} 

export default Detail;
