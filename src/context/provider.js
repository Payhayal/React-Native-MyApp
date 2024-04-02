import MyContext from '.';

const Provider = ({children}) => {
  return <MyContext.Provider>{children}</MyContext.Provider>;
};

export default Provider;
