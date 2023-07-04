

// export const Myfnc = () => {
//   return (<div>
//   <form>
//     <h3>
//       Normal wala 
//     </h3>
//     <input type="text" name="example" onChange={((e) => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//   })}/>
//   </form>
//   <button onClick={}>'meko click kro'</button>
//   </div>)
// ;
// }




export const Book = (props) => {
    console.log(props);
    const { img, title, author, findfunc, id, number, site} = props;
    const Tadbit = () => {
      findfunc(id);
    }
    const openWebsite = () => {
      window.open(site, '_blank');
    }

    return (
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
        <button className="button-33" onClick={openWebsite} role="button">Know More</button>
    
        <div className="number">{number + 1}</div>
      </article>
    );
  };
  