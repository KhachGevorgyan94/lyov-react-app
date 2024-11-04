import './UserCard.scss'
import tetsImage from ''
export const UserCard = ({children, title, num, isDark, color, address}) => {
    // const obj = {
    //     firstName:'',
    //     lastName:''
    // }
    // console.log(isDark)
    //
    // const {firstName, lastName} = obj
    // // console.log(data)

    return <div style={{backgroundColor: color, backgroundImage: `url('${tetsImage}')`}} className={`user-card ${isDark ? 'dark' : ''}`}>
        {/*<h3>{data.title}</h3>*/}
        {/*<p>{data.num}</p>*/}
        {/*<h3>{title?title:'Empty Text'}</h3>*/}
        <h3>{title ?? 'Empty Text'}</h3>
        {num ? <p>{num}</p> : null}
        {address?<>
        <p>{address.city}</p>
        <p>{address.zipCode}</p>
        </>: null}
        {children}
    </div>
}
