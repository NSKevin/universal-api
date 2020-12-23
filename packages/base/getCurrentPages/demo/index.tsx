import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import getCurrentPages from 'universal-getcurrentpages';

export default function() {
  const [data, setData] = useState({
    firstPage: {},
    currentPage: {}
  });
  return (
    <View>
      <Text>getCurrentPages</Text>
      <View onClick={() => {
        let pageInfo = getCurrentPages();
        setData({
          firstPage: {
            viewId: pageInfo[0].$viewId,
          },
          currentPage: {
            viewId: pageInfo[pageInfo.length - 1].$viewId,
          }
        });
      }}>获取页面堆栈信息</View>
      <View>当前页面id是：{data.currentPage.viewId}</View>
    </View>
  );
}
