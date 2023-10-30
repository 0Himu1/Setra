import React, { useState } from 'react';

export default function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn;
}
