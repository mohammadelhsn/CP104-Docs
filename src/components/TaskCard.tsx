import ItemList from './ItemList';

const TaskCard = ({ count }: { count: number }) => {
	return <ItemList itemType="task" count={count} />;
};

export default TaskCard;
