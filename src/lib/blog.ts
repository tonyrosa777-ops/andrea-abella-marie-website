export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "divider" };

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  body: ContentBlock[];
}

export const posts: BlogPost[] = [
  {
    id: "why-toxic-positivity-fails",
    title: "Why \"Just Stay Positive\" Doesn't Work for Trauma Survivors",
    excerpt:
      "Toxic positivity doesn't heal — it silences. Here's what I learned after 7 years fighting the VA for PTSD, and why nervous system safety is the only real place to start.",
    category: "Nervous System",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "I spent seven years fighting the VA to be recognized for PTSD I earned in eight years of Navy service — including two deployments to Kuwait and Iraq where I was the only woman in my unit. Seven years of appointments, denials, appeals, and forms. Seven years of being asked to prove that what happened to me was real enough, bad enough, service-connected enough to matter.",
      },
      {
        type: "paragraph",
        text: "During those years, well-meaning people told me to stay positive. To focus on the good. To not let it define me. And every time someone said it, something in me went a little quieter — not because I agreed, but because I was too exhausted to explain why that advice was making things worse.",
      },
      {
        type: "paragraph",
        text: "I know now what I couldn't articulate then: toxic positivity doesn't heal. It silences. And for a nervous system carrying real, unprocessed trauma, being told to override your experience with optimism isn't helpful. It's one more form of not being believed.",
      },
      {
        type: "heading",
        text: "Trauma Isn't in Your Thoughts. It's in Your Body.",
      },
      {
        type: "paragraph",
        text: "After my third hospitalization in 2015, I started doing the kind of work that no one had pointed me toward before — body-based, nervous system-focused, identity-level work. Not \"think differently.\" Not affirmations. Not vision boards. Work that started with one question: what does safety actually feel like in my body, and when did I last feel it?",
      },
      {
        type: "paragraph",
        text: "That question changed everything. Because trauma isn't stored in your memories. It's stored in your nervous system — in the tension you carry in your jaw, the breath that never quite reaches your belly, the hypervigilance that keeps you scanning a room you're already safe in. You can't think your way out of a physiological state. The body doesn't respond to positive thinking. It responds to safety.",
      },
      {
        type: "blockquote",
        text: "You are not broken. You are a nervous system that learned to survive. That is not a flaw to fix — it is a truth to honor.",
      },
      {
        type: "heading",
        text: "What Toxic Positivity Actually Does",
      },
      {
        type: "paragraph",
        text: "When someone dismisses your pain with positivity, they're not helping you regulate — they're asking you to perform wellness you don't feel. And that performance costs something. It costs you your honesty. It costs you the energy it takes to maintain the mask. And over time, it costs you your relationship with your own internal experience, because you've learned that what you actually feel isn't acceptable.",
      },
      {
        type: "paragraph",
        text: "I've worked with veterans, first responders, and professionals who look completely put together on the outside and are quietly falling apart on the inside. People who have become so skilled at performing \"fine\" that they've lost touch with what they actually feel. Toxic positivity didn't protect them. It just drove the wound deeper.",
      },
      {
        type: "heading",
        text: "Safety Before Growth. Always.",
      },
      {
        type: "paragraph",
        text: "My number one mission is to help people feel safe in their bodies so they can feel safe in the world — even when the world is not safe. Not to convince anyone that things are fine. Not to reframe suffering into gratitude. But to build a genuine, physiological sense of safety that makes everything else — healing, growth, connection, identity — actually possible.",
      },
      {
        type: "paragraph",
        text: "You cannot heal in a state of survival. Growth requires safety first. And safety is not a mindset. It is a body state. It is regulated breath and a nervous system that knows, at the cellular level, that this moment is survivable.",
      },
      {
        type: "paragraph",
        text: "If positivity has ever felt fake to you — if affirmations have ever made you feel worse — that is not evidence that you're doing healing wrong. It's evidence that your body is telling you the truth. Start there.",
      },
      {
        type: "blockquote",
        text: "Healing is not linear. And we stay anyway.",
      },
    ],
  },
  {
    id: "identity-after-service",
    title: "Who Am I Now? Rebuilding Identity After Military Service",
    excerpt:
      "I was the only woman in my unit for eight years. When I got out, I had no idea who I was without the uniform. Here's what I wish someone had told me about what comes next.",
    category: "Veteran Life",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "I served eight years in the Navy. I was a career counselor — the irony of that is not lost on me — helping sailors find their direction while my own was entirely shaped by the institution I was serving inside of. I deployed to Kuwait and Iraq. I was the only woman in my unit. For eight years, the Navy told me exactly who I was: my rank, my rate, my mission, my tribe. And then I got out.",
      },
      {
        type: "paragraph",
        text: "I remember standing in my apartment — not on base, my own apartment — and not knowing what to do with a Tuesday. Not because I had nothing to do. Because for the first time in almost a decade, no one was telling me who to be in it. The silence where my identity used to be was deafening.",
      },
      {
        type: "heading",
        text: "The Military Doesn't Just Give You a Job. It Gives You a Self.",
      },
      {
        type: "paragraph",
        text: "From the moment you step into boot camp, the military begins constructing your identity for you. Your name becomes your last name. Your time is not your own. Your purpose is collective, not individual. You earn your place inside a hierarchy that tells you exactly where you stand and what that means. For many of us — especially those who came from instability, or who were searching for belonging — that structure isn't oppressive. It's a lifeline.",
      },
      {
        type: "paragraph",
        text: "What that means, though, is that when you leave, you're not just changing careers. You are losing an entire architecture of selfhood. The rank, the mission, the people who understood you without explanation, the daily rhythm that answered every morning's hardest question — gone. All of it, at once.",
      },
      {
        type: "blockquote",
        text: "The hardest part of leaving isn't the paperwork. It's the silence where your identity used to be.",
      },
      {
        type: "heading",
        text: "What Civilian Life Doesn't Have Words For",
      },
      {
        type: "paragraph",
        text: "Civilians aren't lesser. But they operate from a completely different framework of meaning — one built around individual achievement, personal branding, career ladders. If you spent years with your entire sense of self rooted in collective purpose and shared sacrifice, that framework can feel hollow. Or worse, it can feel like a performance you don't know the lines to.",
      },
      {
        type: "paragraph",
        text: "There is grief in this transition. Real, disorienting grief — for the camaraderie, the mission, the version of yourself that existed inside the structure. And most veterans are expected to process that grief silently, quickly, and without burdening anyone with it. Because you're supposed to be grateful to be out. Because civilians don't always have the language for what you lost.",
      },
      {
        type: "paragraph",
        text: "You can be grateful and still be grieving. Those two things are not contradictions. They are the complicated truth of any major ending.",
      },
      {
        type: "heading",
        text: "The Work: Building Identity from the Inside Out",
      },
      {
        type: "paragraph",
        text: "The identity the military gave you was largely external — constructed by rank, role, and institution. Rebuilding after service requires something fundamentally different: learning to construct identity from the inside. From your values, not your title. From what you choose, not what you're assigned. This is slower, messier, and no one gives you a timeline for it.",
      },
      {
        type: "paragraph",
        text: "The questions I come back to with the veterans I work with are not \"what do you want to do?\" They're deeper than that:",
      },
      {
        type: "list",
        items: [
          "What did you believe in before the military shaped what you believed?",
          "What values from service are genuinely yours — not the institution's, but yours?",
          "Who were you becoming before the structure interrupted that process?",
          "What parts of your service identity do you want to carry forward, and what are you ready to release?",
        ],
      },
      {
        type: "paragraph",
        text: "This is identity-level work. It is not self-help. It is not a career pivot. It is the slow, necessary excavation of who you actually are underneath who you were trained to be.",
      },
      {
        type: "heading",
        text: "You Don't Have to Have It Figured Out to Start",
      },
      {
        type: "paragraph",
        text: "I didn't have it figured out when I started. I had a degree in exercise physiology, a master's in public health nutrition, years of service, and still no clear answer to the question \"who am I now?\" I had to find out through the doing — through trying things, releasing things, and slowly learning to trust my own knowing again.",
      },
      {
        type: "paragraph",
        text: "What I know now, having come through the other side: becoming who I am meant to be does not require abandoning who I have been. Your service is part of you. It always will be. The work is learning to carry it differently — not as a definition, but as a foundation.",
      },
      {
        type: "blockquote",
        text: "You are not broken. You are becoming. And you don't have to know what that looks like yet.",
      },
    ],
  },
  {
    id: "emotional-resilience-myth",
    title: "Emotional Resilience Isn't About Being Strong All the Time",
    excerpt:
      "I performed strength for years. Three hospitalizations later, I learned that real resilience is not about holding it together — it's about knowing what to do when you don't.",
    category: "Emotional Resilience",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "I was the only woman in my unit. I learned very early that strength meant not showing weakness — not in the field, not in the barracks, not in any room where I needed to be taken seriously. I got very, very good at holding it together. I performed strength the way some people perform happiness: consistently, convincingly, and at a cost I wasn't tracking.",
      },
      {
        type: "paragraph",
        text: "I was hospitalized three times. The last time was 2015. And what brought me there — what finally broke through the performance — was not weakness. It was a nervous system that had been white-knuckling for so long it simply couldn't anymore. That is not a failure of resilience. That is what happens when we mistake endurance for healing.",
      },
      {
        type: "heading",
        text: "The Resilience We Were Sold Is a Lie",
      },
      {
        type: "paragraph",
        text: "We were taught that resilience means bouncing back. Quickly. Without burdening others. Without breaking down in public. Without admitting that you are struggling. Under this definition, the most resilient person is the one who shows the least. The one who handles it. The one who keeps going no matter what.",
      },
      {
        type: "paragraph",
        text: "This is not resilience. This is suppression with better PR.",
      },
      {
        type: "paragraph",
        text: "Emotional suppression doesn't make feelings disappear. Research is consistent on this: suppression increases physiological stress, disrupts sleep, weakens immune function, and makes emotions more intense when they finally do surface. The pressure valve doesn't stay sealed forever. I am living proof of that. And so are most of the people who come to me after years of \"handling it.\"",
      },
      {
        type: "blockquote",
        text: "The people with the most genuine resilience I've ever met are not the ones who never broke down. They're the ones who learned what to do when they did.",
      },
      {
        type: "heading",
        text: "What Real Resilience Actually Requires",
      },
      {
        type: "paragraph",
        text: "Psychological resilience — the real kind — is the capacity to adapt in the face of adversity. To flex. To shift. To find a new way through. And here's what actually builds that capacity: rest, honest connection, nervous system regulation, and the radical act of letting yourself feel what you feel.",
      },
      {
        type: "paragraph",
        text: "Real resilience looks like:",
      },
      {
        type: "list",
        items: [
          "Recognizing your own capacity limits and stopping before you break — not after",
          "Asking for help and receiving it without immediately minimizing what you needed",
          "Letting yourself grieve what was lost, even when there's pressure to move on",
          "Resting without guilt, because rest is recovery, not laziness",
          "Coming back to yourself after hard things — however long that takes",
        ],
      },
      {
        type: "paragraph",
        text: "None of these look like the cultural image of strength. All of them are harder than white-knuckling through.",
      },
      {
        type: "heading",
        text: "We Honor Nervous Systems and Timelines",
      },
      {
        type: "paragraph",
        text: "One thing I say to everyone I work with: there is no hierarchy of healing. Your timeline is not too slow. Your needs are not too much. The work is not about performing recovery on someone else's schedule. It is about building a genuine, embodied capacity to come back to yourself — again and again, in whatever way your nervous system requires.",
      },
      {
        type: "paragraph",
        text: "I am still doing this work. I'm in DBT therapy myself right now, not because I haven't figured it out, but because healing is not linear. I don't coach from a pedestal. I coach from the path — a little further ahead, turning back to say: I know this part. You can get through this part. Let's walk it together.",
      },
      {
        type: "paragraph",
        text: "You are allowed to need things. You are allowed to have limits. You are allowed to be a human being who is doing their best in the middle of something genuinely hard. That is not weakness. That is the truest kind of courage I know.",
      },
    ],
  },
  {
    id: "energy-healing-explained",
    title: "What Is Energy Healing & How Can It Support Trauma Recovery?",
    excerpt:
      "Sacred geometry healing isn't what most people expect. Here's what it actually is, why I trained in it, and how it reaches the parts of trauma that talk therapy can't always touch.",
    category: "Energy Healing",
    date: "Jan 13, 2026",
    readTime: "7 min read",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "I have a bachelor's in exercise physiology and a master's in public health nutrition. I spent eight years in the Navy. I am not someone who arrived at energy healing casually. I arrived at it through elimination — through every evidence-based tool I had tried, every cognitive framework I had studied, every moment of understanding that didn't translate into the body-level relief I was looking for.",
      },
      {
        type: "paragraph",
        text: "Sacred geometry healing found me at the right time. And I want to be specific about what I mean, because the term \"energy healing\" carries a lot of assumptions I want to address directly: what I practice is not Reiki. It is a completely distinct modality. It uses geometric forms and shapes — not energetic transmission through touch — as its primary healing vehicle. I hold Level 1 and Level 2 certifications through Geo Love Healing, and I am currently in intensive training working toward Level 3.",
      },
      {
        type: "heading",
        text: "Why the Body Needs More Than the Mind Can Offer",
      },
      {
        type: "paragraph",
        text: "After my last hospitalization in 2015, I began understanding something that my academic training had never quite named: trauma doesn't live in your memories. It lives in your body. In the tension that doesn't release. In the breath that never quite reaches your belly. In the hypervigilance that keeps you scanning a room you're already safe in.",
      },
      {
        type: "paragraph",
        text: "This is foundational to trauma-informed practice now — thanks to researchers like Dr. Bessel van der Kolk and Dr. Peter Levine. And the implication is significant: you can understand your trauma completely and still feel it in your body every single day. The body has its own unfinished business, and insight alone doesn't resolve it.",
      },
      {
        type: "blockquote",
        text: "Sacred geometry healing reaches the parts of you that talk therapy can't fully access — not because therapy fails, but because some wounds live below language.",
      },
      {
        type: "heading",
        text: "What Sacred Geometry Healing Actually Is",
      },
      {
        type: "paragraph",
        text: "Sacred geometry is the study of patterns, proportions, and shapes that appear throughout nature and the physical world — the spiral of a nautilus shell, the structure of a snowflake, the double helix of DNA. These are not decorative. They are the underlying organizational structures of physical reality itself.",
      },
      {
        type: "paragraph",
        text: "Geo Love Healing works with these geometric forms as energetic frameworks. The premise is that trauma, stress, and prolonged dysregulation create fragmentation in the body's field — a loss of coherence and flow. Specific geometric configurations act as organizing templates that the body's system can attune to, helping restore that coherence at a level that precedes the physical.",
      },
      {
        type: "paragraph",
        text: "This is different from Reiki, which works through direct energetic transmission from practitioner to client. Sacred geometry works through resonance. The forms themselves carry the organizing intelligence — the practitioner's role is to hold the space and apply the geometry with precision and intention.",
      },
      {
        type: "heading",
        text: "Why It Works for Trauma Specifically",
      },
      {
        type: "list",
        items: [
          "It works below the cognitive level — no storytelling, no analysis, no reliving required",
          "It addresses fragmentation directly — helping the disjointed parts of self begin to cohere",
          "It supports nervous system regulation without requiring voluntary relaxation",
          "It doesn't demand anything of the client except presence and willingness",
          "It reaches body-stored trauma that verbal processing alone cannot resolve",
        ],
      },
      {
        type: "paragraph",
        text: "For people who have done years of therapy and still feel something stuck — something that understanding hasn't touched — this is often the layer that finally moves it.",
      },
      {
        type: "heading",
        text: "The Sedona Intensive",
      },
      {
        type: "paragraph",
        text: "I'm currently deepening this work through an intensive training in Sedona with the Geo Love Healing group. Sedona's geology — rich in iron oxide and other minerals — creates a unique environment that many practitioners believe amplifies energetic work. More than the location, though, it's the immersion: days of deepening the practice, refining technique, and expanding capacity to hold space for others at this level.",
      },
      {
        type: "paragraph",
        text: "Level 3 is about more than certification. It's about becoming the kind of practitioner who can work with the most complex trauma presentations — with steadiness, precision, and deep safety. That's what I'm bringing back into my coaching containers.",
      },
      {
        type: "heading",
        text: "How This Fits Into the Broader Work",
      },
      {
        type: "paragraph",
        text: "Sacred geometry healing is one tool in an integrative approach. It works alongside trauma-informed coaching, nervous system regulation practices, and the relational healing that comes from being genuinely witnessed. It is not a replacement for therapy. It is the layer underneath — the place where the body finally gets to exhale.",
      },
      {
        type: "paragraph",
        text: "You don't need to believe in anything to benefit from it. You need to be curious, honest about what hasn't worked, and willing to try something your analytical mind doesn't fully have a category for yet. That willingness is enough.",
      },
    ],
  },
  {
    id: "rebuilding-self-trust",
    title: "How to Rebuild Self-Trust After It's Been Broken",
    excerpt:
      "After years of PTSD, three hospitalizations, and a VA system that kept telling me my experience wasn't real enough — rebuilding self-trust wasn't optional. Here's what actually worked.",
    category: "Identity Rebuilding",
    date: "Jan 6, 2026",
    readTime: "6 min read",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "When you spend seven years fighting a system that repeatedly tells you your experience isn't real enough — your pain isn't documented enough, your diagnosis isn't clear enough, your service-connected disability isn't provable enough — something happens to your relationship with your own knowing. You start to doubt yourself. Not just the VA claim. Yourself. Your perceptions. Your instincts. Your right to take up space with what you're carrying.",
      },
      {
        type: "paragraph",
        text: "That is what gaslighting at an institutional level does. And it's not only veterans who experience it. It's anyone who has been told, repeatedly and by sources that held power over them, that their internal experience doesn't match reality. Eventually, you stop trusting yourself. And that loss — quiet, invisible, cumulative — is one of the most debilitating effects of prolonged trauma.",
      },
      {
        type: "heading",
        text: "Understanding the Break",
      },
      {
        type: "paragraph",
        text: "Self-trust breaks in layers. The first layer is perceptual — you stop trusting what you see, feel, and sense. The second is evaluative — you stop trusting your judgment, your decisions, your reads on situations and people. The third is relational — you stop trusting that you deserve to be heard, believed, or supported.",
      },
      {
        type: "paragraph",
        text: "Here is what I need you to hear about the things you did in the middle of all of that: every decision you made in survival mode was an adaptation, not a failure. Your nervous system did what it needed to do to get you through. Judging those adaptations as evidence that you can't trust yourself is like blaming your immune system for fighting an infection. It was doing exactly what it was built to do.",
      },
      {
        type: "blockquote",
        text: "You were doing the best you could with what you had. That is not a weakness to overcome. That is a truth to integrate.",
      },
      {
        type: "heading",
        text: "The Metacognition Piece",
      },
      {
        type: "paragraph",
        text: "The highest form of thought is being able to think about your thinking. Most people who struggle with self-trust aren't examining the thought patterns themselves — they're living inside them, taking the output as fact. \"I always mess this up\" feels true. \"I can't be trusted to make good decisions\" feels true. But these aren't truths. They are conclusions drawn from data that was processed by a dysregulated nervous system under conditions of threat.",
      },
      {
        type: "paragraph",
        text: "Rebuilding self-trust begins with metacognition: noticing the thought, stepping outside it, and asking — is this a fact, or is this a wound speaking? Not to dismiss it, but to examine it. Not to replace it with an affirmation, but to hold it with more curiosity than conviction.",
      },
      {
        type: "heading",
        text: "The Tiny Promise Framework",
      },
      {
        type: "paragraph",
        text: "Trust — in yourself or anyone else — is built through evidence, not intention. Your brain responds to what it observes, not what you decide. The way to rebuild self-trust is through small, consistent, unbreakable commitments to yourself that you actually keep.",
      },
      {
        type: "paragraph",
        text: "This means starting almost embarrassingly small:",
      },
      {
        type: "list",
        items: [
          "Not 'I'll work out every day' — but 'I'll put my shoes on'",
          "Not 'I'll journal for 30 minutes' — but 'I'll open the notebook'",
          "When you say you'll do something, do it — or explicitly renegotiate with yourself rather than letting it slide",
          "Name it when you follow through — don't move immediately to the next thing",
          "Build the evidence, stack by stack, that you are someone you can count on",
        ],
      },
      {
        type: "paragraph",
        text: "Self-trust is built moment by moment, not through affirmations alone. My mother couldn't look in the mirror and say \"I love you.\" That's real. That's why I've built an approach to healing that doesn't start with what feels fake — it starts with what feels true, even if it's small.",
      },
      {
        type: "heading",
        text: "Coming Home to Yourself",
      },
      {
        type: "paragraph",
        text: "There is a phrase I come back to again and again in this work: come home to yourself. Not to a version of yourself that has it all figured out. Not to a self that is healed and certain and no longer afraid. To yourself as you actually are — the one who survived, who is still here, who is doing the slow and necessary work of becoming.",
      },
      {
        type: "paragraph",
        text: "I know how to come back to myself now. That knowing was hard-won. And it started with a single small promise I kept — not to anyone else, but to me.",
      },
      {
        type: "blockquote",
        text: "I am allowed to change. I am allowed to grow beyond old identities without erasing them.",
      },
    ],
  },
  {
    id: "mindset-shifts-trauma",
    title: "3 Mindset Shifts That Changed Everything in My Healing Journey",
    excerpt:
      "These didn't come from a book or a seminar. They came from 8 years of service, 7 years fighting the VA, and finally learning to think about my thinking.",
    category: "Mindset",
    date: "Dec 30, 2025",
    readTime: "5 min read",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "I'm not here to give you a list you can print and tape to your bathroom mirror. I've tried that. I've tried the affirmations, the morning routines, the reframes, the gratitude journals. Some of them helped, temporarily. None of them changed anything at the root.",
      },
      {
        type: "paragraph",
        text: "What actually changed things for me were three internal shifts — slow, resistant, sometimes painful — that happened not because I decided they would, but because I finally started examining how I was thinking, not just what I was thinking. The highest form of thought is being able to think about your thinking. These shifts came from that work. And they are still happening.",
      },
      {
        type: "heading",
        text: "Shift 1: From \"Why Did This Happen to Me\" to \"What Do I Do With This Now\"",
      },
      {
        type: "paragraph",
        text: "I spent years in the \"why\" — why me, why the VA kept denying me, why being the only woman in my unit meant what it meant, why the things that happened in Kuwait and Iraq stayed in my body the way they did. That question is not wrong. Grief lives in it. Rage lives in it. And for a season, it is necessary.",
      },
      {
        type: "paragraph",
        text: "But at some point, \"why\" stops being a processing tool and starts being a residence. And living there keeps your energy tethered to the past, searching for an answer that may never come, while your actual life continues without you in it.",
      },
      {
        type: "paragraph",
        text: "The shift to \"what now\" is not about forgiveness, letting go, or releasing anyone from accountability. It is about reclaiming your own energy and pointing it toward the only direction you actually have power in: forward. It is the difference between being a victim of your story and being the author of what comes next.",
      },
      {
        type: "heading",
        text: "Shift 2: From \"I Am Broken\" to \"I Was Adapting\"",
      },
      {
        type: "paragraph",
        text: "One of the cruelest legacies of trauma — compounded by years of a system telling me my experience wasn't real enough — was the belief that I was fundamentally damaged. That my hypervigilance, my reactivity, my hospitalizations, my inability to just \"get over it\" were evidence that something had gone wrong with me at a root level.",
      },
      {
        type: "blockquote",
        text: "Your nervous system did exactly what it was supposed to do. It kept you alive. That is not brokenness. That is brilliance under terrible conditions.",
      },
      {
        type: "paragraph",
        text: "The moment I began to see my responses as adaptations rather than defects — when I understood that hypervigilance was my nervous system trying to protect me, that shutting down was my mind trying to cope, that the patterns I hated most were the ones that got me through — something shifted that no affirmation had ever touched.",
      },
      {
        type: "paragraph",
        text: "You don't heal from brokenness. You integrate adaptations you no longer need. Those are completely different processes, and they require completely different relationships with yourself.",
      },
      {
        type: "heading",
        text: "Shift 3: From \"I Have to Be Strong\" to \"I Am Allowed to Need\"",
      },
      {
        type: "paragraph",
        text: "I was the only woman in my unit. The cost of needing anything — support, rest, acknowledgment — was too high in that environment. And so I learned, thoroughly and efficiently, that needing was weakness. That handling it was strength. That the safest version of me was the one who required the least.",
      },
      {
        type: "paragraph",
        text: "That belief almost killed me. Literally.",
      },
      {
        type: "paragraph",
        text: "Humans are wired for co-regulation. We literally calm each other's nervous systems through presence and attunement. Going it alone doesn't build strength — it builds isolation. And isolation compounds trauma in ways that willpower cannot undo.",
      },
      {
        type: "paragraph",
        text: "Giving myself permission to need — to reach out, ask for support, be witnessed in my struggle without immediately minimizing it — accelerated healing in a way that no solo practice had managed. This community supports self-leadership, not dependency. But self-leadership begins with knowing what you actually need and having the courage to say so.",
      },
      {
        type: "paragraph",
        text: "These shifts won't happen because you decided they would. They'll happen because you keep returning to them — imperfectly, repeatedly, with patience for how long real change actually takes. That is the work. Healing is not linear. And we stay anyway.",
      },
    ],
  },
  {
    id: "veterans-civilian-life",
    title: "The Hardest Part of Civilian Life Nobody Talks About",
    excerpt:
      "It's not the résumé or the benefits paperwork. I know — I was the only woman in my unit for 8 years. What nobody told me was what the silence would feel like.",
    category: "Veteran Life",
    date: "Dec 23, 2025",
    readTime: "7 min read",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "I was a career counselor in the Navy. The deep irony of that is something I've had to sit with for a long time: I spent years helping other sailors find their footing, figure out their next move, articulate their transferable skills and their value to a world outside the service. I knew all the right questions to ask. And when I got out myself, none of them helped.",
      },
      {
        type: "paragraph",
        text: "Because the question I needed wasn't on any transition checklist. It wasn't about my résumé or my VA benefits or what civilian job my rate translated to. The question I needed was the one nobody in any transition assistance program had prepared me for: who am I when the structure is gone?",
      },
      {
        type: "heading",
        text: "What the Transition Programs Miss",
      },
      {
        type: "paragraph",
        text: "Every separation program covers the logistics. Benefits enrollment. Résumé writing. Job fairs. These things matter. But they treat leaving the military as a career change. It is not. It is a loss of identity, community, mission, and meaning — simultaneously, without warning, and with an expectation that you'll be grateful about it.",
      },
      {
        type: "paragraph",
        text: "I served eight years. I was deployed to Kuwait and Iraq. I was the only female in my unit. When I got out, the silence was not peaceful. It was disorienting in a way I didn't have language for — a loss that had no cultural script, no ceremony, no acknowledgment proportional to what I was actually putting down.",
      },
      {
        type: "blockquote",
        text: "You can be grateful for your service and utterly bereft at its ending. Those are not contradictions. That is the complicated truth of any profound loss.",
      },
      {
        type: "heading",
        text: "The Specific Losses Worth Naming",
      },
      {
        type: "paragraph",
        text: "We don't grieve well what we can't name. So let me try to name it:",
      },
      {
        type: "list",
        items: [
          "The loss of mission — a purpose that was clear, collective, and bigger than yourself",
          "The loss of tribe — people who chose the same thing and lived through it beside you",
          "The loss of structure — a daily rhythm that answered the question of who you were before you asked it",
          "The loss of competence context — being skilled, valued, and essential in a way that doesn't automatically translate",
          "The loss of a self — the specific version of you that existed inside that structure",
        ],
      },
      {
        type: "paragraph",
        text: "These are real losses. They deserve real grief. The speed at which you \"move on\" is not a measure of your strength — it is a measure of how much pressure you're under to perform your recovery on someone else's timeline.",
      },
      {
        type: "heading",
        text: "What Civilians Get Wrong About Veterans",
      },
      {
        type: "paragraph",
        text: "Civilian culture tends to place veterans in one of two categories: hero or victim. Neither is a full person. The hero narrative doesn't leave room for struggle — if you sacrificed, you should feel pride, not pain. The victim narrative strips agency and assumes damage. Both miss the layered, complicated reality of what it actually means to have served, to have been changed by it, and to be building something new on the other side.",
      },
      {
        type: "paragraph",
        text: "What veterans most often need from civilians isn't gratitude or sympathy. It's genuine curiosity — the willingness to ask \"what was that actually like for you?\" and then stay in the conversation without needing it to be simple.",
      },
      {
        type: "heading",
        text: "Finding Your Way Through the Silence",
      },
      {
        type: "paragraph",
        text: "I did not find my way through the silence quickly. I found my way through it over years — through education, through my own therapy, through eventually doing the identity-level work that no transition program had pointed me toward. Through learning that becoming who I am meant to be does not require abandoning who I have been.",
      },
      {
        type: "paragraph",
        text: "If you're in the silence right now — if civilian life feels like a costume you don't quite fit into — I want you to know: that feeling is not a sign that something is wrong with you. It is a sign that you had a life that meant something. And that you are in the honest, hard, necessary work of building one that means something again.",
      },
      {
        type: "paragraph",
        text: "Give yourself the same patience you'd give any soldier going through something genuinely difficult. Because that is exactly what this is.",
      },
    ],
  },
  {
    id: "nervous-system-dysregulation",
    title: "Signs Your Nervous System Is Dysregulated (And What to Do About It)",
    excerpt:
      "Always on edge? Numb? Swinging between the two? I lived in survival mode for years before I understood what was actually happening. Here's what I know now.",
    category: "Nervous System",
    date: "Dec 16, 2025",
    readTime: "6 min read",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "For years, I thought the way I felt was a character flaw. The hypervigilance, the inability to fully relax even in safe environments, the swinging between emotional flooding and complete numbness — I thought I just needed more discipline. More willpower. A better morning routine. If I could just get myself together enough, I'd be fine.",
      },
      {
        type: "paragraph",
        text: "What I actually had was a nervous system that had been running in survival mode for so long it had forgotten what safety felt like. Eight years in the military, two deployments, years of fighting the VA for a PTSD claim — my system had been in threat-response mode almost continuously. It wasn't a mindset problem. It was a physiological state. And physiological states don't respond to willpower.",
      },
      {
        type: "heading",
        text: "A Map of the Nervous System",
      },
      {
        type: "paragraph",
        text: "Your autonomic nervous system has three primary states, based on Polyvagal Theory developed by Dr. Stephen Porges. Understanding these changed how I understood myself:",
      },
      {
        type: "list",
        items: [
          "Ventral vagal (safe and social) — calm, connected, present; you can think clearly, relate to others, feel yourself in your body",
          "Sympathetic activation (fight or flight) — alert, agitated, anxious, reactive; scanning for threat even in its absence",
          "Dorsal vagal (freeze and shutdown) — numb, dissociated, flat, exhausted; checked out from the inside",
        ],
      },
      {
        type: "paragraph",
        text: "All three states serve a purpose. The goal is not to eliminate the survival states — it's to have flexibility: to move between states as the actual situation requires, rather than getting anchored in survival mode as a default.",
      },
      {
        type: "paragraph",
        text: "Dysregulation is when the system loses that flexibility. When hypervigilance or shutdown become your resting state — not because of any present threat, but because your nervous system learned threat as its baseline.",
      },
      {
        type: "heading",
        text: "Signs You Might Be Dysregulated",
      },
      {
        type: "subheading",
        text: "On the hyperactivated (fight/flight) end:",
      },
      {
        type: "list",
        items: [
          "Chronic anxiety or sense of dread without a clear cause",
          "Startling easily; staying alert even in genuinely safe environments",
          "Mind that won't quiet, especially at night",
          "Irritability or emotional reactivity that feels disproportionate",
          "Tight jaw, raised shoulders, shallow chest breathing you don't notice until someone points it out",
        ],
      },
      {
        type: "subheading",
        text: "On the shutdown (freeze/dorsal) end:",
      },
      {
        type: "list",
        items: [
          "Emotional flatness — difficulty feeling much of anything",
          "Fatigue that sleep doesn't fix",
          "Difficulty making decisions or connecting to what you want",
          "Dissociation — watching your life from a slight distance rather than living it",
          "Social withdrawal that isn't preference — it's depletion",
        ],
      },
      {
        type: "blockquote",
        text: "These are not personality flaws. They are not weakness. They are physiological patterns your body developed to keep you alive. And physiological patterns can change.",
      },
      {
        type: "heading",
        text: "Where to Start",
      },
      {
        type: "paragraph",
        text: "My number one mission is to help people feel safe in their bodies so they can feel safe in the world. That work starts here — with the most direct access point to nervous system state: the breath. Specifically the exhale.",
      },
      {
        type: "paragraph",
        text: "The vagus nerve — which mediates the parasympathetic response, the calming system — is activated most powerfully by slow, extended exhales. Try this: inhale for a count of 4. Exhale for a count of 7 or 8. Notice what happens in your body at the bottom of the exhale. That small drop in tension, that slight softening — that is your parasympathetic system engaging. That is safety signaling to your nervous system in a language it understands.",
      },
      {
        type: "paragraph",
        text: "Do that five or six times. That is not a mindfulness exercise. That is a direct physiological intervention. And it works.",
      },
      {
        type: "paragraph",
        text: "Other accessible starting points:",
      },
      {
        type: "list",
        items: [
          "Cold water on the face or wrists — activates the dive reflex and slows heart rate",
          "Humming, singing, or even sighing — stimulates the vagus nerve through vocalization",
          "Orienting — slowly scanning the room and naming what you see, signaling to your system that you are, in fact, present and safe",
          "Rhythmic movement — walking, rocking, swinging — helps the nervous system discharge and reset",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are cures. They are entry points. Every time you use them and they work, you're teaching your nervous system that regulation is possible. That safety is possible. We honor nervous systems and timelines — there is no correct pace for this. There is only the next small moment of returning to yourself.",
      },
      {
        type: "paragraph",
        text: "That is how change happens. One breath at a time, one moment at a time. Resilience. Healing. One day at a time.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.id === slug);
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const sameCategory = posts.filter(
    (p) => p.id !== post.id && p.category === post.category
  );
  const otherPosts = posts.filter(
    (p) => p.id !== post.id && p.category !== post.category
  );
  return [...sameCategory, ...otherPosts].slice(0, count);
}
