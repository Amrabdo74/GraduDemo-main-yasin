const monthlyData = [
    {
      name: 'January',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1000,
    },
    {
      name: 'February',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 800,
    },
    {
      name: 'March',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1200,
    },
    {
      name: 'April',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1500,
    },
    {
      name: 'May',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 900,
    },
    {
      name: 'June',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1100,
    },
    {
      name: 'July',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1300,
    },
    {
      name: 'August',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1000,
    },
    {
      name: 'September',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 800,
    },
    {
      name: 'October',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1200,
    },
    {
      name: 'November',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 1500,
    },
    {
      name: 'December',
      ReceivedMoney: 2000,
      FrozenMoney: 2000,
      SpentMoney: 900,
    },
];
// Example daily data for the last 7 days
const generateDailyData = () => {
    const today = new Date();
    const dailyData = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
  
      dailyData.push({
        name: formatDate(date),
        ReceivedMoney: Math.floor(Math.random() * 1000) + 1000,
        FrozenMoney: Math.floor(Math.random() * 1000) + 1000,
        SpentMoney: Math.floor(Math.random() * 500) + 500,
      });
    }
    return dailyData;
  };
  
  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  export { monthlyData, generateDailyData };
