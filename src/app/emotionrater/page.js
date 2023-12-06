"use client";
import supabase from "../config/supbaseClient.js";
import { useEffect, useState } from "react";
import { useLink } from "next/router";
import { SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired.svg";
import Link from "next/link.js";
import Bubble from "../../../public/assets/Bubble.svg";

import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const HappinessRatingButtons = () => {
  const [happinessRating, setHappinessRating] = useState(null);

  const handleHappinessRatingChange = async (rating) => {
    await supabase.rpc("update_happiness_rating", { rating });
    setHappinessRating(rating);
  };

  return (
    <Box position="relative">
      <Flex direction="column" align="center" justify="center" h="100%">
        <Box size="lg" w="70%" h="100px" bg="brand.blue" borderRadius="md">
          <Heading>Let’s dive deeper (rate your emotions)</Heading>
        </Box>

        <Box>
          <Box
            bg="brand.lightBlue"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
          >
            <Heading align="center">How happy do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text size="sm">Not Happy</Text>
              </Box>
              <Image />
              <Box position="relative" display="inline-block">
                <Image
                  src={Bubble}
                  alt="Bubble1"
                  onClick={() => handleHappinessRatingChange(1)}
                  width={50}
                  height={50}
                />

                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image
                  src={Bubble}
                  alt="Bubble2"
                  onClick={() => handleHappinessRatingChange(2)}
                  width={50}
                  height={50}
                />

                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image
                  src={Bubble}
                  alt="Bubble3"
                  onClick={() => handleHappinessRatingChange(3)}
                  width={50}
                  height={50}
                />

                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image
                  src={Bubble}
                  alt="Bubble4"
                  onClick={() => handleHappinessRatingChange(4)}
                  width={50}
                  height={50}
                />

                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image
                  src={Bubble}
                  alt="Bubble5"
                  onClick={() => handleHappinessRatingChange(5)}
                  width={50}
                  height={50}
                />

                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text size="sm">Very Happy</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HappinessRatingButtons;
