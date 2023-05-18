import { SLayout, SCloseBtn } from './Tag.style';

const Tag = ({ data, handleCloseBtnClick }) => (
  <SLayout>
    {data.map(item => (
      <li key={item}>
        <span>{item}</span>
        <SCloseBtn
          onClick={e => {
            e.stopPropagation();
            handleCloseBtnClick(item);
          }}>
          &times;
        </SCloseBtn>
      </li>
    ))}
  </SLayout>
);
export default Tag;
