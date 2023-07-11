# Homepage

- Update filtering logic: no unfinished films (in progress)
- display all events on top (until their date is passed see date_de_peremption)

# films

- scroll up when clicking on another film from the list
- if a film is no available => display trailer, if trailer not available => display the backup image, if no backup image available => display one of the 3 images => else don't display anything.
- open by default with the latet finished film
- Add En cours de réalisation. Work in progress on top of video
- Make series main image open in a modal

# Events

- remove date de peremption from the display

# Prix

- make image fixed size (see 11 & 14)
- reverse sort order
- make image keep ratio (562px)

# Optimization

- [ ] There's a bug in flows, where if the video is already there (for example in series), it will error instead of applying existing vimeo data
- [ ] Enable caching in Directus

# BONUS

- [ ] BONUS Find a way to create unique links for events
