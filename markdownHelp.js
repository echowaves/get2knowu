import React, { useRef, useState, useEffect, useContext } from "react"
// import { useFocusEffect } from '@react-navigation/native'

import {
  View,
  TouchableOpacity,
  Alert,
  InteractionManager,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native"

import {
  Text,
  Card,
  LinearProgress,
  Divider,
  Badge,
  Icon,
  Button,
  Input,
  ListItem,
} from "@rneui/themed"

import Markdown from "react-native-markdown-display"

export const markdownStyles = {
  // The main container
  body: { fontSize: 16 },

  // Headings
  heading1: {
    flexDirection: "row",
    fontSize: 32,
  },
  heading2: {
    flexDirection: "row",
    fontSize: 28,
  },
  heading3: {
    flexDirection: "row",
    fontSize: 25,
  },
  heading4: {
    flexDirection: "row",
    fontSize: 22,
  },
  heading5: {
    flexDirection: "row",
    fontSize: 19,
  },
  heading6: {
    flexDirection: "row",
    fontSize: 17,
  },

  // Horizontal Rule
  hr: {
    backgroundColor: "#000000",
    height: 1,
  },

  // Emphasis
  strong: {
    fontWeight: "bold",
  },
  em: {
    fontStyle: "italic",
  },
  s: {
    textDecorationLine: "line-through",
  },

  // Blockquotes
  blockquote: {
    backgroundColor: "#F5F5F5",
    borderColor: "#CCC",
    borderLeftWidth: 4,
    marginLeft: 5,
    paddingHorizontal: 5,
  },

  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1,
  },

  // Code
  code_inline: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        fontFamily: "Courier New",
      },
      android: {
        fontFamily: "monospace",
      },
    }),
  },
  code_block: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        fontFamily: "Courier New",
      },
      android: {
        fontFamily: "monospace",
      },
    }),
  },
  fence: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        fontFamily: "Courier New",
      },
      android: {
        fontFamily: "monospace",
      },
    }),
  },

  // Tables
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
  },
  thead: {},
  tbody: {},
  th: {
    flex: 1,
    padding: 5,
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
  },
  td: {
    flex: 1,
    padding: 5,
  },

  // Links
  link: {
    textDecorationLine: "underline",
  },
  blocklink: {
    flex: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },

  // Images
  image: {
    flex: 1,
  },

  // Text Output
  text: {},
  textgroup: {},
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  hardbreak: {
    width: "100%",
    height: 1,
  },
  softbreak: {},

  // Believe these are never used but retained for completeness
  pre: {},
  inline: {},
  span: {},
}

function MarkdownHelp({ route, navigation }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Card.Divider />

      <ListItem.Accordion
        content={
          <>
            <Icon name='help' size={30} />
            <ListItem.Content>
              <ListItem.Title>Formatting Help</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded)
        }}
      >
        <Card>
          <Card.Title>Headings</Card.Title>
          <Markdown style={markdownStyles}>
            {`
  \`\`\`    
  # h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading
  \`\`\`

  # h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading
`}
          </Markdown>
        </Card>
        <Card>
          <Card.Title>Horizontal Rules</Card.Title>
          <Markdown style={markdownStyles}>
            {`
  \`\`\`    
  Some text above
  ___

  Some text in the middle

  ---

  Some text below
  \`\`\`

  Some text above
  ___

  Some text in the middle

  ---

  Some text below
`}
          </Markdown>
        </Card>
        <Card>
          <Card.Title>Emphasis</Card.Title>
          <Markdown style={markdownStyles}>
            {`
  \`\`\`    
**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
  \`\`\`

  **This is bold text**

  __This is bold text__

  *This is italic text*

  _This is italic text_

  ~~Strikethrough~~
`}
          </Markdown>
        </Card>
        <Card>
          <Card.Title>Lists</Card.Title>
          <Markdown style={markdownStyles}>
            {`
  \`\`\`              
Unordered

+ Create a list by starting a line with + , - , or  * 
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.
3. Integer molestie lorem at massa

Start numbering with offset:

57. foo
58. bar
\`\`\`              
Unordered

+ Create a list by starting a line with + , - , or  * 
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.
3. Integer molestie lorem at massa

Start numbering with offset:

57. foo
58. bar

  `}
          </Markdown>
        </Card>
        <Card>
          <Card.Title>Links</Card.Title>
          <Markdown style={markdownStyles}>
            {`
  \`\`\`              
[link text](https://www.google.com)

[link with title](https://www.google.com "title text!")

Autoconverted link https://www.google.com 

[Call me](phone:(123)456-7890)

[message me](sms:(123)456-7890)

[email me](mailto:dmitry@ehowaes.com) 
  \`\`\`              
[link text](https://www.google.com)

[link with title](https://www.google.com "title text!")

Autoconverted link https://www.google.com 

[Call me](phone:(123)456-7890)

[message me](sms:(123)456-7890)

[email me](mailto:dmitry@ehowaes.com) 
`}
          </Markdown>
        </Card>
      </ListItem.Accordion>
    </>
  )
}

export default MarkdownHelp
