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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </Heading>
            <VStack gap="2" color="gray.600">
              <HStack justify="center" gap="2">
                <Icon as={FaCalendarAlt} />
                <Text fontSize="lg" fontWeight="medium">
                  Effective Date: 22 June 2025
                </Text>
              </HStack>
              <HStack gap="2">
                <Icon as={FaEnvelope} />
                <Text fontSize="lg" fontWeight="medium">
                  Contact Email: info@neurotypester.com
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* Main Content */}
          <Box bg="white" p={{ base: "6", md: "10" }}>
            <VStack gap="8" align="stretch">
              {/* Introduction */}
              <Box>
                <Text fontSize="lg" color="gray.700" lineHeight="tall">
                  At Neurotypester.com, we are committed to protecting your
                  privacy and handling your personal data with care and
                  transparency. This Privacy Policy explains what information we
                  collect, how we use it, and your rights regarding your data.
                </Text>
                <Text fontSize="lg" color="gray.700" lineHeight="tall" mt="4">
                  By using this Website, you consent to the practices described
                  in this Privacy Policy.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 1 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  1. What Information We Collect
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  We may collect and store the following types of personal
                  information when you use our services:
                </Text>
                <VStack gap="4" align="start" pl="4">
                  <Text color="gray.700">
                    <strong>Basic Contact Information:</strong> Name, email
                    address, social media handles (if applicable).
                  </Text>
                  <Text color="gray.700">
                    <strong>Voluntarily Provided Data:</strong> Information you
                    provide during consultations, assessments, or via contact
                    forms.
                  </Text>
                  <Text color="gray.700">
                    <strong>Technical Data:</strong> IP address, browser type,
                    device type, and pages you visit — collected via cookies or
                    analytics tools.
                  </Text>
                  <Text color="gray.700">
                    <strong>Transactional Data:</strong> If applicable, records
                    of purchases or bookings (via third-party platforms).
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="tall" mt="4">
                  We do not collect sensitive financial information (e.g.,
                  credit card numbers) directly. All payments are processed via
                  secure third-party services (e.g., PayPal, Stripe, etc.).
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 2 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  2. How We Use Your Information
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  We use your data strictly for the following purposes:
                </Text>
                <VStack gap="3" align="start" pl="4" mb="4">
                  <Text color="gray.700">
                    • To provide personalized typology assessments,
                    consultations, and content
                  </Text>
                  <Text color="gray.700">
                    • To respond to inquiries and customer support requests
                  </Text>
                  <Text color="gray.700">
                    • To send important service-related messages (e.g.,
                    appointment confirmations)
                  </Text>
                  <Text color="gray.700">
                    • To improve the performance and user experience of the
                    Website
                  </Text>
                  <Text color="gray.700">
                    • For legal compliance or dispute resolution, if required
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="tall">
                  We do not sell, rent, or share your personal data with third
                  parties for marketing purposes.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 3 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  3. Data Storage and Security
                </Heading>
                <VStack gap="4" align="stretch">
                  <Text color="gray.700" lineHeight="tall">
                    All personal data is stored securely using encryption and
                    access control. We take reasonable steps to protect your
                    information from unauthorized access, alteration, or
                    destruction.
                  </Text>
                  <Text color="gray.700" lineHeight="tall">
                    However, no method of transmission over the Internet or
                    method of electronic storage is 100% secure, so we cannot
                    guarantee absolute security.
                  </Text>
                </VStack>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 4 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  4. Use of Cookies
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  We may use cookies or similar technologies to:
                </Text>
                <VStack gap="3" align="start" pl="4" mb="4">
                  <Text color="gray.700">
                    • Analyze website traffic and user behavior
                  </Text>
                  <Text color="gray.700">• Remember user preferences</Text>
                  <Text color="gray.700">
                    • Improve performance and personalization
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="tall">
                  You can disable cookies in your browser settings, but some
                  features of the Website may not work as intended if you do.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 5 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  5. Third-Party Services
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  We may use trusted third-party services to:
                </Text>
                <VStack gap="3" align="start" pl="4" mb="4">
                  <Text color="gray.700">
                    • Process payments (e.g., PayPal, Stripe)
                  </Text>
                  <Text color="gray.700">• Manage bookings or scheduling</Text>
                  <Text color="gray.700">• Host our Website</Text>
                  <Text color="gray.700">
                    • Collect usage analytics (e.g., Google Analytics)
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="tall">
                  These providers have their own privacy policies. We encourage
                  you to review them.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 6 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  6. Your Rights
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  Depending on your jurisdiction, you may have the right to:
                </Text>
                <VStack gap="3" align="start" pl="4" mb="4">
                  <Text color="gray.700">
                    • Access the personal data we hold about you
                  </Text>
                  <Text color="gray.700">
                    • Correct or update your information
                  </Text>
                  <Text color="gray.700">
                    • Request deletion of your data (&ldquo;right to be
                    forgotten&rdquo;)
                  </Text>
                  <Text color="gray.700">
                    • Object to or restrict certain processing
                  </Text>
                  <Text color="gray.700">
                    • Withdraw consent where applicable
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="tall">
                  To exercise any of these rights, contact us at
                  info@neurotypester.com.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 7 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  7. Data Retention
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  We retain your data only for as long as necessary to fulfill
                  the purposes outlined in this policy, unless a longer
                  retention period is required by law. You may request deletion
                  of your information at any time.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 8 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  8. Children&apos;s Privacy
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  This Website and its services are not intended for individuals
                  under 18 years old. We do not knowingly collect personal
                  information from children. If we learn we have received such
                  data, it will be deleted.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 9 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  9. International Users
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  If you are accessing this Website from outside the Russian
                  Federation, please be aware that your data may be processed in
                  jurisdictions that may not offer the same level of data
                  protection as your country.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Section 10 */}
              <Box>
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  10. Changes to This Policy
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  We reserve the right to modify this Privacy Policy at any
                  time. Updates will be posted on this page with a revised
                  effective date. Your continued use of the Website signifies
                  acceptance of the updated terms.
                </Text>
              </Box>

              <Box height="1px" bg="gray.200" />

              {/* Contact Section */}
              <Box p="6">
                <Heading as="h2" size="lg" color="gray.800" mb="4">
                  Contact
                </Heading>
                <Text color="gray.700" lineHeight="tall" mb="4">
                  If you have any questions, concerns, or requests regarding
                  your data or this policy, contact us at:
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
              <Link href="/terms-of-service">
                <Text
                  color="gray.600"
                  _hover={{ color: "blue.600", textDecoration: "underline" }}
                  cursor="pointer"
                >
                  Terms of Service
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
