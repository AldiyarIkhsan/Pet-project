import { client } from "./client";
import { NoteItem, NoteItem2 } from "../interfaces/content";
import { NoteResponse } from "../interfaces/content";

export const getNote = async (): Promise<NoteResponse> => {
  return (await client.get("/post.json")).data;
};

export const getNoteById = async (id: string): Promise<NoteItem2> => {
  return (await client.get(`/post/${id}.json`)).data;
};

export const postNote = async (payload: NoteItem) => {
  return await client.post("/post.json", payload);
};

export const deleteNote = async (id: string) => {
  await client.delete(`/post/${id}.json`);
};

export const putNote = async (id: string, item: NoteItem) => {
  await client.put(`/post/${id}.json`, item);
};
