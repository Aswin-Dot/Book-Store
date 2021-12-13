import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../constants';

const LineDivider = ({ vertical, color }) => {
  return (
    <View style={{ width: 1, paddingVertical: vertical }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: color,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};

export default LineDivider;