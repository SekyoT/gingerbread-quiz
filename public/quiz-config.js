// ============================================================================
//  QUIZ CONTENT — edit this file to change the personalities and questions.
//  Both the quiz page and the organiser dashboard read from here.
//
//  • Each personality needs a unique `id` (lowercase letters/numbers/dashes).
//  • Each answer has a `p` that says which personality it gives a point to.
//  • You can have any number of personalities and questions. Try to give
//    every personality the same number of answers so teams stay even.
//  • `icon` options for the drawing:
//      "blanket", "sneaker", "mystery-box", "scrapbook", "present"
// ============================================================================

window.QUIZ = {
  title: "What Christmas Gift Are You?",
  subtitle:
    "Everyone brings a different gift to the group. Answer 8 quick questions to find yours and meet your team for the night.",

  personalities: [
    {
      id: "cozy-blanket",
      name: "Cozy Blanket",
      title: "The Comforter",
      team: "Team Cozy Blanket",
      color: "#c8283a",
      icon: "blanket",
      traits: ["Warm", "Easygoing", "Approachable", "Relational"],
      gift: "Making people feel at home.",
      vibe: "Café hopping, comfort food, long chats and quality time.",
      reveal: "The friend whose place everyone ends up at.",
    },
    {
      id: "fresh-kicks",
      name: "Fresh Kicks",
      title: "The Motivator",
      team: "Team Fresh Kicks",
      color: "#1f8a4c",
      icon: "sneaker",
      traits: ["Energetic", "Determined", "Proactive", "Encouraging"],
      gift: "Inspiring others to keep going.",
      vibe: "Sports, challenges, personal growth and hitting goals together.",
      reveal: "The friend who texts “you got this” before you even asked.",
    },
    {
      id: "mystery-box",
      name: "Mystery Box",
      title: "The Adventurer",
      team: "Team Mystery Box",
      color: "#7c3aed",
      icon: "mystery-box",
      traits: ["Spontaneous", "Curious", "Playful", "Up for anything"],
      gift: "Turning ordinary moments into stories.",
      vibe: "New places, spontaneous plans, games and adventures.",
      reveal: "The friend who turns “let’s just grab dinner” into a whole night.",
    },
    {
      id: "scrapbook",
      name: "Scrapbook",
      title: "The Storyteller",
      team: "Team Scrapbook",
      color: "#2a6fb8",
      icon: "scrapbook",
      traits: ["Thoughtful", "Imaginative", "Expressive", "Reflective"],
      gift: "Finding meaning in the little things.",
      vibe: "Music, art, photography, deep talks and keeping memories.",
      reveal: "The friend who remembers the small thing you said three months ago.",
    },
  ],

  questions: [
    {
      q: "It's the first hour of the Christmas mixer. Where are you?",
      answers: [
        { text: "Settled into a comfy corner, deep in a chat with a few people", p: "cozy-blanket" },
        { text: "Getting everyone hyped up for the first game", p: "fresh-kicks" },
        { text: "Wandering around to see what's going on everywhere", p: "mystery-box" },
        { text: "Snapping photos of the decorations and the people", p: "scrapbook" },
      ],
    },
    {
      q: "You pulled a name for Secret Santa. What do you get them?",
      answers: [
        { text: "Something cosy: fuzzy socks, a nice mug, their favourite snacks", p: "cozy-blanket" },
        { text: "Something for their goals: gym gear, a planner, a good water bottle", p: "fresh-kicks" },
        { text: "A voucher for something they've never tried before", p: "mystery-box" },
        { text: "A handmade card with an inside joke only they'd get", p: "scrapbook" },
      ],
    },
    {
      q: "Your perfect weekend looks like…",
      answers: [
        { text: "Café hopping and a long catch-up with friends", p: "cozy-blanket" },
        { text: "A morning run, then a game of futsal or badminton", p: "fresh-kicks" },
        { text: "No plans. Pick a random MRT stop and see what happens.", p: "mystery-box" },
        { text: "A gig, an art exhibition or a photo walk", p: "scrapbook" },
      ],
    },
    {
      q: "A friend is having a rough week. You…",
      answers: [
        { text: "Invite them over for comfort food and a movie", p: "cozy-blanket" },
        { text: "Send a “you got this!” text and help them make a plan", p: "fresh-kicks" },
        { text: "Drag them somewhere new to take their mind off it", p: "mystery-box" },
        { text: "Write them a heartfelt note they can keep", p: "scrapbook" },
      ],
    },
    {
      q: "Group project time. You're the one…",
      answers: [
        { text: "Keeping the vibes good and making sure everyone feels included", p: "cozy-blanket" },
        { text: "Setting the goals and pushing the team to hit them", p: "fresh-kicks" },
        { text: "Throwing out bold ideas nobody else thought of", p: "mystery-box" },
        { text: "Making the slides look amazing and telling the story", p: "scrapbook" },
      ],
    },
    {
      q: "Which present are you unwrapping first?",
      answers: [
        { text: "The big, soft one. It's definitely a hoodie.", p: "cozy-blanket" },
        { text: "The shoebox. New running shoes, please!", p: "fresh-kicks" },
        { text: "The weirdly shaped one with no label", p: "mystery-box" },
        { text: "The small flat one that might be a polaroid camera", p: "scrapbook" },
      ],
    },
    {
      q: "Your camera roll is mostly…",
      answers: [
        { text: "Food. So much food.", p: "cozy-blanket" },
        { text: "Workout progress and match-day photos", p: "fresh-kicks" },
        { text: "Random places you can't remember the names of", p: "mystery-box" },
        { text: "Sunsets, concerts and candid shots of friends", p: "scrapbook" },
      ],
    },
    {
      q: "In your friend group, you're the one who…",
      answers: [
        { text: "Makes everyone feel at home", p: "cozy-blanket" },
        { text: "Cheers the loudest for everyone else", p: "fresh-kicks" },
        { text: "Always says “why not?”", p: "mystery-box" },
        { text: "Remembers the little details about everyone", p: "scrapbook" },
      ],
    },
  ],
};
