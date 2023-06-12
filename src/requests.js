
const requests = {
    fetchTrending: `http://localhost:9292/trending`,
    fetchNetflixOriginals: `http://localhost:9292/netflix_originals`,
    fetchTopRated: `http://localhost:9292/top_rated`,
    fetchActionMovies: `http://localhost:9292/action`,
    fetchComedyMovies: `http://localhost:9292/comedy`,
    fetchHorrorMovies: `http://localhost:9292/horror`,
    fetchRomanceMovies: `http://localhost:9292/romance`,
    fetchDocumentaries: `http://localhost:9292/documentaries`,
}

const categoryComments = {
    netflixOriginalComments: "/netflix_original_comments",
    trendingComments: "/trending_comments",
    topRatedComments: "/top_rated_comments",
    actionComments: "/action_comments",
    comedyComments: "/comedy_comments",
    horrorComments: "/horror_comments",
    romanceComments: "/romance_comments",
    documentaryComments: "/documentary_comments"
}
export { requests, categoryComments }