
import './CostsFilter.css';

function CostsFilter(props) {


  const selectedYearHandler = (event) => {
    // console.log('We are in CostsFilter ' + event.target.value);
    props.onSelectedYear(event.target.value);
  }

  return (
    <div className='costs-filter'>
      <div className='costs-filter__control'>
        <label>Выбор по году</label>
        <select value={props.defaultYear} onChange={selectedYearHandler}>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  )
}

export default CostsFilter;