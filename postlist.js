PostList = [
    {
        title: "When Search is not Enough: Use a Recommender",
        template: "recommender_for_search",
        excerpt: "recommender_for_search_excerpt",
        categories: ["use case", "recommender"]
    },{
        title: "Correlated Cross-Occurrence (CCO): Not All Events are Created Equal",
        template: "cco",
        excerpt: "cco_excerpt",
        categories: ["recommender", "datascience", "anecdote"]
    },{
        title: "Personalized Search",
        template: "personalized_search",
        excerpt: "personalized_search_excerpt",
        categories: ["use case", "recommender"]
    },
    {
        title: "A Demo is Worth a Thousand Words",
        template: "a_demo",
        excerpt: "a_demo_excerpt",
        categories: ["use case", "recommender"]
    },
    {
        title: "The Universal Recommender",
        template: "ur_algo_slides",
        excerpt: "ur_algo_slides_excerpt",
        categories: ["use case", "recommender"]
    }
];

PostListIndex = _(PostList).pluck('template')