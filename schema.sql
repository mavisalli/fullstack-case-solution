CREATE DATABASE "todo-case-db"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Turkish_Turkey.1254'
    LC_CTYPE = 'Turkish_Turkey.1254'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

    CREATE TABLE IF NOT EXISTS public.tasklist
(
    id integer NOT NULL DEFAULT nextval('tasklist_id_seq'::regclass),
    title text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    completed boolean NOT NULL DEFAULT false,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT tasklist_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tasklist
    OWNER to postgres;

-- Trigger: set_timestamp

-- DROP TRIGGER IF EXISTS set_timestamp ON public.tasklist;

CREATE TRIGGER set_timestamp
    BEFORE UPDATE 
    ON public.tasklist
    FOR EACH ROW
    EXECUTE FUNCTION public.trigger_set_timestamp();