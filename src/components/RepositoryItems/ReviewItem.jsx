import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import Text from '../Text';
import theme from '../../theme';

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <View style={reviewStyles.container}>
      <View style={reviewStyles.ratingContainer}>
        <Text style={reviewStyles.rating}>
          {review.rating}
        </Text>
      </View>
      <View>
        <Text fontSize='subheading' fontWeight='bold'>
          {review.user.username}
        </Text>
        <Text>
          {format(new Date(review.createdAt), 'dd/MM/yyyy')}
        </Text>
        <Text style={reviewStyles.text}>
          {review.text}
        </Text>
      </View>
    </View>
  );
};

export default ReviewItem;

const reviewStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 15,
    backgroundColor: theme.colors.itemBackground,
  },
  rating: {
    width: 45,
    height: 45,
    borderColor: theme.colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 27,
  },
  ratingContainer: {
    paddingRight: 15,
  },
  text: {
    maxWidth: 380,
    marginVertical: 10,
    paddingBottom: 5,
  }
});