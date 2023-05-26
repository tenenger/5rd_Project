import { SLayout } from './AutoComplete.style';

const AutoComplete = ({ children, data = [], isShow }) => (
  <SLayout isShow={isShow}>
    {children ||
      (data.length &&
        data.map(value => (
          <li key={value}>
            <button>{value}</button>
          </li>
        )))}
  </SLayout>
);

export default AutoComplete;
