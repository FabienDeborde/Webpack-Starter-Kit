#Webpack boilerplate

####This boilerplate includes :

- sass
- autoprefixer
- jade
- jquery
- jshint
- webpack-dev-server

Run **npm install** in your local project directory to get all modules installed.

Run **npm run dev** to start Webpack watch and launch the dev server (accessible via <http://localhost:8080/webpack-dev-server/dist>)
  - *You can also access your project @ <http://localhost:8080/dist/> to see it without the top 'App ready' bar.*
  - *Both servers have live reloading.*

Run **npm run prod** to compile your code for production. It will minify and strip from comment the files in dist directory.

----------------------

To integrate this with [**Codeship**](https://codeship.com/) and get *continuous integration and deployment*, I use this settings :
- Tests:
  - select node.js
  - in the setup commands section I run only
    >nvm install 6.9.4 (replace this with your node version) <br/>
    npm install

  - in the tests commands I run
    > npm run prod

- Deployments:
  - I use a custom script to upload my dist folder directly on my server using ssh:
    >rsync -avz -e "ssh" ~/clone/dist/ yourUsername@yourDomainIP:/absolutePathToYourWebsiteFolder

    This command should copy only files that has changed on your server.<br/>
    (Don't forget to add Codeship SSH public key to your authorized key on your server).
  - I'm using Git Flow so I chose to configure my Deployment Pipeline to watch for any branch starting with release-v to deploy to my test server.

------------------------------

If you need to preprocess other files than main.sass and index.jade, add it to the main.js file using require.
Might actually need to change this part:

  >new HtmlWebpackPlugin({<br/>
    filename: '../../index.html',<br/>
    template: './src/index.jade',<br/>
    inject: false,<br/>
  })<br/>

to add a new jade file. (Haven't set this for now, I'll have to check it a bit later).
