import { __templateNameToPascalCase__Repository as Repository } from "../repositories";

export const __templateNameToPascalCase__Service = (
  repository: Repository,
): Repository => ({
  ...repository,
});
