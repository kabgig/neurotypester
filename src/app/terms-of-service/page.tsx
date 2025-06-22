"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

// Force static generation at build time
export const dynamic = "force-static";

export default function TermsOfServicePage() {
  return (
    <Box
      minH="100vh"
      bg="white"
      py={{ base: "8", md: "12", lg: "16" }}
      px={{ base: "4", md: "6" }}
    >
      <Container maxW="4xl">
        <VStack gap={{ base: "8", md: "10" }} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="black"
              color="gray.800"
              mb="4"
            >
              Terms of Service
            </Heading>
            <HStack justify="center" gap="2" color="gray.600">
              <Icon as={FaCalendarAlt} />
              <Text fontSize="lg" fontWeight="medium">
                Effective Date: 22 June 2025
              </Text>
            </HStack>
          </Box>

          {/* Main Content */}
          <Box bg="white" p={{ base: "6", md: "10" }}>
            <VStack gap="8" align="stretch">
              {/* Introduction */}
              <Box>
                <Text fontSize="lg" color="gray.700" lineHeight="tall">
                  Welcome to Neurotypester.com (&ldquo;Website&rdquo;,
                  &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By
                  accessing or using our Website, services, consultations, or
                  any content provided, you (&ldquo;you&rdquo;,
                  &ldquo;user&rdquo;, &ldquo;client&rdquo;, or
                  &ldquo;visitor&rdquo;) agree to be bound by the following
                  Terms of Service. If you do not agree with any part of these
                  terms, you must discontinue use immediately.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 1 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  1. No Medical, Psychological, or Legal Advice
                </Heading>
                <VStack gap="4" align="stretch">
                  <Text color="gray.700" lineHeight="tall">
                    All content, services, and consultations provided on this
                    Website are for informational, educational, and personal
                    development purposes only. We do not provide medical,
                    psychological, psychiatric, legal, or financial advice. No
                    part of this Website is intended to be a substitute for
                    professional diagnosis, therapy, treatment, or advice from
                    qualified practitioners.
                  </Text>
                  <Text color="gray.700" lineHeight="tall">
                    You agree not to interpret any of our content as medical or
                    mental health guidance or use it to make decisions that
                    could affect your mental, physical, or financial well-being
                    without consulting a licensed expert in the relevant field.
                  </Text>
                </VStack>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 2 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  2. No Guarantees or Promises
                </Heading>
                <VStack gap="4" align="stretch">
                  <Text color="gray.700" lineHeight="tall">
                    We make no guarantees about the outcomes, results, or
                    accuracy of any analysis, typology, personality profiling,
                    or guidance provided. Any suggestions or insights offered
                    are based on interpretive frameworks and are inherently
                    subjective.
                  </Text>
                  <Text color="gray.700" lineHeight="tall">
                    You are solely responsible for how you interpret, act on, or
                    apply any information or recommendations from
                    Neurotypester.com.
                  </Text>
                </VStack>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 3 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  3. Client Responsibility and Interpretation
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  You acknowledge that:
                </Text>
                <VStack gap="3" align="start" pl="4">
                  <Text color="gray.700">
                    • Our assessments may involve interpretive opinion and are
                    not absolute truths.
                  </Text>
                  <Text color="gray.700">
                    • Your understanding of the results or communication may
                    differ from our intent.
                  </Text>
                  <Text color="gray.700">
                    • You will not hold us liable for any misunderstanding,
                    miscommunication, or emotional reaction resulting from our
                    work.
                  </Text>
                  <Text color="gray.700">
                    • If you&apos;re unsure how to interpret our services,
                    please ask for clarification before proceeding.
                  </Text>
                </VStack>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 4 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  4. Limitation of Liability
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  To the maximum extent permitted by law, we shall not be liable
                  for any direct, indirect, incidental, consequential, or
                  punitive damages arising from:
                </Text>
                <VStack gap="3" align="start" pl="4" mb="4">
                  <Text color="gray.700">• Use of the Website or services</Text>
                  <Text color="gray.700">
                    • Inability to access the Website
                  </Text>
                  <Text color="gray.700">
                    • Actions taken based on any content provided
                  </Text>
                  <Text color="gray.700">
                    • Emotional distress, mental confusion, or disagreement with
                    interpretations
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="tall">
                  Use of this Website is at your own risk. You agree to
                  indemnify and hold harmless Neurotypester.com and its
                  owner(s), agents, and affiliates from any claims arising out
                  of your use or misuse of our content or services.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 5 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  5. Age Restriction
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  You must be 18 years or older to use our services or Website.
                  By using Neurotypester.com, you confirm that you meet this age
                  requirement.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 6 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  6. Intellectual Property
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  All content on this Website (text, graphics, branding,
                  frameworks, etc.) is the intellectual property of
                  Neurotypester.com unless otherwise stated. You may not copy,
                  modify, distribute, or use any material without our written
                  permission.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 7 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  7. Privacy
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  We respect your privacy. Any personal information you share
                  with us is used strictly for service provision and internal
                  analysis. We do not sell or rent your data to third parties.
                  Read our Privacy Policy for full details.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 8 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  8. Changes to Terms
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  We reserve the right to modify these Terms of Service at any
                  time without prior notice. Updates will be posted on this
                  page. Continued use of the Website means you accept any
                  revisions.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 9 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  9. Governing Law
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  These Terms shall be governed by and interpreted in accordance
                  with the laws of the Russian Federation. Any disputes arising
                  will be handled in the appropriate jurisdiction within the
                  Russian Federation.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Contact Section */}
              <Box p="6">
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  Contact
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  If you have any questions or concerns about these Terms,
                  contact us at:
                </Text>
                <HStack gap="3">
                  <Icon as={FaEnvelope} color="blue.600" />
                  <Text
                    color="blue.600"
                    fontWeight="medium"
                    _hover={{ textDecoration: "underline" }}
                    cursor="pointer"
                    onClick={() =>
                      window.open("mailto:info@neurotypester.com", "_self")
                    }
                  >
                    info@neurotypester.com
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/* Footer Navigation */}
          <Box textAlign="center" pt="6">
            <HStack justify="center" gap="6" wrap="wrap">
              <Link href="/">
                <Text
                  color="gray.600"
                  _hover={{ color: "blue.600", textDecoration: "underline" }}
                  cursor="pointer"
                >
                  Home
                </Text>
              </Link>
              <Text color="gray.400">•</Text>
              <Link href="/linktree">
                <Text
                  color="gray.600"
                  _hover={{ color: "blue.600", textDecoration: "underline" }}
                  cursor="pointer"
                >
                  Social Links
                </Text>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
