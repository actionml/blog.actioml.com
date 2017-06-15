# Predictive AI at GTC

In May of 2017 I had the opportunity to talk at the Nvidia GPU conference about a strong use case for GPU acceleration&mdash;Predictive AI. We discussed the algorithm called Correlated Cross Occurrence (CCO). The Algorithm is the core of the Universal Recommender and other applications like Behavioral Search and cross-domain preference predictions. It creates models by doing a lot of matrix multiplication using Apache Mahout and in that project we recently enabled GPU acceleration. A real life application that benefits from GPU acceleration, Nvidia asked us to come talk about it.

Here is the video showing slides with narration from me for the first half then Andy Palumbo for the second half.

<a href="http://on-demand.gputechconf.com/gtc/2017/video/s7829-apache-mahout's-new-recommender-algorithm-and-using-gpus-to-speed-model-creation.mp4">![](/blog/images/the-ur-at-gtc.jpg)</a>

Slides for my part of the talk are [here](https://docs.google.com/presentation/d/167LoVvMgdDF8XQ5a9qveLJmaiGdP1tUQ0AMDArzN_tE/edit?usp=sharing).

One very interesting ramification of this development is that the layered approach Apache Mahout takes to doing generalized linear algebra means that if you upgrade the lower layers all the higher layers automatically get benefits. Some very important work has been done in the Apache Spark project but instead of creating a generalized linear algebra solving engine they hard coded specific tasks to do things like ALS Matrix factorization. Doing ALS matrix factorization with Mahout means you get GPU acceleration, not so of MLlib ALS. Who knows when someone will have the time to go in an upgrade that algo (IBM is working on something), and even when they do there are a lot more to upgrade. 

With Mahout we upgrade a layer and all algos get the benefit so CCO and ALS written on Mahout already have some benefit from GPU support. At present this is small because we are still working on using all GPUs available, but that is soon to be added giving us perhaps the first GPU support for a wide array of algorithms on commodity clusters like what we get from AWS.