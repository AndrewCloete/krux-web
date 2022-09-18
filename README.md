```sh
cd themes/krux-hugo-theme
npm ci
npm run tw-build 

cd ../..
hugo server --disableFastRender
```


Compress images
```sh
F="jpg"
NAME="In-praise-of-the-album"
convert  "${NAME}.${F}" -quality 90  "${NAME}.webp"
```