# Homepage

- Update filtering logic: no unfinished films (in progress)

# films

- When clicking on the 3 images films, display them in a gallery modal in a bigger size
- auteurs: update filtering logic
- scroll up when clicking on another film from the list
- if a film is no available => display trailer, if trailer not available => display the backup image, if no backup image available => display one of the 3 images => else don't display anything.
- open by default with the latet finished film

# Optimization

- [ ] There's a bug in flows, where if the video is already there (for example in series), it will error instead of applying existing vimeo data
- [ ] Enable caching in Directus

# BONUS

- [ ] BONUS Find a way to create unique links for events

Autre chose avant que je ne continue à investiguer (je sais que c'est compliqué mais c'est quand même expliqué dans le cahier des charges) :

- tous les films d'auteur, y compris ceux qui ne sont pas terminés apparaissent dans l'onglet films d'auteur,
- tout comme il apparaissent pour l'instant dans la page catalogue.
- c'est juste sur la page d'accueil que les films non-terminés n'apparaissent pas.
