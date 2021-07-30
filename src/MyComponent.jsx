// https://stackoverflow.com/questions/68455465/react-exhaustive-deps-rule-flagging-missing-dependencies-from-custom-hooks

import { useEffect, useState } from "react";

// Writing a custom hook that only calls `useState` and returns what `useState` returns
const useMyOwnStateHook = (initialValue) => useState(initialValue);

const MyComponent = ({ children }) => {
  // Here we have a direct call to `useState`
  const [, setStandardState] = useState("");
  // Here we call `useState` in our hook
  const [myOwnState, setMyOwnState] = useMyOwnStateHook("");

  useEffect(() => {
    // This call is safe and does not raise any linting error, as per the doc (https://reactjs.org/docs/hooks-reference.html#usestate)
    setStandardState("");
  }, []);

  setMyOwnState("");

  return (
    <span>
      {children}({myOwnState})
    </span>
  );
};

export default MyComponent;
