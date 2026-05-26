-- Supabase SQL schema for WisdomCore Solutions

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  full_name text,
  role text not null default 'admin',
  created_at timestamp with time zone default now()
);

create table if not exists blogs (
  id bigserial primary key,
  title text not null,
  slug text unique not null,
  content text not null,
  excerpt text not null,
  category text not null,
  cover_image_url text,
  created_at timestamp with time zone default now(),
  author_id uuid references profiles(id) on delete set null
);

create table if not exists leads (
  id bigserial primary key,
  name text not null,
  company text not null,
  industry text not null,
  budget text,
  message text not null,
  status text not null default 'New',
  created_at timestamp with time zone default now()
);

-- Enable row level security on tables
alter table profiles enable row level security;
alter table blogs enable row level security;
alter table leads enable row level security;

-- Profiles policies: admin can read own profile
create policy "Profiles can read own record" on profiles
  for select using (auth.uid() = id);

-- Blogs policies: authenticated users can read; authors can insert/update/delete
create policy "Public read access to blogs" on blogs
  for select using (true);

create policy "Authenticated can create blogs" on blogs
  for insert with check (auth.role() = 'authenticated');

create policy "Author can modify own blog" on blogs
  for update using (auth.uid() = author_id)
  with check (auth.uid() = author_id);

create policy "Author can delete own blog" on blogs
  for delete using (auth.uid() = author_id);

-- Leads policies: authenticated admin users can interact with leads
create policy "Authenticated can read leads" on leads
  for select using (auth.role() = 'authenticated');

create policy "Authenticated can insert leads" on leads
  for insert with check (auth.role() = 'authenticated');

create policy "Authenticated can modify leads" on leads
  for update using (auth.role() = 'authenticated');
