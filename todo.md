# Menus

- [ ] On hover, change links to red
- [ ] Fix the responsive menu
- [ ] sticky sidenav menus
- [x] Sticky top menu
- [x] Fix the width of the first nav to be less wide
- [x] Fix the width of the second nav to be less wide
- [x] Make the search icon smaller
- [x] films > diffusion: second nav items should have a mb-12 applied to them
- [x] Apply a mt-[-4px] margin to english string (we want them close to the french string)
- [x] films > diffusion > evenement link is broken

# Fonts

- [ ] IKE >> Fix imports of black/thin/italic: only regular works right now
- [ ] films > series: Fix italic / bold for Second nav series title (Murmuziek should be black)
- [ ] Make the overlay josefin font extralight on homepage
- [ ] Review font choice in every page

# Homepage

- [ ] IKE >> When clicking on the video, there should be modal with the player + arrows left and right to go to previous/next video
- [ ] IKE >> When the video is an episode, routing is sometimes wrong, example of a result: `https://zorobabel.5c.be/films/series/les-24-heures-de-l-animation/episodes/24h-the-circle-square-project-clochard-d-assaut` or `https://zorobabel.5c.be/films/series/les-24-heures-de-l-animation/episodes/c-est-dans-la-boite`
- [ ] In / only completed films d'auteur appears and all mandatory fields are completed (Based on this, 'Conte sauvage' should appear on homepage but does not)

# Ateliers / Evenements

- [ ] Hide past events automatically and show "Nothing to show for now"
- [ ] Fix data loading in Ateliers (1 request per type, where we should have only 1 and then filter)
- [ ] BONUS Find a way to create unique links for events
- [x] Fix styling of all pages

# Search

- [ ] Create a search page
- [ ] With a simple search field and submit
- [ ] Search in all pages/items
- [ ] Display a list with where it appears and some context (x word before after?) and link to the page
- [ ] Bold the word in the context

# Films

- [ ] liens: show dark transparent on hover to show images are clickable
- [ ] In /films/auteurs/ all films appear (completed or not) But only IF the following data are filled:
- Statut;
- Numéro;
- Logo;
- Titre original
- Titre anglais;
- Minutes;
- Secondes;
- Réalisation;
- Synopsis français;
- Synopsis anglais;
- Image 1
- [ ] BONUS liens: Add title and display them as overlay like on the homepage (requires backend change)
- [x] Verify all items types are displayed correct fields
- [x] Verify styling for all items types
- [x] all films page should be in descending order (reverse chronological)
- [x] diffusion > television > canal text is not in front of image

## Catalogue (PDF 20)

- [ ] All films, completed or not (auteurs, séries, atelier, commande))

## Series page

- [ ] IKE >> Make clicking on series title show the series page
- [ ] IKE >> On opening, Murmuziek details are displayed on the side and its episodes are visible (menu is open)

## Others

- [ ] Remove the always active scrollbar appearing sometimes
- [ ] IKE >> Fix the 'todo' displayed as an alt for images
- [ ] There's a bug in flows, where if the video is already there (for example in series), it will error instead of applying existing vimeo data
- [ ] Add page titles

# Optimization

- [ ] Load all images at their maximal size
- [ ] Make sure images elements take their final space if images are not downloaded yet, so there's less jumping around
- [ ] Create these images server side (in Zorobabel backend)
- [ ] Create a CI/CD pipeline to build the website on demand (add a button in the backend interface?)

# zorobabel / appels a projets

- [x] Fix styling of all pages
