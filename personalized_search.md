{{#template name='personalized_search_excerpt'}}

![image](/blog/images/behavioral-search-220x220.png)

#### Posted by [**Pat Ferrel**](mailto:pat@actionml.com) on May 24, 2016

# [Personalized Search](/blog/{{template}})

### How Google and Amazon "personalize" and augment search. Using your old log files you may be able to do it too.  

{{/template}}
{{#template name='personalized_search'}}

Posted by [**Pat Ferrel**](mailto:pat@actionml.com) on May 24, 2016
# Personalized Search

Search is about finding keywords, right? Well, partly, but if you stand back it's really about helping users find things and the words they use may not even be in the text. How often have you spent an hour choosing different words until the search engine gave you the right result? Often the words you think will work&mdash;don't. We, app developers, are just out of luck, right? Not at all, with a little Machine Learning we can actually leverage the search terms users have used collectively, along with other signals, to make pretty good guesses at what a user is looking for.

In business terms; if your customer can't find the right words to get where they want&mdash;they are frustrated and you lose a sale. Both are not good. What if I could tell you about a company that achieved 3% increase in sales by using the kind of ML I'm talking about? Read-on.

First let's look at what the experts say:

<iframe width="560" height="315" src="https://www.youtube.com/embed/EKuG2M6R4VM" frameborder="0" allowfullscreen></iframe>

Notice that they used exactly the same word and it didn't mean what you thought it would, in fact the word had 2 different meanings. They couldn't go over every case and in fact the word you use may not be on the web page, the word may just be what you and others think *should* be on the page.

Amazon, another trailblazer in Machine Learning, gave the technique the name "Behavior-Based Search". They describe it as "People who searched for X bought item Y.” In a survey of web machine learning technology produced at Stanford they disclosed that "the feature increased Amazon’s revenue by 3%" [[1](http://ai.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf)]

## Search Experience Before and After Behavioral Search

A user who had searched for "24" and ended up purchasing "24 Season 2". They watch the DVD and then search for "24" again. Amazon shows the results on the right, log-out and they show the left.

![image](/blog/images/behavioral-search-1000x482.png)

Every media or ecommerce application has a search feature, but how many do you think have *Personalized Search*? If you work on such an application, what would you give for a 3% sales lift? This is essentially free lift, no extra advertising cost, no special promotions needed, just more sales. There is a technology cost and you may not have as many brainy Data Scientists as Amazon, but that's no excuse anymore. Let me describe how to implement Personalized "Behavior-Based" search.

## Correlation is the Key

Who cares what word someone thinks of as long as it leads to a conversion? What if  others use the same word. But how do we know it leads to a conversion and what do we do with those words to improve search?

We start with recording both conversions and search phrases for all users. Then for each conversion we test all the phrases to find ones that correlate with conversion. If we have a reasonable amount of data this is even better than tracking clickstreams, which can wander about. This is a Big Data application because there will be a lot of possible correlations to test.

This application has much in common with the [Universal Recommender](/docs/ur) in that it will uses an algorithm called Correlated Cross-Occurrence. An interesting and powerful little stat called the Log-Likelihood Ratio will test if two events are correlated. Actually it tests for non-correlation but let's not quibble since in this case it amounts to the same information. It looks at the frequency of users and items in the data and of the particular cooccurrence or cross-occurrence. Here we us "cross" to indicate 2 different types of events, using search terms and conversion.

![image](/blog/images/llr-equation-400x73.png)

This is a probabilistic stat that tells us whether to reject the hypothesis that any 2 events are correlated. In our case non-rejection is pretty strong evidence of correlation (practically speaking we checked and it works)[[2](https://www.mapr.com/practical-machine-learning)][[3](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwjVk5r20fPMAhUX6GMKHYPnCwcQtwIIMTAC&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTn5y2i_MqQ8&usg=AFQjCNFU2iMTOPWKBthCR82Vak_uCxONpA)]

So now all we have to do is check every time a search phrase cross-occurs with a conversion event. We have a simple Big Data technique for that, which is a bit of tensor math. If A = a matrix of users in rows and all observed conversion-ids in columns (this could be products purchased, videos viewed, pages visited%mdash;depending on the conversion type) and B = a matrix of those same users in rows and all observed search phrases in columns then 

![image](/blog/images/atb-80x40.png)

yields a matrix of all cross-occurrences of conversion-ids in rows and search phrases in columns. For every non-zero element of the matrix we apply the LLR to test for correlation. If there is a low confidence of correlation we toss the useless data, it is not very likely to have been a real factor in the user converting on the row. 

For example if a conversion is a purchase, then the rows will correspond to product-ids and reading along the row for the product will be elements (search phrases) that likely led to the product being purchased. Converting the ordinality of the rows and columns back into something readable it will look like this:

![image](/blog/images/atb-text-700x131.png)

## Augmented Search

In this simple example we see that a search of "24" led to more purchases of the DVDs than the song list or the music. This is logical; if you were a fan, the word "24" in American vernacular was synonymous with the series for a time. If we only had words in the text of the descriptions we'd have no way to direct people to the most popular destination&mdash;now all we have to do is add those popular phrases to the product descriptions as an index field and re-index. Et voila, "Augmented Search". Here we define augmented search as an index with extra terms attached that led to conversions by a significant number of people.

But this is not Personalized, no need to stop there...

## Personalized Search

We start with Augmented Search but we can also add other behavioral data to index augmenting fields. Notice that using the above definition of A as user rows by  conversion columns we get

![image](/blog/images/ata-80x48.png)

which tells us which conversions are correlated with other conversions. Now we know that people who bought "24 Season 1-4" also bought "24 Season 5" so if we augment the index for product "24 Season 5" with the other seasons we'll have a way to personalize. We need to bring in behavioral information about the user doing the search, like the Google guys did. If we know that the user searches for "24" **and** bought "24 Season 4", we send in the phrase "24" to the phrases-field (from Augmented Search) but we now bring in user history to send as a query to the purchases-field. The result will be anything with the phrase "24" boosted if it also has "24" in the phrases-field **and**  product-id for "24 Season 4" in the purchases-field. To put that another way we are combining the search terms typed in to the search box **and** user history of purchases to get results for search. We are using a search engine almost like a recommender.

We now have happier customers and more sales.

## Postscript

The math goes on. We can apply the same technique with almost anything known about the user - genders, locations, category-preferences, genre-preferences, pageviews, and so-on. All that data can be used to provide better customer experience and more conversions. [Contact us today](http://actionml.com/#contact) to learn more about how you can setup the Personalized Search Engine for your application.

{{/template}}
