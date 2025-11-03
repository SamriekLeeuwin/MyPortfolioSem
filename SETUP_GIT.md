# Git Setup & Deploy naar GitHub

## Stap 1: Configureer Git (als je dit nog niet hebt gedaan)

```bash
cd /Users/samriek.leeuwin/Porti/portfoli

# Configureer je naam en email
git config --global user.name "Samriek Leeuwin"
git config --global user.email "semriekk@gmail.com"
```

## Stap 2: Maak GitHub Repository aan

1. Ga naar [github.com/new](https://github.com/new)
2. Repository naam: `portfolio` (of `portfoli`)
3. Kies Public of Private
4. **NIET** "Initialize with README" aanvinken
5. Klik "Create repository"

## Stap 3: Voeg Remote toe en Push

```bash
cd /Users/samriek.leeuwin/Porti/portfoli

# Vervang YOUR_USERNAME met je GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push naar GitHub
git push -u origin main
```

**Als je branch `master` heet in plaats van `main`:**
```bash
git branch -M main  # Hernoem branch naar main
git push -u origin main
```

## Stap 4: Deploy naar Vercel

Na het pushen naar GitHub:
1. Ga naar [vercel.com](https://vercel.com)
2. Log in met GitHub
3. Klik "Add New Project"
4. Selecteer je `portfolio` repository
5. Klik "Deploy"

Done! 🚀

