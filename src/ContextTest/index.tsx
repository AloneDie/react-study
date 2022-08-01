/**
 * provider 中的 value 更新会导致 消费此 Context 的子组件自动更新，需要子组件使用 memo 进行浅比较来避免其他组件进行更新
 */
import React from 'react';

const testContext = React.createContext<string>('light');

const ContextTestPage: React.FC = () => {
  const theme = React.useContext(testContext);
  return (
    <div>
      三种获取Context 的方法
      <div>
        第一种 通过 useContext Hooks来获取
        <div>theme：{theme}</div>
      </div>
      <div>
        第二种 通过 Consumer 来获取
        <div>
          <ConsumerPage />
        </div>
      </div>
      <div>第三种 通过ContextType 来获取,是类组件的获取方式</div>
    </div>
  );
};

/** 第二种获取 context 方法 采用 Consumer  */
const ConsumerPage: React.FC = () => {
  return <testContext.Consumer>{(theme) => <div>theme:{theme}</div>}</testContext.Consumer>;
};

export default ContextTestPage;
