import { Link } from "react-router-dom";

function Button({children,disabled,to,type,onClick}) {

    const base="mt-4  disabled:bg-stone-700 font-semibold focus:bg-yellow-200 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-300 text-stone-700 bg-yellow-400  rounded-full tracking-widest uppercase hover:bg-yellow-300 inline-block"
    
    const styles={
        primary:base+" px-4 py-3 md:px-6 md:md:py-4",
        small:base+"  px-4 py-1.5 md:px-5 py-2.5 text-sm",
        secondary:" mt-4   font-semibold focus:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-300 text-stone-500  rounded-full tracking-widest uppercase hover:bg-stone-300 inline-blockpx-4 py-3 md:px-6 md:md:py-4 border-stone-400 border-2 hover:text-stone-800",
        round:"w-8 h-8 text-xl pb-0 mt-4 text-stone-700 bg-yellow-400 rounded-full focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-yellow-300 inline-block"
    }
    
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>


    if(onClick) return (<button onClick={onClick} disabled={disabled} className={styles[type]}>{children} </button>)

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )

}

export default Button
