import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const TaskTab = ({currentProjectId , id, data}) => {
    return (currentProjectId === id &&
         <Tabs>
    <TabList>
    {data.map(({ id }) => {
    return <Tab key={id}>View #{id}</Tab>
     })}
    </TabList>
            {data.map(({ id, value }) => {
    return <TabPanel key={id}>
      <h2>{value}</h2>
    </TabPanel>
})}
  </Tabs>
    )
}