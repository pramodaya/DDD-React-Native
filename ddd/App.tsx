// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import EducationService from './domain/service/EducationService';
import { AdultTypeOfSchooling } from './domain/model/EducationModels';

// Section component to display each adultTypeOfSchooling
interface SectionProps {
  title: string;
  children?: React.ReactNode; // Make children optional
}

const Section = ({ title, children }: SectionProps): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? 'white' : 'black',
          },
        ]}>
        {title}
      </Text>
      {children && (
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? 'lightgrey' : 'darkgrey',
            },
          ]}>
          {children}
        </Text>
      )}
    </View>
  );
};


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [adultTypeOfSchoolings, setAdultTypeOfSchoolings] = useState<AdultTypeOfSchooling[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await EducationService.getAdultTypeOfSchoolings();
        console.log('he')
        if (data!= null) {
          setAdultTypeOfSchoolings(data);
        } else {
          setError('No data availablesss.');
        }
      } catch (error) {
        setError('Error fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{ padding: 16 }}>
          <View>
            <Text>Hello world</Text>
          </View>
          {isLoading && <Text>Loading...</Text>}
          {error && <Text>Error: {error}</Text>}
          {!isLoading && !error && (
            // Display adultTypeOfSchoolings data
            adultTypeOfSchoolings.map((schooling: AdultTypeOfSchooling) => (
              <Section key={schooling.id} title={schooling.value}>
                {/* Add additional content or styling as needed */}
              </Section>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black', // Adjust the color as needed
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'darkgrey', // Adjust the color as needed
  },
});


export default App;
