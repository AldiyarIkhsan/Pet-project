export interface NoteFormProps {
  initData?: NoteItem;
  addText: (post: NoteItem) => void;
}

export type NoteItem = {
  title: string;
  description: string;
  date: Date;
};

export type NoteItemGet = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export interface NoteListProps {
  posts: NoteItemGet[];
}

export interface NoteProps {
  post: NoteItemGet;
}

export interface NoteResponse {
  [key: string]: { title: string; description: string; date: string };
}

export type NoteItem2 = {
  title: string;
  description: string;
  date: string;
};
