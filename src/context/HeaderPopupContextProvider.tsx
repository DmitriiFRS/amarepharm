'use client';

import { createContext, PropsWithChildren, useState } from 'react';

export const HeaderPopup = createContext<{
   isOpen: boolean;
   setIsOpen: (isOpen: boolean) => void;
}>({
   isOpen: false,
   setIsOpen: (isOpen: boolean) => {},
});

const HeaderPopupContextProvider = ({ children }: PropsWithChildren<{}>) => {
   const [isOpen, setIsOpen] = useState(false);
   return <HeaderPopup.Provider value={{ isOpen, setIsOpen }}>{children}</HeaderPopup.Provider>;
};

export default HeaderPopupContextProvider;
