import {UserCard} from "./components/UserCard/UserCard";
import {Header} from "./components/Header/Header";

export const App = () => {
    return <>
        <Header/>
        <div className={'card-list'}>
            <UserCard title={'title 1'} num={30} isDark/>
            <UserCard title={'title 2'} num={60}/>
            <UserCard title={'title 2'} num={60} color={'rgb(123,245,60)'}/>
            <UserCard address={{city: 'Tashkent', zipCode: '100000'}}/>
            <UserCard>
                <div>
                    <button>Click me</button>
                </div>
            </UserCard>
        </div>
        <footer>
            <h1>footer</h1>
        </footer>
    </>
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
