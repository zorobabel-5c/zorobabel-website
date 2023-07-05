# Menus

- [ ] IKE >> sticky sidenav menus
- [ ] Fix the responsive menu

# Fonts

- [ ] IKE >> Fix imports of black/thin/italic: only regular works right now
- [ ] films > series: Fix italic / bold for Second nav series title (Murmuziek should be black)
- [ ] Make the overlay josefin font extralight on homepage
- [ ] Review font choice in every page

# Homepage

- [ ] IKE >> When clicking on the video, there should be modal with the player + arrows left and right to go to previous/next video
- [ ] IKE >> When the video is an episode, routing is sometimes wrong, example of a result: `https://zorobabel.5c.be/films/series/les-24-heures-de-l-animation/episodes/24h-the-circle-square-project-clochard-d-assaut` or `https://zorobabel.5c.be/films/series/les-24-heures-de-l-animation/episodes/c-est-dans-la-boite`

# Ateliers / Evenements

- [ ] BONUS Find a way to create unique links for events

# Search

- [ ] IKE >> Create a search page
- [ ] IKE >> With a simple search field and submit
- [ ] IKE >> Search in all pages/items
- [ ] IKE >> Display a list with link to the page
- [ ] Show where it appears and some context (x word before after?)
- [ ] Bold the word in the context

# Films

- [x] In /films/auteurs/ all films appear (completed or not) But only IF the following data are filled:
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

## Catalogue (PDF 20)

- [ ] (TODO after # Films is completed) All films, completed or not (auteurs, séries, atelier, commande)

## Series page

- [ ] IKE >> Make clicking on series title show the series page
- [ ] IKE >> On opening, Murmuziek details are displayed on the side and its episodes are visible (menu is open)

## Others

- [ ] IKE >> Fix the 'todo' displayed as an alt for images
- [ ] IKE >> Add page titles
- [ ] Remove the always active scrollbar appearing sometimes
- [ ] There's a bug in flows, where if the video is already there (for example in series), it will error instead of applying existing vimeo data

# Optimization

- [ ] Review all breakpoint sizes
- [ ] Make sure images elements take their final space if images are not downloaded yet, so there's less jumping around
- [ ] Load all images at their maximal size or create these images through Directus
- [ ] Create a CI/CD pipeline to build the website on demand (add a button in the backend interface?)
