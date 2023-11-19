import { sha256 } from "js-sha256";

export const getImageSource = (emailAddress?: string): string => {
  
  if (emailAddress) {
    const sha256EmailAddress = sha256(emailAddress.trim().toLocaleLowerCase());
    return `https://gravatar.com/avatar/${sha256EmailAddress}`;
  }
  
  return "https://www.gravatar.com/avatar/?d=mp";
  
};
