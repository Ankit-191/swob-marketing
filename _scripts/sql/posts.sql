CREATE TABLE posts
(
    id         varchar(255) DEFAULT uid() PRIMARY KEY,
    title      text         DEFAULT '...'::text,
    img        text         DEFAULT 'http://localhost/alpha/media/undefined.webp'::text,
    text       text         DEFAULT '<p>...</p>'::text,
    published  boolean      DEFAULT false,
    created_at timestamptz  DEFAULT CURRENT_TIMESTAMP
);
