// TODO GTB-4: - 随机分组逻辑应该放在后端
export default function shuffle(trainees) {
  const groups = [...Array(6).keys()].map((index) => ({
    sequence: index + 1,
    trainees: [],
  }));
  const tempTrainees = trainees.slice(0);
  let curGroup = 0;
  while (tempTrainees.length > 0) {
    groups[curGroup].trainees.push(
      tempTrainees.splice(Math.floor(Math.random() * tempTrainees.length), 1)[0]
    );
    curGroup = curGroup === 5 ? 0 : curGroup + 1;
  }
  return groups;
}
