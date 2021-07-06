import './App.css';

function App() {
  const text = 'Hello,React';
  return (
    // 虚拟 DOM 只能有一个根标签并且不需要引号
    <div className="App"> {/* 样式类名指定不要用 class，要使用 className。 */}
      <span style={{ fontSize: '24px' }}>{text}</span> {/* 内联样式要用对象形式写。 */}
      <br /> {/* 标签必须闭合 */}
      <p>这是一个小写字母</p>
      {/* <P>这里会报错，因为找不到对应的组件。</P> */}
    </div>
  );
}

export default App;
