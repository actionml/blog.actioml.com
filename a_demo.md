{{#template name='a_demo_excerpt'}}

![image](/blog/images/guide-front-220x220.png)

#### Posted by **Pat Ferrel** on Apr 1, 2016

# [A Demo is Worth a Thousand Words](/blog/{{template}})

### While developing The Universal Recommender we created a demo app. We got real data from RottenTomatoes.com from reviewers so it makes real recommendations, give it a try. 
{{/template}}

{{#template name='a_demo'}}

# A Demo is Worth a Thousand Words

[![image](/blog/images/guide-front-900x720.png)](http://guide.actionml.com)

While developing The Universal Recommender we created a demo app. We got real data from RottenTomatoes.com reviewers so it makes real recommendations, give it a try. You need to create an account then go to the trainer, which leads you through a bunch of specially chosen videos you can like or dislike. Once you have a few preferences it makes personalized recommendations.

This turned out to be a great experiment because we were able to get lots of user preference indicators. You might not guess it but we found user *dislikes* helped predict *likes*.

This demo uses ActionML's Universal Recommender for multi-action recommendations and Clustering to pick the most differentiating videos for the trainer. We illustrate several UR features here like the use of video properties to narrow down recommendations in a hybrid of Collaborative Filtering and Content-based recommendations. 

Caveat Emptor: Sorry for dupes in the Videos list, RT could use a little data scrubbing. Don’t expect much from search it is only minimally hooked up for how.

{{/template}}
