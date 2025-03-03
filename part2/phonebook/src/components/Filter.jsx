const Filter = ({handle,item}) => {
    return (
    <form>
        <div>
        filter shown with:
        <input onChange={handle} value={item}/>
        </div>
    </form>
  );
};

export default Filter