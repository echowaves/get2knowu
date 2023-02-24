import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useRef,
} from "react"

import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView, ScrollView, Image } from "react-native"

import {
  Text,
  Input,
  LinearProgress,
  Card,
  ListItem,
  Button,
  Icon,
} from "@rneui/themed"
import Markdown from "react-native-markdown-display"
import "react-native-get-random-values"

import * as CONSTS from "./consts"

import MarkdownHelp, { markdownStyles } from "./markdownHelp"

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const questions = CONSTS.QUESTIONS
  const [index, setIndex] = useState(0)

  if (showIntro) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card>
            <Markdown style={markdownStyles}>{CONSTS.INTRO_TEXT}</Markdown>
          </Card>
        </ScrollView>
        <Card.Divider />
        <Button
          onPress={() => setShowIntro(false)}
          size='lg'
          iconRight
          color={CONSTS.MAIN_COLOR}
        >
          {`   Get To Questions`}
          <Icon name='forward' color='white' />
        </Button>
      </SafeAreaView>
    )
  }
  if (index >= questions.length) {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/adaptive-icon.png")}
        />

        <Card>
          <Markdown style={markdownStyles}>{`## That's all Folks!`}</Markdown>
        </Card>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/adaptive-icon.png")}
      />
      <Card>
        <Markdown style={markdownStyles}>{`## ${questions[index]}`}</Markdown>
      </Card>
      <Card.Divider />
      <Button
        onPress={() => setIndex(index + 1)}
        size='lg'
        iconRight
        color={CONSTS.EMPHASIZED_COLOR}
      >
        {`   Next Question`}
        <Icon name='forward' color='white' />
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    // top: 0,
    // bottom: 0,
    resizeMode: "contain",
    width: "100%",
  },
})
