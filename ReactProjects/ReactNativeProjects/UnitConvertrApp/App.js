import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import ConverterCard from './components/ConverterCard';
import { CONVERSION_CATEGORIES } from './constants/conversions';
import styles from './styles/AppStyles';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    CONVERSION_CATEGORIES[0]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.hero}>
          <Text style={styles.title}>Unit Converter</Text>
        </View>

        <ScrollView
          horizontal
          style={styles.categoryScroller}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {CONVERSION_CATEGORIES.map((category) => {
            const isActive = selectedCategory.id === category.id;

            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  isActive && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category)}
                activeOpacity={0.75}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <ConverterCard category={selectedCategory} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
