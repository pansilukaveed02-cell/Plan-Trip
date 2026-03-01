
# 🌍 Plan Trip — Travel Agency Portfolio

![CI Pipeline](https://github.com/pansilukaveed02-cell/Plan-Trip/workflows/CI%20Pipeline/badge.svg)
![Deploy to Production](https://github.com/pansilukaveed02-cell/Plan-Trip/workflows/Deploy%20to%20Production/badge.svg)

---

## 👥 Group Information

| # | Full Name | Student ID | Role |
|---|-----------|------------|------|
| 1 | Pansilu Kaveed | [Student ID] | DevOps Engineer |
| 2 | Methsara Sangeeth | [Student ID] | Full-Stack Developer |

---

## 📌 Project Description

**Plan Trip** is a modern, responsive travel agency portfolio website. It showcases travel services, popular destinations, and a contact form. Built with pure HTML5, CSS3, and JavaScript — deployed automatically via GitHub Actions to Netlify on every push to `main`.

---

## 🔗 Live Deployment

🌐 **Live URL:** [https://plan-trip-devops.netlify.app](https://plan-trip-devops.netlify.app)

> *(Update this URL after Netlify deployment is complete)*

---

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript (Vanilla)
- Google Fonts (Inter, Playfair Display)
- GitHub Actions (CI/CD)
- Netlify (Cloud Deployment)
- Node.js (Build tooling)

---

## ✨ Features

- Responsive navigation with mobile hamburger menu
- Animated hero section with statistics counters
- Services section with hover animations
- Destinations showcase with interactive cards
- Contact form with live validation and feedback
- Smooth scroll and scroll-reveal animations
- Full dark-mode premium design (glassmorphism)

---

## 🌿 Branch Strategy

We implemented the following Git branching strategy:

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code — protected, auto-deploys to Netlify |
| `develop` | Integration branch — all features merge here first |
| `feature/ci-pipeline` | DevOps Engineer: CI/CD and workflows setup |
| `feature/homepage` | Full-Stack Developer: Homepage and UI development |

---

## 👤 Individual Contributions

### Pansilu Kaveed — DevOps Engineer
- Initialized and configured the GitHub repository
- Set up `develop` and `feature/ci-pipeline` branches
- Created `.github/workflows/ci.yml` — CI pipeline (lint, build, test)
- Created `.github/workflows/deploy.yml` — Auto-deploy to Netlify on push to `main`
- Configured branch protection rules on `main`
- Set up Netlify deployment and added GitHub secrets (`NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`)
- Managed pull requests and merge conflict resolution
- Authored and maintained `README.md`

### Methsara Sangeeth — Full-Stack Developer
- Developed the homepage layout and hero section
- Built the services section with animated cards
- Created destinations showcase with interactive overlays
- Implemented the contact form with JavaScript validation
- Styled responsive layouts for mobile/tablet
- Created feature branch `feature/homepage` with PR descriptions
- Performed code reviews on DevOps PRs

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/pansilukaveed02-cell/Plan-Trip.git

# Navigate to project directory
cd Plan-Trip

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build

```bash
npm run build
```

---

## 🚀 Deployment Process

Our CI/CD pipeline is fully automated:

1. **Developer pushes** to any branch → `ci.yml` triggers (lint + build + test)
2. **PR approved** → merged into `develop`
3. **`develop` merged into `main`** → `deploy.yml` triggers automatically
4. **Netlify deploys** the latest `src/` folder to production within ~60 seconds

### GitHub Secrets Required

| Secret Name | Description |
|-------------|-------------|
| `NETLIFY_AUTH_TOKEN` | Personal token from Netlify Account Settings |
| `NETLIFY_SITE_ID` | Found in Netlify Site Settings → General |

---

## 🔀 Merge Conflict Resolution

During development, a merge conflict occurred in `README.md` when both team members edited the `Individual Contributions` section simultaneously on separate branches.

**Resolution steps:**
1. Ran `git pull origin develop` on the feature branch
2. Git flagged the conflict with `<<<<<<<`, `=======`, `>>>>>>>` markers
3. Manually reviewed both versions and merged the content
4. Committed with message: `fix: resolve merge conflict in README contributions section`

---

## 🧪 Challenges Faced

- **GitHub Actions config**: Initial deploy workflow failed due to incorrect `publish-dir`. Fixed by adjusting to `./src`.
- **Branch protection**: Needed to add `GITHUB_TOKEN` permissions to allow Actions to comment on PRs.
- **Netlify secrets**: Connecting the Netlify site ID required navigating Netlify project settings carefully.

---

## 📊 Build Status

![CI Pipeline](https://github.com/pansilukaveed02-cell/Plan-Trip/workflows/CI%20Pipeline/badge.svg)
![Deploy to Production](https://github.com/pansilukaveed02-cell/Plan-Trip/workflows/Deploy%20to%20Production/badge.svg)
