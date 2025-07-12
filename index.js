import { $state,runEffect } from './index.js';

export const useMediaQuery = (query) => {
  const media = window.matchMedia(query);
  const matches = $state(media.matches);
  
  const updateMatch = (e) => {
    matches.value = e.matches;
  };
  
  // Optional: Clean up function 
  runEffect(() => {
    media.addEventListener('change', updateMatch);
      return ()=>{
        // Attach cleanup if needed
  
    media.removeEventListener('change', updateMatch);

      }
  })
  return matches;
};

// Usage:
// const isSmall = useMediaQuery('(max-width: 678px)')