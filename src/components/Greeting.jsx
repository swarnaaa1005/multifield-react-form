import '../styles/Greeting.css'

const Greeting=({text})=>{
    const h=()=>{
    const hr=new Date().getHours()
    if(hr<12){
        return "Good morning"
    }
    else if(hr<17){
        return "Good afternoon"
    }
    else{
        return "Good evening"
    }
}
    return(
        <>
        <h2>{h()} {text} </h2>
        <img src="https://th.bing.com/th/id/R.e3e8e2c82e6950e35ad9d23dcc090683?rik=iY7Faw0eG%2faZ2w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-3d92ta4_JEc%2fTvmzTTgNBKI%2fAAAAAAAACJ4%2fGFC9bCwM5vQ%2fs1600%2fimagenes-jpg-712861.jpg&ehk=bIJLk%2f1l18tfVwCFkXFLrMXsXIY1Z%2fkbprl4quKhHs0%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </>
    )
}
export default Greeting