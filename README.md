# s8sachin.github.io
Portfolio

This branch has static files from build of `dev` branch and is used for deployment.

In local run `yarn build` on dev branch to generate build.<br />
Then, switch the branch to master, run `./deploy.sh` which basically removes previous staatic files and copies over static files form "build" directory.

On pushing or updating master branch, it will be deployed [here](https://github.com/s8sachin/s8sachin.github.io/deployments) by gh-pages.
