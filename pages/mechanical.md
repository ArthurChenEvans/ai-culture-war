# The AI Culture War — Mechanical Explanation

*How large language models actually work: next-word prediction, transformer architecture, fact storage, superposition, the empirically-documented memorisation that complicates the "it's not copying" defence, and the practitioner's view from the programming trenches. The mechanical facts are often weaponised in both directions of the culture war; this essay lays out what the technology actually is, and what conclusions technical facts can and cannot support.*

---
## 1. Why the Mechanics Matter for the Debate

Technical facts about how AI works get weaponised in both directions of the culture war. Anti-AI arguments invoke "it's just copying" or "it's just a collage of stolen images." Pro-AI arguments invoke "it's not memorising anything, it's learning patterns." Both framings use mechanical claims to do moral work, and both tend to overstate what the mechanics actually establish. This essay walks through the mechanics honestly, acknowledging where the technology does what critics fear and where it does not, and marks what technical facts can and cannot settle about the ethical debate.

The short version: large language models and diffusion models are probability engines operating on high-dimensional learned representations. They do not store training data as retrievable copies in the normal case. But they do exhibit documented memorisation under specific conditions. The mechanism is neither "pure collage" nor "pure abstraction" — it is something more interesting than either, and the ethical conclusions people try to extract from "the mechanism" typically go beyond what the mechanism actually supports.

## 2. The Core Idea: Predicting the Next Word

Grant Sanderson, the mathematician behind 3Blue1Brown, opens his explanation of large language models with an analogy that cuts through the noise (3Blue1Brown, 2024a). Imagine you find a movie script describing a conversation between a person and their AI assistant, but the AI's response has been torn off. If you had a machine that could look at any piece of text and sensibly predict what word comes next, you could reconstruct the missing dialogue one word at a time. When you interact with a chatbot, this is exactly what is happening. A large language model is a sophisticated mathematical function that takes a piece of text and assigns a probability to every possible next word.

The model does not predict one word with certainty. It assigns probabilities across all possible next words, and the output tends to look more natural if the system occasionally selects less likely words. The same prompt will typically produce a different answer each time, not because the model is "creative" but because randomness is deliberately injected into the sampling process. What appears as linguistic fluency is the statistical signature of the training distribution being sampled, shaped by massive parameter counts and architectural innovations that let the model condition its predictions on long context.

> Notice what this description does not tell us. It does not tell us whether the model "understands" (the Philosophical Explanation engages that question). It does not tell us whether the outputs constitute theft (the Legal Explanation engages that question). It does not tell us whether users are morally culpable (the Ethical Explanation engages that question). The mechanics are the substrate on which those debates happen. They do not decide the debates by themselves.

## 3. Training: Tuning Hundreds of Billions of Dials

How does the model learn to make these predictions? By processing an enormous amount of text, typically pulled from the internet. Sanderson puts the scale into perspective: for a human to read the amount of text used to train GPT-3, reading non-stop 24 hours a day, it would take over 2,600 years. Larger models since have trained on far more (3Blue1Brown, 2024a).

The way a language model behaves is entirely determined by continuous numerical values called parameters or weights. GPT-3 has 175 billion of them. No human ever deliberately sets those parameters. They begin at random and are repeatedly refined based on example text. Training passes all but the last word of an example into the model, compares the prediction with the true last word, and uses backpropagation to tweak all 175 billion parameters so the model becomes slightly more likely to choose the correct word next time (3Blue1Brown, 2024a).

The computational scale is extraordinary. Published estimates put the total compute used to train GPT-3 at roughly 3.14 × 10²³ floating-point operations — at a rate of one billion operations per second, that would take on the order of ten million years. This is only possible with GPUs — specialised chips optimised for running many operations in parallel — and cluster-scale infrastructure that did not exist a decade ago. After raw pre-training, chatbots undergo reinforcement learning with human feedback (RLHF): human workers flag unhelpful or problematic outputs, and their corrections adjust the model's parameters to make it more likely to produce preferred responses. This is how a next-word predictor becomes something that feels like a conversational partner.

