import { useContext } from "react";

import { __templateNameToPascalCase__Context } from "./context";

export function use__templateNameToPascalCase__() {
  const context = useContext(__templateNameToPascalCase__Context);
  if (!context)
    throw new Error(
      "use__templateNameToPascalCase__ must be used in __templateNameToPascalCase__Provider",
    );
  return context;
}
