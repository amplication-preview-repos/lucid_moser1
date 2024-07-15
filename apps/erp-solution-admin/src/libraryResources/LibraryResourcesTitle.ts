import { LibraryResources as TLibraryResources } from "../api/libraryResources/LibraryResources";

export const LIBRARYRESOURCES_TITLE_FIELD = "title";

export const LibraryResourcesTitle = (record: TLibraryResources): string => {
  return record.title?.toString() || String(record.id);
};
