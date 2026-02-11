# Deployment Guide 🚀

Complete guide to deploy your Mini Message Board to GitHub and Vercel.

## 📦 Part 1: Push to GitHub

### Step 1: Initialize Git Repository

```bash
cd mini-message-board
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Mini Message Board with modern responsive design"
```

### Step 4: Create GitHub Repository

1. Go to https://github.com/KhobieMaseko
2. Click the green "New" button or "+" icon → "New repository"
3. Repository name: `mini-message-board`
4. Description: "A modern message board built with Express and EJS"
5. Keep it **Public** (required for free Vercel hosting)
6. **DO NOT** initialize with README (you already have one)
7. Click "Create repository"

### Step 5: Connect Local Repo to GitHub

```bash
git remote add origin https://github.com/KhobieMaseko/mini-message-board.git
git branch -M main
git push -u origin main
```

If prompted for credentials, use your GitHub username and Personal Access Token (not password).

### Step 6: Verify

Visit https://github.com/KhobieMaseko/mini-message-board to see your code!

---

## 🌐 Part 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Choose your preferred login method (GitHub, Email, etc.)

#### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? **mini-message-board**
- In which directory is your code located? **./** (just press Enter)
- Want to modify settings? **N**

Your app will deploy! Note the deployment URL.

#### Step 4: Production Deployment

```bash
vercel --prod
```

Your live URL will be: `https://mini-message-board.vercel.app` (or similar)

---

### Option B: Deploy via Vercel Dashboard (Easier)

#### Step 1: Go to Vercel

Visit https://vercel.com and sign up/login with GitHub

#### Step 2: Import Project

1. Click "Add New..." → "Project"
2. Click "Import" next to your `mini-message-board` repository
3. Vercel will auto-detect the settings

#### Step 3: Configure (if needed)

- Framework Preset: **Other**
- Root Directory: `./`
- Build Command: (leave empty)
- Output Directory: (leave empty)
- Install Command: `npm install`

#### Step 4: Deploy

Click "Deploy" and wait 1-2 minutes!

Your live URL will appear: `https://mini-message-board-xxx.vercel.app`

---

## 🔧 Troubleshooting

### Common Issues:

**Issue 1: "Module not found"**
- Make sure `package.json` has all dependencies
- Run `npm install` before deploying

**Issue 2: "Application error" on Vercel**
- Check that `vercel.json` is in the root directory
- Verify your app.js exports the app correctly

**Issue 3: Git push rejected**
- Make sure you have the correct remote URL
- Check you have push access to the repository

**Issue 4: Port issues on Vercel**
- Vercel handles ports automatically
- Make sure you're not hardcoding port 3000 in production

### Vercel Logs

To check deployment logs:
```bash
vercel logs
```

Or view them in the Vercel Dashboard under your deployment.

---

## 🔄 Updating Your Deployment

### Update GitHub:

```bash
git add .
git commit -m "Description of changes"
git push
```

### Update Vercel:

If connected via dashboard, Vercel auto-deploys on push!

If using CLI:
```bash
vercel --prod
```

---

## 🎉 Success Checklist

- [ ] Code pushed to GitHub
- [ ] Repository is public
- [ ] App deployed to Vercel
- [ ] Live URL works
- [ ] Can post new messages
- [ ] Responsive on mobile

---

## 🔗 Quick Links

After deployment, you'll have:

- **GitHub Repository**: `https://github.com/KhobieMaseko/mini-message-board`
- **Live Application**: `https://mini-message-board.vercel.app` (or your custom URL)
- **Vercel Dashboard**: `https://vercel.com/dashboard`

---

## 📝 Notes

- Vercel provides **unlimited deployments** for free
- Every git push triggers a new deployment (if connected via dashboard)
- You get automatic HTTPS/SSL certificates
- Environment variables can be set in Vercel Dashboard

Need help? Check the Vercel documentation: https://vercel.com/docs
