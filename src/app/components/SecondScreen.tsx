"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

export default function SecondScreen() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box minH="100vh" bg="gray.50" pt="10">
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        color="black"
        fontWeight="bold"
        lineHeight="1.1"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontStretch="semi-condensed"
        transform="scaleY(1.185) scaleX(1.05)"
        transformOrigin="center"
        textAlign="center"
        mb="16"
      >
        HOW IT WORKS
      </Heading>
      <Container maxW="8xl" px={{ base: "4", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap="12"
          alignItems="start"
          minH="80vh"
        >
          {/* Left Column - Image */}
          <GridItem>
            <Box>
              <Image
                src="/1.png"
                alt="Neurotype Analysis"
                width={600}
                height={600}
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                  height: "auto",
                  margin: 0,
                  padding: 0,
                  display: "block",
                  borderRadius: "12px",
                }}
                priority
              />
            </Box>
          </GridItem>

          {/* Right Column - Content */}
          <GridItem>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="8">
              {/* Left Sub-column */}
              <GridItem>
                <VStack align="start" gap="6">
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color="black"
                    fontWeight="bold"
                    lineHeight="1.2"
                  >
                    Lorem Ipsum Analysis
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    fontWeight="400"
                    lineHeight="1.6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                </VStack>
              </GridItem>

              {/* Right Sub-column */}
              <GridItem>
                <VStack align="start" gap="8">
                  {/* First Section */}
                  <Box>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color="black"
                      fontWeight="bold"
                      mb="4"
                    >
                      Key Features
                    </Text>
                    <List.Root variant="plain" color="gray.700">
                      <ListItem>• Lorem ipsum dolor sit amet</ListItem>
                      <ListItem>• Consectetur adipiscing elit</ListItem>
                      <ListItem>• Sed do eiusmod tempor</ListItem>
                      <ListItem>• Incididunt ut labore</ListItem>
                    </List.Root>
                  </Box>

                  {/* Second Section */}
                  <Box>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color="black"
                      fontWeight="bold"
                      mb="4"
                    >
                      Benefits
                    </Text>
                    <List.Root variant="plain" color="gray.700">
                      <ListItem>• Dolore magna aliqua</ListItem>
                      <ListItem>• Ut enim ad minim veniam</ListItem>
                      <ListItem>• Quis nostrud exercitation</ListItem>
                      <ListItem>• Ullamco laboris nisi</ListItem>
                    </List.Root>
                  </Box>
                </VStack>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>

      <Container
        maxW="8xl"
        px={{ base: "4", md: "8" }}
        pt={isMobile ? "20" : "0"}
        pb={isMobile ? "20" : "0"}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap="12"
          alignItems="start"
          minH="80vh"
        >
          {/* Left Column - Image */}
          <GridItem>
            <Box>
              <Image
                src="/1.png"
                alt="Neurotype Analysis"
                width={600}
                height={600}
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                  height: "auto",
                  margin: 0,
                  padding: 0,
                  display: "block",
                  borderRadius: "12px",
                }}
                priority
              />
            </Box>
          </GridItem>

          {/* Right Column - Content */}
          <GridItem>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="8">
              {/* Left Sub-column */}
              <GridItem>
                <VStack align="start" gap="6">
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color="black"
                    fontWeight="bold"
                    lineHeight="1.2"
                  >
                    Lorem Ipsum Analysis
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    fontWeight="400"
                    lineHeight="1.6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                </VStack>
              </GridItem>

              {/* Right Sub-column */}
              <GridItem>
                <VStack align="start" gap="8">
                  {/* First Section */}
                  <Box>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color="black"
                      fontWeight="bold"
                      mb="4"
                    >
                      Key Features
                    </Text>
                    <List.Root variant="plain" color="gray.700">
                      <ListItem>• Lorem ipsum dolor sit amet</ListItem>
                      <ListItem>• Consectetur adipiscing elit</ListItem>
                      <ListItem>• Sed do eiusmod tempor</ListItem>
                      <ListItem>• Incididunt ut labore</ListItem>
                    </List.Root>
                  </Box>

                  {/* Second Section */}
                  <Box>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color="black"
                      fontWeight="bold"
                      mb="4"
                    >
                      Benefits
                    </Text>
                    <List.Root variant="plain" color="gray.700">
                      <ListItem>• Dolore magna aliqua</ListItem>
                      <ListItem>• Ut enim ad minim veniam</ListItem>
                      <ListItem>• Quis nostrud exercitation</ListItem>
                      <ListItem>• Ullamco laboris nisi</ListItem>
                    </List.Root>
                  </Box>
                </VStack>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
      {/* Divider Line above bottom of first screen */}
      {/* <Box
        position="absolute"
        //bottom="7vh"
        left="0"
        right="0"
        height="1px"
        bg="gray.300"
      /> */}
    </Box>
  );
}
