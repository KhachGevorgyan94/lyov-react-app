import './UserCard.scss'

export const UserCard = ({title, num}) => {
    const obj = {
        firstName:'',
        lastName:''
    }

    const {firstName, lastName} = obj
    // console.log(data)

    return <div className={'user-card'}>
        {/*<h3>{data.title}</h3>*/}
        {/*<p>{data.num}</p>*/}
        <h3>{title}</h3>
        <p>{num}</p>
    </div>
}