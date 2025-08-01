create table creations (
    id SERIAL PRIMARY KEY,
    user_id text not null,
    prompt text not null,
    content text not null,
    type text not null,
    publish boolean default false,
    likes text[] default '{}',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
  )