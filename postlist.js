PostList = [
    {
        title: "How To Make One Thing Predict Another",
        template: "making_dislikes_predict_likes",
        excerpt: "making_dislikes_predict_likes_excerpt",
        categories: ["use case", "datascience"]
    },{
        title: "Predictive AI Meets GPUs",
        template: "talk_at_gtc",
        excerpt: "talk_at_gtc_excerpt",
        categories: ["news", "datascience"]
    },{
        title: "The Demise of Brick and Mortar and Old Media: The New Rules of The Game",
        template: "a_rant",
        excerpt: "a_rant_excerpt",
        categories: ["news", "opinion"]
    },{
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