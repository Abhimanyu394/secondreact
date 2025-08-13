import { useState } from 'react'

import './App.css'

function One({title,children}) {
  const [Count, setCount] = useState(false)

  return (
    <section className="class1">
      <h3>{title}</h3>
      {Count ? ( <p> {children}</p>  ):(  <button onClick={()=> setCount(true)}>
        show
      </button>  )}
    </section>
  )
};
function zero(){
  return(
    <>
    <h1> Welcome!!</h1>
    <One title='Message 1'>
      Kaise ho mitr
    </One>
    <One title='Message 2'>
      kabhi yaad bhi krliya karo
    </One>
    <One title='Message 3'>
        disturb toh nhi kiya na  
    </One>
    <One title='Message 4'>
      sorry agar disturb kar diya ho 🙏🏻
    </One>
    <One title='Message 5'>
      Bye Good Night
    </One>
    </>
  )
};

export default zero
// function Panel({ title, children }) {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={() => setIsActive(true)}>
//           Show
//         </button>
//       )}
//     </section>
//   );
// }

// export default function Accordion() {
//   return (
//     <>
//       <h2>Welcome!!</h2>
//       <Panel title="Message 1">
//         kaise ho mitr
//       </Panel>
//       <Panel title="Message 2">
//         kabhi yaad bhi kar liya karo
//       </Panel>
//     </>
//   );
// }
