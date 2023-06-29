import React from "react";
import * as DOMPurify from "dompurify";

// Prevents injection attacks because we are using raw HTML generated with Jinja templates
const sanitizer = DOMPurify.sanitize;

const Jinja = (HTML) => {
  return <div dangerouslySetInnerHTML={{ __html: sanitizer(HTML) }} />;
};

export default Jinja;
