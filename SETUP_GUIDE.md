# CityPro Setup & Deployment Guide

## Quick Start Guide 🚀

### Step 1: File Setup
Ensure your project structure is complete:
```
city_pro/
├── index.html
├── styles.css
├── script.js
├── README.md
├── SETUP_GUIDE.md
└── assets/
    └── images/
        ├── hero.png
        ├── packing.png
        ├── corporate.png
        └── unpacking.png
```

### Step 2: Add Images
The website references 4 images. You can:

**Option A: Use Placeholder Services** (Temporary)
Add this temporary image source while working:
```html
<!-- Temporary during development -->
<img src="https://via.placeholder.com/1200x800/c8956c/ffffff?text=CityPro+Hero" alt="..." />
```

**Option B: Add Your Images** (Production)
1. Create the `assets/images/` folder if it doesn't exist
2. Add your images with these names:
   - `hero.png` - Hero section image (1200x800px recommended)
   - `packing.png` - Packing service image (600x400px recommended)
   - `corporate.png` - Office moving image (600x400px recommended)
   - `unpacking.png` - Furniture assembly image (600x400px recommended)

**Recommended Image Properties:**
```
Format: PNG or JPG
Compression: 70-80% quality for JPG
Size: Optimized with TinyPNG or similar
Aspect Ratios:
- Hero: 3:2 or 16:9
- Cards: 3:2 or 16:9
```

### Step 3: Update Company Information

**In index.html, find and update:**

1. **Meta Tags** (Head section):
```html
<meta name="description" content="YOUR COMPANY DESCRIPTION">
<meta property="og:title" content="YOUR COMPANY NAME">
```

2. **Contact Details** (Contact section):
```html
<p>+91 YOUR_PHONE_NUMBER</p>
<p>your.email@company.com</p>
<p>Your Address, City, State ZIP</p>
```

3. **Footer** (Bottom):
- Update year in copyright
- Add your social media links
- Update company description

### Step 4: Form Setup

Choose one of these options for form submission:

#### Option A: EmailJS (Recommended - No Backend)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Add this to `script.js`:

```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// In the form submit handler:
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!validateForm()) return;

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: document.getElementById('fullName').value,
    from_email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('serviceType').value,
    message: document.getElementById('message').value
  }).then(response => {
    submitBtn.textContent = '✓ Quote Requested!';
    submitBtn.classList.add('success');
    contactForm.reset();
  }).catch(error => {
    console.error('Email send failed:', error);
    submitBtn.textContent = 'Error - Try again';
  });
});
```

#### Option B: Formspree (No Backend Setup)
1. Go to [formspree.io](https://formspree.io/)
2. Create a new form
3. Update the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option C: Your Own Backend
1. Create an API endpoint: `POST /api/quotes`
2. Update script.js:
```javascript
fetch('/api/quotes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: document.getElementById('fullName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    service: document.getElementById('serviceType').value,
    fromCity: document.getElementById('fromCity').value,
    toCity: document.getElementById('toCity').value,
    message: document.getElementById('message').value
  })
})
```

## Customization Options 🎨

### 1. Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --charcoal: #1a1a1a;           /* Main dark color */
  --amber: #c8956c;              /* Primary accent */
  --amber-bright: #e8a96a;       /* Lighter accent */
  --warm-white: #faf8f5;         /* Background */
  --cream: #f0ebe3;              /* Light background */
}
```

### 2. Change Company Name
Find and replace throughout files:
- `CityPro` → Your Company Name
- `CP` → Your Initials
- All instances of company info

### 3. Modify Services
In `index.html`, update the services section:
```html
<option value="household">Your Service 1</option>
<option value="office">Your Service 2</option>
<!-- Add more options -->
```

### 4. Add Your Logo
Replace the text-based logo with an image:
```html
<!-- Instead of -->
<div class="logo-icon">CP</div>
<!-- Use -->
<img src="assets/logo.png" alt="Logo" class="logo-image">
```

## Testing Checklist ✅

Before deployment, test:

- [ ] All links work correctly
- [ ] Mobile menu opens/closes smoothly
- [ ] Form validates correctly
- [ ] Form submission works (test with dummy data)
- [ ] Animations play smoothly
- [ ] Images load correctly
- [ ] Responsive design on:
  - [ ] Mobile (360px, 480px)
  - [ ] Tablet (768px)
  - [ ] Laptop (1024px+)
- [ ] Contact form on mobile is usable
- [ ] All buttons are clickable
- [ ] Scroll animations trigger
- [ ] Counter animations start
- [ ] No console errors

## Deployment Options 🚀

### Option 1: Netlify (Recommended - Free)
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: (none needed, it's static)
4. Set publish directory: `./`
5. Deploy!

### Option 2: Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Option 3: Traditional Web Host
1. Upload files via FTP
2. Set `index.html` as home page
3. Configure your domain

### Option 4: AWS S3 + CloudFront
1. Create S3 bucket
2. Upload files
3. Set up CloudFront distribution
4. Configure domain

## Performance Optimization 📊

### Image Optimization
```bash
# Using TinyPNG
1. Compress all images
2. Use appropriate formats (WebP for newer browsers)
3. Serve responsive images with srcset
```

### CSS/JS Optimization
```bash
# Minify for production
npm install -g csso-cli terser
csso styles.css -o styles.min.css
terser script.js -o script.min.js
```

### Update HTML to use minified files
```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

## SEO Optimization 📈

1. **Update Meta Tags** in `<head>`:
```html
<title>YOUR COMPANY - Premium Moving Services</title>
<meta name="description" content="Professional packers and movers offering...">
<meta name="keywords" content="movers, packers, relocation, ...">
```

2. **Add Google Analytics**:
```html
<!-- In <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

3. **Add Schema.org Markup** for local business:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CityPro Packers & Movers",
  "image": "your-logo.png",
  "description": "Professional moving services",
  "telephone": "+91-1234567890",
  "email": "info@company.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "42 MG Road",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345"
  }
}
</script>
```

## Troubleshooting 🔧

**Problem: Images not loading**
- Solution: Check file paths are correct and images exist

**Problem: Form not submitting**
- Solution: Check browser console for errors, verify backend setup

**Problem: Mobile menu not working**
- Solution: Clear browser cache, check JavaScript for errors

**Problem: Animations not smooth**
- Solution: Check browser performance, disable heavy animations on low-end devices

## Support Resources

- HTML/CSS Questions: [MDN Web Docs](https://developer.mozilla.org/)
- JavaScript Help: [JavaScript.info](https://javascript.info/)
- Design Inspiration: [Dribbble](https://dribbble.com/)
- Color Picker: [Coolors.co](https://coolors.co/)
- Font Pairing: [Google Fonts](https://fonts.google.com/)

## Version History

**v1.0** (May 2024)
- Initial release
- All core features included
- Mobile responsive
- Form validation
- SEO optimized

---

For more help, consult the code comments in each file!
