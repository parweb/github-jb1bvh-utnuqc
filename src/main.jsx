import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataBrowserRouter, Route } from 'react-router-dom';

import * as Root from './routes/root';
import * as NewNote from './routes/new';
import * as Note from './routes/note';
import * as Tab from './routes/tab';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route path="/" element={<Root.default />} loader={Root.loader}>
        <Route
          path="new"
          element={<NewNote.default />}
          action={NewNote.action}
        />
        <Route
          path="note/:noteId"
          element={<Note.default />}
          loader={Note.loader}
          action={Note.action}
          errorElement={<h2>Note not found</h2>}
        >
          <Route index element={<Tab.default />} loader={Tab.loader} />
          <Route
            path="tab/:slug"
            element={<Tab.default />}
            loader={Tab.loader}
          />
        </Route>
      </Route>
    </DataBrowserRouter>
  </React.StrictMode>
);
