# Composer & Music Match — Mozart Prototype

A responsive, mobile-friendly browser quiz. Open `index.html` locally or publish the folder with GitHub Pages.

## Included
- Responsive HTML/CSS/JavaScript interface
- Four original AI-generated watercolor/storybook music-scene illustrations
- A public-domain Mozart portrait loaded from Wikimedia Commons
- Tap-to-play / tap-again-to-stop audio behavior, 60-second auto-stop
- Incorrect-answer shake + vibration where supported + composer hint
- Correct-answer highlight and reveal of work titles / dates
- English instructions and restart control

## Composer portrait
The portrait is Barbara Krafft's 1819 posthumous portrait of Mozart, hosted on Wikimedia Commons:
https://commons.wikimedia.org/wiki/File:Wolfgang-amadeus-mozart_1.jpg
The file page marks the painting and faithful reproduction as public domain. For this prototype the image is loaded from Wikimedia's CDN; download it from the file page and save it as `images/composers/mozart.jpg` if you want every asset hosted in this repository. Then change the portrait `src` in `index.html` to `images/composers/mozart.jpg`.

## Music list
1. Eine kleine Nachtmusik, K.525 — 1787
2. Piano Sonata No. 11, K.331, III. Rondo alla turca — c.1783
3. Piano Concerto No. 21, K.467 — 1785
4. Symphony No. 40, K.550 — 1788

Composition dates are based on IMSLP work pages:
- https://imslp.org/wiki/Eine_kleine_Nachtmusik,_K.525_(Mozart,_Wolfgang_Amadeus)
- https://imslp.org/wiki/Piano_Sonata_No.11,_K.331_(Mozart,_Wolfgang_Amadeus)
- https://imslp.org/wiki/Piano_Concerto_No.21_in_C_major,_K.467_(Mozart,_Wolfgang_Amadeus)
- https://imslp.org/wiki/Symphony_No.40_in_G_minor,_K.550_(Mozart,_Wolfgang_Amadeus)

## Audio — pending rights-cleared recordings
The four MP3 files are intentionally not bundled yet. A composition being public domain does **not** make a modern performance recording public domain. Each recording must be checked separately for the relevant territories and the permission to copy, trim, and redistribute it in a public GitHub repository.

After selecting recordings whose terms permit redistribution and trimming, place 60-second MP3 files here:
- `audio/mozart/nachtmusik-60s.mp3`
- `audio/mozart/turkish-march-60s.mp3`
- `audio/mozart/piano-concerto-21-60s.mp3`
- `audio/mozart/symphony-40-60s.mp3`

The app already points to these paths. Until the files are added, the play controls show an `ADD MP3 FILE` message.

## Run locally
Open `index.html` in a modern browser. For best results, use a simple local web server or GitHub Pages.

## GitHub Pages
In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
