import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface ICard {
  id: number;
  image: string;
  title: string;
  typeApp: string;
  uriDemo: string;
  uriCode: string;
}
export const ProjectCard = ({
  image,
  title,
  typeApp,
  uriDemo,
  uriCode,
}: ICard) => {
  const handleDemo = (): void => {
    if (uriDemo.length === 0) return;

    window.open(uriDemo, "_blank");
  };
  const handleGithub = (): void => {
    window.open(uriCode, "_blank");
  };
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      minHeight={"150px"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"md"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Flex justify="center">
        <Image h={"150px"} w={"full"} src={image} objectFit={"cover"} />
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {title}
          </Heading>
          <Text color={"gray.500"}>{typeApp}</Text>
        </Stack>
        <Stack direction={["column", "row"]} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("brand.500", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={handleDemo}
            >
              Demo
            </Button>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Button
              w={"full"}
              mt={8}
              colorScheme="brand"
              rounded={"md"}
              variant="outline"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
                bg: "brand.700",
                color: "white",
              }}
              onClick={handleGithub}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
