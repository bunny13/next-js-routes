import Link from "next/link";
import classes from './button.module.css';

function Button(props) {
    const { link, onClick } = props;
    if (link) {
        return (
          <Link href={link}>
            <a className={classes.btn}>{props.children}</a>
          </Link>
        );
      }
    
      return (
        <button className={classes.btn} onClick={onClick}>
          {props.children}
        </button>
      );
}

export default Button;