import jwt from 'jsonwebtoken';

const isTokenExpired = (token) => {
    try {
      const decoded = jwt.decode(token); // Decode without verifying signature
      if (!decoded) return true; // If no decoded token, consider it expired
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decoded.exp < currentTime; // Compare expiration time with current time
    } catch (error) {
      return true; // If there's an error decoding, consider it expired
    }
  };

  export {
    isTokenExpired
  }