import React from 'react';
import {TextInput} from 'react-native';

import {Controller} from 'react-hook-form';

const Input = ({name, control, rules, ...rest}) => {
  return (
    <Controller
      control={control}
      render={({onChange, onBlur, value}) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          {...rest}
        />
      )}
      name={name}
      rules={rules}
      defaultValue=""
    />
  );
};

export {Input};
