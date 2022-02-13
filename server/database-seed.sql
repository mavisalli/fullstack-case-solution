CREATE TABLE tasklist
(
    id SERIAL,
    title text,
    description text,
    completed boolean DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT tasklist_pkey PRIMARY KEY (id)

);

