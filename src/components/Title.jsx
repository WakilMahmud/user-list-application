const Title = ({ title, position = "left" }) => {
	return <h1 className={`text-2xl font-bold  text-${position}`}>{title}</h1>;
};

export default Title;
