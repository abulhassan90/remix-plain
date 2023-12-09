import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  return (
    <Editor
      apiKey='y7b8cwc7cpk2c5e4o0z4q3sa826rhorm28ip9687n8rqoiiy'
      init={{
        plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
        toolbar: 'blocks fontfamily fontsize | bold italic underline | link image table | align lineheight | tinycomments | checklist numlist bullist indent outdent',
        menubar: '',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}