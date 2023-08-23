import { Link, useNavigate } from "react-router-dom"



function LinkButton({children,to}) {
    const classname=" text-blue-500 hover:text-blue-700 hover:underline' className='text-sm text-blue-500 hover:text-blue-700 hover:underline"
    const navigate=useNavigate();
    if(to==="-1") return <button className={classname} onClick={()=>navigate(-1)}>{children}</button>
    return (
        <Link to={to} className={classname}>
            {children}
        </Link>
    )
}

export default LinkButton
