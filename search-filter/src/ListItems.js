export default function ListItems(props){

    const list = props.list.map((item, index) => {
        return (<li className="listItems" key={index}>{item}</li>)
    })

   return (

    <ul className="listContainer">

        {list}

    </ul>

   );

}