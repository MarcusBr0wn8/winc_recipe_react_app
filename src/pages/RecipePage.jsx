import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Text,
  Stack,
  Tag,
  Center,
  Wrap,
  Button,
  Tooltip,
  Box,
  Grid,
  List,
  ListItem,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, clickFn }) => {
  const Nutrients = [
    recipe.totalNutrients.ENERC_KCAL,
    recipe.totalNutrients.FAT,
    recipe.totalNutrients.CHOCDF,
    recipe.totalNutrients.PROCNT,
    recipe.totalNutrients.CHOLE,
    recipe.totalNutrients.NA,
  ];

  return (
    <Center bg="white" h="100%">
      {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="white"
      ></Box> */}
      <Card
        mt={["20px", "50px"]}
        mb={["30px", "60px"]}
        width={["90%", "60%"]}
        boxShadow="2xl"
        bg="white"
        cursor={"hand"}
      >
        <CardHeader>
          <Center>
            <Box
              backgroundImage={`url(${recipe.image})`}
              h="30vh"
              w="90%"
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              borderRadius={"10px"}
            ></Box>
          </Center>
          <Tooltip label="Back to the recipepage">
            <Button
              bg="white"
              w="50px"
              h="50px"
              p={2}
              _hover={{ backgroundColor: "white" }}
              mt="10px"
            >
              <Image
                src="/src/assets/Arrow_Left.png"
                alt="Back to recipe page"
                onClick={() => clickFn()}
                transform={"scale(2"}
              />
            </Button>
          </Tooltip>
        </CardHeader>
        <CardBody>
          <Grid gridTemplateColumns={["1fr", "1fr"]}>
            <Stack mt={[1, 6]} spacing="3">
              <Text
                fontSize="xs"
                textTransform={"uppercase"}
                fontWeight={"semibold"}
              >
                {recipe.mealType.length > 1
                  ? recipe.mealType.join("/")
                  : recipe.mealType}{" "}
              </Text>
              <Text fontSize={["l", "xl"]} fontWeight={"bold"} pb={3}>
                {recipe.label}
              </Text>
              <Stack direction="column">
                <Text fontStyle={"regular"} fontSize={"sm"}>
                  <strong>Cooking time:</strong> {recipe.totalTime} minutes
                  <br></br>
                  <strong>Dish has: </strong> {recipe.yield} servings
                </Text>
              </Stack>
              <Text fontWeight={"bold"} pt={3}>
                Ingredients:
              </Text>
              <List>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <ListItem key={ingredient.text} fontSize={["xs", "sm"]}>
                      <Text>{ingredient.text}</Text>
                    </ListItem>
                  );
                })}
              </List>
              <Text fontWeight={"bold"} pt={3}>
                Total nutriënts:
              </Text>
              <Stack direction={["column", "row"]} gap={[1, 5]}>
                {Nutrients.map((nut) => {
                  return (
                    <Stack
                      direction="column"
                      key={nut.label}
                      p={1}
                      fontSize={["xs", "sm"]}
                      textAlign={"center"}
                    >
                      <Text
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        fontSize={"xs"}
                      >
                        {nut.label}
                      </Text>
                      <Text mb={-2}>
                        {Math.round(nut.quantity)} {nut.unit}
                      </Text>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
            <Stack mt="6" spacing="3">
              <Text fontWeight={"semibold"} pt={3}>
                {recipe.healthLabels.length >= 1 ? "Health labels:" : ""}
              </Text>
              <Wrap>
                {recipe.healthLabels.map((label) => {
                  return (
                    <Tag
                      key={label}
                      size={"sm"}
                      maxBlockSize={3}
                      bg="purple.100"
                      m={2}
                      textAlign={"center"}
                      color="purple.800"
                      fontWeight={"semibold"}
                      py={1}
                      textTransform={"uppercase"}
                    >
                      {label}
                    </Tag>
                  );
                })}
              </Wrap>
              <Text fontWeight={"semibold"} pt={3}>
                {recipe.dietLabels.length >= 1 ? "Diet:" : ""}
              </Text>
              <Wrap>
                {recipe.dietLabels.map((label) => {
                  return (
                    <Tag
                      key={label}
                      size={"sm"}
                      maxBlockSize={2}
                      bg="green.100"
                      textAlign={"center"}
                      color="green.800"
                      fontWeight={"semibold"}
                      py={1}
                      textTransform={"uppercase"}
                    >
                      {label}
                    </Tag>
                  );
                })}
              </Wrap>
              <Stack direction="row">
                <Text fontWeight={"semibold"} pt={3} color="red.800">
                  {recipe.cautions.length >= 1 ? "Cautions:" : ""}
                </Text>
                <Tooltip label="Check for allergy">
                  <WarningIcon
                    w={recipe.cautions.length >= 1 ? 5 : 0}
                    h={5}
                    color="red.500"
                    transform={"translateY(15px)"}
                  />
                </Tooltip>
              </Stack>
              <Wrap>
                {recipe.cautions.map((warning) => {
                  return (
                    <Tag
                      key={warning}
                      size={"sm"}
                      bg="red.100"
                      textAlign={"center"}
                      color="red.600"
                      fontWeight={"bold"}
                      py={1}
                      textTransform={"uppercase"}
                      wrap={"wrap"}
                    >
                      {warning}
                    </Tag>
                  );
                })}
              </Wrap>
            </Stack>
          </Grid>
        </CardBody>
        <Box>
          <Text
            textAlign="left"
            fontWeight={300}
            fontSize={15}
            mt={[15, 45]}
            mb={[15, 45]}
            maxWidth={500}
            marginLeft={30}
          >
            © 2023 <strong>WINC</strong> Recipe Searcher | All rights reserved |
            Webdevelopment: Marcus Brown | Design:{" "}
            <a
              href="https://browndesign.nl"
              target="_blank"
              rel="noopener noreferrer"
              alt="Brown Design"
            >
              Brown Design
            </a>
          </Text>
        </Box>
      </Card>
    </Center>
  );
};
