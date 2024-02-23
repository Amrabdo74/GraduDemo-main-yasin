import React from 'react'
import PieChartComponent from '../components/pieChart'
import BarChartComponent from '../components/barChart';
import LineChartComponent from '../components/LineChart';
import Headerdata from '../components/Headerdata';


const Overview = () => {
  return (
    <>
      <Headerdata />
      <div className="pie-container-section">
        <PieChartComponent
          totalValues={10000}
          title={'Payments Status'}
          selections={[["Monthly", "Daily"]]}
          colorInfo={[["blue", "Frozen Money"], ["green", "Received Money"], ["red", "Spent Money "]]}
        />
        <PieChartComponent
          title={'Payments Status'}
          totalValues={900}
          selections={[["Monthly", "Daily"]]}
          colorInfo={[["blue", "Frozen Money"], ["green", "Received Money"], ["red", "Spent Money "]]}
        />
        <PieChartComponent
        totalValues={9000}
          title={'Payments Status'}
          selections={[["Monthly", "Daily"]]}
          colorInfo={[["blue", "Frozen Money"], ["green", "Received Money"], ["red", "Spent Money "]]}
        />
        <PieChartComponent
          totalValues={200000}
          title={'Payments Status'}
          selections={[["Monthly", "Daily"]]}
          colorInfo={[["blue", "Frozen Money"], ["green", "Received Money"], ["red", "Spent Money "]]}
        />
      </div>
      <LineChartComponent
        title={'Order Analytics'}
        selections={[["Monthly", "Daily"]]}
        lineColors={['bike', 'scooter']} />
      <BarChartComponent
        title={'Payments Status'}
        selections={[["Monthly", "Daily"]]}
        dataKeysInformation={[["blue", "Frozen Money", "FrozenMoney"], ["green", "Received Money", "ReceivedMoney"], ["red", "Spent Money ", "SpentMoney"]]}
      />
      <BarChartComponent
        title={'Subscriptions'}
        selections={[["Monthly", "Daily"]]}
        dataKeysInformation={[["blue", "Subscription 1", "FrozenMoney"], ["green", "Subscription 2", "ReceivedMoney"], ["red", "Subscription 3 ", "SpentMoney"]]}
      />
      
    </>

  )
}

export default Overview;