import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface PokemonCardProps {
  heading?: string;
  subheading?: string;
  children?: React.ReactNode; 
  style?: StyleProp<ViewStyle>; 
}

const PokemonCard: React.FC<PokemonCardProps> = ({ heading, subheading, children, style }) => (
  <View style={[styles.card, style]}>
    {heading && <Text style={styles.heading}>{heading}</Text>}
    {subheading && <Text style={styles.subheading}>{subheading}</Text>}
    {children && <View style={styles.children}>{children}</View>}
  </View>
);

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#d8d8d8ff',
        borderRadius: 5,
        shadowColor: '#000',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    subheading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    children: {
        fontSize: 14,
        padding: 5,
        textTransform: 'capitalize',
    },
});

export default PokemonCard;