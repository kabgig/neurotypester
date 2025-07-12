"use client";

import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "../../components/ui/dialog";
import { Checkbox } from "../../components/ui/checkbox";

interface BookingAgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function BookingAgreementModal({
  isOpen,
  onClose,
  onContinue,
}: BookingAgreementModalProps) {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleContinue = () => {
    if (isAgreed) {
      onContinue();
      onClose();
    }
  };

  const handleClose = () => {
    setIsAgreed(false);
    onClose();
  };

  return (
    <DialogRoot open={isOpen} onOpenChange={(details: { open: boolean }) => !details.open && handleClose()}>
      <DialogBackdrop />
      <DialogContent
        maxW="md"
        bg="white"
        borderRadius="16px"
        border="1px solid"
        borderColor="gray.200"
        boxShadow="xl"
        mx="4"
      >
        <DialogHeader pb="4" borderBottom="1px solid" borderColor="gray.100">
          <DialogTitle fontSize="xl" fontWeight="bold" color="black">
            Before You Continue
          </DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        
        <DialogBody py="6">
          <VStack align="stretch" gap="4">
            <Text fontSize="md" color="gray.700" lineHeight="1.6">
              To proceed with booking your neurotype analysis session, please review and accept our terms:
            </Text>
            
            <Box
              p="4"
              bg="gray.50"
              borderRadius="8px"
              border="1px solid"
              borderColor="gray.200"
            >
              <HStack align="flex-start" gap="3">
                <Checkbox
                  checked={isAgreed}
                  onCheckedChange={(checked: boolean) => setIsAgreed(checked)}
                  colorPalette="green"
                  size="lg"
                />
                <Text fontSize="sm" color="gray.600" lineHeight="1.5">
                  I agree to the{" "}
                  <Link
                    href="/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue.600"
                    textDecoration="underline"
                    fontWeight="medium"
                    _hover={{ color: "blue.700" }}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue.600"
                    textDecoration="underline"
                    fontWeight="medium"
                    _hover={{ color: "blue.700" }}
                  >
                    Privacy Policy
                  </Link>
                  . I understand that this session is for informational purposes and not a substitute for professional medical or psychological advice.
                </Text>
              </HStack>
            </Box>
          </VStack>
        </DialogBody>

        <DialogFooter gap="3" pt="4">
          <DialogActionTrigger asChild>
            <Button
              variant="outline"
              onClick={handleClose}
              size="lg"
              borderColor="gray.300"
              color="gray.600"
              _hover={{
                bg: "gray.50",
                borderColor: "gray.400",
              }}
            >
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            onClick={handleContinue}
            size="lg"
            bg={isAgreed ? "green.500" : "gray.300"}
            color="white"
            fontWeight="bold"
            borderRadius="8px"
            disabled={!isAgreed}
            _hover={{
              bg: isAgreed ? "green.600" : "gray.300",
            }}
            _active={{
              bg: isAgreed ? "green.700" : "gray.300",
            }}
            _disabled={{
              opacity: 0.6,
              cursor: "not-allowed",
            }}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}