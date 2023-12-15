import { Input } from "@chakra-ui/react";

export const SearchInput = ({ changeFn, ...props }) => {
  return (
    <Input
      id="search"
      name="search"
      variant={"filled"}
      focusBorderColor="gray"
      _focus={{ background: "white" }}
      fontSize={"sm"}
      textAlign={"center"}
      color="darkgray.400"
      fontStyle={"regular"}
      placeholder="What recipe are you looking for?..."
      _placeholder={{ color: "darkgray.400" }}
      _hover={{ background: "lightgray.400" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
