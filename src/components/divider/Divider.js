import './divider.scss';

const Divider = (props) => { 
    const className = props.isWhite ? 'divider_white' : 'divider_black';
    return (
        <div className={`divider ${className}`}>
            <div className={`divider__line ${className}`} />
            <img src={props.coffee} alt="coffee beans" />
            <div className={`divider__line ${className}`} />
        </div>
    )
}

export default Divider;
