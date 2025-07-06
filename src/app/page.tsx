"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

// Force static generation at build time
export const dynamic = "force-static";

export default function Home() {
  const handleBookingClick = () => {
    window.open(
      "https://t.me/neurotypester_bot",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Box bg="gray.50">
      {/* First Screen - Hero Section */}
      <Box minH="100vh" position="relative">
        <Container maxW="8xl" px={{ base: "4", md: "8" }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap="12"
            alignItems="start"
            minH="100vh"
            py={{ base: "8", lg: "0" }}
          >
            {/* Left Side - Text Content */}
            <GridItem>
              <VStack
                align="start"
                gap="8"
                maxW="600px"
                pt={{ base: "4", lg: "12" }}
              >
                {/* Main Headline */}
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontWeight="100"
                  color="black"
                  lineHeight="0.9"
                  letterSpacing="0.1em"
                  fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontStretch="condensed"
                >
                  NEUROTYPOLOGICAL <br />
                  ANALYSIS
                </Heading>
              </VStack>
            </GridItem>

            {/* Right Side - Image and CTA */}
            <GridItem>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                minH="100vh"
                pt={{ base: "4", lg: "12" }}
                pb={{ base: "8", lg: "0" }}
              >
                {/* Photo at top */}
                <Box
                  position="relative"
                  width={{ base: "280px", md: "320px", lg: "460px" }}
                  height={{ base: "350px", md: "400px", lg: "550px" }}
                >
                  <Image
                    src="/ansar_headshot-cropped.jpg"
                    alt="Ansar Neurotypester"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    priority
                  />
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>

        {/* CTA Button above divider in right column */}
        <Box
          position="absolute"
          bottom="80px"
          right="0"
          px={{ base: "4", md: "8" }}
        >
          <Container maxW="8xl">
            <Box display="flex" justifyContent="flex-end">
              <Button
                onClick={handleBookingClick}
                size="lg"
                height="60px"
                px="12"
                bg="black"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                borderRadius="0"
                _hover={{
                  bg: "gray.800",
                }}
                _active={{
                  bg: "gray.900",
                }}
              >
                BOOK 1-1 SESSION
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Subtitle at bottom before divider */}
        <Box
          position="absolute"
          bottom="80px"
          left="0"
          right="0"
          px={{ base: "4", md: "8" }}
        >
          <Container maxW="8xl">
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              fontWeight="400"
              maxW="500px"
            >
              Face decoding for optimized brain performance
            </Text>
          </Container>
        </Box>

        {/* Divider Line above bottom of first screen */}
        <Box
          position="absolute"
          bottom="60px"
          left="0"
          right="0"
          height="1px"
          bg="gray.300"
        />
      </Box>

      {/* Second Screen - Empty Container for now */}
      <Box minH="100vh" bg="white">
        <Container maxW="8xl" px={{ base: "4", md: "8" }}>
          {/* Second screen content will go here */}
        </Container>
      </Box>
    </Box>
  );
}
