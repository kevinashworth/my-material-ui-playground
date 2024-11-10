import * as React from 'react';

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */
const MyAccordionContext = React.createContext({});

if (process.env.NODE_ENV !== 'production') {
  MyAccordionContext.displayName = 'MyAccordionContext';
}

export default MyAccordionContext;
