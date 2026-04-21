# The AI Culture War — Legal Explanation

*How the law is actually responding to AI, examined honestly, including where cases have gone against AI developers. The consistent pattern: the law directs responsibility at institutional actors, not at end users. This is not a claim that AI is legal or that its use is neutral. It is a description of where the legal system has been placing accountability, which has direct implications for how the ethical debate should be structured.*

---
## 1. Publicly Accessible Does Not Mean Public Domain

This is the single most important legal distinction in the entire AI debate, and it is the one most frequently misunderstood by both sides. Being publicly accessible — viewable without a login, password, or paywall — does not make content "public domain" or "free for unrestricted use." Public domain means the copyright has expired, been forfeited, or never existed (such as most US government works, or works published before 1929 in the United States as of 2025). Publicly accessible simply means you can view it without barriers. The vast majority of images on the open web are still copyrighted, even though they are easy to see or download. Copyright protects original works automatically upon creation. No registration or notice is required.

This matters because the training datasets used by major AI image generators — LAION-5B and its successors — were compiled by scraping billions of publicly accessible but copyrighted images from the web. The companies that built these datasets knew, or should have known, that publicly accessible does not equal freely usable. Whether that scraping constitutes legal infringement is a separate question being worked through in courts globally, but the ethical dimension is clear: the corporate actors made decisions that affected creators without those creators' consent, and the legal system is now adjudicating the consequences of those decisions.

> Whether individual users are legally or morally responsible for the corporate decisions that built the models they use is addressed in the Ethical Explanation. Here we track where the legal system has actually placed accountability — which, as the cases below show, has been exclusively on developers, platforms, and dataset compilers. This is a descriptive claim about how the law operates, not a normative claim about how it should.

## 2. The Training Data Question — What Copyright Law Was Not Built For

Copyright law was designed to protect human authors against other humans copying their work. It grants creators exclusive rights over reproduction, distribution, adaptation, and public display. What it was not designed to handle is a system that ingests billions of copyrighted works, uses them to train a statistical model, and produces new outputs that may be similar in style to the training data but are not direct copies of any specific work.

Tech companies argue that training does not constitute infringement: it is analogous to a human reading millions of books and then writing something new — the information is processed and transformed, not copied. Critics argue the analogy fails: humans cannot store and process works at the scale and fidelity of neural networks, and the economic impact on creators is direct regardless of the technical mechanism.

The technical reality complicates both positions. Diffusion models do not store intact images in their weights in the normal case — they encode statistical patterns. However, empirical research, most notably Carlini et al. (2023), has demonstrated that memorisation of specific training images does occur in diffusion models, sometimes producing near-verbatim reproductions in response to targeted prompts. The law must therefore grapple with a technology that is transformative in the aggregate but demonstrably reproductive in specific, measurable instances. The existence of memorisation undermines the strongest version of the "models do not copy" defence and has become central to several active copyright suits, including the NYT case.

## 3. Landmark Cases — An Honest Reading

**The New York Times v. OpenAI & Microsoft**

*Filed December 2023 · US District Court, SDNY · Ongoing*

The NYT alleges that OpenAI and Microsoft used millions of its articles to train GPT models without permission or payment, and that the models can reproduce NYT content near-verbatim when prompted. The case introduced "memorisation" — the documented phenomenon of LLMs reproducing training data verbatim — as evidence that training is not merely transformative. Widely considered one of the most consequential AI copyright cases in progress, with potential damages that could reach billions if the court rules for the NYT on the memorisation-based infringement theory. The defendants are OpenAI and Microsoft. End users of ChatGPT are not defendants.

**Getty Images v. Stability AI (UK)**

*Filed January 2023 · UK High Court · Judgment 4 November 2025*

This case is frequently mischaracterised in coverage, so the facts matter. Getty initially brought five claims against Stability AI: primary copyright infringement (based on scraping and model training), a secondary copyright claim, database rights infringement, trademark infringement, and passing off. **During trial, Getty abandoned the primary copyright and database rights claims** because they could not establish that training occurred in the UK — a jurisdictional gap, not a merits determination. The court therefore never ruled on whether training itself constitutes infringement. The court did rule on the narrow secondary claim, holding that model weights are not an "infringing copy" because they do not store reproducible images. Getty **partially won on the trademark claim**: Stable Diffusion outputs displaying the Getty watermark were found to constitute limited trademark infringement for certain early versions. The court assigned liability to Stability AI as the developer with control over the dataset, not to end users generating images. As Paul Weiss, DLA Piper, and Mayer Brown have all noted in analyses, the judgment provides "very little clarity on the legality of AI models being trained on copyright works." The core question remains open in the UK pending future cases or legislation.

