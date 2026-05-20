LIVE LINK : https://city-pro.vercel.app/

# CityPro - Packers & Movers Landing Page

A professional, fully responsive landing page for a Packers and Movers service built with HTML5, CSS3, and Vanilla JavaScript.

## Features Included ✨

### 1. **Responsive Design** 📱
- Mobile-first approach
- Fully optimized for all screen sizes (480px - 1920px)
- Flexible grid layouts using CSS Grid and Flexbox

### 2. **Core Sections** 📑
- **Header/Navbar** - Sticky navigation with mobile hamburger menu
- **Hero Section** - Eye-catching banner with CTA buttons
- **Stats Section** - Animated counters showing company metrics
- **Services Section** - 3 main services (Household Shifting, Office Relocation, Furniture Assembly)
- **Premium Services** - 3 additional premium offerings with features
- **Why Us Section** - 6 key features in dark theme
- **Process Section** - 4-step breakdown of the moving process
- **Testimonials** - Customer reviews and ratings
- **Contact Form** - Complete form with validation
- **Footer** - Links, contact info, social media

### 3. **Form Features** 📋
- **Fields:**
  - Full Name (required)
  - Phone Number (required, with validation)
  - Email Address (optional, with validation)
  - Service Selection (required, with 8 service options)
  - From/To Cities (optional)
  - Additional Details (textarea)
  
- **Validation:**
  - Real-time field validation
  - Error messages with visual feedback
  - Phone number format validation
  - Email format validation
  - Success state animation

### 4. **Animations & Interactions** ✨
- Smooth scroll reveal animations for elements
- Hover effects on buttons and cards
- Counter animations for statistics
- Parallax effect on hero image
- Mobile menu slide animation
- Form field error animations
- Card lift effects on hover
- Floating card animations

### 5. **UI/UX Quality** 🎨
- Professional color scheme (charcoal, amber, cream)
- Consistent spacing and typography
- Beautiful card designs with shadows
- Premium badge system
- Glassmorphism effects on mobile menu
- Smooth transitions throughout
- Accessibility considerations

### 6. **SEO Optimization** 🔍
- Semantic HTML structure
- Meta tags for social sharing (Open Graph)
- Descriptive meta descriptions
- Proper heading hierarchy
- Alt text for images
- Schema-ready structure

### 7. **Performance** ⚡
- Lazy loading attributes on images
- Passive event listeners for scroll
- Efficient CSS with custom properties
- Optimized animations using transforms
- Clean, minified code structure

## Project Structure 📂

```
city_pro/
├── index.html          # Main HTML file
├── styles.css          # Comprehensive CSS with responsive design
├── script.js           # JavaScript for interactivity
├── README.md           # This file
├── SETUP_GUIDE.md      # Setup and deployment guide
└── assets/
    └── images/         # Placeholder images directory
        ├── hero.png
        ├── packing.png
        ├── corporate.png
        └── unpacking.png
```

## Setup Instructions 🚀

### 1. **Add Images**
Replace placeholder images in `assets/images/` with your actual images:
- `hero.png` - Hero section background (recommended: 1200x800px)
- `packing.png` - Household shifting service (recommended: 600x400px)
- `corporate.png` - Office relocation service (recommended: 600x400px)
- `unpacking.png` - Furniture assembly service (recommended: 600x400px)

### 2. **Update Company Information**
Edit the following in `index.html`:
- Company contact details
- Phone numbers
- Email addresses
- Office address
- Working hours
- Social media links

### 3. **Customize Services**
Modify service names, descriptions, and options in the HTML and contact form:
- Main services
- Premium add-ons
- Service selection dropdown options

## Form Handling 📧

Currently, the form validates input and shows success/error states. To actually send form submissions, you have several options:

### Option 1: Email Service (Recommended)
```javascript
// Integrate with EmailJS, SendGrid, or Mailgun
// Update the submit handler in script.js
```

### Option 2: Backend API
```javascript
// POST to your backend endpoint
fetch('/api/quotes', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

### Option 3: Third-party Form Services
- Formspree
- Basin
- Netlify Forms

See `SETUP_GUIDE.md` for detailed integration instructions.

## Customization Guide 🎯

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --charcoal: #1a1a1a;        /* Primary color */
  --amber: #c8956c;           /* Accent color */
  --warm-white: #faf8f5;      /* Background */
  /* ... other colors ... */
}
```

### Typography
- Headings: Playfair Display (serif)
- Body: DM Sans (sans-serif)
- Change fonts in the `@import` statement and CSS variables

### Spacing & Layout
- Update `--radius` for border radius
- Modify container `max-width` for layout width
- Adjust section padding for spacing

## Browser Support ✅

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Performance Tips 📊

1. **Optimize Images**: Use tools like TinyPNG to compress images
2. **Enable Gzip**: Configure your server for compression
3. **Lazy Load**: Images already have `loading="lazy"` attribute
4. **Cache Control**: Set proper cache headers on your server
5. **Minify**: Minify CSS and JavaScript for production

## Mobile Responsive Breakpoints 📱

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: 480px and below

The site is fully responsive across all breakpoints with:
- Stacked layouts on mobile
- Touch-friendly buttons and spacing
- Optimized font sizes
- Hidden decorative elements on small screens

## Accessibility Features ♿

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Form field labels
- Error announcements

## Deployment Checklist ✅

- [ ] Update all images in `assets/images/`
- [ ] Update company contact information
- [ ] Set up form submission backend
- [ ] Test all links and CTAs
- [ ] Verify mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Set up analytics
- [ ] Configure email notifications
- [ ] Set up SSL certificate (HTTPS)
- [ ] Deploy to hosting

## Support & Maintenance 🛠️

For updates or modifications:
1. Update colors in CSS variables
2. Modify HTML structure as needed
3. Extend JavaScript for additional features
4. Test thoroughly on all devices

## License 📄

This template is free to use and modify for your business.

## Contact & Support 📞

For any questions or customization needs, refer to the code comments or consult with a web developer.

---

**Version**: 1.0  
**Last Updated**: May 2024  
**Built with**: HTML5, CSS3, Vanilla JavaScript
