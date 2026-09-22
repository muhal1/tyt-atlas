-- TYT Atlas ortak pano kurulumu
-- Bu dosyayı Supabase SQL Editor'da bir kez çalıştırın.

create table if not exists public.panel_state (
  id text primary key default 'main',
  saved integer[] not null default '{}',
  done integer[] not null default '{}',
  hidden_subjects text[] not null default '{}',
  cart jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null,
  constraint panel_state_singleton check (id = 'main'),
  constraint panel_state_cart_is_array check (jsonb_typeof(cart) = 'array')
);

create index if not exists panel_state_updated_by_idx
on public.panel_state (updated_by);

alter table public.panel_state enable row level security;

revoke all on table public.panel_state from anon, authenticated;
grant select on table public.panel_state to authenticated;
grant insert, update on table public.panel_state to authenticated;

drop policy if exists "Ortak pano herkese gorunur" on public.panel_state;
drop policy if exists "Giris yapanlar ortak panoyu gorur" on public.panel_state;
create policy "Giris yapanlar ortak panoyu gorur"
on public.panel_state for select
to authenticated
using (
  id = 'main'
  and (select auth.uid()) is not null
  and coalesce(((select auth.jwt())->>'is_anonymous')::boolean, false) = false
);

drop policy if exists "Giris yapanlar ortak panoyu olusturabilir" on public.panel_state;
create policy "Giris yapanlar ortak panoyu olusturabilir"
on public.panel_state for insert
to authenticated
with check (
  id = 'main'
  and (select auth.uid()) is not null
  and coalesce(((select auth.jwt())->>'is_anonymous')::boolean, false) = false
  and updated_by = (select auth.uid())
);

drop policy if exists "Giris yapanlar ortak panoyu guncelleyebilir" on public.panel_state;
create policy "Giris yapanlar ortak panoyu guncelleyebilir"
on public.panel_state for update
to authenticated
using (
  id = 'main'
  and (select auth.uid()) is not null
  and coalesce(((select auth.jwt())->>'is_anonymous')::boolean, false) = false
)
with check (
  id = 'main'
  and (select auth.uid()) is not null
  and coalesce(((select auth.jwt())->>'is_anonymous')::boolean, false) = false
  and updated_by = (select auth.uid())
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_display_name_length
    check (char_length(trim(display_name)) between 2 and 60)
);

alter table public.profiles enable row level security;

revoke all on table public.profiles from anon, authenticated;
grant select, insert, update on table public.profiles to authenticated;

drop policy if exists "Kullanici kendi profilini gorur" on public.profiles;
create policy "Kullanici kendi profilini gorur"
on public.profiles for select
to authenticated
using ((select auth.uid()) = id);

drop policy if exists "Kullanici kendi profilini olusturur" on public.profiles;
create policy "Kullanici kendi profilini olusturur"
on public.profiles for insert
to authenticated
with check ((select auth.uid()) = id);

drop policy if exists "Kullanici kendi profilini gunceller" on public.profiles;
create policy "Kullanici kendi profilini gunceller"
on public.profiles for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

-- Authentication > Providers > Email altında yeni kullanıcı kaydı ve e-posta doğrulaması açık olmalıdır.