**Thomson Reuters v. Ross Intelligence**

*Summary judgment February 2025 · D. Del. · Ruling AGAINST the AI developer*

Thomson Reuters sued AI legal-research startup Ross Intelligence for training on Westlaw headnotes. **The court granted summary judgment to Thomson Reuters on direct copyright infringement**, rejecting Ross's fair-use defence. Judge Bibas found that Ross's use was not transformative — it built a competing legal-research product that directly substituted for Westlaw — and that the fourth fair-use factor (market effect) weighed decisively against Ross. This is the first major US ruling substantively against an AI developer on the training-data fair-use question. The court was careful to note that the ruling concerns non-generative AI trained on a direct competitor's protected content; broader generative-AI cases may reach different outcomes. But the ruling eliminates any assumption that AI training automatically qualifies as fair use. Again, Ross Intelligence was the defendant, not any user of Ross's product.

**Andersen et al. v. Stability AI, Midjourney & DeviantArt**

*Filed January 2023 · Class Action · Ongoing after 2024 amendments*

A class action brought by artists including Sarah Andersen, Kelly McKernan, and Karla Ortiz. The court's 2023 partial dismissal clarified that style itself is not copyrightable under current law — copyright protects specific expression, not method or aesthetic approach. However, the plaintiffs filed amended complaints that survived further motions to dismiss in 2024, with the case proceeding on claims including direct infringement based on specific work reproduction, intermediate copies made during training, DMCA violations regarding copyright management information, and unjust enrichment. The case is live and the defendants face substantial ongoing exposure. The defendants are Stability AI, Midjourney, and DeviantArt — not users of their products.

**Bartz v. Anthropic**

*Settlement announced 2025 · N.D. Cal.*

A class-action brought by authors against Anthropic over the use of copyrighted books in Claude's training data. In June 2025, Judge Alsup issued a mixed summary-judgment ruling: training on lawfully acquired copies was fair use, but Anthropic's use of pirated copies from shadow libraries was not. Anthropic subsequently announced a substantial settlement with the plaintiff class. The ruling is notable as one of the clearest judicial statements that fair-use analysis depends on how the training data was obtained — not just what was done with it afterward. The defendant was Anthropic. Users of Claude were not named parties.

**Thaler v. Perlmutter (US Copyright Office)**

*Decided August 2023 · DC Circuit · Affirmed 2025*

Stephen Thaler attempted to register copyright in an AI-generated artwork on behalf of his AI system "DABUS." The US Copyright Office refused, and the DC Circuit upheld the refusal: copyright requires human authorship. This ruling addresses AI outputs, not training — it does not say training is "stealing." It says AI-generated works without sufficient human creative input cannot receive copyright protection. The question of how much human involvement is sufficient to qualify for copyright remains unresolved.

**Kneschke v. LAION (Hamburg, Germany)**

*First-instance ruling 2024 · Hamburg Regional Court · On appeal*

A German photographer challenged the LAION dataset's inclusion of his copyrighted images. The Hamburg Regional Court held in 2024 that LAION's activity fell within the EU's text-and-data-mining exception for scientific research under Article 3 of the DSM Directive. The ruling is significant but narrow: it addressed dataset creation for research, not the subsequent use of that dataset by commercial AI developers. The question of whether commercial downstream use can free-ride on research-exception data collection remains contested.

## 4. The EU AI Act — Comprehensive Regulation Aimed at Developers

The EU AI Act, which entered into force in August 2024, is the world's first comprehensive legal framework for artificial intelligence. It classifies AI systems by risk level and imposes obligations proportionate to that risk. High-risk applications — in hiring, credit scoring, healthcare, law enforcement — face strict transparency, testing, and accountability requirements. Some applications are banned outright: real-time remote biometric surveillance in public spaces, AI-based social scoring, and systems that exploit psychological vulnerabilities.

