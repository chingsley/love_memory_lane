import GradientBG from '@/components/Shared/GradientBG';
import Header from '@/components/Shared/Header';
import { colors } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const promptIconSize = 34;
  return (
    <View style={styles.pageBox}>
      <View style={styles.container}>
        <Header caption='Sign In' />
        <View style={{ height: 120 }}></View> {/**prevents overflow over Header, b/c header has absolute position */}
        <View style={[styles.homeCard]}>
          <Text style={styles.text2}>Notofications</Text>
          <Text style={styles.text3}>1 New Answer</Text>
          <View style={styles.flexSpaceBetween}>
            <Text style={styles.text3}>2 New Qustions</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        </View>
        <View style={styles.homeCard}>
          <View style={styles.flexSpaceBetween}>
            <View>
              <Text style={[styles.text1, { marginBottom: 15 }]}>Today's Challenge</Text>
              <Text style={styles.text3}>What was our...</Text>
            </View>
            <View style={styles.challengeRightBox}>
              <Ionicons name="stats-chart" size={65} color={'black'} />
              <TouchableOpacity style={styles.btnGoToChallenge}>
                <Text style={styles.btnTextGoToChallenge}>Answer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.midQuestionBoxes}>
          <GradientBG style={styles.questionBox}>
            <Ionicons name="chatbox-ellipses" size={promptIconSize} color={colors.WHITE} />
            <View>
              <Text style={[styles.text2Small, { color: colors.WHITE }]}>Ask</Text>
              <Text style={[styles.text3, { color: colors.WHITE }]}>Question</Text>
            </View>
          </GradientBG>
          <GradientBG style={styles.questionBox}>
            <Ionicons name="list" size={promptIconSize} color={colors.WHITE} />
            <Text style={[styles.text2Small, { color: colors.WHITE }]}>MCQ</Text>
          </GradientBG>
          <GradientBG style={styles.questionBox}>
            <Ionicons name="contrast" size={promptIconSize} color={colors.WHITE} />
            <View>
              <Text style={[styles.text2Small, { color: colors.WHITE }]}>True /</Text>
              <Text style={[styles.text2Small, { color: colors.WHITE }]}>False</Text>
            </View>
          </GradientBG>
        </View>
        <View style={styles.homeCard}>
          <Text style={[styles.text2, { marginBottom: 5 }]}>Memory Timeline</Text>
          <View style={styles.timeLineInnerBox}>{/** TODO: implement as a carousel within this homecard. Image there are 3 of these elements. Show dots equal to no. of items. Dots shoudl auto-scroll as carousel-items auto-scroll*/}
            <View style={[styles.flexCenter, { gap: 15 }]}>
              <Ionicons name="calendar" size={40} color={colors.PURPLE} />
              <View>
                <Text style={[styles.text2]}>Sep 12 '24</Text>
                <Text style={[styles.text3]}>First Date</Text>
              </View>
            </View>
            <View>
              {/* <Ionicons name="restaurant" size={40} color="black" /> */}
              {/* <MaterialIcons name="restaurant" size={40} color="black" /> */}
              <MaterialIcons name="restaurant-menu" size={40} color={colors.PURPLE} />
            </View>
          </View>
        </View>
        <View style={styles.homeCard}>
          <Text style={styles.text2}>Suggested Questions</Text>
          <View style={[styles.flexSpaceBetween, { marginTop: 10, }]}>
            <Text style={[styles.text3, styles.suggestedQnText]}>Which songs reminds you of...</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
          <Pressable style={{ marginTop: 10, }}>
            <Text style={styles.text3}>Show More</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageBox: {
    height: '100%',
    // backgroundColor: colors.WHITE,
  },
  hero: {
    minHeight: Dimensions.get('window').height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    borderWidth: 0.3,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: 20,
  },
  homeCard: {
    borderWidth: 0.2,
    minHeight: 100,
    width: '90%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: colors.MAUVE_PINK,
  },
  text1: {
    // color: colors.WHITE,
    fontFamily: 'roboto-bold',
    fontSize: 30,
  },
  text2: {
    // color: colors.WHITE,
    fontFamily: 'roboto-bold',
    fontSize: 26,
  },
  text2Small: {
    // color: colors.WHITE,
    fontFamily: 'roboto-bold',
    fontSize: 20,
  },
  text3: {
    // color: colors.WHITE,
    fontFamily: 'roboto',
    fontSize: 20,
  },
  flexSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeRightBox: {
    // borderWidth: 0.3,
    alignItems: 'center',
  },
  btnGoToChallenge: {
    borderWidth: 0.3,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: colors.OLD_MAUVE,
  },
  btnTextGoToChallenge: {
    color: colors.WHITE,
    fontFamily: 'roboto-bold',
    fontSize: 22,
  },
  midQuestionBoxes: {
    width: '90%',
    // borderWidth: 0.3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionBox: {
    borderWidth: 0.3,
    width: '31%',
    height: 70,
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    backgroundColor: colors.PINK,
  },
  timeLineInnerBox: {
    // borderWidth: 0.2,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.LIGHTER_GRAY,
  },
  suggestedQnText: {
    backgroundColor: colors.PINK,
    // color: colors.WHITE,
    padding: 10,
    borderRadius: 15,
  }
});