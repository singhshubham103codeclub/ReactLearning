import react from "react";
const User = (prop) => 
{
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', color: 'white' , justifyContent: 'space-between' }}>
            {prop.name}
            {prop.key}
        </div>
    )
}
export default User