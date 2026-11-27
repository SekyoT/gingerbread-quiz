// ============================================================================
//  QUIZ CONTENT — edit this file to change the personalities and questions.
//  Both the quiz page and the organiser dashboard read from here.
//
//  • Each personality needs a unique `id` (lowercase letters/numbers/dashes).
//  • Each answer has `points`, saying how many points it gives to which
//    personalities, e.g. points: { "cozy-blanket": 2, "scrapbook": 2 }.
//    (Matches the Excel sheet: one column per personality.)
//  • You can have any number of personalities and questions. Keep the max
//    possible points equal for every personality so teams stay even.
//  • `icon` options for the drawing:
//      "blanket", "sneaker", "mystery-box", "scrapbook", "present"
// ============================================================================

window.QUIZ = {
  title: "What Christmas Gift Are You?",
  subtitle:
    "Everyone brings a different gift to the group. Answer {count} quick questions to find yours and meet your team for the night.",

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
      q: "What's your usual café order?",
      answers: [
        { text: "Hot chocolate and whatever pastry looks freshest", points: { "cozy-blanket": 1 } },
        { text: "Iced black coffee to fuel a full day", points: { "fresh-kicks": 1 } },
        { text: "Whatever's new on the menu that I've never tried", points: { "mystery-box": 1 } },
        { text: "The prettiest drink on the menu, photographed before the first sip", points: { "scrapbook": 1 } },
      ],
    },
    {
      q: "Your camera roll is mostly…",
      answers: [
        { text: "Food, and blurry photos of friends laughing", points: { "cozy-blanket": 1 } },
        { text: "Workout progress, scoreboards and screenshots of goals", points: { "fresh-kicks": 1 } },
        { text: "Random places, weird signs and things I stumbled on", points: { "mystery-box": 1 } },
        { text: "Sunsets, little details and carefully curated photo dumps", points: { "scrapbook": 1 } },
      ],
    },
    {
      q: "A friend texts you: \"I'm having a rough week.\" What do you do?",
      answers: [
        { text: "Show up with their favourite snacks and just keep them company", points: { "cozy-blanket": 2 } },
        { text: "Hype them up and help them figure out the next step", points: { "fresh-kicks": 2 } },
        { text: "Invite them out for something fun to lift them up", points: { "mystery-box": 2 } },
        { text: "Send a long heartfelt message, or a song that made you think of them", points: { "scrapbook": 2 } },
      ],
    },
    {
      q: "After a long week, what recharges you most?",
      answers: [
        { text: "A slow night in", points: { "cozy-blanket": 2, "scrapbook": 2 } },
        { text: "Getting out and doing something", points: { "fresh-kicks": 2, "mystery-box": 2 } },
      ],
    },
    {
      q: "Plans got cancelled and it's pouring with rain. You…",
      answers: [
        { text: "Stay in with a blanket and a comfort show", points: { "cozy-blanket": 1 } },
        { text: "Move it indoors: bouldering, badminton, anything active", points: { "fresh-kicks": 1 } },
        { text: "Go out anyway, rain just makes it more of an adventure", points: { "mystery-box": 1 } },
        { text: "Put on a rainy day playlist and start a creative project", points: { "scrapbook": 1 } },
      ],
    },
    {
      q: "It's game night. Which game are you reaching for?",
      answers: [
        { text: "Something easy like Uno, so everyone can join in", points: { "cozy-blanket": 1 } },
        { text: "Anything competitive, I'm here to win", points: { "fresh-kicks": 1 } },
        { text: "A game none of us have ever played", points: { "mystery-box": 1 } },
        { text: "Something creative, like Pictionary or Dixit", points: { "scrapbook": 1 } },
      ],
    },
    {
      q: "There's a big event coming up and they need volunteers. You sign up for…",
      answers: [
        { text: "The welcome team, greeting people at the door", points: { "cozy-blanket": 2 } },
        { text: "Running the games and keeping the energy up", points: { "fresh-kicks": 2 } },
        { text: "Trying a role I've never done before, just to see what it's like", points: { "mystery-box": 2 } },
        { text: "Photography, decor or the slideshow", points: { "scrapbook": 2 } },
      ],
    },
    {
      q: "Planning a day out with friends, you'd rather…",
      answers: [
        { text: "Keep it loose and see where the day takes us", points: { "cozy-blanket": 2, "mystery-box": 2 } },
        { text: "Have a plan so we make the most of it", points: { "fresh-kicks": 2, "scrapbook": 2 } },
      ],
    },
    {
      q: "Which superpower would you pick?",
      answers: [
        { text: "Making anyone feel instantly at ease", points: { "cozy-blanket": 1 } },
        { text: "Never running out of energy", points: { "fresh-kicks": 1 } },
        { text: "Teleporting anywhere, anytime", points: { "mystery-box": 1 } },
        { text: "Reliving any memory, perfectly", points: { "scrapbook": 1 } },
      ],
    },
    {
      q: "What souvenir do you bring home from a trip?",
      answers: [
        { text: "Local snacks to share with everyone back home", points: { "cozy-blanket": 1 } },
        { text: "A shirt from the hike or race I finished there", points: { "fresh-kicks": 1 } },
        { text: "Something random that comes with a crazy story", points: { "mystery-box": 1 } },
        { text: "Postcards, ticket stubs and photos to keep", points: { "scrapbook": 1 } },
      ],
    },
    {
      q: "It's a close friend's birthday. What's your contribution?",
      answers: [
        { text: "Hosting at my place, with homemade food", points: { "cozy-blanket": 2 } },
        { text: "Organising everything and making sure it actually happens", points: { "fresh-kicks": 2 } },
        { text: "A surprise they'll never see coming", points: { "mystery-box": 2 } },
        { text: "A handmade card, photo collage or video montage", points: { "scrapbook": 2 } },
      ],
    },
    {
      q: "Which would you rather be known for?",
      answers: [
        { text: "Being someone who helps others feel supported and encouraged", points: { "cozy-blanket": 2, "fresh-kicks": 2 } },
        { text: "Being someone who brings new experiences and meaningful moments into people's lives", points: { "mystery-box": 2, "scrapbook": 2 } },
      ],
    },
    {
      q: "Which compliment would mean the most to you?",
      answers: [
        { text: "\"Being around you feels like home.\"", points: { "cozy-blanket": 2 } },
        { text: "\"You make me want to be better.\"", points: { "fresh-kicks": 2 } },
        { text: "\"Life is never boring with you around.\"", points: { "mystery-box": 2 } },
        { text: "\"You notice things nobody else does.\"", points: { "scrapbook": 2 } },
      ],
    },
  ],
};
