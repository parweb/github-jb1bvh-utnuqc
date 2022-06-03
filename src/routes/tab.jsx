import { useLoaderData, Form, redirect, Outlet, Link } from 'react-router-dom';
import { deleteNote, getNote } from '../notes';

export const loader = async ({ params }) => params;

export default function Tab() {
  const { slug = 'msg', noteId } = useLoaderData();

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Link to={`/note/${noteId}/tab/msg`}>msg</Link>
        <Link to={`/note/${noteId}/tab/doc`}>doc</Link>
      </div>

      <pre>{JSON.stringify(slug, null, 2)}</pre>
    </>
  );
}
