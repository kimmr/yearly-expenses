import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

  /* props.children
  : display whatever you include between the opening and closing tags */

  return <div className={classes}>{props.children}</div>; 
}

export default Card;
