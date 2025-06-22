"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaTelegram, FaBrain, FaUserMd, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleBookingClick = () => {
    window.open(
      "https://t.me/neurotypester_bot",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Box
      minH="100vh"
      bg="white"
      py={{ base: "8", md: "12", lg: "16" }}
      px={{ base: "4", md: "6" }}
    >
      <Container maxW="4xl" centerContent>
        <VStack gap={{ base: "8", md: "12" }} align="center" w="100%">
          {/* Hero Section */}
          <VStack
            gap={{ base: "6", md: "8" }}
            align="center"
            textAlign="center"
          >
            {/* Logo */}
            <Box
              position="relative"
              width={{ base: "120px", md: "150px" }}
              height={{ base: "120px", md: "150px" }}
              overflow="hidden"
              border="4px solid"
              borderColor="blue.100"
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

            {/* Title and Subtitle */}
            <VStack gap="4" align="center">
              <Heading
                as="h1"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="black"
                color="gray.800"
                letterSpacing="wider"
              >
                NEUROTYPESTER
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                maxW="600px"
                fontWeight="medium"
              >
                Discover Your Unique Neural Architecture Through Scientific
                Neurotypological Analysis
              </Text>
            </VStack>
          </VStack>

          {/* What is Neurotypology Section */}
          <Box w="100%" maxW="3xl" bg="white" p={{ base: "6", md: "8" }}>
            <VStack gap="6" align="start">
              <HStack gap="3">
                <Icon as={FaBrain} color="blue.500" boxSize="6" />
                <Heading as="h2" size="xl" color="gray.800">
                  What is Neurotypology?
                </Heading>
              </HStack>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="tall"
              >
                Neurotypology is a comprehensive scientific approach to
                understanding individual neural patterns and cognitive
                architectures. Unlike traditional personality assessments,
                neurotypological analysis examines the unique wiring of your
                brain to reveal:
              </Text>

              <VStack gap="3" align="start" pl="4">
                <Text color="gray.700">
                  • <strong>Cognitive Processing Patterns:</strong> How your
                  brain naturally processes information
                </Text>
                <Text color="gray.700">
                  • <strong>Neural Efficiency Maps:</strong> Your brain&apos;s
                  optimal performance zones
                </Text>
                <Text color="gray.700">
                  • <strong>Neuroplasticity Potential:</strong> Areas for growth
                  and development
                </Text>
                <Text color="gray.700">
                  • <strong>Stress Response Patterns:</strong> How your nervous
                  system handles challenges
                </Text>
              </VStack>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="tall"
              >
                This analysis provides actionable insights for optimizing your
                mental performance, improving decision-making, and enhancing
                overall life satisfaction through brain-based personalized
                strategies.
              </Text>
            </VStack>
          </Box>

          {/* Call to Action Section */}
          <Box
            w="100%"
            maxW="2xl"
            bg="white"
            p={{ base: "6", md: "8" }}
            textAlign="center"
          >
            <VStack gap="6">
              <HStack gap="3" justify="center">
                <Icon as={FaUserMd} color="blue.600" boxSize="6" />
                <Heading as="h3" size="lg" color="gray.800">
                  Get Your Personal Analysis
                </Heading>
              </HStack>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="tall"
              >
                Ready to understand your unique neural architecture? Book a
                personalized neurotypological analysis session via Zoom with our
                certified specialist.
              </Text>

              <VStack gap="2" color="gray.600" fontSize="sm">
                <HStack gap="2">
                  <Icon as={FaCalendarAlt} />
                  <Text>60-minute comprehensive analysis</Text>
                </HStack>
                <Text>Professional consultation with detailed report</Text>
                <Text>Personalized recommendations and strategies</Text>
              </VStack>

              <Button
                onClick={handleBookingClick}
                size="lg"
                height="60px"
                px="8"
                bg="blue.500"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  bg: "blue.600",
                  transform: "translateY(-2px)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                css={{
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <HStack gap="3">
                  <Icon as={FaTelegram} boxSize="5" />
                  <Text>Book Your Analysis</Text>
                </HStack>
              </Button>

              <Text fontSize="sm" color="gray.500">
                Click to start booking via Telegram Bot
              </Text>
            </VStack>
          </Box>

          {/* Footer Links */}
          <HStack gap="6" wrap="wrap" justify="center" pt="8">
            <Link href="/linktree" passHref>
              <Button
                variant="ghost"
                size="lg"
                color="gray.600"
                _hover={{ color: "blue.600" }}
              >
                Social Links
              </Button>
            </Link>
            <Text color="gray.400">•</Text>
            <Button
              onClick={() =>
                window.open(
                  "https://t.me/neurotypester_bot",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              variant="ghost"
              size="lg"
              color="gray.600"
              _hover={{ color: "blue.600" }}
              cursor="pointer"
            >
              Telegram Bot
            </Button>
            <Text color="gray.400">•</Text>
            <Link href="/privacy-policy" passHref>
              <Button
                variant="ghost"
                size="lg"
                color="gray.600"
                _hover={{ color: "blue.600" }}
              >
                Privacy Policy
              </Button>
            </Link>
            <Text color="gray.400">•</Text>
            <Link href="/terms-of-service" passHref>
              <Button
                variant="ghost"
                size="lg"
                color="gray.600"
                _hover={{ color: "blue.600" }}
              >
                Terms of Service
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
