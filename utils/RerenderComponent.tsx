'use client'
import { useEffect, useState } from "react";

const RerenderComponent = ({ triggerValues }: { triggerValues: any[] }) => {
    const [rerenderKey, setRerenderKey] = useState<number>(0);
  
    // Use useEffect to trigger a rerender when the triggerValue changes
    useEffect(() => {
        console.log('rerender')
      // Increment the rerenderKey to force a rerender
      setRerenderKey((prevKey) => prevKey + 1);
    }, [...triggerValues]);
  
    return (
      <div>
        {/* This key attribute forces React to remount the component, triggering a rerender */}
        <div key={rerenderKey}>
          {/* Your component content */}
          <h2>Rerender Component</h2>
          <button onClick={()=>{ setRerenderKey((prevKey) => prevKey + 1);}}>clk</button>
          {/* <p>Trigger Values: { triggerValues.m}</p> */}
        </div>
      </div>
    );
};

export default RerenderComponent;
