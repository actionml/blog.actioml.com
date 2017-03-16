posted by [**Pat Ferrel**](mailto:pat@actionml.com) March 15, 2017

# When Search is not Enough: Use a Recommender

I just got a new Macbook Pro, which is pretty thin and not exactly cheap looking so it was an excuse to upgrade my old Acme laptop bag. Like many people I went to Amazon and, to understate it, they have a lot of bags. When I searched for "laptop bag" I got page after page of ones I didn't like. 

![](/blog/images/amazon-laptop-bag-1.png)

I remembered that I'd seen leather non-laptop bags that I liked and so added "leather" to my searches. Is this beginning to sound familiar? search, refine keywords, repeat ad nauseum? This was pretty close to hopeless since, as it turned out, I didn't know the words for what I wanted and until I'd seen some examples, I hadn't formed a firm opinion either.

![](/blog/images/amazon-leather-laptop-bag-2.png)

This was producing endless searches that gave results that were mostly of no interest to me but I did know a thing or two about recommenders. They can find things the user would never know how to search for&mdash;but how to get recommenders to help me? One feature of Amazon is what's called item-based recommendations. You go to something that looks reasonable and see "other people who viewed this bought these". This helped quite a bit, the recommendations were more in line with what I wanted but none were exactly right.

![](/blog/images/amazon-item-based-recs-3.png)

Another Amazon feature is a wishlist. Add things to one and on the bottom of the page you get what is called "item-set" recommendations. Think of these as "other people that looked at things in your list bought these". Wow, things were getting much better now. To finally refine the recommendations I removed some wishlist items I liked the least.

![](/blog/images/amsazon-tuscany-leather-messenger-bag-4.png)

Voila, the perfect computer bag appeared. It turns out I was looking for a "thin leather messenger bag with a leather shoulder strap". Try searching for that? You won't see the bag I bought. Add to this the fact that I had no idea what a "messenger bag" was when I started and had no idea that the cloth straps on some just looked wrong to me but when I saw the right one recommended at the bottom of the page I knew it immediately.

This sounds a little spooky like mind reading but it works and is a technique I have used several times now. It relies on getting enough data from me that matches other people's behavior. These people might have known what to look for, knew the right words, or maybe just stumbled across the right item. In any case they crossed paths with me enough that what they bought was recommended to me. Notice too that this was done mostly without words, search by example if you will.

Most people would not have purposely set out to use Amazon features in this way, that's not my point, but they are all there integrated into every page  and sometimes in multiple placements guiding you automatically.  My little story just confirms they work.

In this story we saw:

 - **Item-Based Recommendations**: these work even if the user has no history to point to a particular item, like when I started shopping for a new bag. 
 - **Item-Set Recommendations**: which distill commonality. In other uses they find complimentary purchases when applied to shopping carts.
 - **Behavioral Browsing**: At every turn, on almost every page things were shown to me that my current behavior was hinting at.

Welcome to modern high-tech Machine Learning based Discovery. Amazon is said to get 30-40% lift in sales from this and [other techniques](/blog/personalized_search). Now that these techniques are available to all, you'd be crazy to rely on marketing alone in the competitive online world. 
