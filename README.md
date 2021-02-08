Nothing spectacular, just playing around with Vue3 and the omdb API


-vue.config.js has css loader options to prepend scss files, styling handled outside of the component and root components
(the app.vue file needs to have something in the styles section, or it will not work with the scss files. A comment in the styles section fixes this.)
-used params on router links to pass data


todo:
-Need to add media queries, built this mobile first
-Turn nav into a component and add the search form to it
-Style the thing because it needs it
