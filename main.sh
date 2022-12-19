mv dist/katex* katex

rm -rf dist
mkdir dist
cd dist

git clone https://github.com/st-org/stc.git --depth 1
git clone https://github.com/st-org/sthl.git --depth 1
git clone https://github.com/st-org/stui.git --depth 1
git clone https://github.com/st-org/st-std.git --depth 1 -b cn
git clone https://github.com/st-org/st-view.git --depth 1 -b cn
git clone https://github.com/st-mod/demo.git --depth 1
git clone https://github.com/st-mod/beamer.git --depth 1
git clone https://github.com/st-mod/cd.git --depth 1
git clone https://github.com/st-mod/page.git --depth 1
git clone https://github.com/st-mod/cfr.git --depth 1
git clone https://github.com/st-mod/item.git --depth 1
git clone https://github.com/st-mod/player.git --depth 1

rm -rf */.git
rm -r */dist
rm -r */scripts
rm -r */src
rm -r */test
rm */*.d.ts
rm */*.stdn
rm */.gitignore
rm */check.sh
rm */LICENSE
rm */package-lock.json
rm */tsconfig.json
rm */webpack.config.js

mv ../katex .

cd ..
node version.mjs
cd dist

rm */package.json
