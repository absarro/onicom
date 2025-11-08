# 🚀 GUIDE DE DÉPLOIEMENT RAPIDE - ONICOM V2.0

## ⚡ EN 10 MINUTES CHRONO

Ce guide vous permet de mettre en ligne votre site **en moins de 10 minutes**.

---

## 📋 PRÉREQUIS

- ✅ Compte GitHub (gratuit)
- ✅ Compte Vercel (gratuit)
- ✅ Domaine onicom.io chez Namecheap
- ✅ Fichier `onicom-v2-source.zip`

---

## 🎯 ÉTAPE 1 : PRÉPARER LE CODE (2 min)

### 1.1 Extraire le ZIP

```bash
# Sur votre machine locale
unzip onicom-v2-source.zip -d onicom-v2
cd onicom-v2
```

### 1.2 Tester localement (optionnel mais recommandé)

```bash
npm install
npm run dev
# Ouvre http://localhost:5173
# Ctrl+C pour arrêter
```

---

## 🐙 ÉTAPE 2 : POUSSER SUR GITHUB (3 min)

### 2.1 Créer un repository GitHub

1. Aller sur [github.com](https://github.com)
2. Cliquer "New repository"
3. Nom : `onicom-website` (ou autre)
4. Visibilité : **Private** (recommandé) ou Public
5. ❌ **NE PAS** cocher "Add README" (on a déjà)
6. Cliquer "Create repository"

### 2.2 Pousser le code

```bash
# Dans le dossier onicom-v2/

# Initialiser Git
git init
git add .
git commit -m "Onicom V2.0 - Initial commit"

# Connecter à GitHub (remplacer YOUR_USERNAME par votre nom d'utilisateur)
git remote add origin https://github.com/YOUR_USERNAME/onicom-website.git

# Pousser
git branch -M main
git push -u origin main
```

**✅ Votre code est maintenant sur GitHub !**

---

## ☁️ ÉTAPE 3 : DÉPLOYER SUR VERCEL (3 min)

### 3.1 Connecter Vercel à GitHub

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer "Sign Up" → "Continue with GitHub"
3. Autoriser Vercel à accéder à vos repos

### 3.2 Importer le projet

1. Cliquer "Add New..." → "Project"
2. Sélectionner votre repo `onicom-website`
3. Cliquer "Import"

### 3.3 Configurer le build

Vercel détecte automatiquement Vite. Vérifier :

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

4. ❌ **Pas besoin** de variables d'environnement pour l'instant
5. Cliquer "Deploy"

⏳ **Attendre 2-3 minutes...**

✅ **Votre site est en ligne !**

Vercel vous donne une URL : `https://onicom-website.vercel.app`

---

## 🌐 ÉTAPE 4 : CONFIGURER LE DOMAINE onicom.io (2 min)

### 4.1 Ajouter le domaine dans Vercel

1. Dans votre projet Vercel → "Settings"
2. Aller dans "Domains"
3. Ajouter : `onicom.io` et `www.onicom.io`
4. Vercel vous donne les DNS à configurer

### 4.2 Configurer DNS chez Namecheap

1. Aller sur [namecheap.com](https://namecheap.com)
2. Domain List → votre domaine `onicom.io` → "Manage"
3. Onglet "Advanced DNS"

**Ajouter ces enregistrements :**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | `76.76.21.21` | Automatic |
| CNAME Record | www | `cname.vercel-dns.com` | Automatic |

**OU (méthode alternative) :**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | @ | `cname.vercel-dns.com` | Automatic |
| CNAME Record | www | `cname.vercel-dns.com` | Automatic |

5. Save Changes

### 4.3 Vérifier

⏳ Attendre 5-30 minutes (propagation DNS)

Puis tester :
- https://onicom.io
- https://www.onicom.io

✅ **Votre site est accessible sur votre domaine !**

---

## 🎉 C'EST FAIT !

Votre site **Onicom V2.0** est maintenant :

✅ **En ligne** sur onicom.io
✅ **HTTPS** automatique (certificat SSL)
✅ **CDN global** (Vercel)
✅ **Performance optimale**
✅ **Builds automatiques** (chaque push GitHub)

---

## 🔄 METTRE À JOUR LE SITE

### Modification de contenu

1. **Éditer localement**
   ```bash
   cd onicom-v2
   # Modifier src/translations/index.ts ou autres fichiers
   npm run dev  # Tester
   ```

2. **Pousser sur GitHub**
   ```bash
   git add .
   git commit -m "Update: description du changement"
   git push
   ```

3. **Vercel déploie automatiquement** 🚀
   - Vercel détecte le push
   - Build automatique
   - Mise en ligne en 2-3 min

✅ **Votre site est mis à jour !**

---

## 📧 CONFIGURER LES FORMULAIRES (Optionnel)

### Option A : Formspree (Le plus simple)

1. Aller sur [formspree.io](https://formspree.io)
2. Créer un compte gratuit
3. Créer un formulaire
4. Copier l'endpoint : `https://formspree.io/f/XXXXX`

5. **Modifier le code** :

Fichier : `src/components/Appointment.tsx`

```typescript
// Ligne ~70, remplacer :
const response = await supabase
  .from('appointments')
  .insert([appointmentData]);

// Par :
const response = await fetch('https://formspree.io/f/XXXXX', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(appointmentData)
});
```

Faire pareil pour `Contact.tsx`

6. Push sur GitHub → Vercel redéploie

✅ **Formulaires fonctionnels !**

### Option B : Supprimer Supabase

Si vous ne voulez pas utiliser Supabase du tout :

1. **Retirer l'import** dans `App.tsx` :
   ```typescript
   // Supprimer cette ligne :
   import CaseStudies from './components/CaseStudies';
   
   // Et retirer <CaseStudies /> du JSX
   ```

2. Push → Done

---

## 🔧 DÉPANNAGE RAPIDE

### Erreur "Build failed"

```bash
# Vérifier localement :
npm run build

# Si erreurs, corriger puis :
git add .
git commit -m "Fix: ..."
git push
```

### DNS ne fonctionne pas

- ⏰ Attendre 1-2h (propagation)
- Vérifier avec : https://dnschecker.org
- Contacter Namecheap support si >24h

### Site blanc / erreur 404

- Vérifier "Output Directory" dans Vercel = `dist`
- Vérifier "Build Command" = `npm run build`

### Formulaires ne fonctionnent pas

- Option 1 : Configurer Formspree (voir ci-dessus)
- Option 2 : Configurer Supabase (voir README principal)
- Option 3 : Les désactiver temporairement

---

## 📊 ANALYTICS (Optionnel)

### Google Analytics

1. Créer propriété sur [analytics.google.com](https://analytics.google.com)
2. Copier ID : `G-XXXXXXXXXX`

3. Ajouter dans `index.html` :

```html
<head>
  <!-- Autres meta tags -->
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

4. Push → Vercel déploie

✅ **Analytics actif !**

---

## 💰 COÛTS

### Gratuit (Tier Free)

- ✅ Vercel : Gratuit (100 GB bandwidth/mois)
- ✅ GitHub : Gratuit (repos privés illimités)
- ✅ Formspree : Gratuit (50 submissions/mois)

### Payant (Si vous voulez)

- 💰 Vercel Pro : $20/mois (plus de bandwidth, analytics)
- 💰 Supabase Pro : $25/mois (si vous l'utilisez beaucoup)

**Recommandation** : Rester en gratuit au début

---

## ✅ CHECKLIST POST-DÉPLOIEMENT

Après mise en ligne, vérifier :

- [ ] Site accessible sur https://onicom.io
- [ ] https://www.onicom.io redirige bien
- [ ] HTTPS actif (cadenas vert)
- [ ] Site responsive (tester mobile)
- [ ] Navigation fonctionne (toutes sections)
- [ ] Changement langue FR/EN fonctionne
- [ ] Formulaires testés (même si pas configurés, ils ne doivent pas crasher)
- [ ] Logo Onicom s'affiche
- [ ] Toutes images chargent

---

## 🎯 PROCHAINES ACTIONS RECOMMANDÉES

### Semaine 1
1. ✅ Déployer le site (ce guide)
2. ✅ Tester toutes les sections
3. ✅ Configurer formulaires (Formspree)
4. ✅ Ajouter Google Analytics

### Semaine 2
5. ✅ Demander feedbacks (collègues, clients)
6. ✅ Ajustements mineurs de contenu
7. ✅ Partager sur LinkedIn

### Mois 1
8. ✅ Demander autorisations logos clients (si souhaité)
9. ✅ Ajouter témoignages clients
10. ✅ Créer contenu blog (optionnel)

---

## 📞 SUPPORT

### Documentation Complète
- README_ONICOM_V2.md (installation, configuration)
- CHANGEMENTS_ONICOM_V2.md (ce qui a changé)

### Ressources
- **Vercel Docs** : https://vercel.com/docs
- **React Docs** : https://react.dev
- **Tailwind Docs** : https://tailwindcss.com/docs

### Problème Non Résolu ?

Si vraiment bloqué :
1. Chercher l'erreur sur Google
2. Vérifier logs Vercel (section "Deployments")
3. Tester localement avec `npm run dev`

---

## 🚀 FÉLICITATIONS !

Vous venez de déployer un site professionnel moderne en moins de 10 minutes !

**Onicom V2.0** est maintenant :
- ✅ En ligne sur onicom.io
- ✅ Sécurisé (HTTPS)
- ✅ Performant (CDN global)
- ✅ Automatisé (CI/CD)
- ✅ Prêt à convertir des clients !

---

## 🎉 NEXT LEVEL

Pour aller plus loin :

### SEO
- Ajouter meta descriptions
- Créer sitemap.xml
- Google Search Console

### Performance
- Optimiser images (WebP)
- Ajouter service worker (PWA)
- Lazy loading avancé

### Fonctionnalités
- Blog intégré (MDX)
- Espace client
- Dashboard admin
- ROI Calculator interactif

**Mais pour l'instant, votre site est PARFAIT pour démarrer ! 🎯**

---

**Version** : 1.0 - Guide Déploiement Rapide
**Durée estimée** : 10 minutes
**Difficulté** : ⭐⭐ (Facile)

🚀 **Bon déploiement !**
