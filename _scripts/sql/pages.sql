CREATE TABLE pages
(
    id       varchar(255) DEFAULT uid() PRIMARY KEY,
    title    text         DEFAULT '...'::text,
    slug     text         DEFAULT '...'::text,
    sections json         DEFAULT '[
      {
        "title": "Lorem",
        "text": "<p>Lorem ipsum dolor sit amet.</p>",
        "_orbi": {
          "component": "SectionProse"
        }
      }
    ]'::json,
    head     json         DEFAULT '{
      "title": "..."
    }'::json
);
