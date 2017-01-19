#Webpack boilerplate

####This boilerplate includes :

- sass
- autoprefixer
- jade
- jquery
- jshint
- webpack-dev-server

Run **npm install** in your local project directory to get all modules installed.

Run **npm run dev** to start Webpack watch and launch the dev server (accessible via http://localhost:8080/webpack-dev-server/dist)
  - *You can also access your project @ http://localhost:8080/dist/ to see it without the top 'App ready' bar.*
  - *Both servers have live reloading.*

Run **npm run prod** to compile your code for production. It will minify and strip from comment the files in dist directory.

If you need to preprocess other files than main.sass and index.jade add it to the main.js file using require.
Might actually need to change this part:

  >new HtmlWebpackPlugin({
    filename: '../../index.html',
    template: './src/index.jade',
    inject: false,
  })

to add a new jade file. (Haven't set this for now, I'll have to check it a bit later).