## 4. The Transformer: How Words Talk to Each Other

Prior to 2017, most language models processed text sequentially. Then a team at Google introduced the transformer (Vaswani et al., 2017), and everything changed. Transformers process text in parallel rather than one word at a time (3Blue1Brown, 2024a). The first thing that happens is that each word is converted into a vector — a long list of numbers. In GPT-3, each word becomes a list of 12,288 numbers. These vectors are not arbitrary; during training, the model learns to position words so that similar meanings correspond to nearby vectors. The classic example: take the vector for "woman," subtract the vector for "man," and add the result to "uncle" — you land very close to "aunt." The direction between "man" and "woman" encodes gender information, learned entirely from data.

The core mechanism that lets the transformer work is *attention*. At each layer, every word's vector can look at every other word's vector and update itself based on what is relevant. The word "bank" in "river bank" and "bank account" starts with the same initial vector, but after several attention layers, the two vectors have diverged — one has absorbed context from "river," the other from "account." The final vector for the last word in the input is what gets used to predict the next word. Meaning emerges from the learned pattern of which vectors attend to which other vectors.

## 5. Fact Storage: Facts as Matrix Products

Where, physically, does a language model "store" the fact that Michael Jordan plays basketball? Sanderson's third technical chapter (3Blue1Brown, 2024c) addresses this. The answer is not a lookup table. Facts are stored in the multi-layer perceptron (MLP) blocks between attention layers — specifically, as patterns of weights in large matrices that, when multiplied against an appropriate input vector, produce an output that encodes the fact. The "Michael Jordan" direction in vector space combines with the weights to yield a vector nudged toward "basketball." The fact is a learned geometric relationship, not a stored string.

This distributed storage has several consequences. It makes models extraordinarily parameter-efficient for common facts that show up repeatedly in training data. It also makes them prone to confident errors — the geometry that almost encodes a fact may, under slightly different input conditions, encode a similar-sounding but wrong fact. Hallucination is not a bug; it is a natural consequence of storing information as learned weights rather than as retrievable entries.

## 6. Superposition — and the Memorisation It Does Not Eliminate

Perhaps the most thought-provoking mathematical insight in Sanderson's series is superposition. If you have an n-dimensional space and you want to represent independent features using perpendicular directions — so adding one feature does not interfere with another — the maximum number of features you can represent is exactly n. But if you relax the constraint and allow features to be represented by *nearly* perpendicular directions, the answer changes dramatically in high-dimensional spaces. In a 100-dimensional space, you can cram 10,000 nearly perpendicular vectors. This is the Johnson-Lindenstrauss lemma: the number of nearly perpendicular vectors grows exponentially with dimensions.

For large language models, this has a profound implication. A model operating in a 12,288-dimensional space is not limited to 12,288 independent features. It can store astronomically more by using nearly perpendicular directions, tolerating a small amount of noise in exchange for massive storage capacity. Individual features are represented not by single neurons but by specific combinations of neurons — patterns spread across the network. This may partially explain why model performance scales so well with size, and why these models are so difficult to interpret. Anthropic and other research groups use tools called sparse autoencoders to disentangle these superimposed features (Bricken et al., 2023).

> Here is where the mechanics matter for the culture war, but only if stated carefully. The framing "AI is just a collage of stolen images" does not match the mechanism — the storage is distributed, geometric, and compressed, not pixel-for-pixel. But superposition *does not* mean the model has fully abstracted away from training data. Carlini et al. (2023) demonstrated that diffusion models can and do reproduce training images in recognisable form, especially for images that appear many times in the training set; they extracted over a thousand near-verbatim training images from Stable Diffusion using targeted prompts. The honest mechanical account acknowledges both: the model is not a simple collage machine *and* the model demonstrably memorises specific training examples under some conditions. The legal implications are covered in the Legal Explanation; the ethical implications are that pro-AI claims of "the model doesn't copy" are overstated, and anti-AI claims of "the model is pure theft" are also overstated. Both framings weaponise the mechanism beyond what it supports.

