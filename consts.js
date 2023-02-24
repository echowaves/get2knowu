const uuid4 = require("uuid").v4

export const MAIN_COLOR = "#EA5E3D"
export const EMPHASIZED_COLOR = "#FF0000"
export const SECONDARY_COLOR = "#C0C0C0"
export const NAV_COLOR = "#f0f0f0"
export const BG_COLOR = "#ffffff"

export const FOOTER_COLOR = "rgba(230,230,230,.9)"
export const FOOTER_HEIGHT = 45

export const TEXT_COLOR = "#555f61"
export const PLACEHOLDER_TEXT_COLOR = "#ececec"
export const UNFILLED_COLOR = "rgba(200, 200, 200, 0.2)"
export const TRANSPARENT_BUTTON_COLOR = "rgba(200, 200, 200, 0.8)"
export const TRANSPARENT_ICONS_COLOR = "rgba(10,10,10,.5)"

export const INTRO_TEXT = `
# Getting to Know You questions

The Get to Know You Questions are a great way to increase sharing among team members by recognizing, understanding, and appreciating the similarities and differences among you. 

# What are the benefits

Diversity is about all of us: we all have similarities and differences with our colleagues. However, we may be unaware of these dimensions because we don't know when or how to ask about them. The Get to Know You Questions provide a structured activity for increasing sharing so team members can explore their similarities and differences. This tool is one of many ways to foster an inclusive environment and create a greater sense of belonging within your team by inviting everyone to be open and put people first.

# Context to share

"The Get to Know You Questions are a fun way to increase sharing and Try On each other's experience so we can gain a better understanding of one another. Diversity is about all of us and we want to understand and appreciate all the similarities and differences between us."

# Ideas for use

* Open a meeting with a single question for everyone to answer, or a choice of 2-3 questions to answer.
* Have someone on the team answer the current question, then have that person pick who will be answering the next question. 
`
var map = new Map()
map.set(uuid4(), "What inspires you?")
map.set(
  uuid4(),
  "If you only had 5 dollars in your pocket, what would you spend it on?",
)
map.set(uuid4(), "Who is someone in your life you consider a hero and why?")
map.set(uuid4(), "What is your favorite snack?")
map.set(uuid4(), "What words of wisdom do vou live by?")
map.set(uuid4(), "What is your favorite holiday tradition?")
map.set(uuid4(), 'Please complete this sentence."Happiness is..."')
map.set(uuid4(), "Are you a sports fan? If so, who are your favorite teams?")
map.set(uuid4(), "Where were you born?")
map.set(uuid4(), "Name one thing you absolutely can't do without.")
map.set(
  uuid4(),
  "If you could live in one place for the rest of your life, where would you be?",
)
map.set(
  uuid4(),
  "If you could have dinner with someone who is alive or dead, who would it be and why?",
)
map.set(uuid4(), "What's the best gift you've ever received?")
map.set(
  uuid4(),
  "Are you an early-adopter of technology, or do you tend to wait until most of society is on board?",
)
map.set(uuid4(), "What is your favorite movie of all time?")
map.set(uuid4(), "What is your most prized possession?")
map.set(uuid4(), "What is the biggest risk you have taken in your life?")
map.set(uuid4(), "How do vou commute to work?")
map.set(uuid4(), "What is your favorite place to dine out and why?")
map.set(uuid4(), "What has been your greatest life achievement, thus far?")
map.set(
  uuid4(),
  "If you could pick one place in the world to visit, where would it be?",
)
map.set(uuid4(), "What was your first paying job?")
map.set(uuid4(), "If you could be the best at something, what would it be?")
map.set(uuid4(), "What is one of the things on your bucket list?")
map.set(uuid4(), "If you were a fortune cookie, what would your message be?")
map.set(uuid4(), "What languages do you speak?")
map.set(
  uuid4(),
  "Are there any celebrities you would like to meet? If so, who and why?",
)
map.set(uuid4(), "What is your favorite type of store to shop?")
map.set(
  uuid4(),
  "Have you ever been out of the United States for vacation? If so, where?",
)
map.set(
  uuid4(),
  "Name one song from your past that makes you smile, sing and dance each time you hear it.",
)
map.set(uuid4(), "What talent do you wish you had?")
map.set(uuid4(), "In one word, how would you describe our work culture?")
map.set(uuid4(), "How do you manage your personal and professional life?")
map.set(uuid4(), "How do you like to relax and unwind?")
map.set(uuid4(), "What is your favorite ethnic cuisine?")
map.set(
  uuid4(),
  "If you had a time machine, what point in the past or future would you visit?",
)
map.set(uuid4(), "If you could live anywhere in the world, where would it be?")
map.set(uuid4(), "What is your favorite type of music?")
map.set(
  uuid4(),
  "What do you value most in a friendship or romantic relationship?",
)
map.set(uuid4(), "Where did you grow up?")
map.set(uuid4(), "What is your favorite hobby or leisure activity?")
map.set(
  uuid4(),
  "Please describe a favorite event or memory from your childhood.",
)
map.set(uuid4(), "What are you passionate about?")
map.set(uuid4(), "Are you a morning person or a night owl?")
map.set(
  uuid4(),
  "If you could wave a magic wand, what would be your ideal profession?",
)
map.set(
  uuid4(),
  "If you could have any view from your front porch, what would it be?",
)
map.set(uuid4(), "What household appliance could you not live without?")
map.set(uuid4(), "What was your favorite childhood game?")
map.set(
  uuid4(),
  "Who would you spend the day with -- a billionaire or a homeless person -- and why?",
)
map.set(uuid4(), "If you had 24 hours to do what you want, what would you do?")
map.set(uuid4(), "How many times have you moved in your life?")
map.set(uuid4(), "Do you see yourself as an extrovert or an introvert?")

export const QUESTIONS = [...map]
  .sort(([a], [b]) => String(a).localeCompare(b))
  .map((a) => a[1])