For General Purpose AI models like GPT-4 and Claude, the Act imposes transparency obligations on *providers* — not users. Providers must publish summaries of training data, must comply with EU copyright law (specifically, they must implement opt-out mechanisms for rights holders who do not want their content used in training), and must maintain technical documentation. The copyright provisions are particularly significant because they target the upstream data practice rather than downstream use. A user running a Claude or GPT-4 query in the EU is not the regulated entity; the company providing the model is.

> The regulatory choice here is important for the broader debate. Even the world's most aggressive AI regulatory framework chose to direct obligations at developers and deployers, not end users. This is not an accident. Regulators across jurisdictions have reached the same judgement: the ethically and practically actionable accountability point is where the training decisions are made, the datasets compiled, and the models served — not where an individual query is issued.

## 5. Liability — The Accountability Question

AI liability is one of the most legally unsettled questions in technology law. Existing product liability frameworks were designed for physical products with predictable failure modes. AI systems can fail in unpredictable ways — generating false medical advice, producing discriminatory hiring recommendations, making incorrect autonomous vehicle decisions — and it is often unclear who bears responsibility: the model developer, the company that deployed it, the organisation that integrated it into a product, or the end user who applied it in a specific context.

The EU AI Liability Directive (proposed 2022, withdrawn from the 2025 Commission work programme and under reconsideration) attempted to address this by creating a presumption of causality: if an AI system violates its legal obligations and causes harm, the victim could presume the violation caused the harm without having to prove the technical mechanism. The directive's stalled status reflects the difficulty of harmonising liability rules across 27 member states. The US has no equivalent federal framework, leaving liability questions to be resolved through existing tort law, product liability doctrine, and state legislation. Even in this unsettled space, no major proposed framework places primary liability on end users. The question is always which institutional actor bears responsibility.

## 6. The US Patchwork — State Law, Federal Paralysis

In the absence of federal AI legislation, US state laws have proliferated. According to tracking by the National Conference of State Legislatures, all 50 states introduced AI-related legislation during the 2025 session, with dozens of bills enacted covering algorithmic decision-making in employment, deepfake restrictions, political advertising disclosure, and generative AI transparency. California and Colorado have taken more interventionist approaches — Colorado's SB24-205 is the first comprehensive US state AI law addressing high-risk systems.

Federal legislative efforts have been hampered by the genuinely cross-cutting nature of AI politics: opposition to AI regulation has come from both libertarian free-market conservatives and progressive tech optimists, while support has come from both labour-aligned Democrats and national security hawks. The result is that US federal doctrine on AI copyright and liability will, for the foreseeable future, be made by courts rather than legislatures. Across all this state-level activity, the pattern is consistent: regulations target companies deploying AI, not individuals using it.

## 7. Reading the Legal Landscape Honestly

A descriptive summary of where decided cases and regulatory frameworks actually land, separated from any normative claim about where they should land:

On **training-data fair use**, the direction is mixed and fact-sensitive. Thomson Reuters rejected fair use where training produced a direct competitor to the plaintiff's product. Bartz v. Anthropic distinguished between lawfully acquired and pirated training sources, finding the former potentially fair-use-eligible and the latter not. Andersen is proceeding on amended theories that survive summary judgment. The Getty UK ruling reached the copyright question only obliquely due to jurisdictional gaps. No court has issued a sweeping ruling that AI training is categorically fair use; several have ruled against AI developers on specific facts.

On **who the legal system holds accountable**, the pattern is unambiguous. Every substantive suit has named AI developers as defendants, not individual users. Every regulatory framework — EU AI Act, proposed EU Liability Directive, US state legislation — targets companies and deployers, not end users. The Getty UK court, when allocating responsibility for infringing outputs, specifically assigned liability to Stability AI rather than to prompters. Copyright doctrine, liability frameworks, and regulatory regimes have all converged on the same judgement: the institutional actors are the accountable parties.

On **style versus specific-work infringement**, the doctrinal line is reasonably firm: style is not copyrightable; specific expressions are. What remains unsettled is whether training on copyrighted specific expressions, aggregated at scale, crosses a threshold even when outputs do not directly reproduce any single work. The memorisation research is the empirical wedge that keeps this question live — and it is what drives the NYT's strongest theory of the case.

