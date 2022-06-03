import localforage from 'localforage';

export async function getNotes() {
  let notes = await localforage.getItem('notes');
  if (!notes) notes = [];

  return notes;
}

export async function createNote({ title, content }) {
  const id = Math.random().toString(36).substring(2, 9);
  const note = { id, title, content };

  await set([note, ...(await getNotes())]);

  return note;
}

export async function getNote(id) {
  return (await getNotes()).find((note) => note.id === id) ?? null;
}

export async function deleteNote(id) {
  let notes = await getNotes();
  let index = notes.findIndex((note) => note.id === id);

  if (index > -1) {
    notes.splice(index, 1);
    await set(notes);
    return true;
  }
  return false;
}

function set(notes) {
  return localforage.setItem('notes', notes);
}
