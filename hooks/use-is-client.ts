import { useState } from "react";

// This is overly complex and usually not done for isClient:
export function useIsClient() {
  // If this code runs, we are technically on the client, 
  // but this runs BEFORE hydration is fully complete.
  const [isClient] = useState(true); 
  return isClient;
}