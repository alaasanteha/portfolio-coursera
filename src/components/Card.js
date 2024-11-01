import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
   <Box bg="white" color="black"  borderRadius='lg' > 
    <Image
      src={imageSrc}
      alt=''
      borderRadius='lg'
    />
    <VStack my='5' ml="3" spacing='2' align="flex-start">
      <Heading size='md'>{title}</Heading>
      <Text my='1' color="grey">
         {description}
      </Text>   
    
    <HStack>
       <Text>
         See more
        </Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />    
    </HStack> 
    </VStack> 
</Box>
  );
};

export default Card;
