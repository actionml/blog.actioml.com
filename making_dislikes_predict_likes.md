# How to Make One Thing Predict Another with Multimodal Predictive AI

![](/blog/images/ibm-brain-large.png)

Most of the current trends in AI are focused on machines learning how to do what humans do, like drive cars, diagnose cancer, carry on a chat session. Today let's look at things from the other perspective, how do we use AI to read a human mind. 

I won't bore you with lots of stats about information overload but one stands out, a [UCSD study study](https://www.researchgate.net/publication/242562463_How_Much_Information_2009_Report_on_American_Consumers) found that we consume about 34G of information per day. No one argues with the fact that we are increasingly presented with too many choices. How often have you gone into a big-box store and left without asking for help from a human expert. The only reason Amazon and other online retailers (who arguably have even larger catalogs) don't seem to have this problem is because they have embraced Predictive AI in the form of pervasive Recommendations and invisible enhancements like Behavioral Search.

# The Algorithm: CCO

The velocity of progress in Predictiv AI seems to lag other AI topics&mdash;but why? One reason is that the type of information we have for recommendations (a purchase in the E-Com case) is extremely limiting. People only buy so many things in a given place. But we will start to change that now. We'll do it by asking a simple question; is it possible to make one thing we observe about a user predict another? If we can do this we open up a flood gate of new data to make deeper inferences about people's taste. If we can use multimodal data we can use the entire user's clickstream, the categories they prefer, the searches they make, even contextual information like location. Intuitively we know selected bits of this information should help us predict what a user is looking for but up till now **all** recommenders threw away this multimodal data, only using conversions. 

Let's be more specific so we can test it; can we make a user's dislikes predict their likes. Does this even make sense intuitively? When we first thought about this all we could say was&mdash;maybe. At the time we were trying to figure out how to use data for likes and dislikes to make recommendations better but there really wasn't a lot written about practical methods to do this.

Notice one of the first really successful Recommender algorithms:

![](/blog/images/likes-matrix.png)

![](/blog/images/history-of-likes-vector.png)

![](/blog/images/cooccurrence-recs-vector.png)

The math says that every time an item "like" cooccurs with another item's "like" we have a possible correlation. In this sense cooccur means other users have liked the same item and the math counts those cooccurrences to create a score. If we sort/rank all items in the result vector by the cooccurrence scores we would have a decent recommender. But this equation has an extremely interesting extension:

![](/blog/images/cross-occcurrence-equation.png)
    
What this says is that not only if a user's likes cooccurs with other users' likes but if a user's dislikes cross-occur with other users' likes then they may be correlated. If a lot of people dislike something and this cross-occurs with an item being liked, we have a way to predict likes from dislikes. Notice that there is nothing in the math about what D is and the technique can accept any number of cross-occurrence datasets. We'll call this algorithm Correlated Cross Occurrence (CCO).

ActionML has implemented the CCO Algorithm and made it available both as a constituent of [Apache Mahout](http://mahout.apache.org/docs/latest/algorithms/reccomenders/) and as a full integrated end-to-end recommender system, appropriately called [The Universal Recommender](/universal-recommender), that takes input and serves query results. Why should you care? Read on...

# The Experiment

Math is a language and like any other can express falsehood if mis-applied so we'll need some experiments to validate. For data we scraped Rottentomatoes.com for reviews. In RT terminology "like" = "fresh" and "dislike" = "rotten". All reviews are attributed so we have a pretty large number of users' likes and dislikes of video content. In terms of CCO we have L and D. 

We will setup a standard cross-validation experiment where we randomly choose 20% of the users as the test set (RT reviewers) and take the 80% of users left to train the model (L'L, L'D). Then we will make queries for each of the test set, aka the hold-out set, to make queries. This is where we use a specific user's history of likes and dislikes to multiply by the two correlator matrix models. This will yield all recommendations for each of the held-out users. When we compare the recommendations to the actual likes that are stored in held-out set so we are doing a cross-validation test, comparing predicted to actual.

**Note**: I leave a great deal out here that optimizes the CCO algorithm for run time, quality of recommendation, and productization, which I'll address in another post or 2.

# The Results

We will have a ranked list of recommended videos for each held-out user, we need to compare that to the actual likes of the users. In practical terms we can only show a few recommendations at a time so ranking is one of the most important factors. In other words we want the right top few recommendations because the UI won't be able to show them all and anyway we were trying to reduce information overload so we had better guess well about what the user would prefer to see. We need to measure if the recommendations for held-out users were actually liked by them and see how close to the top of ranking they were. For this we use a metric called Mean Average Precision at k or MAP@k which gives us insight into precision and ranking:

![](/blog/images/map-at-k.png)

We will first measure MAP@1 thru MAP@10 for likes alone. This corresponds to a measure of how likely we are to show something a user really did like in the top k recommendations. Then we will measure MAP@k using likes **plus** dislikes. If we get lift then dislikes have been used to predict likes.

We collected data:

![](/blog/images/rt-map-at-k-data.png)

We ran the test:

![](/blog/images/rt-map-at-k-chart.png)

As you can see we got 18% lift by using dislikes as well as likes. Which translates to dislikes predicting likes. Now the "maybe" is turning to "sure that makes sense."

# Conclusion

We have a case where we were able to get good results from CCO. We were able to extend this idea to other indicators in the same dataset; "likes" for cast member, director, genre, and let's not forget "dislikes" for the same. We did this by creating several indicators for each like or dislike. In the end we had 10 indicators and got 26% lift in MAP vs using "like" alone.

We concluded that this method of using behavior of one kind to predict behavior of another type (using multimodal behavior) was indeed a good idea and have built and deployed several implementations of CCO over the last 2 years. We found that not all indicators correlate to the desired conversion but many do. The data must speak for itself so for every deployment there must be cross-validation to support the indicator choice. We found further surprising results like one case where the words a user searched for provided significant lift even though we were not looking at any content of the items.

We have found new applications of CCO like augmenting a search index with words not found in the content but were correlated with users converting  on the item. This allows slang or missing keywords to hit their mark. We've been able to further augment the index with behavioral information like correlated conversions so the search will boost results by the user's affinity for the item.

CCO and The Universal Recommender are becoming important new tools in broadening applications of Predictive AI, ones that taps data that only the big guys like Netflix and Amazon were able to in the past.


