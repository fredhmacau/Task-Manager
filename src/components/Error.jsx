

export default function Error({error}){
    
    return (
        <p className="text-red-600 pt-8 text-center"> 
        <span className="font-medium"> {error}</span>. Please try again.</p>
    )
}