module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    
                    @import "~@/scss/_variables.scss";
                    @import "~@/scss/_utilities.scss";
                    @import "~@/scss/_media_queries.scss";
                    @import "~@/scss/_searchForm.scss";
                    
                    @import "~@/scss/_searchResults.scss";
                    @import "~@/scss/_movieDetails.scss";
                    @import "~@/scss/_relatedMovies.scss";
                    @import "~@/scss/_nav.scss";
                    @import "~@/scss/main.scss";
                   
                `
            }
        }
    }
}