On **regulatory direction**, the EU is moving toward enforced transparency, mandatory opt-outs, and licensing frameworks via the AI Act. The UK is consulting on whether to adopt a text-and-data-mining exception. The US is fragmenting into state-by-state patchwork. China has imposed algorithmic-registration and labelling requirements. Globally, the direction is toward more regulation of AI developers, not less, and toward more transparency about training data. None of this global regulatory activity targets individual users.

## 8. The Verdict: Law in Motion, With Accountability Aimed Upstream

The legal landscape around AI is not settled, and anyone who claims otherwise — in either direction — is overstating the case record. No US court has issued a final ruling declaring that AI training on copyrighted data is categorically infringement. No US court has issued a final ruling declaring it is categorically fair use. The cases are in motion, the regulatory frameworks are being built, and the technology continues to evolve faster than the law can respond.

What can be said with confidence based on existing decisions: **publicly accessible does not equal public domain**, and several rulings (Thomson Reuters, the pirated-data portion of Bartz) have gone against AI developers on this point. **Style is not copyrightable**, though the Andersen case is testing the limits of that principle via DMCA and intermediate-copy theories. **AI-generated outputs without sufficient human creative input cannot receive copyright protection**, creating a vacuum where AI output may infringe no one's copyright while also being owned by no one.

And most importantly for the broader cultural debate: **legal accountability has concentrated on developers and deployers, not end users**. Every substantive case, every regulatory framework, every proposed liability scheme has made the same structural choice: the institutional actors who built and deployed the systems are the accountable parties. This is not a coincidence, and it is not a peculiarity of AI. It is how the legal system handles technology with diffuse consumer use and concentrated production — the same way it handles automobile safety (manufacturer liability, not driver liability for design defects), pharmaceutical safety (company liability, not patient liability for drug defects), and data protection (data-controller liability, not user liability for platform violations).

The law, in short, has already made the judgement the Ethical Explanation defends on separate grounds: that the appropriate locus of accountability for a technology with diffuse consumer use is the institutional actors upstream, not the individual user downstream. Whether any reader finds this dispositive for the ethical question is their call. But it should at least clarify that the position "individual AI users are morally culpable agents who deserve judgement" is running contrary to how every developed legal system has chosen to allocate responsibility in this domain. The legal system could be wrong to have made that choice. But the choice has been made, and it has been made consistently, and anyone arguing for individual-user moral loading is arguing against the weight of the legal tradition.

References

### References

Andersen v. Stability AI Ltd et al. (2023; amended complaint surviving motions to dismiss 2024). No. 3:23-cv-00201 (N.D. Cal.).

Bartz v. Anthropic PBC (2025). Summary judgment ruling, N.D. Cal.; settlement announced 2025.

Carlini, N., Hayes, J., Nasr, M., Jagielski, M., Sehwag, V., Tramèr, F., Balle, B., Ippolito, D., & Wallace, E. (2023). Extracting training data from diffusion models. *USENIX Security Symposium*. https://arxiv.org/abs/2301.13188

European Parliament. (2024). *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (AI Act)*. Official Journal of the European Union.

Getty Images (US) Inc. & Ors v. Stability AI Ltd. [2025] EWHC 2863 (Ch) (UK High Court, 4 November 2025).

Kneschke v. LAION e.V. (2024). LG Hamburg, 310 O 227/23.

Mayer Brown. (2025, November). Getty Images v Stability AI: What the High Court's decision means for rights-holders and AI developers.

National Conference of State Legislatures. (2025). Artificial intelligence 2025 legislation.

New York Times Co. v. Microsoft Corp. et al. (2023). No. 1:23-cv-11195 (S.D.N.Y.).

Paul, Weiss. (2025, November). Getty Images v Stability AI: The UK Courts' first word on use of copyright works in AI model development.

Thaler v. Perlmutter. (2023, affirmed 2025). No. 22-1564 (D.D.C.; affirmed D.C. Cir.).

Thomson Reuters Enterprise Centre GmbH v. Ross Intelligence Inc. (2025). Summary judgment for plaintiff, No. 1:20-cv-00613 (D. Del., Feb. 11, 2025).

US Copyright Office. (2023). *Copyright registration guidance: Works containing material generated by artificial intelligence*. Federal Register, 88(51), 16190–16194.

*Author's note: This essay draws on prior informal synthesis by the author, corrected against primary legal commentary and restructured to highlight the consistent upstream-accountability pattern across jurisdictions.*
