export type LibraryResources = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author: string | null;
  isbn: string | null;
  publishedDate: Date | null;
  title: string | null;
  availableCopies: number | null;
};