## 7. Temperature and the Illusion of Creativity

After the model produces its probability distribution over possible next words, the softmax function that normalises those probabilities includes an adjustable constant T — the temperature — in the denominator. When T is low, the model always picks the single most probable word, producing predictable output. When T is high, it gives more weight to less likely options, producing output that feels more "creative" but risks degenerating into nonsense. Sanderson demonstrates this directly: at temperature zero, GPT-3 produces a derivative version of Goldilocks — maximally predictable. At higher temperatures, the output begins more originally but quickly loses coherence.

This matters because the outputs people find most impressive — the surprisingly apt metaphor, the unexpected turn of phrase — are often the result of high-temperature sampling landing on a low-probability but contextually coherent word. The model did not "think" of a clever metaphor. It sampled from a probability distribution, and the sample happened to read as clever. The mechanism is elegant. Whether it counts as "thought" is the philosophical question. What the mechanics establish is that "creativity" in LLMs is not human-style creativity even if outputs sometimes resemble it.

## 8. The Practitioner's View: Linus Torvalds at Open Source Summit

At the Linux Foundation Open Source Summit in Seoul in November 2025, Linus Torvalds — creator of Linux and Git, and one of the most influential software engineers alive — was interviewed by Dirk Hohndel, head of open source at Verizon. Asked whether AI is a bubble, a computing revolution, or both, Torvalds answered that it is clearly both (Torvalds, 2025). He elaborated that AI will change how most skilled jobs get done while not being as revolutionary as the marketing around it suggests.

This is not a contradiction. A next-word predictor trained on the internet's corpus of code *will* be extraordinarily good at predicting the next line of code in context. It *will* change how programmers work. But it is still a next-word predictor. It does not understand system architecture, does not reason about trade-offs across a codebase, and does not maintain coherent design vision over thousands of lines. Both truths can hold. Torvalds described himself as "fairly positive" about vibe coding — AI-generated code with minimal oversight — as an on-ramp for people who otherwise could not write code, while warning it would be "a horrible, horrible idea from a maintenance standpoint" for production work (Torvalds, 2025, via Open Source Summit interview).

A January 2026 update is worth recording honestly. Torvalds quietly began using AI-assisted coding — specifically Google's Antigravity — for a personal audio-processing project (AudioNoise), and openly credited the tool in the commit description. The pivot does not contradict his November 2025 position; his framework was always "AI is a productivity tool, disastrous in production without oversight, useful for smaller or experimental work." Using AI on a personal hobby project falls squarely within the "fine" category he articulated. But the update is worth naming, because it shows Torvalds himself practicing exactly the kind of autonomous, context-sensitive technology adoption the Ethical Explanation defends. He decided, for his own work, in his own judgement, when AI was and was not appropriate. That is the model for what pro-autonomy looks like in practice.

## 9. Why Programmers and Artists Responded Differently — and What the Mechanism Does and Does Not Explain

A widely-observed cultural asymmetry: the software industry has largely embraced AI coding tools, while parts of the art community have strongly resisted AI image generation. The same technology, built on the same mathematical mechanism, trained on the same kind of data — has provoked opposite professional reactions. Some of this is explained by the mechanics. Some is not, and it is worth being honest about which is which.

The mechanical part is real. In programming, the output of an LLM is testable. Code either compiles or it does not. It either passes the test suite or it does not. The programmer can verify the prediction, reject it if wrong, and use it as a productivity accelerator when right. The predictor is used as a tool under human supervision. In image generation, the output is often the final product — there is no compiler, no test suite, no objective verification step. The relationship between prediction and professional is structurally different.

