"use client";

import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import { FaYoutube, FaInstagram, FaTiktok, FaTelegram } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LinktreePage() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTablet = /iPad|Android(?=.*\bMobile\b)/i.test(userAgent) || 
                      (navigator.maxTouchPoints > 1 && /Macintosh/i.test(userAgent));
      
      setIsMobileOrTablet(isMobile || isTablet);
    };

    checkDevice();
  }, []);

  const socialLinks = [
    {
      name: "YouTube Channel",
      icon: FaYoutube,
      url: isMobileOrTablet 
        ? "youtube://www.youtube.com/@Neurotypester" 
        : "https://youtube.com/@neurotypester",
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
            color="black"
            mb={{ base: "2", md: "3" }}
          >
            NEUROTYPESTER
          </Heading>

          {/* Avatar */}
          <Box
            position="relative"
            width={{ base: "120px", md: "150px" }}
            height={{ base: "120px", md: "150px" }}
            borderRadius="full"
            overflow="hidden"
            shadow="xl"
            border="4px solid"
            borderColor="gray.100"
            mb={{ base: "2", md: "3" }}
            _hover={{
              transform: "scale(1.05)",
              shadow: "2xl",
            }}
            css={{
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Image
              src="/neurotypester_logo.png"
              alt="Neurotypester Logo"
              fill
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </Box>

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
