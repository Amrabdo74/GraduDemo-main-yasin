import React, {useState} from 'react'
import PieChartComponent from '../components/pieChart';
import BarChartComponent from '../components/barChart';
import PageLoction from '../components/PageLoction';
import ListFilter from '../components/ListFilter';
const UserCharts = () => {
  const selections = ['All Locations', 'Mena', 'Europe', 'Asia', 'North America', 'South America', 'Africa'];

  const [selected, setSelected] = useState(selections[0]);
  const handleChange = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <>
      <PageLoction 
        page="Users"
        subTitles = {["Users","User Chrts","User Profile"]}
      />
      <ListFilter 
        selection={selections}
        handleChange={handleChange}
        selected={selected} />
      <div className="pie-container-section">
        <PieChartComponent 
          title={'Payments Status'}
          selections={[["Monthly","Daily"]] }
          colorInfo={[["blue","Frozen Money"],["green","Received Money"],["red","Spent Money "]]}
        />
          <PieChartComponent 
          title={'Payments Status'}
          selections={[["Monthly","Daily"]] }
          colorInfo={[["blue","Frozen Money"],["green","Received Money"],["red","Spent Money "]]}
        />
      </div>
      <BarChartComponent
       title={'Payments Status'}
       selections={[["Monthly","Daily"]] }
       dataKeysInformation={[["blue","Frozen Money","FrozenMoney"],["green","Received Money","ReceivedMoney"],["red","Spent Money ","SpentMoney"]]} 
      />
      <BarChartComponent
       title={'Subscriptions'}
       selections={[["Monthly","Daily"]] }
       dataKeysInformation={[["blue","Subscription 1","FrozenMoney"],["green","Subscription 2","ReceivedMoney"],["red","Subscription 3 ","SpentMoney"]]} 
      />
    </>
  )
}

export default UserCharts;