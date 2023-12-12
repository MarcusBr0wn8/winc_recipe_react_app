import { SimpleGrid, Text, Heading, Box } from "@chakra-ui/react";
import { RecipeCard } from "../components/ui/RecipeCard";
import { data } from "../utils/data";
import { SearchInput } from "../components/ui/SearchInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  // Lowercase fix
  const matchedRecipes = data.hits.filter((recipe) => {
    const searchString = searchField.toLowerCase();
    return (
      recipe.recipe.label.toLowerCase().includes(searchString) ||
      recipe.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchString)
      ) ||
      recipe.recipe.dietLabels.some((label) =>
        label.toLowerCase().includes(searchString)
      ) ||
      recipe.recipe.cautions.some((caution) =>
        caution.toLowerCase().includes(searchString)
      )
    );
  });

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="white"
      >
        <Heading>
          <Text textAlign="center" fontWeight={300} fontSize={40} mt={[15, 45]}>
            <strong>WINK</strong> Recipe Searcher.
          </Text>
          <SearchInput changeFn={handleChange} w={[200, 500]} mt={2} />
        </Heading>
      </Box>
      <SimpleGrid
        bg="white"
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={3}
        maxWidth="80%"
        marginX="auto"
      >
        {matchedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            clickFn={clickFn}
          ></RecipeCard>
        ))}
      </SimpleGrid>
      <Heading>
        <Text
          textAlign="center"
          fontWeight={300}
          fontSize={15}
          mt={[15, 55]}
          mb={[15, 55]}
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
      </Heading>
    </>
  );
};

// import { Center, Heading } from '@chakra-ui/react';
// import { useState } from 'react';
// // import { RecipeChoice } from '../components/RecipeChoice';
// import { SearchRecipe } from '../components/SearchRecipe';

// export const RecipesPage = () => {
//   const greeting = 'Winc Recipe App';
//   // set state for recipes
//   const [userRecipe, setUserRecipe] = useState('');

//   //s toggle between recipepage and recipechoice
//   return (
//     <Center
//       w='100%'
//       h='100%'
//       flexDir='column'
//       bgImage="url('./assets/recipe-images/background_table-_with_food.jpeg')"
//       bgPosition='top'
//       bgRepeat='repeat'
//       bgSize={{ base: 'contain', md: 'cover', lg: 'cover', xl: 'cover' }}
//     >
//       {userRecipe ? (
//         //Recipe choice
//         <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
//       ) : (
//         //Recipepage
//         <>
//           <Heading
//             width='100%'
//             h='250px'
//             mb='10px'
//             bgPosition='top'
//             bgRepeat='no-repeat'
//             bgSize='cover'
//             textAlign='center'
//             fontSize={{ base: '3rem', sm: '4rem', md: '5rem', lg: '7rem' }}
//             color='yellow.400'
//             textShadow='3px 3px black'
//           >
//             {greeting}
//           </Heading>

//           <SearchRecipe onClick={setUserRecipe} />
//         </>
//       )}
//     </Center>
//   );
// };
