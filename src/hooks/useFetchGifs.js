import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Hook to use fetchGifs and return the results of the API call as a state variable and a function to set the state variable (setGifs)
export const useFetchGifs = (category) => {
  const [state, setState] = useState({data: [], loading: true});

  // useEffect is a hook that runs a function when a component is rendered
  useEffect(() => {
    // getGifs is a function that returns a promise (async function)
    getGifs(category).then((images) => {
      // setState is a function that takes a state variable and a function as arguments
      setState({
        data: images,
        loading: false,
      });
    }).catch(() => {
      // setState is a function that takes a state variable and a function as arguments
      setState({
        loading: false,
      });
    });
  }, [category]);
  // [] is an array of dependencies, if the dependencies change, the function will run again (useEffect runs only once)

  // Return the state variable and the function to set the state variable (setGifs)
  return state;
}
