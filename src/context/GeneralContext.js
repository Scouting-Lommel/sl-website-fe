import React, { createContext, useEffect, useState } from 'react';
import { areObjectsEqual } from '@/lib/helpers/areObjectsEqual';

const GeneralContext = createContext(null);
GeneralContext.displayName = 'General';

const GeneralProvider = ({ value = {}, children }) => {
  const [general, setGeneral] = useState(value);

  useEffect(() => {
    if (!areObjectsEqual(general, value)) {
      setGeneral(value);
    }
  }, [general, value]);

  return <GeneralContext.Provider value={{ general }}>{children}</GeneralContext.Provider>;
};

export { GeneralContext, GeneralProvider };
