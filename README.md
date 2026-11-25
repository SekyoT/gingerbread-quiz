# 🎄 Which Gingerbread Are You? A Christmas Mixer Personality Quiz

A personality quiz that sorts people into teams for a social mixer. Each personality is one team.

- **Quiz page** (`/`): share this link with everyone
- **Organiser dashboard** (`/admin`): password-protected, shows who's on which team live, with CSV export

## Change the personalities and questions

Everything is in **`public/quiz-config.js`**: team names, colours, descriptions, traits, questions and
answers. Each answer has a `p` that names which personality it gives a point to. Both pages read from
this file, so you only edit it once.

How a team gets picked: whichever personality gets the most answers wins. **If there's a tie, the
person joins whichever tied team has the fewest members**, which keeps teams roughly balanced.

## Run it on your computer

Needs Node.js 18+. No `npm install` is required (there are no dependencies).

```bash
npm run dev
```

- Quiz: http://localhost:3000
- Dashboard: http://localhost:3000/admin (local password: `gingerbread`)

Locally, results are saved to `data/entries.json`.

## Put it online (Vercel, free)

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo → **Deploy**
   (no build settings needed).
3. **Add storage:** in the project, go to **Storage** → **Create / Connect** → **Upstash for Redis**
   (free tier) → connect it to the project. This adds the database env vars automatically.
4. **Set the organiser password:** **Settings → Environment Variables** → add `ADMIN_PASSWORD` with
   a password of your choice.
5. **Redeploy** (Deployments → ⋯ → Redeploy) so the new settings take effect.

Share `https://your-project.vercel.app` with everyone. Organisers use
`https://your-project.vercel.app/admin`.

> Tip: take the quiz a couple of times yourself to test it, then hit **Clear all results** on the
> dashboard before the event.

## Files

```
public/
  index.html        quiz page
  admin.html        organiser dashboard
  quiz-config.js    ← personalities + questions (edit this)
  gingerbread.js    draws the gingerbread characters
api/
  submit.js         POST: saves a result, picks the team
  results.js        GET/DELETE: dashboard data (needs password)
lib/
  store.js          Upstash Redis on Vercel, JSON file locally
  http.js           helpers + password check
server.js           local dev server only
```
