import React from "react";
import { Box, Button, VStack, Text, Heading, Image, Link } from "@chakra-ui/react";
import { FaStrava } from "react-icons/fa";

const Index = () => {
  // Placeholder function for logging in with Strava
  const handleStravaLogin = () => {
    // Normally, you would initiate the OAuth flow here
    console.log("Initiate Strava OAuth flow");
  };

  // Placeholder for the plot
  const RollingAveragePlot = () => (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Text>This is a placeholder for the rolling average of GAP plot.</Text>
      {/* In reality, you would render a chart component here */}
    </Box>
  );

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading fontSize="xl">Welcome to GAP Tracker</Heading>
        <Text mt={4}>Connect your Strava account to view the rolling average of your GAP for all your runs in the past 3 years.</Text>
        <Button leftIcon={<FaStrava />} colorScheme="orange" mt={4} onClick={handleStravaLogin}>
          Login with Strava
        </Button>
      </Box>
      <RollingAveragePlot />
      <Box p={5}>
        <Text fontSize="sm">
          GAP Tracker is not affiliated with Strava, Inc. To learn more about Grade Adjusted Pace, please visit{" "}
          <Link color="teal.500" href="https://www.strava.com" isExternal>
            Strava's website <FaStrava />
          </Link>
          .
        </Text>
      </Box>
    </VStack>
  );
};

export default Index;
