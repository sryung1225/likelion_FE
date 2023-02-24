import { likeLionMembers } from '../data/likeLionMembers.js';

class LikelionMember extends React.Component {
  state = {
    members: likeLionMembers
  };

  initialMembers = likeLionMembers;
  labCount = this.calcLabCount();

  calcLabCount() {
    // 데이터 분석
    // 내가 무얼을 해야 하나? => 105개의 데이터를 순회해서 lab의 갯수가 몇 개인지를 확인해야
    // 그걸 하려면 어떤 로직을 짜야 하나? => 배열??? 아니면 다른 데이터를??
    // 결과 값은 무엇을 내보내야 하나? => 랩의 갯수
    let labSet = new Set();
    this.state.members.forEach(({ lab }) => labSet.add(lab));
    return labSet.size;
  }

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.initialMembers.filter(member => member.lab === labNumber)
    });
  }

  render() {
    // console.log(this);

    const { products } = this.state;

    const figcaptionStyle = {
      display: 'flex',
      gap: 12
    };

    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <div role="group" style={{ display: 'flex', gap: 8 }}>
          {
            Array(this.labCount).fill().map((_, index/* 0, 1, 2, ..., 10 */) => {
              let labIndex = index + 1; // 1, 2, 3, 4, ..., 11
              return (
                <LabButton
                  key={`lab-button-${index}`}
                  onFilter={() => this.handleFilterLab(labIndex)}
                >
                  LAB {labIndex}
                </LabButton>
              )
            })
          }
        </div>
        <ul>
          {
            this.state.members.map(({ id, lab, name, gender }) =>
              <li key={id}>
                <p><b>{lab}</b><span>{gender?.includes('여성') ? '🙆🏻‍♀️' : '🙆🏻‍♂️'}</span> {name}</p>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

function LabButton(props/* { children, onFilter } */) {
  return (
    <button
      type="button"
      style={{ marginBottom: 20 }}
      onClick={props.onFilter}
    >
      {props.children}
    </button>
  );
}

export default LikelionMember;