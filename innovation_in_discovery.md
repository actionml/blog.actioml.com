posted by [**Pat Ferrel**](mailto:pat@actionml.com) Sept 20, 2018

# Innovation in Discovery

Discovery is one of the biggest challenges for any business on the internet. Not only how does one find you but how do people find what they are looking for on your site&mdash;especially if they only have a vague idea to begin with. I wrote about [one crude way to do this](/blog/recommender_for_search.md) with a combination of Search and Recommendations that I use sometimes on Amazon.

Another example is the way we implemented a "trainer" on our demo video recommender site. This allows new users to thumbs up or down a list of videos and in so doing train the recommender to know what they like.

I ran across a new experiment from Amazon that looks promising and combines several of the techniques used above.

# Introducing Amazon SCOUT

<a href="https://www.amazon.com/scout/" target="_blank"><img src="/blog/images/scout-large.png"></a>

The idea is pretty simple, hit thumbs up or down on images shown to you and Amazon will quickly narrow down to the type of thing you want, without any search terms. It seems like a sort of visual search but there is much more going on behind the scenes so let's reverse engineer the SCOUT to show how predictive and analytical Machine Learning can be used in innovative ways.

# Building a Scout

The first question is; "where did they pick the products to show?" This might seem obvious but not so fast. The ultimate goal is learning about the user's taste as quickly as possible with the fewest choices. In machine learning analytics this means showing items that have the minimal covariance, meaning they are in general not preferred by the same people.

There are many ways to find these but what we chose in our video recommender trainer, was to cluster products by user behavior and take the top most popular items from these clusters.

The reason for clustering by behavior is that this will find items that are preferred by the same type of people (people who prefer similar things in general). This doesn't guarantee non-covariance but is fairly close to the idea. 

The reason to choose fairly popular things is so that people will have seen them before. This was useful in asking people to rate movies in our trainer and is useful in a hypothetical Scout to show styles that people are familiar with. 

There are several algorithms and data we could use to do this clustering so we used out own recommender model since it already had scrubbed a large amount of user behavior/preference data and I bet this is what Amazon does too.

A beginner might be tempted to use a curated list of items but this doesn't scale to large inventories or to changing categories and in fact isn't necessarily related to finding non-covariance at all. Remember the old adage "follow the data".

# The SCOUT UI

Another couple things are clear from the UI, thumbs up and down are the only feedback they ask for. Some might say; "why not get ratings?" The answer I've written about many time&mdash;ratings are extremely weak and problematic to deal with. Here Amazon, as you'd expect, has avoided the weak and problematic.

As you click on things you like and dislike new things appear. This gives the illusion that you have only chosen a few since you never see a long list. This makes it into something like a game, more kudos to Amazon.

When SCOUT thinks you have given enough feedback they automatically move to recommending lists of items. IMO they do this a little too soon but this is little more than an experiment and I'm sure they will look at the data to see if I'm right. In any case what data would you look at? One thing is how common your choices are in terms of variance. If they see consistent choices in terms of picking things that the same users have liked by purchasing them in the past, they will find a significance value that says&mdash;ok we are done.

The other thing to take into account is user fatigue, when does it seem like a chore rather than a game? When are they ready to get on with shopping?

# The Result

The end result is something like a visual search where you have also trained the recommender about your preferences in an area that you may never have expressed an interest before. I have never bought coffee tables at Amazon but now they have a good idea about what I like.

What style of table was it? I could describe it but the words (since I am not a designer) would probably never work in search. I am actually in the market for a coffee table but would never know how to search for what I found with SCOUT. I just know what looks good to me and now Amazon does too. 

Given a multimodal algorithm like the Correlated Cross-Occurrence (CCO) algorithm in the Universal Recommender this data now easily applies to other types of items, again things that I have not bought from Amazon&mdash;yet.

# Conclusion

Our little thought experiment, backed by previous experiments we've done, used:

 - Clustering of behavioral information to maximize variance to learn quicker and to allow the technique to scale to whole new types of products
 - We used pure, unambiguous data: <a href="https://developer.ibm.com/dwblog/2017/mahout-spark-correlated-cross-occurences/" target="_blank">thumbs up and down</a>. But this is still two types of data, which requires a multimodal recommender and rules out most that are publicly available. Not a problem for us since it is exactly what the [Universal Recommender](/universal-recommender) does well.
 - New Recommendations came in interactively in real-time. Again the UR is good at this.

# Postscript

A variation on this little experiment can safely turn a site into one that seems to show only recommendations. This idea is the holy grail of recommenders but is strictly speaking impossible since recommenders require the user sees non-recommended item or the recommender with "overfit" and show the same things over and over leading to dropping KPIs like sales. The SCOUT UI uses a trick to show you items that are not recommended under the guise of getting your feedback. We can use this to turn every page into recommendations without overfitting, but that's another blog post.
