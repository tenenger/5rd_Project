import { SLayout, SCloseBtn } from './Tag.style';

const Tag = ({ data, handleCloseBtnClick }) => (
  <SLayout>
    {data.map(({ title, id }) => (
      <li key={id}>
        <span>{title}</span>
        <SCloseBtn
          onClick={e => {
            e.stopPropagation();
            handleCloseBtnClick(id);
          }}>
          &times;
        </SCloseBtn>
      </li>
    ))}
  </SLayout>
);
export default Tag;
