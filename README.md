```sh
cd themes/krux-hugo-theme
npm ci
npm run tw-build 

cd ../..
hugo server --disableFastRender
```


Compress images
```sh
F="png"
NAME="dining2"
convert  "${NAME}.${F}" -quality 100 "${NAME}.webp"
```