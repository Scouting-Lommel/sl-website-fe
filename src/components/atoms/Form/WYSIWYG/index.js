import React, { useEffect, useState, useRef } from 'react';

const WYSIWYG = ({ args }) => {
  let editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {}; // if it don't find any document then it will be an empty object

  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };

    setLoaded(true);
  }, []); // run on mounting

  const editorConfiguration = {
    toolbar: ['bold', 'italic', 'link'],
  };

  if (loaded) {
    return (
      <>
        <pre
          className="hidden"
          id={args.id}
          name={args.name}
          defaultValue={args.defaultValue}
        ></pre>
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data={args.defaultValue}
          onChange={(event, editor) => {
            // do something when editor's content changed
            document.getElementById(args.id).value = editor.getData();
          }}
        />
      </>
    );
  } else {
    return <h2> loading... </h2>;
  }
};

export default WYSIWYG;