But the mechanical account is incomplete, and honesty demands naming what else matters. Programmers generally own their tools and produce outputs on contractual terms; artists in the online commission economy depend on direct consumer relationships and stylistic differentiation that AI most directly threatens. Programming has long operated in a culture of remix, reuse, and open-source sharing; the art world has stronger norms around individual authorship. Artists could often identify specific tools trained on identifiable portfolios; programmers typically train on aggregated code where authorship attribution was already diffuse. The mechanical testability argument explains part of the asymmetry. The economic and cultural asymmetries explain the rest. Any account resting on one of these alone is oversimplified.

What this means for the broader debate: mechanical claims cannot, on their own, resolve whether AI use is ethically loaded. The same mechanism produces dramatically different professional responses depending on context, economic structure, and cultural norms. Invoking "the mechanism" to settle ethics is invoking something that does not do the work required. The ethical questions have to be answered on ethical grounds, with the mechanics as context rather than as verdict.

## 10. The Verdict: A Machine That Predicts, With Edge Cases

The anti-AI framing sometimes wants to say: "It's just autocomplete. It's stupid. It can't do anything." This understates the capability — the mathematics of attention, superposition, and high-dimensional embedding produces results that are genuinely useful. The pro-AI framing sometimes wants to say: "It understands. It creates. It reasons." This overstates the mechanism — it predicts the next word, stores facts as matrix products, generates "creativity" by sampling from a temperature-scaled probability distribution.

The honest position: these models are powerful tools, fundamentally shaped and limited by what they are. They excel at local prediction. They fail at global coherence. They compress knowledge through superposition in ways qualitatively different from human memory or database storage — but not so different that training-data memorisation is impossible, as Carlini et al. (2023) demonstrated. Their "creativity" is a mathematical artefact of probability-weighted sampling. None of this settles whether using them is ethically loaded. That question is answered on ethical grounds, not mechanical ones.

Three concurrent realities deserve acknowledgement. **Mechanically,** a large language model is a transformer — a stack of attention blocks and MLPs containing hundreds of billions of learned parameters, converting input text into a probability distribution over possible next words. Parameters encode compressed statistical patterns from training data, stored via superposition in high-dimensional vector spaces, with demonstrable but bounded memorisation of specific training examples. It is mathematics, not magic, and not a clean separation from source material. **Practically,** the tool is useful for practitioners who understand its limits; Torvalds' framework — fine for exploration and on-ramps, disastrous in production without oversight — maps to the architecture. **Culturally,** mechanical facts get invoked to do moral work in both directions, and the work they do is typically less than claimed. The mechanics set the stage. The debates play out on other grounds.

References

### References

3Blue1Brown [Sanderson, G.]. (2024a). Large language models explained briefly [Video]. YouTube.

3Blue1Brown [Sanderson, G.]. (2024b). Transformers, the tech behind LLMs | Deep Learning Chapter 5 [Video]. YouTube.

3Blue1Brown [Sanderson, G.]. (2024c). How might LLMs store facts | Deep Learning Chapter 7 [Video]. YouTube.

Bricken, T., Templeton, A., Batson, J., Chen, B., Jermyn, A., et al. (2023). Towards monosemanticity: Decomposing language models with dictionary learning. *Anthropic Transformer Circuits Thread*.

Carlini, N., Hayes, J., Nasr, M., Jagielski, M., Sehwag, V., Tramèr, F., Balle, B., Ippolito, D., & Wallace, E. (2023). Extracting training data from diffusion models. *USENIX Security Symposium*.

Quach, K. (2025, November 18). Linus Torvalds: Vibe coding is fine, but not for production. *The Register*.

Torvalds, L. (2025, November). Interview with Dirk Hohndel at Linux Foundation Open Source Summit, Seoul. Full interview available on YouTube via the Linux Foundation channel.

Vaswani, A., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.

*Author's note: This essay draws on prior informal synthesis by the author, restructured to frame mechanical facts as substrate for rather than determinant of ethical questions, with the Torvalds Jan 2026 pivot used as an illustration of pro-autonomy technology adoption rather than a contradiction.*
