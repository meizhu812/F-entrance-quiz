import React, { useEffect, useState } from 'react';
import TraineeList from './Components/TraineeList';
import GroupList from './Components/GroupList';
import { getLocalStorage, setLocalStorage } from './utils/localstorage';
import shuffle from './utils/shuffle';
import './App.css';

// TODO GTB-1: * 页面样式还原度很高
// TODO GTB-1: * 完成所有需求，但存在一个问题就是分组学员没有看到发送请求
// TODO GTB-2: * 进行了很多组件测试和方法的测试，虽然测试的path不全且单纯测但都是UI组件，但对于测试掌握已经挺不错的了
// TODO GTB-3: * 有划分分组列表和学员列表及其item/card组件，且复用也做的很好
// TODO GTB-3: * 使用了语义化标签，但还可以加强使用
// TODO GTB-3: * 使用了Flex布局，但没有使用scss
// TODO GTB-3: * 运用了许多ES6+语法及fetch，很新的语法也看到有使用到
// TODO GTB-3: * 运用React hooks知识点
// TODO GTB-3: * 虽然这里不推荐使用localStorage，但这个知识点还是用到了
// TODO GTB-4: * 小步提交做的不错
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 组件拆分与复用做的很好，对应的css也做了拆分，并有一定样式复用
// TODO GTB-4: * components可以根据复用性和业务场景划分folder，如commons/xxx，GroupList/xxx等，现在在同一fodler下无法直观反应其归属与关联结构
// TODO GTB-4: * 随机逻辑不应该放在前端（前端过重了且无法真正的数据持久化），应该放在后端内存中，同理不应该使用前端localStorage并应该增加分组列表和分组Api请求
export default function App() {
  // TODO GTB-3: + 使用到了hooks知识点
  const [trainees, setTrainees] = useState(getLocalStorage('trainees'));
  const [groups, setGroups] = useState(getLocalStorage('groups'));
  const handleAddTrainee = (trainee) => {
    // TODO GTB-4: - api请求相关可以抽出utils/api层
    fetch('http://localhost:8080/trainees', {
      method: 'POST',
      body: trainee,
    })
      .then((response) => response.json())
      .then((data) => {
        // TODO GTB-4: - api请求要与页面更新解耦
        setLocalStorage('trainees', data);
        setTrainees(data);
      });
  };
  useEffect(() => {
    fetch('http://localhost:8080/trainees')
      .then((response) => response.json())
      .then((data) => {
        setLocalStorage('trainees', data);
        setTrainees(data);
      });
  }, [trainees?.length]);
  const handleShuffle = () => {
    // TODO GTB-4: - 随机分组需要后端来实现，这里不需要shuffle和setLocalStorage
    const newGroups = shuffle(trainees);
    setLocalStorage('groups', newGroups);
    setGroups(newGroups);
  };
  return (
    <div data-testid="app" className="app">
      <section>
        {/* TODO GTB-3: - 这里可以使用header标签 */}
        <div className="group-header">
          {/* TODO GTB-3: - 这里应该是h标签 */}
          <p className="section-title">分组列表</p>
          <button className="shuffle-button" type="button" onClick={handleShuffle}>
            分组学员
          </button>
        </div>
        <GroupList groups={groups} />
      </section>
      <section>
        <p className="section-title">学员列表</p>
        <TraineeList trainees={trainees} handleAddTrainee={handleAddTrainee} />
      </section>
    </div>
  );
}
