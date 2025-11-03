# Deploy naar Vercel

## Optie 1: Via Vercel Website (Makkelijkst)

1. Ga naar [vercel.com](https://vercel.com) en log in met GitHub
2. Klik op "Add New Project"
3. Importeer je GitHub repository
4. Vercel detecteert automatisch Next.js en configureert alles
5. Klik op "Deploy"

## Optie 2: Via Vercel CLI (Terminal)

```bash
# Installeer Vercel CLI (als je het nog niet hebt)
npm i -g vercel

# Ga naar je project folder
cd /Users/samriek.leeuwin/Porti/portfoli

# Deploy
vercel

# Volg de prompts:
# - Link to existing project? N (eerste keer)
# - Project name: portfoli (of wat je wilt)
# - Directory: ./
# - Override settings? N

# Voor production deployment:
vercel --prod
```

## Belangrijke dingen om te checken:

1. ✅ Build werkt lokaal: `npm run build`
2. ✅ Git repository is op GitHub
3. ✅ Foto staat in `/public/images/samriek-profile.jpg`
4. ✅ Environment variabelen zijn niet nodig voor dit project

## Na deployment:

Je krijgt een URL zoals: `https://portfoli-xxxxx.vercel.app`

Je kunt ook een custom domain toevoegen in Vercel dashboard!

