# FTAVis – webapp and data parsing
FTAVis ([www.ftavis.com](www.ftavis.com)) is a tool to make the complexity of the world’s trade agreements visible, accessible and understandable. The project visualizes 789 trade agreements from 205 countries over the last 66 years.

[Read the making of story](https://medium.com/@ahoiin/crafting-a-custom-mobile-friendly-data-visualization-cb91a3024064#.cbgadey8u
)

## Data parsing
The files in folder ftavis_parse_data get the source data from http://www.designoftradeagreements.org/ and extend, parse and prepare them for the visualisation. Keep in mind that a dendrogram is a node-link diagram that expect the data prepared in the Flare class hierarchy, courtesy Jeff Heer.

## Visualisation
The dev version of the app doesn't run with bower/grunt and can be accessed with a local server. It mainly consists of the js files sorted by their sequential call. Grunt has been used to minify and optimize the project for the live version.

## Usage

     git clone https://github.com/ahoiin/ftavis-webapp
     cd ftavis-webapp
     npm install


## Dev mode 

    start local server, e.g., with MAMP
    open http://localhost/ftavis-webapp/app
  

## Build 

    grunt build
