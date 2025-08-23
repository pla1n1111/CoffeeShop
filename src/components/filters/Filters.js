import './filters.scss';

const Filters = () => {
    
    return (
        <>
            <hr className='custom-hr'/>
            <div className="filters">
            <label className='filters__label'>Looking for 
                <input className='filters__input'
                    name='search'
                    type="text"
                    placeholder='start typing here...' /></label>
            <div className="filters__wrapper">
                <span className='filters__span'>Or filter</span>
                <button className="filters__btn">Brazil</button>
                <button className="filters__btn">Kenya</button>
                <button className="filters__btn">Columbia</button>
            </div>
        </div>
        </>
    )
}

export default Filters;