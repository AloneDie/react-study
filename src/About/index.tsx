import React, { useEffect, useRef } from 'react';

const AboutPage: React.FC = () => {
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('[debug] test ref', testRef);
  }, [testRef]);

  return (
    <div>
      测试一下 forwardedRef 转发
      <FatherCom ref={testRef} />
    </div>
  );
};

const FatherCom = React.forwardRef((props, ref: React.ForwardedRef<HTMLDivElement>) => {
  console.log('[debug] father som', ref);
  return (
    <div>
      这是一个转发组件
      <SonCom gudRef={ref} />
    </div>
  );
});

const SonCom: React.FC<{ gudRef: React.ForwardedRef<HTMLDivElement> }> = ({ gudRef }) => {
  return (
    <div>
      这是一个组件
      <div ref={gudRef}>ref组件 </div>
    </div>
  );
};

export default AboutPage;
