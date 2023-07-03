# Menus

- [ ] films > diffusion: second nav items should have a mb-12 applied to them
- [ ] films > series: Fix italic / bold for Second nav series title (Murmuziek should be black)
- [ ] Fix the width of the first nav to be less wide
- [ ] Fix the width of the second nav to be less wide
- [ ] Make the search icon smaller
- [ ] On hover, change to red
- [ ] Fix the responsive menu
- [x] Apply a mt-[-4px] margin to english string (we want them close to the french string)
- [x] films > diffusion > evenement link is broken

# Homepage

- [ ] When clicking on the video, there should be modal with the player + arrows left and right to go to previous/next video
- [ ] Make the overlay josefin font extralight
- [ ] When the video is an episode, routing is wrong, example of a result: `https://zorobabel.5c.be/films/series/les-24-heures-de-l-animation/episodes/24h-the-circle-square-project-clochard-d-assaut` or `https://zorobabel.5c.be/films/series/les-24-heures-de-l-animation/episodes/c-est-dans-la-boite`

# zorobabel / appels a projets

- [x] Fix styling of all pages

# Ateliers / Evenements

- [x] Fix styling of all pages
- [ ] Hide past events automatically and show "Nothing to show for now"
- [ ] Find a way to create unique links for events

# Search

- [ ] Create a search page
- [ ] With a simple search field and submit
- [ ] Search in all pages/items
- [ ] Display a list with where it appears and some context (x word before after?) and link to the page
- [ ] Bold the word in the context

# Films

- [ ] Verify all items types are displayed correctly
- [ ] Verify styling for all items types
- [ ] diffusion > television > canal text is not in front of image
- [ ] liens: show dark transparent on hover to show images are clickable
- [ ] BONUS liens: Add title and display them as overlay like on the homepage

## Series page

- [ ] Make clicking on series title show the series page
- [ ] On opening, Murmuziek details are displaye don the side and its episodes are visible

## Others

- [ ] Remove the always active scrollbar
- [ ] Fix the 'todo' displayed as an alt for images
- [ ] There's a bug in flows, where if the video is already there (for exameple in series), itwill error instead of applying existing vimeo data

# Optimization

- [ ] Load all images at their maximal size
- [ ] Make sure images elements take their final space if images are not downloaded yet, so there's less jumping around
- [ ] Create these images server side (in Zorobabel backend)
- [ ] Create a CI/CD pipeline to build the website on demand (add a button in the backend interface?)
