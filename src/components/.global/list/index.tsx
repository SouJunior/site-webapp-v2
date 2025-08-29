import { ListContainer } from './list.styles';
import type { ListProps } from './types';

const List: React.FC<ListProps> = ({ list, ...props }) => {
  return (
    <div>
      <ListContainer {...props}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListContainer>
    </div>
  );
};

export default List;
