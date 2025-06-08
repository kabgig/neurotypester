"use client";

import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import { FaYoutube, FaInstagram, FaTiktok, FaTelegram } from "react-icons/fa";

export default function LinktreePage() {
  const socialLinks = [
    {
      name: "YouTube Channel",
      icon: FaYoutube,
      url: "https://youtube.com/@neurotypester",
      color: "#FF0000",
      hoverColor: "#CC0000",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/neurotypester",
      color: "#E4405F",
      hoverColor: "#C13584",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com/@neurotypester",
      color: "#000000",
      hoverColor: "#333333",
    },
    {
      name: "Telegram Bot",
      icon: FaTelegram,
      url: "https://t.me/neurotypester_bot",
      color: "#0088CC",
      hoverColor: "#006699",
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      minH="100vh"
      bg="white"
      py={{ base: "8", md: "12", lg: "16" }}
      px={{ base: "4", md: "6" }}
    >
      <Container maxW="md" centerContent>
        <VStack gap={{ base: "6", md: "8" }} align="center" w="100%">
          {/* Title */}
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl", lg: "3xl" }}
            textAlign="center"
            letterSpacing="wider"
            fontWeight="black"
            bgGradient="to-r"
            gradientFrom="purple.500"
            gradientVia="pink.500"
            gradientTo="blue.500"
            bgClip="text"
            mb={{ base: "4", md: "6" }}
          >
            NEUROTYPESTER
          </Heading>

          {/* Social Media Buttons */}
          <VStack gap={{ base: "4", md: "5" }} w="100%" maxW="400px">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.name}
                  onClick={() => handleLinkClick(link.url)}
                  size={{ base: "lg", md: "xl" }}
                  height={{ base: "60px", md: "70px" }}
                  w="100%"
                  bg="white"
                  border="2px solid"
                  borderColor="gray.200"
                  shadow="md"
                  borderRadius="xl"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="semibold"
                  color="gray.800"
                  _hover={{
                    transform: "translateY(-3px)",
                    shadow: "xl",
                    borderColor: link.color,
                    color: link.color,
                    bg: "gray.50",
                  }}
                  _active={{
                    transform: "translateY(-1px)",
                    shadow: "lg",
                  }}
                  css={{
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  <Box as="span" mr="3">
                    <IconComponent size="24" />
                  </Box>
                  {link.name}
                </Button>
              );
            })}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
