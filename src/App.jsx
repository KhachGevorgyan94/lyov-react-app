import {UserCard} from "./components/UserCard/UserCard";

export const App = () => {
    return <div>
        <header>
            <h1>header</h1>
        </header>
       <div className={'card-list'}>
           <UserCard title={'title 1'} num={30}/>
           <UserCard title={'title 2'} num={60}/>
       </div>
        <footer>
            <h1>footer</h1>
        </footer>
    </div>
}

export default App


//  <></>  ananun teg
// import React from "react";
//
// export const App = () => {
//     return <div>
//         <div></div>
//         <h1>asklfjasklf</h1>
//     </div>
// }

// class App extends React.Component{
//     render() {
//         return <div>
//
//         </div>
//     }
// }
