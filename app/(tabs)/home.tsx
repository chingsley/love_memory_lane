import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const HomeScreen = () => {
  const router = useRouter();
  // Animation values
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Simplified floating hearts - remove for performance if needed
  const hearts = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 10000 + 15000,
    delay: Math.random() * 5000,
    start: Math.random() * Dimensions.get('window').width,
  }));

  // Pulsing animation for header
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // colors={['#ff6b9d', '#c44569', '#f8b500']}
        colors={['#ec4899', '#8b5cf6']}
        style={styles.hero}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Floating Hearts - Remove if performance issues */}
        <View style={styles.floatingHearts}>
          {hearts.map((heart) => (
            <FloatingHeart key={heart.id} {...heart} />
          ))}
        </View>

        <View style={styles.heroContent}>
          <Animated.Text style={[styles.heroTitle, { transform: [{ scale: pulseAnim }] }]}>
            LoveMemory
          </Animated.Text>
          <Text style={styles.heroSubtitle}>
            A fun way to relive your most precious moments together
          </Text>
          <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/auth/register')}>
            <Text style={styles.ctaText}>Start Playing Now ❤️</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

// Floating Heart Component (Simplified)
const FloatingHeart = ({ size, duration, delay, start }: any) => {
  const position = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    const runAnimation = () => {
      // Reset to starting position
      position.setValue(0);

      // Create new animation sequence
      animationRef.current = Animated.sequence([
        Animated.delay(delay),
        Animated.timing(position, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ]);

      // Start animation and loop when complete
      animationRef.current.start(({ finished }) => {
        if (finished) {
          runAnimation(); // Restart the animation
        }
      });
    };

    runAnimation();

    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, []);

  const translateY = position.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get('window').height + 50, -100],
  });

  const opacity = position.interpolate({
    inputRange: [0, 0.1, 0.9, 1],
    outputRange: [0, 1, 1, 0]
  });

  return (
    <Animated.Text
      style={{
        position: 'absolute',
        left: start,
        fontSize: size,
        color: 'rgba(255,255,255,0.2)',
        transform: [{ translateY }],
        opacity: opacity,
      }}
    >
      ❤️
    </Animated.Text>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
  },
  hero: {
    minHeight: Dimensions.get('window').height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  floatingHearts: {
    ...StyleSheet.absoluteFillObject,
  },
  heroContent: {
    alignItems: 'center',
    padding: 20,
    zIndex: 10,
  },
  heroTitle: {
    fontFamily: 'roboto-bold',
    fontSize: 42,
    marginBottom: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  heroSubtitle: {
    fontFamily: 'roboto',
    fontSize: 20,
    marginBottom: 32,
    color: '#fff',
    textAlign: 'center',
    maxWidth: '90%',
    fontStyle: 'italic'
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  ctaText: {
    fontFamily: 'roboto',
    color: colors.TEXT_RED,
    fontSize: 22,
    // fontWeight: '600',
  },
});

export default HomeScreen;