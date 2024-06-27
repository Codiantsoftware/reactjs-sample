import { useRef, useEffect } from "react";

/**
 * Custom hook to create a debounced function.
 * @returns {function} - Debounced function.
 */

const useDebounce = () => {
  // Create a ref to store the timeout ID
  const timeout = useRef();
  // Debounce function generator
  const debounce =
    (func, wait) =>
    (...args) => {
      // Clear the existing timeout
      clearTimeout(timeout.current);
      // Set a new timeout to execute the function after the specified wait time
      timeout.current = setTimeout(() => func(...args), wait);
    };
  // Cleanup effect to clear the timeout on component unmount
  useEffect(() => {
    return () => {
      // Clear the timeout if it exists
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    };
  }, []);
  // Return the debounced function
  return debounce;
};
export default useDebounce;
