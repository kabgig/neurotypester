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
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";

//🧲 CTA Under Button:
// This is not therapy. It’s a decoding session. You’ll walk away with brutal clarity and a strategic map of your own mind.

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
          {/* Left Column - YouTube Video */}
          <GridItem>
            <Box>
              <AspectRatio ratio={16 / 9} borderRadius="12px" overflow="hidden">
                <iframe
                  src="https://www.youtube.com/embed/hip1J7_bXLs"
                  title="How Neurotypology Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    border: "none",
                    borderRadius: "12px",
                  }}
                />
              </AspectRatio>
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
                    🔬 What is Neurotypology?
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    fontWeight="400"
                    lineHeight="1.6"
                  >
                    Neurotypology is the science of decoding your brain’s
                    cognitive blueprint through the visible patterns in your
                    face. <br />
                    Bone structure, tension, angles — all of it reveals how you
                    make decisions, handle stress, and sabotage yourself. This
                    isn’t theory. It’s the manual you never got.
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
                      💡 Key Features
                    </Text>
                    <List.Root variant="plain" color="gray.700">
                      <ListItem>
                        • Identifies your natural decision-making style
                      </ListItem>
                      <ListItem>
                        • Maps out cognitive strengths and weak zones
                      </ListItem>
                      <ListItem>
                        • Reveals your stress behavior & coping patterns
                      </ListItem>
                      <ListItem>
                        • Detects work/life misalignment at structural level
                      </ListItem>
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
                      <ListItem>
                        • Stop guessing what job, role, or routine fits you
                      </ListItem>
                      <ListItem>
                        • End self-sabotage from internal misalignment
                      </ListItem>
                      <ListItem>
                        • Build systems that actually match your mind
                      </ListItem>
                      <ListItem>
                        • See yourself clearly — maybe for the first time ever
                      </ListItem>
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
                    🧬 Neurotypology is facial decoding for brain optimization.
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    fontWeight="400"
                    lineHeight="1.6"
                  >
                    Your face is a high-resolution map of how your brain works.
                    <br /> Tension patterns, jaw shape, brow angles — all of it
                    reflects your natural cognitive mechanics.
                    <br />
                    Neurotypology reads that map. And shows you how to stop
                    fighting your own system. This isn’t astrology. This is
                    anatomy — shaped into strategy.
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
                      ✒️ What You’ll Learn:
                    </Text>
                    <List.Root variant="plain" color="gray.700">
                      <ListItem>
                        • How your brain actually processes stress, decisions,
                        and info
                      </ListItem>
                      <ListItem>
                        • Where your natural edge is — and where you keep
                        short-circuiting
                      </ListItem>
                      <ListItem>
                        • Why your current job/routine is draining you
                      </ListItem>
                      <ListItem>
                        • What structure brings out your highest performance
                      </ListItem>
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
                      🎯 Results People Get:
                    </Text>
                    <List.Root variant="plain" color="gray.700">
                      <ListItem>
                        • Clarity on what career path actually fits
                      </ListItem>
                      <ListItem>
                        • Routines that energize instead of exhaust
                      </ListItem>
                      <ListItem>• Less internal conflict, more flow</ListItem>
                      <ListItem>
                        • A grounded sense of who the hell they actually are
                      </ListItem>
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
