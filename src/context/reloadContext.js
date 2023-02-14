import { createContext } from "react";

const reloadContext = createContext({
  reload: false,
  setReload: (rel) => {}
});

export default reloadContext;