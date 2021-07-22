import React from 'react';
import { ScrollView } from '@tarojs/components';
import { observer } from 'mobx-react';

const Index: React.FC<any> = () => {
  return (
    <ScrollView>
      <ScrollView>
        <ScrollView>
          <ScrollView>
            <ScrollView />
          </ScrollView>
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
};

export default observer(Index);
