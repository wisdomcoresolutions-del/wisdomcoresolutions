# WisdomCore Solutions

A premium B2B website scaffold for WisdomCore Solutions.

## Tech stack
- React.js with Vite
- Tailwind CSS
- Lucide React icons
- Framer Motion animations
- Supabase for Auth, Database, and Storage
- Deployment ready for Vercel

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and add your Supabase credentials:
   ```bash
   cp .env.example .env
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Supabase setup
1. Create a Supabase project.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env`.
3. Run the SQL schema in `supabase/schema.sql`.

## Project structure
- `src/App.tsx` - main routing and page shell
- `src/pages/` - homepage, case studies, blog, contact, and portal
- `src/components/` - reusable navigation, footer, cards
- `src/lib/supabaseClient.ts` - Supabase client config
- `supabase/schema.sql` - database table definitions and RLS policies

## Deployment
Deploy to Vercel and add the same Supabase env vars in Vercel dashboard.
