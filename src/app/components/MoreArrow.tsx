"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

interface MoreArrowProps {
  onClick: () => void;
}

export default function MoreArrow({ onClick }: MoreArrowProps) {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      //py="8"
      bg="gray.50"
      cursor="pointer"
      onClick={onClick}
      _hover={{
        bg: "gray.100",
      }}
      transition="background-color 0.2s"
    >
      <VStack gap="2">
        <Box fontSize="24px" color="gray.600" animation="bounce 2s infinite">
          <FiChevronDown />
        </Box>
      </VStack>
    </Box>
  );
}
