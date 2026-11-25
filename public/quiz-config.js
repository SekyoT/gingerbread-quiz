// ============================================================================
//  QUIZ CONTENT — edit this file to change the personalities and questions.
//  Both the quiz page and the organiser dashboard read from here.
//
//  • Each personality needs a unique `id` (lowercase letters/numbers/dashes).
//  • Each answer has a `p` that says which personality it gives a point to.
//  • You can have any number of personalities and questions. Try to give
//    every personality roughly the same number of answers so teams stay even.
//  • `accessory` options for the gingerbread drawing:
//      "party-hat", "glasses", "bandana", "earmuffs", "jester-hat", "none"
// ============================================================================

window.QUIZ = {
  title: "Which Gingerbread Are You?",
  subtitle: "Answer 8 quick questions to find your gingerbread twin and meet your team for the night.",

  personalities: [
    {
      id: "gumdrop",
      name: "The Gumdrop Socialite",
      team: "Team Gumdrop",
      color: "#e23b4a",
      accessory: "party-hat",
      tagline: "The sweetest, loudest cookie at the party.",
      description:
        "You walk into a room and somehow know everyone by the end of the night. You keep the energy up, you remember names, and you're the reason the group chat is alive. Strangers don't stay strangers around you for long.",
      traits: ["Outgoing", "Energetic", "Connector"],
    },
    {
      id: "icing",
      name: "The Royal Icing Architect",
      team: "Team Icing",
      color: "#3b82c4",
      accessory: "glasses",
      tagline: "Holds the whole gingerbread house together.",
      description:
        "You're the planner, the one with the shared spreadsheet and the backup plan for the backup plan. People trust you to get things done, and secretly everyone relaxes a little when you're in the group.",
      traits: ["Organised", "Reliable", "Detail-oriented"],
    },
    {
      id: "snap",
      name: "The Ginger Snap Daredevil",
      team: "Team Snap",
      color: "#f08a24",
      accessory: "bandana",
      tagline: "Crunchy, bold, and always up for it.",
      description:
        "If there's a spontaneous trip, a weird new food or a challenge no one else will take, you're already in. You bring the best stories and push everyone just a bit out of their comfort zone, in a good way.",
      traits: ["Adventurous", "Spontaneous", "Brave"],
    },
    {
      id: "marshmallow",
      name: "The Marshmallow Heart",
      team: "Team Marshmallow",
      color: "#e86fa3",
      accessory: "earmuffs",
      tagline: "Soft, warm, and always there for you.",
      description:
        "You're the friend people text at 3am. You notice when someone's quiet, you listen properly, and you make people feel at home. Your group is lucky to have someone who cares as much as you do.",
      traits: ["Kind", "Great listener", "Thoughtful"],
    },
    {
      id: "sprinkle",
      name: "The Sprinkle Jester",
      team: "Team Sprinkle",
      color: "#8b5cf6",
      accessory: "jester-hat",
      tagline: "A little chaotic, a lot of fun.",
      description:
        "You're the group chat clown and proud of it. You turn awkward silences into inside jokes and boring tasks into games. Life's more colourful with a few sprinkles thrown on top, and you're the sprinkles.",
      traits: ["Funny", "Creative", "Playful"],
    },
  ],

  questions: [
    {
      q: "It's the first hour of the Christmas mixer. Where are you?",
      answers: [
        { text: "In the middle of the room, introducing people to each other", p: "gumdrop" },
        { text: "Checking the schedule to see what's planned next", p: "icing" },
        { text: "Volunteering for the activity nobody else will try", p: "snap" },
        { text: "Deep in a chat with someone who looked a bit lost", p: "marshmallow" },
        { text: "Starting a game nobody asked for (that everyone joins)", p: "sprinkle" },
      ],
    },
    {
      q: "Your Secret Santa budget is $20. You get them…",
      answers: [
        { text: "Exactly what was on their wishlist. Gift receipt included.", p: "icing" },
        { text: "Something handmade with a heartfelt note", p: "marshmallow" },
        { text: "A joke gift… with the real gift hidden inside", p: "sprinkle" },
        { text: "An experience: escape room, rock climbing, a day out", p: "snap" },
        { text: "Snacks big enough for the whole group to share", p: "gumdrop" },
      ],
    },
    {
      q: "Pick a festive treat:",
      answers: [
        { text: "Pineapple tarts. Classic, reliable, perfect.", p: "icing" },
        { text: "Hot chocolate with way too many marshmallows", p: "marshmallow" },
        { text: "A mystery-flavour candy cane. Why not?", p: "snap" },
        { text: "Whatever's on the shared platter, I'm here for the vibes", p: "gumdrop" },
        { text: "A gingerbread man, and I'm biting the head off first", p: "sprinkle" },
      ],
    },
    {
      q: "Group project due in 3 days. You're the one…",
      answers: [
        { text: "Making the shared doc with deadlines for everyone", p: "icing" },
        { text: "Hyping up the group chat and keeping morale up", p: "gumdrop" },
        { text: "Pitching a wild new idea at 2am", p: "snap" },
        { text: "Checking on the teammate who's gone quiet", p: "marshmallow" },
        { text: "Sending memes until someone starts working", p: "sprinkle" },
      ],
    },
    {
      q: "Your ideal Christmas Eve in Singapore:",
      answers: [
        { text: "Orchard Road light-up with the biggest group possible", p: "gumdrop" },
        { text: "Movie marathon at home with a few close friends", p: "marshmallow" },
        { text: "Last-minute trip somewhere. Pack in 10 minutes, let's go!", p: "snap" },
        { text: "A dinner party I've planned right down to the playlist", p: "icing" },
        { text: "Gardens by the Bay… in a full reindeer onesie", p: "sprinkle" },
      ],
    },
    {
      q: "Someone spills hot chocolate all over your notes. You…",
      answers: [
        { text: "Call it modern art and frame it", p: "sprinkle" },
        { text: "Tell them it's totally fine (and actually mean it)", p: "marshmallow" },
        { text: "Relax, there's a backup in the cloud", p: "icing" },
        { text: "Shrug and wing the exam anyway", p: "snap" },
        { text: "Turn it into a story you'll tell at every party", p: "gumdrop" },
      ],
    },
    {
      q: "Which job would you take at the North Pole?",
      answers: [
        { text: "Elf Operations Manager. Someone has to run the list.", p: "icing" },
        { text: "Test pilot for Santa's sleigh", p: "snap" },
        { text: "Head of the Elf Social Committee", p: "gumdrop" },
        { text: "Reindeer caretaker", p: "marshmallow" },
        { text: "Chief Toy Tester (mostly whoopee cushions)", p: "sprinkle" },
      ],
    },
    {
      q: "Your friends would describe you as…",
      answers: [
        { text: "The one who knows everyone", p: "gumdrop" },
        { text: "The responsible one", p: "icing" },
        { text: "The one with the craziest stories", p: "snap" },
        { text: "The one you text when things get tough", p: "marshmallow" },
        { text: "The group chat clown", p: "sprinkle" },
      ],
    },
  ],
};
