import React, { useState } from 'react';
import { View } from '@tarojs/components';

const BasicDashScreenOfKlkxetio: React.FC<any> = () => {
  const [showChild, setShowChild] = useState<boolean>(true);

  return (
    <View
      style={{
        backgroundColor: 'green',
        width: '200px',
        height: '200px',
      }}
      onClick={e => {
        e.stopPropagation();
        console.log('i am parent');
      }}
    >
      {showChild ? (
        <View
          style={{
            backgroundColor: 'red',
            width: '100px',
            height: '100px'
          }}
          onClick={e => {
            e.stopPropagation();
            console.log('i am child');
            setShowChild(false);
          }}
        ></View>
      ) : null}
    </View>
  );
};

export default BasicDashScreenOfKlkxetio;
