# TODO

## Properties "View" button

- [x] Update `app/components/properties.jsx` so the **View** button navigates to `/properties/[id]`.
- [x] Add `app/properties/[id]/page.jsx` to render a basic property details page using `app/lib/propertyData.js`.

## Contact Us nav link

- [x] Add `{ href: '/contact', label: 'Contact Us' }` to `navItems` array in `app/components/Navbar.jsx`.
- [x] Reverted — removed the plain "Contact Us" text link from `navItems` (keeping only the green styled button).

## Footer links update

- [x] Add "Teams" link to the Links section in `app/components/Footer.jsx`
- [x] Add new "Projects" section in footer with links to Lands and Buildings pages
- [x] Remove "Properties" link from the footer Links section

## Hero background image fix

- [x] Fixed `app/components/Hero.jsx` — changed image `opacity-70` → `opacity-90` and overlay `bg-slate-950/80` → `bg-slate-950/40` to make `Header.png` visible
