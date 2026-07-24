import { useEffect } from 'react';

/**
 * Custom hook to set the document title
 * Usage: usePageTitle('Contact Us');
 * Result: \"Contact Us | Cyberhealth\"
 */
const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | Cyberhealth` : 'Cyberhealth | IT & Cybersecurity Services';
    
    // Restore previous title on unmount (optional)
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle;