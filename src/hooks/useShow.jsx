import { useState } from "react";

function useShow() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return [show, toggleShow];
}

export default useShow;
